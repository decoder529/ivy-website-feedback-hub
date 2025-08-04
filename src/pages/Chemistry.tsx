import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const Chemistry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d9f0ec3f-7006-4a12-9aee-06383e66374f.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="text-6xl mb-6">🧪</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Chemistry Test Series
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Master chemistry concepts with our comprehensive IGCSE practice tests
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 animate-fade-in">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>90 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>40 Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>IGCSE Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto shadow-hero hover:scale-105 transition-smooth animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">IGCSE Chemistry Mock Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Test your understanding of organic chemistry, inorganic chemistry, and physical chemistry
              </p>
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-hero hover:scale-105 transition-smooth">
                Start Chemistry Test
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chemistry;