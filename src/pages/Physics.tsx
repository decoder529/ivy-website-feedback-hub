import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const Physics = () => {
  // Form URLs for each year and exam period
  const formUrls = {
    2025: {
      'Feb-Mar 22': 'https://forms.gle/uNby3XpyX4PoR6648',
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2024: {
      'Feb-Mar 22': 'https://forms.gle/9V9rY2ELnbUmvCeW6', // Add your form URL here
      'May-June 21': 'https://forms.gle/3CW8Na28KEUwzC8c8', // Add your form URL here
      'May-June 22': 'https://forms.gle/ZonRuX5n7Km9jXQm9', // Add your form URL here
      'May-June 23': 'https://forms.gle/nwxatDWog1zs9y6AA', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/xe57PNeekvmEYUHZ9', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/wRHu4Fsa5a5XND449', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/odniz5jTkqB2Rgak9', // Add your form URL here
    },
    2023: {
      'Feb-Mar 22': 'https://forms.gle/VzSeJMSmva2QAseVA', // Add your form URL here
      'May-June 21': 'https://forms.gle/EDK2uZsC27joFDsB6', // Add your form URL here
      'May-June 22': 'https://forms.gle/xcH2zHXwhPYwBiXU9', // Add your form URL here
      'May-June 23': 'https://forms.gle/CxXRJfSmqqLWSJwz5', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/yXYV4AYUb6fJbtcF9', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/Pqs3vBUpcJacLDgC9', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/R3vDtLxEjjJ8TmpT9', // Add your form URL here
    },
    2022: {
      'Feb-Mar 22': 'https://forms.gle/kWsTEn9A44pLSYtw5', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2021: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2020: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2019: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2018: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2017: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2016: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    }
  };

  const handleFormClick = (year: number, period: string) => {
    console.log('Year:', year, 'Period:', period);
    const yearData = formUrls[year as keyof typeof formUrls];
    console.log('Year data:', yearData);
    const url = yearData?.[period as keyof typeof yearData];
    console.log('URL found:', url);
    if (url) {
      window.location.href = url;
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
          <div className="text-6xl mb-6">⚛️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Physics Test Series
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Master physics concepts with our comprehensive IGCSE practice tests
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

      {/* Years Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Past Papers by Year</h2>
          
          {/* Years Grid - 3 rows */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Row 1: 2025, 2024, 2023 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2025, 2024, 2023].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
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
                          className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
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
                  <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
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
                          className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
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
                  <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
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
                          className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
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

            {/* Row 3: 2016 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2016].map((year) => (
                <Card key={year} className="shadow-hero hover:scale-105 transition-smooth animate-fade-in">
                  <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
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
                          className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
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

export default Physics;