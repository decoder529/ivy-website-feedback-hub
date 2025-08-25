import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { GraduationCap, BookOpen, FileText, Users, Award, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teacherPhysics from '@/assets/teacher-physics.jpg';
import studentsStudying from '@/assets/students-studying.jpg';

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInForm {
  email: string;
  password: string;
}

const IVYZoneAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const signUpForm = useForm<SignUpForm>();
  const signInForm = useForm<SignInForm>();

  const handleSignUp = async (data: SignUpForm) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/ivyzone/dashboard`
        }
      });

      if (error) throw error;

      setEmail(data.email);
      setShowOTP(true);
      toast.success('Please check your email for the verification code');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleOTPVerification = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter a valid 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'signup'
      });

      if (error) throw error;

      navigate('/ivyzone/dashboard');
      toast.success('Email verified successfully! Welcome to IVYZone');
    } catch (error: any) {
      toast.error(error.message || 'Invalid verification code');
    } finally {
      setIsLoading(false);
    }
  };

  if (showOTP) {
    return (
      <div className="min-h-screen ivyzone-bg">
        <Header />
        <div className="flex items-center justify-center min-h-screen pt-16">
          <Card className="w-full max-w-md mx-4 ivyzone-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl ivyzone-text">Verify Your Email</CardTitle>
              <CardDescription className="ivyzone-text-muted">
                We've sent a 6-digit code to {email}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  value={otp}
                  onChange={setOtp}
                  maxLength={6}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button 
                onClick={handleOTPVerification}
                disabled={isLoading || otp.length !== 6}
                className="w-full ivyzone-button"
              >
                {isLoading ? 'Verifying...' : 'Verify Email'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowOTP(false)}
                className="w-full ivyzone-card border-2"
              >
                Back to Sign Up
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

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
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin" className="space-y-4">
                  <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...signInForm.register('email', { required: true })}
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...signInForm.register('password', { required: true })}
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full ivyzone-button text-lg py-3 font-semibold">
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...signUpForm.register('email', { required: true })}
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...signUpForm.register('password', { required: true, minLength: 6 })}
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...signUpForm.register('confirmPassword', { required: true })}
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full ivyzone-button text-lg py-3 font-semibold">
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVYZoneAuth;