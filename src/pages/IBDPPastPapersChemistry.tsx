import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const IBDPPastPapersChemistryDetail = ({ year, level }: { year: string; level: string }) => {
  const navigate = useNavigate();
  
  const [paperLinks] = useState<{[key: string]: string}>({});

  const papers = [
    { id: 'p1', label: 'Chemistry_paper_1_' + level.toUpperCase() },
    { id: 'p2', label: 'Chemistry_paper_2_' + level.toUpperCase() },
    { id: 'p3', label: 'Chemistry_paper_3_' + level.toUpperCase() },
  ];

  const markschemes = [
    { id: 'ms1', label: 'Chemistry_paper_1_' + level.toUpperCase() + '_markscheme' },
    { id: 'ms2', label: 'Chemistry_paper_2_' + level.toUpperCase() + '_markscheme' },
    { id: 'ms3', label: 'Chemistry_paper_3_' + level.toUpperCase() + '_markscheme' },
  ];

  const handlePaperClick = (paperId: string) => {
    const link = paperLinks[paperId];
    if (link) {
      window.open(link, '_blank');
    } else {
      window.open('about:blank', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="outline"
            onClick={() => navigate(`/ibdp/past-papers/chemistry`)}
            className="mb-6"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Years
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              MAY-JUNE-{year}
            </h1>
            <p className="text-muted-foreground">
              Home / {level.toUpperCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-primary"></div>
                <h2 className="text-lg font-semibold text-primary">QUESTION PAPERS</h2>
                <div className="h-px flex-1 bg-primary"></div>
              </div>
              <div className="space-y-3">
                {papers.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => handlePaperClick(paper.id)}
                    className="w-full text-left px-4 py-3 rounded-lg bg-card hover:bg-accent transition-colors flex items-center justify-between group"
                  >
                    <span className="text-primary font-medium">{paper.label}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-primary"></div>
                <h2 className="text-lg font-semibold text-primary">PAPERS SOLUTION</h2>
                <div className="h-px flex-1 bg-primary"></div>
              </div>
              <div className="space-y-3">
                {markschemes.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => handlePaperClick(paper.id)}
                    className="w-full text-left px-4 py-3 rounded-lg bg-card hover:bg-accent transition-colors flex items-center justify-between group"
                  >
                    <span className="text-primary font-medium">{paper.label}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const IBDPPastPapersChemistry = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  const years = Array.from({ length: 2025 - 1999 + 1 }, (_, i) => 2025 - i);
  
  if (params.year && params.level) {
    return <IBDPPastPapersChemistryDetail year={params.year} level={params.level} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            onClick={() => navigate('/ibdp')}
            className="mb-6"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to IBDP Dashboard
          </Button>
          
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧪</div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Chemistry Past Year Papers
            </h1>
            <p className="text-lg text-muted-foreground">
              Access IBDP Chemistry past papers from 1999 to 2025
            </p>
          </div>

          <Tabs defaultValue="hl" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="hl">Higher Level (HL)</TabsTrigger>
              <TabsTrigger value="sl">Standard Level (SL)</TabsTrigger>
            </TabsList>

            <TabsContent value="hl" className="space-y-4">
              <div className="grid gap-4 max-w-4xl mx-auto">
                {years.map((year) => (
                  <Card 
                    key={year} 
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/ibdp/past-papers/chemistry/${year}/hl`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{year}</h3>
                        <Button variant="outline">
                          View Papers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sl" className="space-y-4">
              <div className="grid gap-4 max-w-4xl mx-auto">
                {years.map((year) => (
                  <Card 
                    key={year}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/ibdp/past-papers/chemistry/${year}/sl`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{year}</h3>
                        <Button variant="outline">
                          View Papers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 max-w-4xl mx-auto bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Download Guide</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>Paper 1, 2, 3</strong>: Question papers for each examination component</li>
                <li>• <strong>Markscheme 1, 2, 3</strong>: Answer keys and marking guides for respective papers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPPastPapersChemistry;
