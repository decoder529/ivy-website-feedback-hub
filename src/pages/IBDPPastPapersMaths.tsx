import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Download, ChevronLeft } from 'lucide-react';

const IBDPPastPapersMaths = () => {
  const navigate = useNavigate();
  const [paperLinks, setPaperLinks] = useState<{[key: string]: string}>({});
  const [selectedSubject, setSelectedSubject] = useState<{hl: string, sl: string}>({
    hl: 'aahl',
    sl: 'aihl'
  });

  const years = Array.from({ length: 2025 - 1999 + 1 }, (_, i) => 2025 - i);
  
  const papers = [
    { id: 'p1', label: 'Paper 1' },
    { id: 'p2', label: 'Paper 2' },
    { id: 'p3', label: 'Paper 3' },
    { id: 'ms1', label: 'Markscheme 1' },
    { id: 'ms2', label: 'Markscheme 2' },
    { id: 'ms3', label: 'Markscheme 3' },
  ];

  const handleDownload = (year: number, level: string, subject: string, paperId: string) => {
    const key = `${year}-${level}-${subject}-${paperId}`;
    const link = paperLinks[key];
    if (link) {
      window.open(link, '_blank');
    }
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
            <div className="text-6xl mb-4">📐</div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Mathematics Past Year Papers
            </h1>
            <p className="text-lg text-muted-foreground">
              Access IBDP Mathematics past papers from 1999 to 2025
            </p>
          </div>

          <Tabs defaultValue="hl" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="hl">Higher Level (HL)</TabsTrigger>
              <TabsTrigger value="sl">Standard Level (SL)</TabsTrigger>
            </TabsList>

            <TabsContent value="hl" className="space-y-6">
              <div className="flex justify-center mb-6">
                <ToggleGroup 
                  type="single" 
                  value={selectedSubject.hl}
                  onValueChange={(value) => value && setSelectedSubject({...selectedSubject, hl: value})}
                  className="bg-muted p-1 rounded-lg"
                >
                  <ToggleGroupItem value="aahl" className="data-[state=on]:bg-background">
                    AA HL
                  </ToggleGroupItem>
                  <ToggleGroupItem value="aihl" className="data-[state=on]:bg-background">
                    AI HL
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {years.map((year) => (
                  <Card key={year}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{year}</h3>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56">
                            {papers.map((paper) => (
                              <DropdownMenuItem
                                key={paper.id}
                                onClick={() => handleDownload(year, 'hl', selectedSubject.hl, paper.id)}
                              >
                                {paper.label}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sl" className="space-y-6">
              <div className="flex justify-center mb-6">
                <ToggleGroup 
                  type="single" 
                  value={selectedSubject.sl}
                  onValueChange={(value) => value && setSelectedSubject({...selectedSubject, sl: value})}
                  className="bg-muted p-1 rounded-lg"
                >
                  <ToggleGroupItem value="aasl" className="data-[state=on]:bg-background">
                    AA SL
                  </ToggleGroupItem>
                  <ToggleGroupItem value="aisl" className="data-[state=on]:bg-background">
                    AI SL
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {years.map((year) => (
                  <Card key={year}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{year}</h3>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56">
                            {papers.map((paper) => (
                              <DropdownMenuItem
                                key={paper.id}
                                onClick={() => handleDownload(year, 'sl', selectedSubject.sl, paper.id)}
                              >
                                {paper.label}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                <li>• <strong>AA (Analysis and Approaches)</strong>: Traditional mathematical topics</li>
                <li>• <strong>AI (Applications and Interpretation)</strong>: Practical and applied mathematics</li>
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

export default IBDPPastPapersMaths;
