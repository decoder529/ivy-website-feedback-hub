import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FreeTestSeries = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Physics', icon: '⚛️', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Chemistry', icon: '🧪', gradient: 'from-green-500 to-emerald-600' },
    { name: 'Biology', icon: '🧬', gradient: 'from-teal-500 to-cyan-600' },
    { name: 'Maths', icon: '📐', gradient: 'from-purple-500 to-violet-600' }
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

      {/* IGCSE Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            IGCSE
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            International General Certificate of Secondary Education
          </p>
          
          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <Card key={index} className="group hover:shadow-hero transition-all duration-300 hover:scale-105 border-0 bg-gradient-card overflow-hidden animate-fade-in">
                <CardHeader className={`text-center bg-gradient-to-br ${subject.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="text-4xl mb-4 relative z-10">{subject.icon}</div>
                  <CardTitle className="text-xl text-white relative z-10">{subject.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Button 
                    className="w-full bg-gradient-primary text-white hover:shadow-hero hover:scale-105 transition-smooth" 
                    variant="default"
                    onClick={() => navigate(`/free-test-series/${subject.name.toLowerCase()}`)}
                  >
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTestSeries;