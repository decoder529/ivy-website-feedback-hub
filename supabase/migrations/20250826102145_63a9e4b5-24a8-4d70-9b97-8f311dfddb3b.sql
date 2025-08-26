-- Fix demo_requests RLS policies to prevent unauthorized access to customer data

-- First, drop the conflicting policies that allow unauthorized access
DROP POLICY IF EXISTS "Anyone can submit demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Only authenticated users can view demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Only authenticated users can update demo requests" ON public.demo_requests;

-- Keep only the necessary policies with proper admin-only access
-- The "Anyone can create demo requests" policy is fine for public form submissions

-- Create a secure admin-only SELECT policy (only specific admin emails can view)
CREATE POLICY "Only specific admins can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email IN ('admin@ivydon.com', 'ivydon.official@gmail.com')
  )
);

-- Create admin-only UPDATE policy
CREATE POLICY "Only admins can update demo requests" 
ON public.demo_requests 
FOR UPDATE 
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email IN ('admin@ivydon.com', 'ivydon.official@gmail.com')
  )
);

-- Add admin-only DELETE policy for data management
CREATE POLICY "Only admins can delete demo requests" 
ON public.demo_requests 
FOR DELETE 
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email IN ('admin@ivydon.com', 'ivydon.official@gmail.com')
  )
);