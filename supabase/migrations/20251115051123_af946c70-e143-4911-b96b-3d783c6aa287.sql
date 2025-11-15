-- Create demo_requests table
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parents_name TEXT NOT NULL,
  parents_mobile TEXT NOT NULL,
  students_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  school_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create teacher_support table
CREATE TABLE public.teacher_support (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create subscription_plans table
CREATE TABLE public.subscription_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL NOT NULL,
  duration TEXT NOT NULL,
  features JSONB,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_subscriptions table
CREATE TABLE public.user_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.subscription_plans(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'active',
  start_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create test_series table
CREATE TABLE public.test_series (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  questions JSONB,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_support ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_series ENABLE ROW LEVEL SECURITY;

-- RLS Policies for demo_requests (admin can view/edit, anyone can insert)
CREATE POLICY "Anyone can insert demo requests"
ON public.demo_requests
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own demo requests"
ON public.demo_requests
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can update demo requests"
ON public.demo_requests
FOR UPDATE
USING (true);

-- RLS Policies for teacher_support (admin can view/edit, anyone can insert)
CREATE POLICY "Anyone can insert teacher support messages"
ON public.teacher_support
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view teacher support"
ON public.teacher_support
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can update teacher support"
ON public.teacher_support
FOR UPDATE
USING (true);

-- RLS Policies for subscription_plans (public read, admin write)
CREATE POLICY "Everyone can view active subscription plans"
ON public.subscription_plans
FOR SELECT
USING (is_active = true);

-- RLS Policies for user_subscriptions (users can view their own)
CREATE POLICY "Users can view their own subscriptions"
ON public.user_subscriptions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscriptions"
ON public.user_subscriptions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for test_series (public read for active tests)
CREATE POLICY "Everyone can view active test series"
ON public.test_series
FOR SELECT
USING (is_active = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_demo_requests_updated_at
BEFORE UPDATE ON public.demo_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_teacher_support_updated_at
BEFORE UPDATE ON public.teacher_support
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_subscription_plans_updated_at
BEFORE UPDATE ON public.subscription_plans
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_subscriptions_updated_at
BEFORE UPDATE ON public.user_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_test_series_updated_at
BEFORE UPDATE ON public.test_series
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();