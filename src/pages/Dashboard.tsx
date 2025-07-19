import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, BookOpen, MessageCircle, Crown, Star, Gem } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: any;
  test_series_access: string[];
  teacher_support: boolean;
}

interface UserSubscription {
  id: string;
  status: string;
  start_date: string;
  end_date: string;
  subscription_plans: SubscriptionPlan;
}

interface TestSeries {
  id: string;
  title: string;
  subject: string;
  description: string;
  difficulty_level: string;
  required_plan: string;
  total_questions: number;
  duration_minutes: number;
}

const Dashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const [userSubscription, setUserSubscription] = useState<UserSubscription | null>(null);
  const [testSeries, setTestSeries] = useState<TestSeries[]>([]);
  const [allPlans, setAllPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
      return;
    }
    
    if (user) {
      fetchUserData();
    }
  }, [user, authLoading, navigate]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fetch user subscription
      const { data: subscription } = await supabase
        .from('user_subscriptions')
        .select(`
          *,
          subscription_plans (*)
        `)
        .eq('user_id', user?.id)
        .eq('status', 'active')
        .maybeSingle();

      setUserSubscription(subscription as any);

      // Fetch all test series
      const { data: testSeriesData } = await supabase
        .from('test_series')
        .select('*')
        .order('subject');

      setTestSeries(testSeriesData || []);

      // Fetch all plans for upgrade options
      const { data: plansData } = await supabase
        .from('subscription_plans')
        .select('*')
        .order('price');

      setAllPlans(plansData as any || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getPlanIcon = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'silver': return <Crown className="h-5 w-5 text-gray-500" />;
      case 'gold': return <Star className="h-5 w-5 text-yellow-500" />;
      case 'platinum': return <Gem className="h-5 w-5 text-purple-500" />;
      default: return null;
    }
  };

  const canAccessTestSeries = (testSeries: TestSeries) => {
    if (!userSubscription) return false;
    
    const userPlan = userSubscription.subscription_plans;
    return userPlan.test_series_access.includes(testSeries.subject);
  };

  const getFilteredTestSeries = (subject: string) => {
    return testSeries.filter(ts => ts.subject === subject);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const subjects = ['physics', 'chemistry', 'mathematics', 'biology'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.phone || 'Student'}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Subscription Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {userSubscription ? getPlanIcon(userSubscription.subscription_plans.name) : null}
              Subscription Status
            </CardTitle>
            <CardDescription>
              Your current plan and access details
            </CardDescription>
          </CardHeader>
          <CardContent>
            {userSubscription ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="default" className="text-lg px-4 py-2">
                    {userSubscription.subscription_plans.name} Plan
                  </Badge>
                  <span className="text-2xl font-bold">₹{userSubscription.subscription_plans.price}/month</span>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Plan Features:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {Array.isArray(userSubscription.subscription_plans.features) 
                      ? userSubscription.subscription_plans.features.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))
                      : typeof userSubscription.subscription_plans.features === 'string'
                        ? JSON.parse(userSubscription.subscription_plans.features).map((feature: string, index: number) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))
                        : null
                    }
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Subject Access:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {userSubscription.subscription_plans.test_series_access.map((subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject.charAt(0).toUpperCase() + subject.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {userSubscription.subscription_plans.teacher_support && (
                  <div className="flex items-center gap-2 text-green-600">
                    <MessageCircle className="h-5 w-5" />
                    <span>Teacher Support Available</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No active subscription found</p>
                <Button onClick={() => navigate('/subscription')}>
                  Choose a Plan
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Series by Subject */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Test Series
            </CardTitle>
            <CardDescription>
              Subject-wise test series based on your subscription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="physics" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                {subjects.map((subject) => (
                  <TabsTrigger key={subject} value={subject} className="capitalize">
                    {subject}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {subjects.map((subject) => (
                <TabsContent key={subject} value={subject} className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {getFilteredTestSeries(subject).map((test) => (
                      <Card key={test.id} className={`relative ${!canAccessTestSeries(test) ? 'opacity-50' : ''}`}>
                        <CardHeader>
                          <CardTitle className="text-lg">{test.title}</CardTitle>
                          <CardDescription>{test.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Questions:</span>
                              <span>{test.total_questions}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Duration:</span>
                              <span>{test.duration_minutes} min</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Level:</span>
                              <Badge variant="outline">
                                {test.difficulty_level}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Required Plan:</span>
                              <Badge variant="secondary">
                                {test.required_plan}
                              </Badge>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full mt-4" 
                            disabled={!canAccessTestSeries(test)}
                          >
                            {canAccessTestSeries(test) ? 'Start Test' : 'Upgrade to Access'}
                          </Button>
                        </CardContent>
                        
                        {!canAccessTestSeries(test) && (
                          <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
                            <div className="text-center">
                              <Crown className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm font-medium">Upgrade Required</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                    
                    {getFilteredTestSeries(subject).length === 0 && (
                      <div className="col-span-full text-center py-8 text-muted-foreground">
                        No test series available for {subject}
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;