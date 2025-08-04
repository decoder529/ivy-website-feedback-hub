import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/lib/routes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Trophy, Star, Lock, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/AuthContext';
import { toast } from 'sonner';

interface TestSeries {
  id: string;
  title: string;
  subject: string;
  description: string;
  total_questions: number;
  duration_minutes: number;
  difficulty_level: string;
  required_plan: string;
}

interface UserSubscription {
  plan_id: string;
  status: string;
  end_date: string;
  subscription_plans: {
    name: string;
    test_series_access: string[];
  };
}

const TestSeries = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [testSeries, setTestSeries] = useState<TestSeries[]>([]);
  const [userSubscription, setUserSubscription] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestSeries();
    if (user) {
      fetchUserSubscription();
    }
  }, [subject, user]);

  const fetchTestSeries = async () => {
    try {
      const { data, error } = await supabase
        .from('test_series')
        .select('*')
        .eq('subject', subject || 'physics')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestSeries(data || []);
    } catch (error) {
      console.error('Error fetching test series:', error);
      toast.error('Failed to load test series');
    }
  };

  const fetchUserSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select(`
          plan_id,
          status,
          end_date,
          subscription_plans (
            name,
            test_series_access
          )
        `)
        .eq('user_id', user?.id)
        .eq('status', 'active')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      setUserSubscription(data);
    } catch (error) {
      console.error('Error fetching user subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-orange-500';
      case 'expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'silver': return 'text-gray-600';
      case 'gold': return 'text-yellow-600';
      case 'platinum': return 'text-purple-600';
      default: return 'text-gray-500';
    }
  };

  const canAccessTestSeries = (requiredPlan: string) => {
    if (!userSubscription) return false;
    const userPlan = userSubscription.subscription_plans.name.toLowerCase();
    const planHierarchy = ['silver', 'gold', 'platinum'];
    const userLevel = planHierarchy.indexOf(userPlan);
    const requiredLevel = planHierarchy.indexOf(requiredPlan);
    return userLevel >= requiredLevel;
  };

  const startTest = (testId: string, title: string) => {
    if (!user) {
      toast.error('Please login to start the test');
      navigate('/d4sh80rd-l091n'); // login route to be created
      return;
    }
    
    // Navigate to test interface (to be implemented)
    toast.info(`Starting ${title}...`);
    // navigate(`/test/${testId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading test series...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 capitalize">
            {subject} Test Series
          </h1>
          <p className="text-xl text-muted-foreground">
            Master {subject} with our comprehensive collection of past papers and practice tests
          </p>
          
          {userSubscription && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">
                  Current Plan: {userSubscription.subscription_plans.name}
                </span>
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testSeries.map((test) => {
            const hasAccess = canAccessTestSeries(test.required_plan);
            
            return (
              <Card key={test.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${!hasAccess ? 'opacity-75' : 'hover:scale-105'}`}>
                {!hasAccess && (
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg line-clamp-2">
                      {test.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <Badge 
                      variant="secondary" 
                      className={`${getDifficultyColor(test.difficulty_level)} text-white`}
                    >
                      {test.difficulty_level}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={getPlanColor(test.required_plan)}
                    >
                      {test.required_plan}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {test.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        {test.total_questions} Questions
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        {test.duration_minutes} Minutes
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        Past 10 Years Papers
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    {hasAccess ? (
                      <Button 
                        onClick={() => startTest(test.id, test.title)}
                        className="w-full"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Test
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        onClick={() => navigate(ROUTES.dashboard)}
                        className="w-full"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Upgrade Plan
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {testSeries.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No test series available
            </h3>
            <p className="text-muted-foreground">
              Test series for {subject} will be available soon.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TestSeries;