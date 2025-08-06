import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const WorksheetChemistry = () => {
  // Form URLs for each year and exam period
  const formUrls = {
    2025: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2024: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2023: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2022: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2021: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2020: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2019: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2018: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2017: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    },
    2016: {
      'Feb-Mar 22': '',
      'May-June 21': '',
      'May-June 22': '',
      'May-June 23': '',
      'Oct-Nov 21': '',
      'Oct-Nov 22': '',
      'Oct-Nov 23': '',
    }
  };

  const handleFormClick = (year: number, period: string) => {
    const url = formUrls[year as keyof typeof formUrls]?.[period as keyof typeof formUrls[2025]];
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Form URL not available for this period yet.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d9f0ec3f-7006-4a12-9aee-06383e66374f.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="text-6xl mb-6">🧪</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Chemistry Worksheets
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Master chemistry concepts with our comprehensive IGCSE worksheets
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

      {/* Years Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Worksheets by Year</h2>
          
          {/* Years Grid - 3 rows */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Row 1: 2025, 2024, 2023 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2025, 2024, 2023].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <CardTitle className="text-2xl">{year}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Feb-Mar 22',
                        'May-June 21', 
                        'May-June 22',
                        'May-June 23',
                        'Oct-Nov 21',
                        'Oct-Nov 22',
                        'Oct-Nov 23'
                      ].map((period) => (
                        <Button 
                          key={period}
                          variant="outline" 
                          size="sm"
                          className="hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                          onClick={() => handleFormClick(year, period)}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Row 2: 2022, 2021, 2020 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2022, 2021, 2020].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <CardTitle className="text-2xl">{year}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Feb-Mar 22',
                        'May-June 21', 
                        'May-June 22',
                        'May-June 23',
                        'Oct-Nov 21',
                        'Oct-Nov 22',
                        'Oct-Nov 23'
                      ].map((period) => (
                        <Button 
                          key={period}
                          variant="outline" 
                          size="sm"
                          className="hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                          onClick={() => handleFormClick(year, period)}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Row 3: 2019, 2018, 2017 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2019, 2018, 2017].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <CardTitle className="text-2xl">{year}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Feb-Mar 22',
                        'May-June 21', 
                        'May-June 22',
                        'May-June 23',
                        'Oct-Nov 21',
                        'Oct-Nov 22',
                        'Oct-Nov 23'
                      ].map((period) => (
                        <Button 
                          key={period}
                          variant="outline" 
                          size="sm"
                          className="hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                          onClick={() => handleFormClick(year, period)}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Row 4: 2016 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2016].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <CardTitle className="text-2xl">{year}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Feb-Mar 22',
                        'May-June 21', 
                        'May-June 22',
                        'May-June 23',
                        'Oct-Nov 21',
                        'Oct-Nov 22',
                        'Oct-Nov 23'
                      ].map((period) => (
                        <Button 
                          key={period}
                          variant="outline" 
                          size="sm"
                          className="hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                          onClick={() => handleFormClick(year, period)}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>
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

export default WorksheetChemistry;