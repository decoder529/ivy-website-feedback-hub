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

  // Theme-based organization
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

  const themes: Record<string, { name: string; color: string; chapters: Chapter[] }> = {
    intro: {
      name: "Introduction",
      color: "from-slate-500 to-gray-600",
      chapters: [
        {
          id: 'ch0',
          title: 'Uncertainties and vectors',
          number: '0',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    },
    A: {
      name: "Theme A: Space, Time and Motion",
      color: "from-blue-500 to-indigo-600",
      chapters: [
        {
          id: 'ch1-1',
          title: 'Kinematics',
          number: '1.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch1-2',
          title: 'Projectile motion',
          number: '1.2',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch2-1',
          title: "Forces and Newton's laws",
          number: 'A2.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch2-2',
          title: 'Circular motion',
          number: 'A2.2',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch3',
          title: 'Work, energy and power',
          number: 'A3',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch4',
          title: 'Linear momentum',
          number: 'A4',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch5',
          title: 'Rigid body mechanics',
          number: 'A5',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch6',
          title: 'Relativity',
          number: 'A6',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    },
    B: {
      name: "Theme B: The Particulate Nature of Matter",
      color: "from-orange-500 to-red-600",
      chapters: [
        {
          id: 'ch7',
          title: 'Thermal energy transfers',
          number: 'B7',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch8',
          title: 'The greenhouse effect',
          number: 'B8',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch9',
          title: 'The gas laws',
          number: 'B9',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch10',
          title: 'Thermodynamics',
          number: 'B10',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch11',
          title: 'Current and circuits',
          number: 'B11',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    },
    C: {
      name: "Theme C: Wave Behaviour",
      color: "from-purple-500 to-violet-600",
      chapters: [
        {
          id: 'ch12-1',
          title: 'Simple harmonic motion',
          number: 'C12.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch12-2',
          title: 'SHM (HL)',
          number: 'C12.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch13',
          title: 'The wave model',
          number: 'C13',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch14-1',
          title: 'Wave phenomena',
          number: 'C14.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch14-2',
          title: 'Wave phenomena (HL)',
          number: 'C14.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch15',
          title: 'Standing waves and resonance',
          number: 'C15',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch16-1',
          title: 'The Doppler effect',
          number: 'C16.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch16-2',
          title: 'The Doppler effect (HL)',
          number: 'C16.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    },
    D: {
      name: "Theme D: Fields",
      color: "from-green-500 to-emerald-600",
      chapters: [
        {
          id: 'ch17-1',
          title: 'Gravitation',
          number: 'D17.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch17-2',
          title: 'Gravitation (HL)',
          number: 'D17.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch18-1',
          title: 'Electric field and potential',
          number: 'D18.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch18-2',
          title: 'Electric field and potential (HL)',
          number: 'D18.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch19',
          title: 'Motion in EM fields',
          number: 'D19',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch20',
          title: 'Electromagnetic induction',
          number: 'D20',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    },
    E: {
      name: "Theme E: Nuclear and Quantum Physics",
      color: "from-pink-500 to-rose-600",
      chapters: [
        {
          id: 'ch21-1',
          title: 'Atomic physics',
          number: 'E21.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch21-2',
          title: 'Atomic physics (HL)',
          number: 'E21.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch22',
          title: 'Quantum physics',
          number: 'E22',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch23-1',
          title: 'Nuclear physics',
          number: 'E23.1',
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        },
        {
          id: 'ch23-2',
          title: 'Nuclear physics (HL)',
          number: 'E23.2',
          hlOnly: true,
          links: {
            worksheet: 'https://drive.google.com/your-link-here',
            worksheetSolutions: 'https://drive.google.com/your-link-here',
            mcq: 'https://drive.google.com/your-link-here',
            mcqSolutions: 'https://drive.google.com/your-link-here',
            notes: 'https://drive.google.com/your-link-here'
          }
        }
      ]
    }
  };

  const getFilteredThemes = () => {
    if (selectedLevel === 'SL') {
      const filtered: Record<string, typeof themes[keyof typeof themes]> = {};
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
          {Object.entries(getFilteredThemes()).map(([key, theme]) => (
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
          ))}
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
