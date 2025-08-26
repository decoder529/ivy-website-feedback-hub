import { supabase } from '@/integrations/supabase/client';

export const createTestUser = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('create-test-user');
    
    if (error) {
      console.error('Error creating test user:', error);
      return { success: false, error };
    }
    
    console.log('Test user created:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to create test user:', error);
    return { success: false, error };
  }
};