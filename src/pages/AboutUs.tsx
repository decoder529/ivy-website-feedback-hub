import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Heart, Globe, Star } from 'lucide-react';
import BookDemoForm from '@/components/BookDemoForm';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education, ensuring every student reaches their full potential."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our educators are passionate about teaching and genuinely care about each student's success."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve students worldwide, bringing quality education across geographical boundaries."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We continuously evolve our teaching methods to stay ahead in educational excellence."
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Taught Globally" },
    { number: "95%", label: "A*/A Grade Achievement Rate" },
    { number: "12+", label: "Years of Combined Experience" },
    { number: "3", label: "International Curricula" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                About IVYDon
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We are a premier online tutoring platform dedicated to delivering world-class education 
                for International Baccalaureate Diploma Programme (IBDP), Cambridge IGCSE AS-A Levels, 
                and Advanced Placement (AP) curricula. Our mission is to empower students globally with 
                personalized, high-quality education that transforms lives.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    IVYDon was founded with a simple yet powerful vision: to make premium 
                    education accessible to students around the world. We recognized that many talented 
                    students lacked access to expert educators who could guide them through rigorous 
                    international curricula.
                  </p>
                  <p>
                    Founded by Prof. Rahul Yadav and Mr. Deepak Yadav, our academy combines deep 
                    academic expertise with cutting-edge technology to deliver personalized learning 
                    experiences that adapt to each student's unique needs and learning style.
                  </p>
                  <p>
                    Today, we're proud to have helped over 500 students achieve their academic goals, 
                    with an impressive 95% A*/A grade achievement rate across all subjects we teach.
                  </p>
                </div>
              </div>
              <div className="lg:order-last">
                <Card className="p-8 bg-gradient-card shadow-card">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower every student with the knowledge, skills, and confidence needed 
                      to excel in their academic journey and beyond.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These fundamental principles guide everything we do at IVYDon
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">Numbers that speak for our commitment to excellence</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose IVYDon?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Educators</h3>
                <p className="text-muted-foreground">
                  Our team consists of highly qualified educators with extensive experience in 
                  international curricula and proven track records of student success.
                </p>
              </Card>

              <Card className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
                <p className="text-muted-foreground">
                  Every student receives a customized learning plan tailored to their strengths, 
                  weaknesses, and learning style for maximum effectiveness.
                </p>
              </Card>

              <Card className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Accessibility</h3>
                <p className="text-muted-foreground">
                  Learn from anywhere in the world with our online platform, connecting students 
                  with top educators regardless of geographical boundaries.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of students who have transformed their academic performance with IVYDon. 
                Book your free consultation today and discover how we can help you achieve excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookDemoForm trigger={
                  <Button variant="hero" size="lg">
                    Book Free Consultation
                  </Button>
                } />
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    window.location.href = '/#testimonials';
                  }}
                >
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;