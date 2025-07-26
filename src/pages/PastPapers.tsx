import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, Download, Search, Filter, ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface QuestionPaper {
  id: number;
  title: string;
  subject: string;
  board: string;
  year: number;
  session: string;
  paper_number: string;
  variant: string | null;
  level: string;
  file_path: string;
  file_size: number | null;
  download_count: number;
  created_at: string;
}

const PastPapers = () => {
  const [papers, setPapers] = useState<QuestionPaper[]>([]);
  const [filteredPapers, setFilteredPapers] = useState<QuestionPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const { toast } = useToast();

  // Fetch question papers from database
  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const { data, error } = await supabase
          .from('question_papers')
          .select('*')
          .eq('is_active', true)
          .order('year', { ascending: false });

        if (error) throw error;
        setPapers(data || []);
        setFilteredPapers(data || []);
      } catch (error) {
        console.error('Error fetching papers:', error);
        toast({
          title: "Error",
          description: "Failed to load question papers",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, [toast]);

  // Filter papers based on search and filters
  useEffect(() => {
    let filtered = papers;

    if (searchTerm) {
      filtered = filtered.filter(paper =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.board.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSubject && selectedSubject !== 'all') {
      filtered = filtered.filter(paper => paper.subject === selectedSubject);
    }

    if (selectedBoard && selectedBoard !== 'all') {
      filtered = filtered.filter(paper => paper.board === selectedBoard);
    }

    if (selectedYear && selectedYear !== 'all') {
      filtered = filtered.filter(paper => paper.year.toString() === selectedYear);
    }

    if (selectedLevel && selectedLevel !== 'all') {
      filtered = filtered.filter(paper => paper.level === selectedLevel);
    }

    setFilteredPapers(filtered);
  }, [papers, searchTerm, selectedSubject, selectedBoard, selectedYear, selectedLevel]);

  // Download paper function
  const downloadPaper = async (paper: QuestionPaper) => {
    try {
      // Increment download count
      await supabase.rpc('increment_download_count', { paper_id: paper.id });

      // Get download URL
      const { data, error } = await supabase.storage
        .from('question-papers')
        .createSignedUrl(paper.file_path, 60); // 60 seconds validity

      if (error) throw error;

      // Create download link
      const link = document.createElement('a');
      link.href = data.signedUrl;
      link.download = paper.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: `Downloading ${paper.title}`,
      });
    } catch (error) {
      console.error('Error downloading paper:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download the paper. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSubject('');
    setSelectedBoard('');
    setSelectedYear('');
    setSelectedLevel('');
  };

  // Get unique values for filter options
  const uniqueSubjects = [...new Set(papers.map(p => p.subject))];
  const uniqueBoards = [...new Set(papers.map(p => p.board))];
  const uniqueLevels = [...new Set(papers.map(p => p.level))];
  const uniqueYears = [...new Set(papers.map(p => p.year.toString()))].sort((a, b) => parseInt(b) - parseInt(a));

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading question papers...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Past Question Papers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Download past 10 years question papers from various exam boards and subjects
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>{papers.length} Papers Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Latest Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search papers by title, subject, or board..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {uniqueSubjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                <SelectTrigger>
                  <SelectValue placeholder="All Boards" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Boards</SelectItem>
                  {uniqueBoards.map(board => (
                    <SelectItem key={board} value={board}>{board}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {uniqueLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {uniqueYears.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            <div className="text-center mb-8">
              <Button variant="outline" onClick={clearFilters}>
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Question Papers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Question Papers ({filteredPapers.length})
              </h2>
            </div>

            {filteredPapers.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Papers Found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters to find papers.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPapers.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                            {paper.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{paper.subject}</Badge>
                            <Badge variant="outline">{paper.board}</Badge>
                            <Badge variant="outline">{paper.level}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Year:</span>
                          <span className="font-medium">{paper.year}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Session:</span>
                          <span className="font-medium">{paper.session}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Paper:</span>
                          <span className="font-medium">
                            Paper {paper.paper_number}
                            {paper.variant && ` Variant ${paper.variant}`}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Downloads:</span>
                          <span className="font-medium">{paper.download_count}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => downloadPaper(paper)}
                        className="w-full"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastPapers;