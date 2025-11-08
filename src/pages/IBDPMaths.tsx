import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Sigma } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IBDPMaths = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[hsl(var(--subject-maths))]/10 via-background to-primary/5">
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--subject-maths))] to-primary mb-6 animate-scale-in">
              <span className="text-4xl">📐</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-[hsl(var(--subject-maths))] to-primary bg-clip-text text-transparent">
                IBDP Mathematics Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Analysis & Approaches (AA) and Applications & Interpretation (AI)
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-[hsl(var(--subject-maths))]/20 shadow-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                {/* Animated Math Diagram */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  {/* Central Math Symbol */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                      <Sigma className="h-32 w-32 text-[hsl(var(--subject-maths))] animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Geometric Shapes */}
                  <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[hsl(var(--subject-maths))]/60"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/60 rotate-45"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-[hsl(var(--subject-maths))]/50"></div>
                  </div>
                  
                  {/* Mathematical Symbols Floating */}
                  <div className="absolute top-12 left-6 text-2xl text-[hsl(var(--subject-maths))]/40 font-bold animate-[fade-in_3s_ease-in-out_infinite]">π</div>
                  <div className="absolute bottom-16 right-8 text-2xl text-primary/40 font-bold animate-[fade-in_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>∫</div>
                  <div className="absolute top-20 right-12 text-xl text-[hsl(var(--subject-maths))]/30 font-bold animate-[fade-in_3s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>∞</div>
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--subject-maths))] to-primary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Coming Soon
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  We're preparing comprehensive chapter-wise worksheets, MCQ practice papers, and revision notes for IBDP Mathematics (AA & AI).
                </p>

                <div className="pt-6 space-y-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-maths))] animate-pulse"></div>
                    <span>Step-by-Step Solutions</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-maths))] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span>AA & AI HL/SL Coverage</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--subject-maths))] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span>Formula Sheets & Practice</span>
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

export default IBDPMaths;
