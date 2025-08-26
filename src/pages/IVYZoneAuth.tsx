import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { GraduationCap, BookOpen, FileText, Users, Award, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teacherPhysics from '@/assets/teacher-physics.jpg';
import studentsStudying from '@/assets/students-studying.jpg';
import { createTestUser } from '@/utils/createTestUser';

interface SignInForm {
  email: string;
  password: string;
}

const IVYZoneAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signInForm = useForm<SignInForm>();

  // Create test user on component mount
  useEffect(() => {
    const initTestUser = async () => {
      await createTestUser();
    };
    initTestUser();
  }, []);

  const handleSignIn = async (data: SignInForm) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      navigate('/ivyzone/dashboard');
      toast.success('Signed in successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen ivyzone-hero-bg">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={teacherPhysics} 
            alt="Teacher teaching students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-yellow-400/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="ivyzone-card backdrop-blur-sm rounded-full p-6 border-4 border-orange-200">
              <GraduationCap className="h-16 w-16 text-orange-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold ivyzone-text mb-6 drop-shadow-lg">
            IVYZone Past Papers
          </h1>
          <p className="text-2xl md:text-3xl ivyzone-text-muted mb-8 max-w-4xl mx-auto font-medium">
            Access comprehensive past papers and detailed solutions for your academic success
          </p>
          
          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="ivyzone-feature-card rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-orange-600 mb-3 mx-auto" />
              <h3 className="text-2xl font-bold ivyzone-text mb-1">10,000+</h3>
              <p className="ivyzone-text-muted font-medium">Students Helped</p>
            </div>
            <div className="ivyzone-feature-card rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-orange-600 mb-3 mx-auto" />
              <h3 className="text-2xl font-bold ivyzone-text mb-1">95%</h3>
              <p className="ivyzone-text-muted font-medium">Success Rate</p>
            </div>
            <div className="ivyzone-feature-card rounded-xl p-6 text-center">
              <CheckCircle className="h-12 w-12 text-orange-600 mb-3 mx-auto" />
              <h3 className="text-2xl font-bold ivyzone-text mb-1">500+</h3>
              <p className="ivyzone-text-muted font-medium">Past Papers</p>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="ivyzone-feature-card backdrop-blur-sm rounded-xl p-8 text-center">
              <FileText className="h-12 w-12 text-orange-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold ivyzone-text mb-3">Complete Past Papers</h3>
              <p className="ivyzone-text-muted">Access years of previous examination papers across all subjects</p>
            </div>
            <div className="ivyzone-feature-card backdrop-blur-sm rounded-xl p-8 text-center">
              <BookOpen className="h-12 w-12 text-orange-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold ivyzone-text mb-3">Detailed Solutions</h3>
              <p className="ivyzone-text-muted">Step-by-step marking schemes and comprehensive answer guides</p>
            </div>
            <div className="ivyzone-feature-card backdrop-blur-sm rounded-xl p-8 text-center">
              <GraduationCap className="h-12 w-12 text-orange-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold ivyzone-text mb-3">All IB Subjects</h3>
              <p className="ivyzone-text-muted">Physics, Chemistry, Mathematics, Biology and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section with Background */}
      <section className="pb-16 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={studentsStudying} 
            alt="Students studying together" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 flex justify-center relative z-10">
          <Card className="w-full max-w-md ivyzone-card shadow-2xl border-3 border-orange-200">
            <CardHeader className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-t-lg">
              <CardTitle className="text-3xl ivyzone-text font-bold">Access IVYZone</CardTitle>
              <CardDescription className="ivyzone-text-muted text-lg">
                Sign in to access past papers and solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...signInForm.register('email', { required: true })}
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...signInForm.register('password', { required: true })}
                    className="h-12 text-lg"
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full ivyzone-button text-lg py-4 font-semibold">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVYZoneAuth;