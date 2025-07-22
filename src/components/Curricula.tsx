import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Globe, Users } from 'lucide-react';

const Curricula = () => {
  const curricula = [
    {
      icon: BookOpen,
      name: 'IBDP',
      fullName: 'International Baccalaureate Diploma Programme',
      description: 'Comprehensive two-year educational programme for students aged 16-19, recognized by universities worldwide.',
      features: ['Subject specialists', 'Customized teaching style', 'Rigorous test series', 'Target strategies'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      name: 'IGCSE AS-A Level',
      fullName: 'Cambridge International AS & A Levels',
      description: 'Gold standard qualification recognized by universities globally, offering flexible subject combinations.',
      features: ['Subject specialists', 'Customized teaching style', 'Rigorous test series', 'Target strategies'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      name: 'AP',
      fullName: 'Advanced Placement',
      description: 'College-level courses and exams that allow students to earn college credit while still in high school.',
      features: ['Subject specialists', 'Customized teaching style', 'Rigorous test series', 'Target strategies'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="curricula" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            International Curricula We Specialize In
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tutoring across the world's most prestigious educational programmes, 
            designed to prepare students for global university admission
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {curricula.map((curriculum, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-hero transition-all duration-300 hover:scale-105">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${curriculum.gradient}`}></div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                  <curriculum.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{curriculum.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {curriculum.fullName}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6">
                  {curriculum.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {curriculum.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Proven Excellence Across All Curricula
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students consistently achieve outstanding results across IBDP, IGCSE AS-A Levels, and AP examinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-muted-foreground">A*/A Grade Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Students Taught</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curricula;