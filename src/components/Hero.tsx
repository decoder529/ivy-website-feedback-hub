import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, BookOpen } from 'lucide-react';
import BookDemoForm from './BookDemoForm';

const Hero = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Students Taught' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: BookOpen, value: '3', label: 'Curricula' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ];

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Trusted by 1000+ Students Globally
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elite <span className="text-yellow-300">IBDP, IGCSE AS-A Level & AP</span> Tutoring
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Expert tutoring for International Baccalaureate Diploma Programme (IBDP), 
              Cambridge IGCSE AS-A Levels, and Advanced Placement (AP) curricula. 
              Personalized education for global academic excellence.
            </p>

            <div className="flex justify-center mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://forms.gle/Hu7QD3j88U5Eza2a8', '_blank')}
              >
                Book Free Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3 backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/d9f0ec3f-7006-4a12-9aee-06383e66374f.png" 
                  alt="Students learning together - Your Success Starts Here"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Student Name and School */}
              <div className="text-center mt-4"> 
                <div className="absolute -bottom-6 right-6">
                  <p className="text-white font-semibold text-lg">Ishnavi Mahesh</p>
                  <p className="text-white/80 text-sm">Don Bosco International School, Matunga</p>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-hero">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Country Topper Achievement</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-hero">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">AS-Level Physics, 2023</div>
                  <div className="text-xs text-muted-foreground">Average Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;