-- Create subscription plans table
CREATE TABLE public.subscription_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price DECIMAL(10,2) NOT NULL,
  duration_months INTEGER NOT NULL DEFAULT 1,
  features JSONB NOT NULL DEFAULT '[]',
  test_series_access TEXT[] NOT NULL DEFAULT '{}',
  teacher_support BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user subscriptions table
CREATE TABLE public.user_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  plan_id UUID NOT NULL REFERENCES public.subscription_plans(id),
  status TEXT NOT NULL DEFAULT 'active',
  start_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create test series table
CREATE TABLE public.test_series (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  description TEXT,
  difficulty_level TEXT NOT NULL DEFAULT 'medium',
  required_plan TEXT NOT NULL DEFAULT 'silver',
  total_questions INTEGER NOT NULL DEFAULT 0,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create teacher support table
CREATE TABLE public.teacher_support (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject TEXT NOT NULL,
  teacher_name TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_support ENABLE ROW LEVEL SECURITY;

-- Create policies for subscription_plans (readable by all authenticated users)
CREATE POLICY "subscription_plans_select" ON public.subscription_plans
FOR SELECT TO authenticated
USING (true);

-- Create policies for user_subscriptions
CREATE POLICY "user_subscriptions_select" ON public.user_subscriptions
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "user_subscriptions_insert" ON public.user_subscriptions
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_subscriptions_update" ON public.user_subscriptions
FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

-- Create policies for test_series (readable by all authenticated users)
CREATE POLICY "test_series_select" ON public.test_series
FOR SELECT TO authenticated
USING (true);

-- Create policies for teacher_support
CREATE POLICY "teacher_support_select" ON public.teacher_support
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "teacher_support_insert" ON public.teacher_support
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "teacher_support_update" ON public.teacher_support
FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

-- Insert default subscription plans
INSERT INTO public.subscription_plans (name, price, duration_months, features, test_series_access, teacher_support) VALUES
('Silver', 499.00, 1, '["Basic test series access", "Monthly progress reports", "Email support"]', '{"physics", "chemistry"}', false),
('Gold', 899.00, 1, '["All test series access", "Weekly progress reports", "Priority email support", "Video solutions"]', '{"physics", "chemistry", "mathematics"}', true),
('Platinum', 1299.00, 1, '["All premium features", "Daily progress tracking", "24/7 teacher support", "One-on-one doubt sessions", "Live classes access"]', '{"physics", "chemistry", "mathematics", "biology"}', true);

-- Insert sample test series
INSERT INTO public.test_series (title, subject, description, difficulty_level, required_plan, total_questions, duration_minutes) VALUES
('Physics Fundamentals', 'physics', 'Basic physics concepts and numericals', 'easy', 'silver', 50, 90),
('Advanced Physics', 'physics', 'Complex physics problems for competitive exams', 'hard', 'gold', 75, 120),
('Chemistry Basics', 'chemistry', 'Organic and inorganic chemistry fundamentals', 'medium', 'silver', 60, 100),
('Mathematics Calculus', 'mathematics', 'Differential and integral calculus', 'medium', 'gold', 40, 80),
('Biology NEET Prep', 'biology', 'NEET biology preparation test series', 'hard', 'platinum', 90, 180);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_user_subscriptions_updated_at
BEFORE UPDATE ON public.user_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_teacher_support_updated_at
BEFORE UPDATE ON public.teacher_support
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();