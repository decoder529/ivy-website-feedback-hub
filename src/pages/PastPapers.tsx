import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PastPapers = () => {
  const navigate = useNavigate();

  const subjects = [
    { 
      name: 'Physics', 
      icon: '⚛️', 
      title: 'Physics Past Papers (0625)',
      description: 'Download comprehensive physics past papers with detailed marking schemes and grade thresholds.',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Chemistry', 
      icon: '🧪', 
      title: 'Chemistry Past Papers (0620)',
      description: 'Access complete chemistry past papers collection with solutions and examiner reports.',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Biology', 
      icon: '🧬', 
      title: 'Biology Past Papers (0610)',
      description: 'Explore biology past papers with comprehensive answers and detailed explanations.',
      bgColor: 'bg-teal-50',
      gradient: 'from-teal-500 to-cyan-600'
    },
    { 
      name: 'Maths', 
      icon: '📐', 
      title: 'Maths Past Papers (0580)',
      description: 'Master mathematics with complete past papers archive and step-by-step solutions.',
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
            Past Papers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access comprehensive IGCSE past papers with marking schemes and grade thresholds.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Complete Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Official Papers</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Grade Thresholds</span>
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
                    onClick={() => navigate(`/past-papers/${subject.name.toLowerCase()}`)}
                  >
                    Download {subject.name} Papers
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

export default PastPapers;