import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const WorksheetBiology = () => {
  // IGCSE Biology Chapters and their resources
  const chapters = [
    { name: "Characteristics and Classification", id: "characteristics-classification" },
    { name: "Organisation and Maintenance", id: "organisation-maintenance" },
    { name: "Movement In and Out of Cells", id: "movement-cells" },
    { name: "Biological Molecules", id: "biological-molecules" },
    { name: "Enzymes", id: "enzymes" },
    { name: "Plant Nutrition", id: "plant-nutrition" },
    { name: "Human Nutrition", id: "human-nutrition" },
    { name: "Transport in Plants", id: "transport-plants" },
    { name: "Transport in Animals", id: "transport-animals" },
    { name: "Diseases and Immunity", id: "diseases-immunity" },
    { name: "Gas Exchange", id: "gas-exchange" },
    { name: "Respiration", id: "respiration" },
    { name: "Excretion", id: "excretion" },
    { name: "Coordination and Response", id: "coordination-response" },
    { name: "Drugs", id: "drugs" },
    { name: "Reproduction", id: "reproduction" },
    { name: "Inheritance", id: "inheritance" },
    { name: "Variation and Selection", id: "variation-selection" },
    { name: "Organisms and Environment", id: "organisms-environment" },
    { name: "Biotechnology and Genetic Engineering", id: "biotechnology" },
    { name: "Human Influences on Ecosystems", id: "human-influences" }
  ];

  const handleResourceClick = (chapterName: string, resourceType: string) => {
    // For now, show an alert. In the future, these would link to specific resources
    alert(`${resourceType} for ${chapterName} - Coming Soon!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/d9f0ec3f-7006-4a12-9aee-06383e66374f.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="text-6xl mb-6">🧬</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Biology Worksheets
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Master biology concepts with our comprehensive IGCSE worksheets
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 animate-fade-in">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Detailed Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Curriculum Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Progressive Difficulty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Worksheets by Chapter</h2>
          
          {/* Chapters Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                <CardHeader className="text-center bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                  <CardTitle className="text-lg">{chapter.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Subtopic header */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Subtopic</h4>
                  </div>
                  
                  {/* Topics and buttons grid */}
                  <div className="space-y-3">
                    {/* Topic rows */}
                    {[1, 2, 3, 4].map((topicNum) => (
                      <div key={topicNum} className="border rounded-lg p-3 bg-card">
                        <div className="text-sm font-medium mb-2">Topic {topicNum}</div>
                        <div className="grid grid-cols-3 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                            onClick={() => handleResourceClick(chapter.name, `Topic ${topicNum} QP`)}
                          >
                            QP
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-600 hover:text-white hover:border-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                            onClick={() => handleResourceClick(chapter.name, `Topic ${topicNum} MS`)}
                          >
                            MS
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-orange-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                            onClick={() => handleResourceClick(chapter.name, `Topic ${topicNum} Practice`)}
                          >
                            Pract
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorksheetBiology;