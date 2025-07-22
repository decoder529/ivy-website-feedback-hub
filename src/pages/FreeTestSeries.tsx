import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen } from 'lucide-react';

const FreeTestSeries = () => {
  const testSeries = [
    {
      subject: 'Physics',
      title: ' Physics Mock Test',
      duration: '3 hours',
      questions: 60,
      difficulty: 'Advanced',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel'],
    },
    {
      subject: 'Chemistry',
      title: 'IBDP Chemistry Practice',
      duration: '2.5 hours',
      questions: 45,
      difficulty: 'Intermediate',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel'],
    },
    {
      subject: 'Mathematics',
      title: 'AS-Level Math Test',
      duration: '2 hours',
      questions: 40,
      difficulty: 'Advanced',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel'],
    },
    {
      subject: 'Biology',
      title: 'IGCSE Biology Assessment',
      duration: '1.5 hours',
      questions: 35,
      difficulty: 'Intermediate',
      curricula: ['IBMYP', 'IBDP', 'IGCSE', 'AS-A Levels', 'AP', 'Edexcel'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Free Test Series
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Test your knowledge with our comprehensive practice tests for AP, IBDP, IGCSE & AS-A Level subjects
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Timed Tests</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Performance Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testSeries.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{test.subject}</Badge>
                    <Badge variant={test.difficulty === 'Advanced' ? 'destructive' : 'default'}>
                      {test.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{test.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{test.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{test.questions} questions</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Curricula:</p>
                      <div className="flex flex-wrap gap-2">
                        {test.curricula.map((curriculum, curriculumIndex) => (
                          <Badge key={curriculumIndex} variant="outline" className="text-xs">
                            {curriculum}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="default">
                      Start Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Excel in Your Exams?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have improved their grades with our expert tutoring and comprehensive test preparation.
          </p>
          <Button variant="secondary" size="lg">
            Work With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTestSeries;