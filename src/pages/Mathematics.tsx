import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, PieChart, Target } from 'lucide-react';
import BookDemoForm from '@/components/BookDemoForm';

const Mathematics = () => {
  const topics = [
    {
      icon: Calculator,
      title: "Algebra & Functions",
      description: "Linear equations, quadratics, and polynomial functions",
      lessons: 32
    },
    {
      icon: TrendingUp,
      title: "Calculus",
      description: "Differentiation, integration, and applications",
      lessons: 28
    },
    {
      icon: PieChart,
      title: "Statistics & Probability",
      description: "Data analysis, distributions, and hypothesis testing",
      lessons: 24
    },
    {
      icon: Target,
      title: "Geometry & Trigonometry",
      description: "Shapes, angles, and trigonometric functions",
      lessons: 26
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
              Mathematics Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert Mathematics tutoring for IBDP, IGCSE AS-A Level, and AP curricula. 
              Build strong mathematical foundations with our systematic approach, from basic arithmetic 
              to advanced calculus, developing problem-solving skills that last a lifetime.
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
            <h2 className="text-3xl font-bold mb-4">Master Mathematics</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Develop logical thinking and analytical skills with our structured mathematics curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookDemoForm trigger={
                <Button size="lg" variant="hero">
                  Book Free Assessment
                </Button>
              } />
              <Button size="lg" variant="outline">
                Practice Problems
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mathematics;