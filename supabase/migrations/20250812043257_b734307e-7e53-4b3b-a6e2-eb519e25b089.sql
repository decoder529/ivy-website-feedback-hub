-- Remove the overly permissive policies that allow public access to sensitive data
DROP POLICY IF EXISTS "Everyone can view demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Anyone can update demo requests" ON public.demo_requests;

-- Keep the insert policy for the contact form to work
-- "Anyone can create demo requests" policy remains unchanged

-- Create secure policies that only allow authorized access
-- Note: This assumes you'll implement authentication and user roles
-- For now, only authenticated users can view/update demo requests
CREATE POLICY "Only authenticated users can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can update demo requests" 
ON public.demo_requests 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);