-- Fix security issue: Restrict demo_requests table access to admins only

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view all demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Users can insert demo requests" ON public.demo_requests;

-- Create a more secure policy that only allows admins to view demo requests
CREATE POLICY "Only admins can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email IN ('admin@ivydon.com', 'ivydon.official@gmail.com')
  )
);

-- Allow anyone to insert demo requests (for the form submission)
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Fix database functions security by setting search_path
CREATE OR REPLACE FUNCTION public.increment_download_count(paper_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  UPDATE public.question_papers 
  SET download_count = download_count + 1 
  WHERE id = paper_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;