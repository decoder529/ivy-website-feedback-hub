import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, Atom, Beaker, Zap } from 'lucide-react';
import BookDemoForm from '@/components/BookDemoForm';

const Chemistry = () => {
  const topics = [
    {
      icon: Atom,
      title: "Atomic Structure",
      description: "Electrons, protons, neutrons, and periodic trends",
      lessons: 22
    },
    {
      icon: Zap,
      title: "Chemical Bonding",
      description: "Ionic, covalent, and metallic bonding theories",
      lessons: 28
    },
    {
      icon: TestTube,
      title: "Organic Chemistry",
      description: "Carbon compounds, functional groups, and reactions",
      lessons: 35
    },
    {
      icon: Beaker,
      title: "Physical Chemistry",
      description: "Thermodynamics, kinetics, and equilibrium",
      lessons: 30
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Chemistry Mastery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert Chemistry tutoring for IBDP, IGCSE AS-A Level, and AP curricula. 
              Explore the molecular world from basic atomic theory to advanced organic synthesis 
              with comprehensive laboratory experience and expert guidance.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <topic.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                      <CardDescription>{topic.lessons} lessons</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{topic.description}</p>
                  <Button variant="outline" className="w-full">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Excel in Chemistry</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Build a strong foundation in chemistry with expert guidance and hands-on laboratory experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookDemoForm trigger={
                <Button size="lg" variant="hero">
                  Book Free Consultation
                </Button>
              } />
              <Button size="lg" variant="outline">
                View Lab Sessions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chemistry;