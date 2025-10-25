import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import chemistryLab from '@/assets/chemistry-lab.jpg';
import mathTeacher from '@/assets/math-teacher.jpg';
import studentsStudying from '@/assets/students-studying.jpg';

const IVYZoneDashboard = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      name: 'Physics',
      icon: '⚛️',
      description: 'Comprehensive physics past papers and solutions',
      color: 'bg-blue-500',
      papers: 145,
      image: mathTeacher,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      description: 'Complete chemistry question papers with detailed answers',
      color: 'bg-green-500',
      papers: 132,
      image: chemistryLab,
      gradient: 'from-green-400 to-green-600'
    },
    {
      name: 'Mathematics',
      icon: '📐',
      description: 'Mathematical problem sets and step-by-step solutions',
      color: 'bg-purple-500',
      papers: 158,
      image: mathTeacher,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Biology',
      icon: '🧬',
      description: 'Biological sciences papers with comprehensive explanations',
      color: 'bg-emerald-500',
      papers: 127,
      image: studentsStudying,
      gradient: 'from-red-400 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen ivyzone-hero-bg">
      <Header />
      
      {/* Dashboard Header with Background */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={studentsStudying} 
            alt="Students studying" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/50 to-yellow-300/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold ivyzone-text mb-3 drop-shadow-sm">
              Welcome to IBDP Past Papers
            </h1>
            <p className="ivyzone-text-muted text-lg">
              Access comprehensive past papers and detailed solutions
            </p>
          </div>
          
          {/* Enhanced Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="ivyzone-feature-card">
              <CardContent className="pt-8 text-center">
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="ivyzone-text-muted text-sm font-medium uppercase tracking-wide">Total Papers</p>
                  <p className="text-3xl font-bold ivyzone-text mb-2">562+</p>
                  <p className="text-sm ivyzone-text-muted">Question papers & solutions</p>
                </div>
              </CardContent>
            </Card>
            <Card className="ivyzone-feature-card">
              <CardContent className="pt-8 text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="ivyzone-text-muted text-sm font-medium uppercase tracking-wide">Years Covered</p>
                  <p className="text-3xl font-bold ivyzone-text mb-2">1999-2024</p>
                  <p className="text-sm ivyzone-text-muted">25+ years of papers</p>
                </div>
              </CardContent>
            </Card>
            <Card className="ivyzone-feature-card">
              <CardContent className="pt-8 text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="ivyzone-text-muted text-sm font-medium uppercase tracking-wide">Success Rate</p>
                  <p className="text-3xl font-bold ivyzone-text mb-2">95%</p>
                  <p className="text-sm ivyzone-text-muted">Student improvement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Subjects Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold ivyzone-text mb-8 text-center">Browse by Subject</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject) => (
              <Card 
                key={subject.name}
                className="ivyzone-feature-card overflow-hidden cursor-pointer group relative"
                onClick={() => navigate(`/ivyzone/${subject.name.toLowerCase()}`)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img 
                    src={subject.image} 
                    alt={`${subject.name} study`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-60`}></div>
                </div>
                
                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{subject.icon}</div>
                  <CardTitle className="ivyzone-text text-xl group-hover:scale-105 transition-transform font-bold">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="ivyzone-text-muted font-medium">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10 pt-0">
                  <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white border-0 mb-4 px-4 py-1 text-sm font-semibold">
                    {subject.papers} Papers Available
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="w-full ivyzone-button group-hover:scale-105 transition-transform font-semibold"
                  >
                    Browse Papers
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold ivyzone-text mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="ivyzone-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="ivyzone-text">Latest Papers (2024)</CardTitle>
                <CardDescription className="ivyzone-text-muted">
                  Most recent examination papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full ivyzone-button"
                  onClick={() => navigate('/ivyzone/latest')}
                >
                  View Latest Papers
                </Button>
              </CardContent>
            </Card>
            <Card className="ivyzone-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="ivyzone-text">Popular Downloads</CardTitle>
                <CardDescription className="ivyzone-text-muted">
                  Most downloaded papers and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  className="w-full ivyzone-card border-2 ivyzone-text hover:opacity-80"
                  onClick={() => navigate('/ivyzone/popular')}
                >
                  View Popular Papers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVYZoneDashboard;