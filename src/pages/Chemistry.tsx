import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const Chemistry = () => {
  // Form URLs for each year and exam period
  const formUrls = {
    2025: {
      'Feb-Mar 22': '', // Add your form URL here
      'May-June 21': '', // Add your form URL here
      'May-June 22': '', // Add your form URL here
      'May-June 23': '', // Add your form URL here
      'Oct-Nov 21': '', // Add your form URL here
      'Oct-Nov 22': '', // Add your form URL here
      'Oct-Nov 23': '', // Add your form URL here
    },
    2024: {
      'Feb-Mar 22': 'https://forms.gle/RB2XgEW4zdEmc4556', // Add your form URL here
      'May-June 21': 'https://forms.gle/W7sfXhr84dpkY6x18', // Add your form URL here
      'May-June 22': 'https://forms.gle/7VHKLMwx77x9gzqj9', // Add your form URL here
      'May-June 23': 'https://forms.gle/WAVMD75EPFoiK6QVA', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/ogmUAH1k5PnbG92c9', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/wqgACn81y3zD86yG6', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/LJL8pmVia3REv14m8', // Add your form URL here
    },
    2023: {
      'Feb-Mar 22': 'https://forms.gle/wci6uGCHwKpRLPkn8', // Add your form URL here
      'May-June 21': 'https://forms.gle/LTzfyw2bMFKuscRy6', // Add your form URL here
      'May-June 22': 'https://forms.gle/5XWDw3yKWH8gUFC36', // Add your form URL here
      'May-June 23': 'https://forms.gle/xxWkt47sGT5RizgJ7', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/fRH6M3DtWH8r1h5UA', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/5JmgWaa1dKWjgiUNA', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/fBaihDK6BWQskPHn8', // Add your form URL here
    },
    2022: {
      'Feb-Mar 22': 'https://forms.gle/SB1uiomt4YNK2HUM6', // Add your form URL here
      'May-June 21': 'https://forms.gle/s2oB8uJfXD6SEuu26', // Add your form URL here
      'May-June 22': 'https://forms.gle/ZeV8DfEuxKA8dQZUA', // Add your form URL here
      'May-June 23': 'https://forms.gle/vqEzX1dU1wHhPwPXA', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/WrKXZNTswgPXPgtB7', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/pkCmZMipBMMi85Tr9', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/4cxvaNa1jbNfonMF6', // Add your form URL here
    },
    2021: {
      'Feb-Mar 22': 'https://forms.gle/iFXZ5yfNMXKgcQ7e7', // Add your form URL here
      'May-June 21': 'https://forms.gle/2CVPg64dCzQoBJyH7', // Add your form URL here
      'May-June 22': 'https://forms.gle/ibnHoXjz4ykHetzJA', // Add your form URL here
      'May-June 23': 'https://forms.gle/iPKjj7UGqs5aDtUcA', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/fLVtH6sAoY93wV8A8', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/m58JDiY9wbbgms8c7', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/pJFwQmKpwJxmFQGx5', // Add your form URL here
    },
    2020: {
      'Feb-Mar 22': 'https://forms.gle/7iuJBxqhRKSm7X47A', // Add your form URL here
      'May-June 21': 'https://forms.gle/m6GreCWJGsA77Ktk7', // Add your form URL here
      'May-June 22': 'https://forms.gle/bdg9yg3nEf1WXHrw9', // Add your form URL here
      'May-June 23': 'https://forms.gle/9AvXRauCuMNsF97R8', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/cH88mYosEF25s5Ge6', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/qVrxknq6k23nhBJz5', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/2H4FcyKC867BL4fG9', // Add your form URL here
    },
    2019: {
      'Feb-Mar 22': 'https://forms.gle/MRXGdnedGmoLYQq18', // Add your form URL here
      'May-June 21': 'https://forms.gle/mAAmZPooaYucHMVK7', // Add your form URL here
      'May-June 22': 'https://forms.gle/NsEwDSrhfnnpHpgc6', // Add your form URL here
      'May-June 23': 'https://forms.gle/EkLvNihV1g3qQsBz6', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/VTbfPWhyJsvTkFet5', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/jxeRmTR7xaRqinMP6', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/5KLYqPCyU9bz47pKA', // Add your form URL here
    },
    2018: {
      'Feb-Mar 22': 'https://forms.gle/8WMonYJXpLrwqUU5A', // Add your form URL here
      'May-June 21': 'https://forms.gle/fnxDTrB81b5KaLU1A', // Add your form URL here
      'May-June 22': 'https://forms.gle/xfPRysWt8jTFGE6g6', // Add your form URL here
      'May-June 23': 'https://forms.gle/cgNyDqZJ2ziaUxok9', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/rirqedC1PweThBKP8', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/Ywk8nUFMsYnt7Meo7', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/JXZ9y2bRn27gt7CcA', // Add your form URL here
    },
    2017: {
      'Feb-Mar 22': 'https://forms.gle/o7XgBhq4eaqDfGTJA', // Add your form URL here
      'May-June 21': 'https://forms.gle/8c44Qc14jQwAsQ149', // Add your form URL here
      'May-June 22': 'https://forms.gle/9Wy2yfSKficv33KM6', // Add your form URL here
      'May-June 23': 'https://forms.gle/fBhgFQek5a6UeJPi8', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/yY558qxWasdvC45d6', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/E1SupEAbAtBkFaSN7', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/7S2w3rSKgnfSyZFV6', // Add your form URL here
    },
    2016: {
      'Feb-Mar 22': 'https://forms.gle/hMvMCBn9qhcZ7fVp9', // Add your form URL here
      'May-June 21': 'https://forms.gle/6HimqHt7Rp731CRC9', // Add your form URL here
      'May-June 22': 'https://forms.gle/scTMafJDeyygUMgj9', // Add your form URL here
      'May-June 23': 'https://forms.gle/9xj8zuybBC5RL1vE9', // Add your form URL here
      'Oct-Nov 21': 'https://forms.gle/YksiYQ37wj9PhWTY7', // Add your form URL here
      'Oct-Nov 22': 'https://forms.gle/NsFFbN6L3mjgToHV9', // Add your form URL here
      'Oct-Nov 23': 'https://forms.gle/uzmQVAJzY7UBAWHb7', // Add your form URL here
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
        <div className="absolute inset-0 bg-[url('/images/d9f0ec3f-7006-4a12-9aee-06383e66374f.png')] bg-cover bg-center opacity-10"></div>
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

export default Chemistry;
