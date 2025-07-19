import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Atom, Zap, Waves, Target } from 'lucide-react';
import BookDemoForm from '@/components/BookDemoForm';

const Physics = () => {
  const topics = [
    {
      icon: Atom,
      title: "Mechanics",
      description: "Motion, forces, energy, and momentum",
      lessons: 25
    },
    {
      icon: Zap,
      title: "Electricity & Magnetism",
      description: "Electric circuits, magnetic fields, and electromagnetic waves",
      lessons: 20
    },
    {
      icon: Waves,
      title: "Waves & Optics",
      description: "Wave properties, sound, light, and optical instruments",
      lessons: 18
    },
    {
      icon: Target,
      title: "Modern Physics",
      description: "Quantum mechanics, relativity, and atomic structure",
      lessons: 15
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
              Physics Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Physics tutoring for IBDP, IGCSE AS-A Level, and AP curricula. 
              Master fundamental laws of nature from classical mechanics to quantum physics with 
              our expert educators who have guided hundreds of students to success.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Master Physics?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who have achieved excellence in physics with our proven teaching methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookDemoForm trigger={
                <Button size="lg" variant="hero">
                  Book Free Consultation
                </Button>
              } />
              <Button size="lg" variant="outline">
                View Sample Lessons
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Physics;