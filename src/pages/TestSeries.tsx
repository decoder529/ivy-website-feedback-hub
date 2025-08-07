import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FreeTestSeries = () => {
  const navigate = useNavigate();

  const subjects = [
    { 
      name: 'Physics', 
      icon: '⚛️', 
      title: 'Physics Test Series (0625)',
      description: 'Explore the fundamental laws that govern our universe through interactive problem-solving.',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Chemistry', 
      icon: '🧪', 
      title: 'Chemistry Test Series (0620)',
      description: 'Discover the fascinating world of atoms, molecules, and chemical transformations.',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Biology', 
      icon: '🧬', 
      title: 'Biology Test Series(0610)',
      description: 'Understand living organisms and biological processes through engaging examples.',
      bgColor: 'bg-teal-50',
      gradient: 'from-teal-500 to-cyan-600'
    },
    { 
      name: 'Maths', 
      icon: '📐', 
      title: 'Maths Test Series(0580)',
      description: 'Build confidence in mathematics with step-by-step guided practice.',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in hover:scale-105 transition-all duration-300">
            Test Series
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Challenge yourself with our comprehensive practice tests — tailore for IGCSE, IBDP success!"
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 animate-scale-in hover:scale-105 transition-all duration-300">
            IGCSE
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            International General Certificate of Secondary Education
          </p>
          
          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <Card key={index} className={`group hover:shadow-hero transition-all duration-300 hover:scale-105 border-0 overflow-hidden animate-fade-in ${subject.bgColor}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">{subject.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{subject.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{subject.description}</p>
                  <Button 
                    className={`w-full bg-gradient-to-r ${subject.gradient} text-white hover:shadow-hero hover:scale-105 transition-all duration-300 py-3`} 
                    variant="default"
                    onClick={() => navigate(`/test-series/${subject.name.toLowerCase()}`)}
                  >
                    Start {subject.name} Test
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