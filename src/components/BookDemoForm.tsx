import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, User, Phone, GraduationCap, School } from 'lucide-react';

interface BookDemoFormProps {
  trigger?: React.ReactNode;
}

const BookDemoForm = ({ trigger }: BookDemoFormProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentsName: '',
    parentsMobile: '',
    studentsName: '',
    grade: '',
    schoolName: ''
  });

  const grades = [
    '6th Grade',
    '7th Grade', 
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const { parentsName, parentsMobile, studentsName, grade, schoolName } = formData;
    
    if (!parentsName.trim()) {
      toast({
        title: "Validation Error",
        description: "Parent's name is required",
        variant: "destructive",
      });
      return false;
    }

    if (!parentsMobile.trim() || parentsMobile.length < 10) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid mobile number",
        variant: "destructive",
      });
      return false;
    }

    if (!studentsName.trim()) {
      toast({
        title: "Validation Error",
        description: "Student's name is required",
        variant: "destructive",
      });
      return false;
    }

    if (!grade) {
      toast({
        title: "Validation Error",
        description: "Please select a grade",
        variant: "destructive",
      });
      return false;
    }

    if (!schoolName.trim()) {
      toast({
        title: "Validation Error",
        description: "School name is required",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([{
          parents_name: formData.parentsName,
          parents_mobile: formData.parentsMobile,
          students_name: formData.studentsName,
          grade: formData.grade,
          school_name: formData.schoolName,
          status: 'pending'
        }]);

      if (error) throw error;

      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you soon to schedule your free demo session.",
      });

      // Reset form
      setFormData({
        parentsName: '',
        parentsMobile: '',
        studentsName: '',
        grade: '',
        schoolName: ''
      });

      setIsOpen(false);

    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const defaultTrigger = (
    <Button variant="hero" size="lg" className="w-full sm:w-auto">
      <Calendar className="mr-2 h-5 w-5" />
      Book Free Demo
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book Your Free Demo Session</DialogTitle>
          <DialogDescription>
            Fill out this form and we'll contact you to schedule a personalized demo session for your child.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="parentsName">Parent's Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="parentsName"
                type="text"
                placeholder="Enter parent's full name"
                value={formData.parentsName}
                onChange={(e) => handleInputChange('parentsName', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="parentsMobile">Parent's Mobile Number *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="parentsMobile"
                type="tel"
                placeholder="Enter mobile number"
                value={formData.parentsMobile}
                onChange={(e) => handleInputChange('parentsMobile', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentsName">Student's Name *</Label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="studentsName"
                type="text"
                placeholder="Enter student's full name"
                value={formData.studentsName}
                onChange={(e) => handleInputChange('studentsName', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade/Class *</Label>
            <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select grade/class" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="schoolName">School Name *</Label>
            <div className="relative">
              <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="schoolName"
                type="text"
                placeholder="Enter school name"
                value={formData.schoolName}
                onChange={(e) => handleInputChange('schoolName', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoForm;