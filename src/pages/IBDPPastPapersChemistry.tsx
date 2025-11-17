import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const IBDPPastPapersChemistry = () => {
  const navigate = useNavigate();
  
  const years = Array.from({ length: 2025 - 1999 + 1 }, (_, i) => 2025 - i);
  
  const [paperLinks] = useState<{[key: string]: string}>({});

  const handlePaperClick = (paperId: string) => {
    const link = paperLinks[paperId];
    if (link) {
      window.open(link, '_blank');
    } else {
      window.open('about:blank', '_blank');
    }
  };

  const renderExamPapers = (year: number, level: string, exam: string) => {
    const papers = [
      { id: `${level}_${year}_${exam}_p1`, label: 'Chemistry_paper_1_' + level.toUpperCase() },
      { id: `${level}_${year}_${exam}_p2`, label: 'Chemistry_paper_2_' + level.toUpperCase() },
      { id: `${level}_${year}_${exam}_p3`, label: 'Chemistry_paper_3_' + level.toUpperCase() },
      { id: `${level}_${year}_${exam}_ms1`, label: 'Chemistry_paper_1_' + level.toUpperCase() + '_markscheme' },
      { id: `${level}_${year}_${exam}_ms2`, label: 'Chemistry_paper_2_' + level.toUpperCase() + '_markscheme' },
      { id: `${level}_${year}_${exam}_ms3`, label: 'Chemistry_paper_3_' + level.toUpperCase() + '_markscheme' },
    ];

    return (
      <div className="space-y-2">
        {papers.map((paper) => (
          <button
            key={paper.id}
            onClick={() => handlePaperClick(paper.id)}
            className="w-full text-left px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors flex items-center justify-between group"
          >
            <span className="text-primary font-medium text-sm">{paper.label}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>
    );
  };

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
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {years.map((year) => (
                    <AccordionItem key={year} value={`year-${year}`} className="border rounded-lg bg-card">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-xl font-semibold">{year}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">May Examination</h3>
                            {renderExamPapers(year, 'hl', 'may')}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">November Examination</h3>
                            {renderExamPapers(year, 'hl', 'nov')}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="sl" className="space-y-4">
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {years.map((year) => (
                    <AccordionItem key={year} value={`year-${year}`} className="border rounded-lg bg-card">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-xl font-semibold">{year}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">May Examination</h3>
                            {renderExamPapers(year, 'sl', 'may')}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">November Examination</h3>
                            {renderExamPapers(year, 'sl', 'nov')}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPPastPapersChemistry;
