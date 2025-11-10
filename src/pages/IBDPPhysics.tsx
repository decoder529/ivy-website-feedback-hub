import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const IBDPPhysics = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<'HL' | 'SL'>('HL');
  const [themes, setThemes] = useState<Record<string, Theme>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  type Chapter = {
    id: string;
    title: string;
    number: string;
    hlOnly?: boolean;
    links: {
      worksheet: string;
      worksheetSolutions: string;
      mcq: string;
      mcqSolutions: string;
      notes: string;
    };
  };

  type Theme = {
    name: string;
    color: string;
    chapters: Chapter[];
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        
        // Fetch themes
        const { data: themesData, error: themesError } = await supabase
          .from('physics_themes')
          .select('*')
          .order('display_order');

        if (themesError) throw themesError;

        // Fetch chapters
        const { data: chaptersData, error: chaptersError } = await supabase
          .from('physics_chapters')
          .select('*')
          .order('display_order');

        if (chaptersError) throw chaptersError;

        // Organize data
        const organizedThemes: Record<string, Theme> = {};
        
        themesData?.forEach((theme) => {
          const themeKey = theme.name.toLowerCase().includes('intro') ? 'intro' : 
                          theme.name.includes('Theme A') ? 'A' :
                          theme.name.includes('Theme B') ? 'B' :
                          theme.name.includes('Theme C') ? 'C' :
                          theme.name.includes('Theme D') ? 'D' : 'E';
                          
          const themeChapters = chaptersData
            ?.filter((ch) => ch.theme_id === theme.id)
            .map((ch) => ({
              id: ch.id,
              title: ch.title,
              number: ch.number,
              hlOnly: ch.hl_only,
              links: {
                worksheet: ch.worksheet_link || 'https://drive.google.com/your-link-here',
                worksheetSolutions: ch.worksheet_solutions_link || 'https://drive.google.com/your-link-here',
                mcq: ch.mcq_link || 'https://drive.google.com/your-link-here',
                mcqSolutions: ch.mcq_solutions_link || 'https://drive.google.com/your-link-here',
                notes: ch.notes_link || 'https://drive.google.com/your-link-here',
              },
            })) || [];

          organizedThemes[themeKey] = {
            name: theme.name,
            color: theme.color,
            chapters: themeChapters,
          };
        });

        setThemes(organizedThemes);
      } catch (error) {
        console.error('Error fetching physics content:', error);
        toast({
          title: 'Error',
          description: 'Failed to load content. Please refresh the page.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [toast]);

  const getFilteredThemes = () => {
    if (selectedLevel === 'SL') {
      const filtered: Record<string, Theme> = {};
      Object.entries(themes).forEach(([key, theme]) => {
        filtered[key] = {
          ...theme,
          chapters: theme.chapters.filter(ch => !ch.hlOnly)
        };
      });
      return filtered;
    }
    return themes;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate('/ibdp/worksheets')}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Subjects
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            IBDP Physics Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive worksheets, MCQs, and notes for IB Physics organized by theme
          </p>
          
          {/* Level Selector */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={selectedLevel === 'HL' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('HL')}
              className="min-w-32"
            >
              Higher Level (HL)
            </Button>
            <Button
              variant={selectedLevel === 'SL' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('SL')}
              className="min-w-32"
            >
              Standard Level (SL)
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Loading content...</p>
            </div>
          ) : (
            Object.entries(getFilteredThemes()).map(([key, theme]) => (
              <Card key={key} className="mb-8 overflow-hidden border-2">
                <CardHeader className={`bg-gradient-to-r ${theme.color} text-white`}>
                  <CardTitle className="text-2xl font-bold">{theme.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {theme.chapters.map((chapter) => (
                      <AccordionItem
                        key={chapter.id}
                        value={chapter.id}
                        className="border rounded-lg px-4 hover:bg-muted/50 transition-colors"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-primary">{chapter.number}</span>
                            <span className="font-medium">{chapter.title}</span>
                            {chapter.hlOnly && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                                HL Only
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-6">
                          <div className="grid md:grid-cols-3 gap-4">
                            {/* Worksheet */}
                            <div className="space-y-2">
                              <h4 className="font-semibold flex items-center gap-2 text-sm">
                                <FileText className="h-4 w-4" />
                                Worksheet
                              </h4>
                              <div className="space-y-2">
                                <a 
                                  href={chapter.links.worksheet}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <Download className="h-3 w-3" />
                                  Download Worksheet
                                </a>
                                <a 
                                  href={chapter.links.worksheetSolutions}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                  Solutions
                                </a>
                              </div>
                            </div>

                            {/* MCQ Practice */}
                            <div className="space-y-2">
                              <h4 className="font-semibold flex items-center gap-2 text-sm">
                                <BookOpen className="h-4 w-4" />
                                MCQ Practice
                              </h4>
                              <div className="space-y-2">
                                <a 
                                  href={chapter.links.mcq}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <Download className="h-3 w-3" />
                                  Download MCQs
                                </a>
                                <a 
                                  href={chapter.links.mcqSolutions}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                  Solutions
                                </a>
                              </div>
                            </div>

                            {/* Notes */}
                            <div className="space-y-2">
                              <h4 className="font-semibold flex items-center gap-2 text-sm">
                                <StickyNote className="h-4 w-4" />
                                Notes
                              </h4>
                              <a 
                                href={chapter.links.notes}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                <Download className="h-3 w-3" />
                                Download Notes
                              </a>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Practice Papers Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Full Syllabus Practice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Paper 1 (MCQs)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://drive.google.com/your-paper1-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  Download Paper 1
                </a>
                <a
                  href="https://drive.google.com/your-paper1-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Solutions
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Paper 2 (Long Questions)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://drive.google.com/your-paper2-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  Download Paper 2
                </a>
                <a
                  href="https://drive.google.com/your-paper2-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Solutions
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPPhysics;
