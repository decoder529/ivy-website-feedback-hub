import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  BookOpen, 
  FileText, 
  Download, 
  CheckCircle2, 
  StickyNote,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IBDPPhysics = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<'HL' | 'SL'>('HL');

  // Chapter data structure - SL Chapters
  const chapters = [
    {
      id: 'ch0',
      title: 'Uncertainties and vectors',
      number: '0',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch1-1',
      title: 'Kinematics',
      number: '1.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch1-2',
      title: 'Projectile motion',
      number: '1.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch2-1',
      title: "Forces and Newton's laws",
      number: 'A2.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch2-2',
      title: 'Circular motion',
      number: 'A2.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch3',
      title: 'Work, energy and power',
      number: 'A3',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch4',
      title: 'Linear momentum',
      number: 'A4',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch5',
      title: 'Rigid body mechanics',
      number: 'A5',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch6',
      title: 'Relativity',
      number: 'A6',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch7',
      title: 'Thermal energy transfers',
      number: 'B7',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch8',
      title: 'The greenhouse effect',
      number: 'B8',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch9',
      title: 'The gas laws',
      number: 'B9',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch11',
      title: 'Current and circuits',
      number: 'B11',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch12-1',
      title: 'Simple harmonic motion',
      number: 'C12.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch13',
      title: 'The wave model',
      number: 'C13',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch14-1',
      title: 'Wave phenomena',
      number: 'C14.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch15',
      title: 'Standing waves and resonance',
      number: 'C15',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch16-1',
      title: 'The Doppler effect',
      number: 'C16.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch17-1',
      title: 'Gravitation',
      number: 'D17.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch18-1',
      title: 'Electric field and potential',
      number: 'D18.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch19',
      title: 'Motion in EM fields',
      number: 'D19',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch21-1',
      title: 'Atomic physics',
      number: 'E21.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch23-1',
      title: 'Nuclear physics',
      number: 'E23.1',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch24',
      title: 'Nuclear fission',
      number: 'E24',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch25',
      title: 'Nuclear fusion',
      number: 'E25',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
  ];

  // HL Only Chapters
  const hlOnlyChapters = [
    {
      id: 'ch10',
      title: 'Thermodynamics HL',
      number: 'B10',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch12-2',
      title: 'SHM (HL)',
      number: 'C12.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch14-2',
      title: 'Wave phenomena (HL)',
      number: 'C14.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch16-2',
      title: 'The Doppler effect HL',
      number: 'C16.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch17-2',
      title: 'Gravitation (HL)',
      number: 'D17.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch18-2',
      title: 'Electric field and potential HL',
      number: 'D18.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch20',
      title: 'Electromagnetic induction HL',
      number: 'D20',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch21-2',
      title: 'Atomic physics HL',
      number: 'E21.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch22',
      title: 'Quantum physics HL',
      number: 'E22',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
    {
      id: 'ch23-2',
      title: 'Nuclear physics (HL)',
      number: 'E23.2',
      resources: {
        worksheet: { available: true, solutions: true },
        mcq: { available: true, solutions: true },
        notes: { available: true }
      }
    },
  ];

  const displayChapters = selectedLevel === 'HL' ? [...chapters, ...hlOnlyChapters] : chapters;

  const handleDownload = (type: string, chapter: string, hasSolutions?: boolean) => {
    console.log(`Downloading ${type} for ${chapter}`, hasSolutions ? 'with solutions' : '');
    // Implement actual download logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[hsl(var(--subject-physics))]/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/ibdp')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to IBDP Dashboard
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--subject-physics))] to-primary mb-6">
              <span className="text-4xl">⚛️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[hsl(var(--subject-physics))] to-primary bg-clip-text text-transparent">
                IBDP Physics Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access comprehensive chapter-wise worksheets, MCQ practice papers, and revision notes
            </p>
            
            {/* Level Selector */}
            <div className="inline-flex p-1 bg-muted rounded-lg">
              <Button
                variant={selectedLevel === 'HL' ? 'default' : 'ghost'}
                onClick={() => setSelectedLevel('HL')}
                className="px-8"
              >
                Higher Level (HL)
              </Button>
              <Button
                variant={selectedLevel === 'SL' ? 'default' : 'ghost'}
                onClick={() => setSelectedLevel('SL')}
                className="px-8"
              >
                Standard Level (SL)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Chapter-wise Resources */}
          <Card className="border-2 border-[hsl(var(--subject-physics))]/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[hsl(var(--subject-physics))]/5 to-transparent">
              <CardTitle className="text-3xl flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-[hsl(var(--subject-physics))]" />
                Chapter-wise Resources
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                {selectedLevel === 'HL' ? `${displayChapters.length} chapters` : `${displayChapters.length} chapters`} • 
                Worksheets, MCQs, and Notes available
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {displayChapters.map((chapter) => (
                  <AccordionItem key={chapter.id} value={chapter.id} className="border-b border-border/50">
                    <AccordionTrigger className="hover:no-underline hover:bg-muted/50 px-4 rounded-lg">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--subject-physics))]/10 text-[hsl(var(--subject-physics))] font-bold text-lg shrink-0">
                          {chapter.number}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{chapter.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Click to view resources
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-16">
                        
                        {/* Worksheet Card */}
                        <Card className="border-[hsl(var(--subject-physics))]/20 hover:shadow-md transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <FileText className="h-5 w-5 text-[hsl(var(--subject-physics))] mt-1" />
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">Worksheet</h4>
                                <p className="text-xs text-muted-foreground">Practice problems</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => handleDownload('worksheet', chapter.title)}
                                disabled={!chapter.resources.worksheet.available}
                              >
                                <Download className="h-3 w-3 mr-2" />
                                Download
                              </Button>
                              {chapter.resources.worksheet.solutions && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  className="w-full justify-start text-success border-success/20 hover:bg-success/10"
                                  onClick={() => handleDownload('worksheet-solutions', chapter.title, true)}
                                >
                                  <CheckCircle2 className="h-3 w-3 mr-2" />
                                  Solutions
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        {/* MCQ Card */}
                        <Card className="border-[hsl(var(--subject-physics))]/20 hover:shadow-md transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <FileText className="h-5 w-5 text-[hsl(var(--subject-physics))] mt-1" />
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">MCQ Practice</h4>
                                <p className="text-xs text-muted-foreground">Multiple choice questions</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => handleDownload('mcq', chapter.title)}
                                disabled={!chapter.resources.mcq.available}
                              >
                                <Download className="h-3 w-3 mr-2" />
                                Download
                              </Button>
                              {chapter.resources.mcq.solutions && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  className="w-full justify-start text-success border-success/20 hover:bg-success/10"
                                  onClick={() => handleDownload('mcq-solutions', chapter.title, true)}
                                >
                                  <CheckCircle2 className="h-3 w-3 mr-2" />
                                  Solutions
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Notes Card */}
                        <Card className="border-[hsl(var(--subject-physics))]/20 hover:shadow-md transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <StickyNote className="h-5 w-5 text-[hsl(var(--subject-physics))] mt-1" />
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">Notes & Formula</h4>
                                <p className="text-xs text-muted-foreground">Revision materials</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => handleDownload('notes', chapter.title)}
                                disabled={!chapter.resources.notes.available}
                              >
                                <Download className="h-3 w-3 mr-2" />
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Full Syllabus Papers */}
          <Card className="mt-8 border-2 border-[hsl(var(--subject-physics))]/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[hsl(var(--subject-physics))]/5 to-transparent">
              <CardTitle className="text-3xl flex items-center gap-3">
                <FileText className="h-8 w-8 text-[hsl(var(--subject-physics))]" />
                Full Syllabus Practice Papers
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Complete practice papers covering the entire syllabus
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((paperNum) => (
                  <Card key={paperNum} className="border-[hsl(var(--subject-physics))]/20 hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4">Practice Paper {paperNum}</h4>
                      <div className="space-y-2">
                        <Button 
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => handleDownload('full-paper', `Paper ${paperNum}`)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Paper
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full justify-start text-success border-success/20 hover:bg-success/10"
                          onClick={() => handleDownload('full-paper-solutions', `Paper ${paperNum}`, true)}
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Download Solutions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPPhysics;
