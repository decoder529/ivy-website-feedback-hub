import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Download, LogOut, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IVYZoneDashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/ivyzone');
    } else if (user) {
      setUserEmail(user.email || '');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/ivyzone');
  };

  const subjects = [
    {
      name: 'Physics',
      icon: '⚛️',
      description: 'Comprehensive physics past papers and solutions',
      color: 'bg-blue-500',
      papers: 145
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      description: 'Complete chemistry question papers with detailed answers',
      color: 'bg-green-500',
      papers: 132
    },
    {
      name: 'Mathematics',
      icon: '📐',
      description: 'Mathematical problem sets and step-by-step solutions',
      color: 'bg-purple-500',
      papers: 158
    },
    {
      name: 'Biology',
      icon: '🧬',
      description: 'Biological sciences papers with comprehensive explanations',
      color: 'bg-emerald-500',
      papers: 127
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-foreground to-accent flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-foreground to-accent">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome to IVYZone
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <User className="h-4 w-4" />
                <span>{userEmail}</span>
              </div>
            </div>
            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Total Papers</p>
                    <p className="text-2xl font-bold text-white">562+</p>
                  </div>
                  <FileText className="h-8 w-8 text-white/70" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Years Covered</p>
                    <p className="text-2xl font-bold text-white">1999-2024</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-white/70" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Subjects</p>
                    <p className="text-2xl font-bold text-white">4</p>
                  </div>
                  <Download className="h-8 w-8 text-white/70" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Subject</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <Card 
                key={subject.name}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/ivyzone/${subject.name.toLowerCase()}`)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{subject.icon}</div>
                  <CardTitle className="text-white group-hover:scale-105 transition-transform">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className={`${subject.color} text-white border-0 mb-4`}>
                    {subject.papers} Papers Available
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
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
          <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Latest Papers (2024)</CardTitle>
                <CardDescription className="text-white/70">
                  Most recent examination papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => navigate('/ivyzone/latest')}
                >
                  View Latest Papers
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Popular Downloads</CardTitle>
                <CardDescription className="text-white/70">
                  Most downloaded papers and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
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