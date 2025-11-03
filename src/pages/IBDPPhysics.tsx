import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Download, BookOpen, ClipboardCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const IBDPPhysics = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const chapters = [
    { id: 1, name: "Measurements and Uncertainties", topics: 4 },
    { id: 2, name: "Mechanics", topics: 6 },
    { id: 3, name: "Thermal Physics", topics: 4 },
    { id: 4, name: "Waves", topics: 5 },
    { id: 5, name: "Electricity and Magnetism", topics: 6 },
    { id: 6, name: "Circular Motion and Gravitation", topics: 4 },
    { id: 7, name: "Atomic, Nuclear and Particle Physics", topics: 5 },
    { id: 8, name: "Energy Production", topics: 4 },
    { id: 9, name: "Wave Phenomena (HL)", topics: 4 },
    { id: 10, name: "Fields (HL)", topics: 5 },
    { id: 11, name: "Electromagnetic Induction (HL)", topics: 4 },
    { id: 12, name: "Quantum and Nuclear Physics (HL)", topics: 5 }
  ];

  const resourceSections = [
    {
      title: "Chapter-wise Worksheets",
      icon: BookOpen,
      description: "Practice worksheets with solutions for each chapter",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20"
    },
    {
      title: "MCQ Question Papers",
      icon: ClipboardCheck,
      description: "Multiple choice questions for quick practice",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20"
    },
    {
      title: "Full Syllabus Papers",
      icon: FileText,
      description: "Complete syllabus examination papers with marking schemes",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      darkBgColor: "dark:bg-indigo-950/20"
    }
  ];

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  const handleDownload = (resource: string, chapterId?: number) => {
    // Placeholder for download functionality
    console.log(`Downloading ${resource}`, chapterId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              IBDP Physics Resources
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in">
              IBDP Physics
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive physics resources including chapter-wise worksheets, MCQ papers, 
              and full syllabus examination papers with detailed solutions
            </p>
          </div>
        </div>
      </section>

      {/* Resource Type Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resourceSections.map((section, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-hero transition-all duration-300 hover:scale-105 border-0 ${section.bgColor} ${section.darkBgColor}`}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription className="text-base">{section.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Chapter-wise Worksheets Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Chapter-wise Worksheets
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access worksheets and solutions organized by chapters
              </p>
            </div>

            <div className="grid gap-4 max-w-5xl mx-auto">
              {chapters.map((chapter) => (
                <Card key={chapter.id} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="cursor-pointer" onClick={() => toggleChapter(chapter.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                          {chapter.id}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{chapter.name}</CardTitle>
                          <CardDescription>{chapter.topics} topics covered</CardDescription>
                        </div>
                      </div>
                      {expandedChapter === chapter.id ? (
                        <ChevronUp className="h-6 w-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  
                  {expandedChapter === chapter.id && (
                    <CardContent className="space-y-4 animate-fade-in">
                      <Separator />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="w-full justify-between group hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleDownload('worksheet', chapter.id)}
                        >
                          <span className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Practice Worksheet
                          </span>
                          <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-between group hover:bg-success hover:text-success-foreground"
                          onClick={() => handleDownload('solution', chapter.id)}
                        >
                          <span className="flex items-center gap-2">
                            <ClipboardCheck className="h-4 w-4" />
                            Solutions
                          </span>
                          <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* MCQ Question Papers */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                MCQ Question Papers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple choice questions for efficient practice and self-assessment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "MCQ Set 1", topics: "Chapters 1-4", questions: 40 },
                { title: "MCQ Set 2", topics: "Chapters 5-8", questions: 40 },
                { title: "MCQ Set 3", topics: "Chapters 9-12 (HL)", questions: 40 },
                { title: "MCQ Set 4", topics: "Full Syllabus SL", questions: 50 },
                { title: "MCQ Set 5", topics: "Full Syllabus HL", questions: 60 },
                { title: "MCQ Set 6", topics: "Mixed Topics", questions: 45 }
              ].map((set, index) => (
                <Card key={index} className="bg-purple-50 dark:bg-purple-950/20 border-0 hover:shadow-hero transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl">{set.title}</CardTitle>
                    <CardDescription>
                      {set.topics} • {set.questions} questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-lg"
                      onClick={() => handleDownload(`mcq-${index + 1}`)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Paper
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-success hover:text-success-foreground"
                      onClick={() => handleDownload(`mcq-answers-${index + 1}`)}
                    >
                      <ClipboardCheck className="h-4 w-4 mr-2" />
                      Answer Key
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Full Syllabus Papers */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Full Syllabus Papers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete examination papers with detailed marking schemes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  title: "Paper 1 - SL", 
                  description: "Multiple choice questions covering core topics",
                  duration: "45 minutes",
                  marks: 40
                },
                { 
                  title: "Paper 2 - SL", 
                  description: "Short and extended response questions",
                  duration: "75 minutes",
                  marks: 50
                },
                { 
                  title: "Paper 1 - HL", 
                  description: "Multiple choice questions including HL topics",
                  duration: "60 minutes",
                  marks: 40
                },
                { 
                  title: "Paper 2 - HL", 
                  description: "Short and extended response questions",
                  duration: "135 minutes",
                  marks: 95
                },
                { 
                  title: "Paper 3 - HL", 
                  description: "Data-based and option questions",
                  duration: "75 minutes",
                  marks: 45
                }
              ].map((paper, index) => (
                <Card key={index} className="bg-indigo-50 dark:bg-indigo-950/20 border-0 hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{paper.title}</CardTitle>
                    <CardDescription className="text-base">{paper.description}</CardDescription>
                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                      <span>⏱️ {paper.duration}</span>
                      <span>📝 {paper.marks} marks</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:shadow-lg"
                      onClick={() => handleDownload(`paper-${index + 1}`)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Question Paper
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-success hover:text-success-foreground"
                      onClick={() => handleDownload(`markscheme-${index + 1}`)}
                    >
                      <ClipboardCheck className="h-4 w-4 mr-2" />
                      Marking Scheme
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPPhysics;
