import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, Cpu } from 'lucide-react';

const OneToOneTutoring = () => {
  const tutoringPackages = [
    {
      icon: GraduationCap,
      title: 'Elevate your IGCSE grades!',
      description: 'Highest personal attention, One teacher One student',
      price: '₹ 2,500/hr',
      color: 'bg-primary',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Globe,
      title: 'Level up your IBDP game!',
      description: 'Individual Attention, Maximum Results! One teacher One student',
      price: '₹3,500/hr',
      color: 'bg-primary',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Users,
      title: 'Tailored AS-A Level learning that delivers!',
      description: 'Your path to Academic Excellence!',
      price: '₹ 3,200/hr',
      color: 'bg-primary',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Cpu,
      title: 'Structured IBMYP learning, exceptional outcomes!',
      description: 'From Good to Great: Improve your skills!',
      price: '₹ 2,700/hr',
      color: 'bg-primary',
      gradient: 'from-primary to-secondary'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">One-to-One</span> Tutoring
            </h2>
            <div className="relative">
              <p className="text-xl text-muted-foreground">
                Highest Personal Attention
              </p>
              <div className="absolute -bottom-1 left-0 w-48 h-1 bg-gradient-primary rounded-full"></div>
            </div>
          </div>
          
          {/* Illustration placeholder - matching the style from the image */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <div className="w-64 h-40 bg-gradient-card rounded-xl flex items-center justify-center border border-border">
              <div className="text-primary text-6xl">👨‍🏫👩‍🎓</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutoringPackages.map((pkg, index) => (
            <Card key={index} className="group hover:shadow-hero transition-all duration-300 hover:scale-105 border-border bg-card overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-lg ${pkg.color} text-white mr-4 flex-shrink-0`}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {pkg.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-4">
                    <span className="text-sm text-success font-medium mr-2">Starts At</span>
                    <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                  </div>
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg py-3 font-semibold`}
                  onClick={() => window.open('https://forms.gle/auuCTRddJVYH8i6W7', '_blank')}
                >
                  Find personal tutor →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneToOneTutoring;