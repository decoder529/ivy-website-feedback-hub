import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, StickyNote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IBDPDashboard = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      name: 'Physics',
      icon: '⚛️',
      description: 'Comprehensive physics resources for IBDP',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      description: 'Complete chemistry resources and solutions',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Biology',
      icon: '🧬',
      description: 'Biological sciences comprehensive materials',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Mathematics',
      icon: '📐',
      description: 'Mathematical problem sets and solutions',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const sections = [
    {
      title: 'Chapter-wise Worksheets',
      icon: BookOpen,
      description: 'Practice worksheets organized by chapters',
      gradient: 'from-primary to-secondary',
      path: 'worksheets'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in">
            IBDP Resources
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access comprehensive chapter-wise worksheets, teacher notes, and question papers for all IBDP subjects
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className={`bg-gradient-to-br ${section.gradient} rounded-full w-16 h-16 flex items-center justify-center`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>

            {/* Subject Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subjects.map((subject, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-hero transition-all duration-300 hover:scale-105 border-0 overflow-hidden animate-fade-in ${subject.bgColor}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                      {subject.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{subject.name}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                      {subject.description}
                    </p>
                    <Button 
                      className={`w-full bg-gradient-to-r ${subject.gradient} text-white hover:shadow-hero hover:scale-105 transition-all duration-300 py-3`}
                      onClick={() => navigate(`/ibdp/${section.path}/${subject.name.toLowerCase()}`)}
                    >
                      View {subject.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default IBDPDashboard;