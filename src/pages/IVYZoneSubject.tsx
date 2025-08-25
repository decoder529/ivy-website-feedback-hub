import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, FileText, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IVYZoneSubject = () => {
  const { subject } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/ivyzone');
    }
  }, [user, loading, navigate]);

  // Sample data structure similar to the reference site
  const years = [
    { year: '2024', sessions: ['MAY-JUNE-2024', 'OCT-NOV-2024'] },
    { year: '2023', sessions: ['MAY-JUNE-2023', 'OCT-NOV-2023'] },
    { year: '2022', sessions: ['MAY-JUNE-2022', 'OCT-NOV-2022'] },
    { year: '2021', sessions: ['MAY-JUNE-2021', 'OCT-NOV-2021'] },
    { year: '2020', sessions: ['MAY-JUNE-2020', 'OCT-NOV-2020'] },
    { year: '2019', sessions: ['MAY-JUNE-2019', 'OCT-NOV-2019'] },
    { year: '2018', sessions: ['MAY-JUNE-2018', 'OCT-NOV-2018'] },
    { year: '2017', sessions: ['MAY-JUNE-2017', 'OCT-NOV-2017'] },
    { year: '2016', sessions: ['MAY-JUNE-2016', 'OCT-NOV-2016'] },
    { year: '2015', sessions: ['MAY-JUNE-2015', 'OCT-NOV-2015'] },
  ];

  const getSubjectIcon = (subjectName: string) => {
    switch (subjectName?.toLowerCase()) {
      case 'physics': return '⚛️';
      case 'chemistry': return '🧪';
      case 'mathematics': return '📐';
      case 'biology': return '🧬';
      default: return '📚';
    }
  };

  const handleSessionClick = (session: string) => {
    navigate(`/ivyzone/${subject}/${session.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleDownload = (session: string, type: 'qp' | 'ms') => {
    // This would typically download the file
    console.log(`Downloading ${type.toUpperCase()} for ${session}`);
  };

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
      
      {/* Header Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              onClick={() => navigate('/ivyzone/dashboard')}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{getSubjectIcon(subject || '')}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 capitalize">
              {subject} Past Papers
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Complete collection of {subject} past papers organized by year and session
            </p>
          </div>
        </div>
      </section>

      {/* Paper Levels */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Higher Level (HL)</CardTitle>
                <CardDescription className="text-white/70">
                  Advanced level papers for deeper understanding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {years.map((yearData) => (
                    <Card key={yearData.year} className="bg-white/5 border-white/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white text-lg">{yearData.year}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {yearData.sessions.map((session) => (
                            <div key={session} className="flex items-center justify-between p-2 bg-white/5 rounded">
                              <span className="text-white text-sm">{session}</span>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                                  onClick={() => handleDownload(session, 'qp')}
                                >
                                  <FileText className="h-3 w-3 mr-1" />
                                  QP
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                                  onClick={() => handleDownload(session, 'ms')}
                                >
                                  <Download className="h-3 w-3 mr-1" />
                                  MS
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Standard Level (SL)</CardTitle>
                <CardDescription className="text-white/70">
                  Foundation level papers for core concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {years.map((yearData) => (
                    <Card key={yearData.year} className="bg-white/5 border-white/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white text-lg">{yearData.year}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {yearData.sessions.map((session) => (
                            <div key={session} className="flex items-center justify-between p-2 bg-white/5 rounded">
                              <span className="text-white text-sm">{session}</span>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                                  onClick={() => handleDownload(session, 'qp')}
                                >
                                  <FileText className="h-3 w-3 mr-1" />
                                  QP
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                                  onClick={() => handleDownload(session, 'ms')}
                                >
                                  <Download className="h-3 w-3 mr-1" />
                                  MS
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-white" />
                  <span className="text-white text-sm">QP = Question Paper</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-white" />
                  <span className="text-white text-sm">MS = Marking Scheme</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVYZoneSubject;