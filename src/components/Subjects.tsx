import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Atom, FlaskConical, Calculator, Dna } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Subjects = () => {
  const navigate = useNavigate();
  const subjects = [
    {
      icon: Atom,
      name: 'Physics',
      description: 'Master the laws of nature with expert guidance',
      funQuote: 'I joined Physics for the laws… now I\'m just breaking them.',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-indigo-600',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel']
    },
    {
      icon: FlaskConical,
      name: 'Chemistry',
      description: 'Unlock the secrets of matter and reactions',
      funQuote: 'If you can\'t handle me at my molar mass, you don\'t deserve me at my limiting reagent.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-600',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel']
    },
    {
      icon: Calculator,
      name: 'Mathematics',
      description: 'Excel in problem-solving and logical thinking',
      funQuote: 'Where numbers make you question your existence.',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-violet-600',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel']
    },
    {
      icon: Dna,
      name: 'Biology',
      description: 'Explore the fascinating world of life sciences',
      funQuote: 'Keep calm and blame it on the genes.',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-600',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel']
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expert Subject Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tutoring across all major AP, IBDP, and IGCSE subjects with personalized learning approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="group hover:shadow-hero transition-all duration-300 hover:scale-105 border-0 bg-gradient-card overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${subject.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <subject.icon className="w-12 h-12 mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{subject.name}</h3>
                  <blockquote className="italic text-sm text-white/80 mb-2 relative z-10">
                    "{subject.funQuote}"
                  </blockquote>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{subject.description}</p>
                  
                  <div className="mb-6">
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {subject.curricula.map((curriculum, curriculumIndex) => (
                        <li key={curriculumIndex}>
                          {curriculum}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${subject.color} text-white hover:opacity-90 transition-smooth hover:scale-105`}
                    onClick={() => navigate('/test-series')}
                  >
                    Test Series
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Subjects;