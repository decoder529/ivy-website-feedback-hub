import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IBDPChemistry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[hsl(var(--subject-chemistry))]/10 via-background to-primary/5">
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--subject-chemistry))] to-primary mb-6 animate-scale-in">
              <span className="text-4xl">🧪</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-[hsl(var(--subject-chemistry))] to-primary bg-clip-text text-transparent">
                IBDP Chemistry Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Comprehensive resources for HL and SL students
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-[hsl(var(--subject-chemistry))]/20 shadow-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                {/* Animated Chemistry Diagram */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  {/* Central Beaker */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                      <Beaker className="h-32 w-32 text-[hsl(var(--subject-chemistry))] animate-pulse" />
                      {/* Bubbles Animation */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 space-y-2">
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--subject-chemistry))]/60 animate-[fade-in_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--subject-chemistry))]/60 animate-[fade-in_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--subject-chemistry))]/60 animate-[fade-in_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbiting Atoms */}
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[hsl(var(--subject-chemistry))] to-primary"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--subject-chemistry))]"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[hsl(var(--subject-chemistry))]/70 to-primary/70"></div>
                  </div>
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--subject-chemistry))] to-primary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Coming Soon
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  We're preparing comprehensive chapter-wise worksheets, MCQ practice papers, and revision notes for IBDP Chemistry.
                </p>

                <div className="pt-6 space-y-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-chemistry))] animate-pulse"></div>
                    <span>Detailed Solutions</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-chemistry))] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span>HL and SL Coverage</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-chemistry))] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span>Formula Sheets & Notes</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBDPChemistry;
