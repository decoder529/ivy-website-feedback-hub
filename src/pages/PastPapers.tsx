import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PastPapers = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Topical Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create custom tests with topical questions from past papers across different exam boards and subjects
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Question Papers</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Topic-based Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Latest Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topical Questions Filter Section */}
      <section className="py-12 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Board */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Board</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select board" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="igcse">IGCSE</SelectItem>
                    <SelectItem value="ib-diploma">IB Diploma</SelectItem>
                    <SelectItem value="edexcel-a-levels">Edexcel A Levels</SelectItem>
                    <SelectItem value="a-levels">A Levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Paper */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Paper</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select paper" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paper-1">Paper 1</SelectItem>
                    <SelectItem value="paper-2">Paper 2</SelectItem>
                    <SelectItem value="paper-3">Paper 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Variant */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Variant</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select variant" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Topics */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Topics</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select topics" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mechanics">Mechanics</SelectItem>
                    <SelectItem value="thermodynamics">Thermodynamics</SelectItem>
                    <SelectItem value="waves">Waves</SelectItem>
                    <SelectItem value="electricity">Electricity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Session */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Session</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select session" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may-june">May/June</SelectItem>
                    <SelectItem value="oct-nov">Oct/Nov</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Years */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Years</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select years" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Difficulty</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select difficulty" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium-easy">Medium-easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="medium-high">Medium-high</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="text-center mb-8">
              <Button variant="outline">Clear Filters</Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="min-w-[150px]">
                Create Test
              </Button>
              <Button variant="default" size="lg" className="min-w-[150px]">
                Get Questions
              </Button>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default PastPapers;