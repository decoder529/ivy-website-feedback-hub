import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

const WorksheetPhysics = () => {
  // Form URLs for each year and exam period
  const formUrls = {
    2025: {
      'Feb-Mar 22': 'https://forms.gle/uNby3XpyX4PoR6648',
      'May-June 21': '', 
      'May-June 22': '', 
      'May-June 23': '', 
      'Oct-Nov 21': '', 
      'Oct-Nov 22': '', 
      'Oct-Nov 23': '' 
    },
    2024: {
      'Feb-Mar 22': 'https://forms.gle/1d6ecL3T3viQ81Tp6', 
      'May-June 21': 'https://forms.gle/LctXASwXwrhHfGd77',
      'May-June 22': 'https://forms.gle/wKaK9hogi35UkbCr9', 
      'May-June 23': 'https://forms.gle/2JeZsT67s2hbMEEE6', 
      'Oct-Nov 21': 'https://forms.gle/ZUn1rY4ten41W9aT8', 
      'Oct-Nov 22': 'https://forms.gle/DeZmpaztHwnGr9Fd7', 
      'Oct-Nov 23': 'https://forms.gle/q26mQ6RTTgxLwxwGA'
    },
    2023: {
      'Feb-Mar 22': 'https://forms.gle/SjUjfFY1UoDcDLt48',
      'May-June 21': 'https://forms.gle/3dLTRQpywJpyjiEc7',
      'May-June 22': 'https://forms.gle/c29p3oa3AXyWTGCM7',
      'May-June 23': 'https://forms.gle/Ni5KTXpdqbQWaeW4A',
      'Oct-Nov 21': 'https://forms.gle/wFEoqwHXeV5aG5jg6',
      'Oct-Nov 22': 'https://forms.gle/eSbTpQbMMZmRcjdu8',
      'Oct-Nov 23': 'https://forms.gle/9oVEw6V8giz9wSPK6'
    },
    2022: {
      'Feb-Mar 22': 'https://forms.gle/vTbd6VqyJ97oEN1Y7',
      'May-June 21': 'https://forms.gle/oMnHxy4rxgHAEwWz7',
      'May-June 22': 'https://forms.gle/zKG625m8R6ZgbC19A',
      'May-June 23': 'https://forms.gle/ffGfRhoz6GkoMqrM7',
      'Oct-Nov 21': 'https://forms.gle/ChVVc8Y4B2SC6Gdk7',
      'Oct-Nov 22': 'https://forms.gle/dnjezpuN19hZUecVA',
      'Oct-Nov 23': 'https://forms.gle/s2EpuCW49WyJdG3U9'
    },
    2021: {
      'Feb-Mar 22': 'https://forms.gle/geMXsr4V6b2TnaRn9',
      'May-June 21': 'https://forms.gle/7TcAMNNPKNBGyB9i9',
      'May-June 22': 'https://forms.gle/QRjrUayzLSNgCSKu8',
      'May-June 23': 'https://forms.gle/47HVja6oFKi79w47A',
      'Oct-Nov 21': 'https://forms.gle/VDbiBY4n8YBPmViy8',
      'Oct-Nov 22': 'https://forms.gle/dFkWtrbAuUmvrye87',
      'Oct-Nov 23': 'https://forms.gle/N3dwumiobBD5AVkg7'
    },
    2020: {
      'Feb-Mar 22': 'https://forms.gle/otuudCqGrCMwwBZv8',
      'May-June 21': 'https://forms.gle/2HSdrBbXBUqWcKrA7',
      'May-June 22': 'https://forms.gle/uAb4AtymPLEqrMmp7',
      'May-June 23': 'https://forms.gle/xpX4TMnybFpz6VSE9',
      'Oct-Nov 21': 'https://forms.gle/FFGwdoaef3FQXntf6',
      'Oct-Nov 22': 'https://forms.gle/ZtWZYiRH96RuT3At7',
      'Oct-Nov 23': 'https://forms.gle/JrQXxnBKAyfLc6Qy8'
    },
    2019: {
      'Feb-Mar 22': 'https://forms.gle/CBUp4XFazMVrgkX3A',
      'May-June 21': 'https://forms.gle/dez218F8nSacsDhAA',
      'May-June 22': 'https://forms.gle/hKdzJ2DV5tL7bfER8',
      'May-June 23': 'https://forms.gle/bUYquDnx7EWMyMWV8',
      'Oct-Nov 21': 'https://forms.gle/qjaBKmrhxXXmgH468',
      'Oct-Nov 22': 'https://forms.gle/92qRUujXg7j4t8xr7',
      'Oct-Nov 23': 'https://forms.gle/h9yqTiMQrUPvcQQn6'
    },
    2018: {
      'Feb-Mar 22': 'https://forms.gle/Xi9JD1TPHyh3kUsz8',
      'May-June 21': 'https://forms.gle/ZuQMTTbagJWGoMFK7',
      'May-June 22': 'https://forms.gle/eBouTSpGpY2vMvaV9',
      'May-June 23': 'https://forms.gle/x7vcz1HKmGHvLZTZ6',
      'Oct-Nov 21': 'https://forms.gle/mho6HRwngbh59YBH6',
      'Oct-Nov 22': 'https://forms.gle/hd4twGFLwA9jVdNa8',
      'Oct-Nov 23': 'https://forms.gle/k4fqVu1mDnD4Q5ot7'
    },
    2017: {
      'Feb-Mar 22': 'https://forms.gle/QELyPQdUk14QznNc6',
      'May-June 21': 'https://forms.gle/WV9rRx3cJLNqLo4g6',
      'May-June 22': 'https://forms.gle/ReXeeLGAbKPRtqVe6',
      'May-June 23': 'https://forms.gle/cbaAQgP9HtsFFFXT6',
      'Oct-Nov 21': 'https://forms.gle/wMQT7fVjFwEy7HtAA',
      'Oct-Nov 22': 'https://forms.gle/59H1e4L29Nay8UHF7',
      'Oct-Nov 23': 'https://forms.gle/aunwbVDkLoFn1VAf6'
    },
    2016: {
      'Feb-Mar 22': 'https://forms.gle/5coL3ZrhxzHV3D2n6',
      'May-June 21': 'https://forms.gle/BguG4KYSAQkYkEaB8',
      'May-June 22': 'https://forms.gle/wC57GMBKWuLAMgZs5',
      'May-June 23': 'https://forms.gle/DRSyFdZecKygDeYU6',
      'Oct-Nov 21': 'https://forms.gle/CsRp8b5QcqokYqbN6',
      'Oct-Nov 22': 'https://forms.gle/YqDEXwtPAqmdzMw47',
      'Oct-Nov 23': 'https://forms.gle/nm6kD8EhiZj5976x7'
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
          <div className="text-6xl mb-6">⚛️</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Physics Worksheets
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Master physics concepts with our comprehensive IGCSE worksheets
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

            {/* Row 4: 2016 */}
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

export default WorksheetPhysics;