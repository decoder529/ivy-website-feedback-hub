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
import { GraduationCap, BookOpen, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-foreground to-accent">
        <Header />
        <div className="flex items-center justify-center min-h-screen pt-16">
          <Card className="w-full max-w-md mx-4">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Verify Your Email</CardTitle>
              <CardDescription>
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
                className="w-full"
              >
                {isLoading ? 'Verifying...' : 'Verify Email'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowOTP(false)}
                className="w-full"
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
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-foreground to-accent">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            IVYZone Past Papers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Access comprehensive past papers and detailed solutions for your academic success
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Past Papers</h3>
              <p className="text-white/80">Complete collection of previous years' question papers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <BookOpen className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Solutions</h3>
              <p className="text-white/80">Step-by-step solutions and marking schemes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <GraduationCap className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">All Subjects</h3>
              <p className="text-white/80">Physics, Chemistry, Mathematics, and Biology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Access IVYZone</CardTitle>
              <CardDescription>
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
                    <Button type="submit" disabled={isLoading} className="w-full">
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
                    <Button type="submit" disabled={isLoading} className="w-full">
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