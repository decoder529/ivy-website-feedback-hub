import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';
import BookDemoForm from './BookDemoForm';

const Teachers = () => {
  const teachers = [
    {
      name: 'Prof. Rahul Yadav',
      role: 'Founder & Physics Expert',
      experience: '12+ Years',
      specialization: 'IBDP & IGCSE Physics',
      education: 'B.E. Mechanical Engineering, Mumbai University',
      achievements: ['500+ Students Taught', '95% A*/A Grade Rate', 'Country Topper Mentor'],
      description: 'A dedicated Physics educator with over 12 years of experience. His teaching style combines humor with deep conceptual understanding.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mr. Deepak Yadav',
      role: 'Co-Founder & Tech Expert',
      experience: '8+ Years',
      specialization: 'Technology & Communication',
      education: 'B.E. Electronics & Communication, Mumbai University',
      achievements: ['Tech Industry Expert', 'Cyber Security Specialist', 'Communication Expert'],
      description: 'The tech wizard of the team—straight out of the communication and cyber security industry, bringing technical expertise to education.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chemistry Specialist',
      experience: '10+ Years',
      specialization: 'AP & IBDP Chemistry',
      education: 'Ph.D. Chemistry, Cambridge University',
      achievements: ['Former Cambridge Researcher', '200+ Perfect Scores', 'Curriculum Developer'],
      description: 'Former Cambridge researcher who makes complex chemistry concepts accessible and engaging for all students.',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Educators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class educators with proven track records in delivering exceptional results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-hero transition-all duration-300 hover:scale-105 overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-primary p-6 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 relative z-10">{teacher.name}</h3>
                  <p className="text-white/90 text-sm relative z-10">{teacher.role}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{teacher.experience} Experience</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{teacher.specialization}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{teacher.education}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6">
                    {teacher.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {teacher.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Learn from the Best?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have achieved academic excellence under the guidance of our expert educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookDemoForm trigger={
                <Button variant="hero" size="lg">
                  Book a Free Consultation
                </Button>
              } />
              <Button variant="outline" size="lg">
                Meet All Teachers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;