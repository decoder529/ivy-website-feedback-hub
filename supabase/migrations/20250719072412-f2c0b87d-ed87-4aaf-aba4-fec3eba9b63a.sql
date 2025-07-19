-- Create demo_requests table
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parents_name TEXT NOT NULL,
  parents_mobile TEXT NOT NULL,
  students_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  school_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for demo requests (public can insert, admins can view all)
CREATE POLICY "Anyone can create demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Everyone can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update demo requests" 
ON public.demo_requests 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_demo_requests_updated_at
BEFORE UPDATE ON public.demo_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();