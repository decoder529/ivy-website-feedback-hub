import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const PastPapers = () => {
  const pastPapers = [
    {
      subject: 'Physics',
      exam: 'AP Physics 1',
      year: '2023',
      session: 'May',
      type: 'Question Paper',
      format: 'PDF',
      size: '2.4 MB',
    },
    {
      subject: 'Physics',
      exam: 'AP Physics 1',
      year: '2023',
      session: 'May',
      type: 'Mark Scheme',
      format: 'PDF',
      size: '1.8 MB',
    },
    {
      subject: 'Chemistry',
      exam: 'IBDP Chemistry HL',
      year: '2023',
      session: 'November',
      type: 'Question Paper',
      format: 'PDF',
      size: '3.1 MB',
    },
    {
      subject: 'Chemistry',
      exam: 'IBDP Chemistry HL',
      year: '2023',
      session: 'November',
      type: 'Mark Scheme',
      format: 'PDF',
      size: '2.2 MB',
    },
    {
      subject: 'Mathematics',
      exam: 'AS-Level Mathematics',
      year: '2023',
      session: 'October',
      type: 'Question Paper',
      format: 'PDF',
      size: '2.8 MB',
    },
    {
      subject: 'Mathematics',
      exam: 'AS-Level Mathematics',
      year: '2023',
      session: 'October',
      type: 'Mark Scheme',
      format: 'PDF',
      size: '1.9 MB',
    },
    {
      subject: 'Biology',
      exam: 'IGCSE Biology',
      year: '2023',
      session: 'June',
      type: 'Question Paper',
      format: 'PDF',
      size: '2.6 MB',
    },
    {
      subject: 'Biology',
      exam: 'IGCSE Biology',
      year: '2023',
      session: 'June',
      type: 'Mark Scheme',
      format: 'PDF',
      size: '1.7 MB',
    },
  ];

  const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];
  const years = ['All', '2023', '2022', '2021', '2020'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Past Papers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access comprehensive collection of past examination papers for AP, IBDP, IGCSE & AS-A Level subjects
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Question Papers</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Mark Schemes</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Latest Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search papers..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select className="px-3 py-2 rounded-md border border-border bg-background">
                <option>All Subjects</option>
                {subjects.slice(1).map(subject => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
              <select className="px-3 py-2 rounded-md border border-border bg-background">
                <option>All Years</option>
                {years.slice(1).map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Past Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastPapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{paper.subject}</Badge>
                    <Badge variant="outline">{paper.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{paper.exam}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Session:</span>
                        <span className="font-medium">{paper.session}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium">{paper.type}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{paper.format}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{paper.size}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Help with Past Papers?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert tutors can guide you through solving past papers and improving your exam technique.
          </p>
          <Button variant="default" size="lg">
            Work With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastPapers;