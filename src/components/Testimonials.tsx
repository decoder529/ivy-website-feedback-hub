import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Trophy, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      name: 'Ishanvi Mahesh',
      achievement: 'Country Topper',
      subject: 'Physics',
      school: 'Don Bosco International Mumbai',
      period: 'Nov 2023',
      Board: 'AS Level',
      quote: 'The personalized approach and expert guidance helped me achieve the country topper position. The tutors understood my learning style perfectly.',
      rating: 5,
      image: '/images/'
    },
    {
      name: 'Manas',
      achievement: 'Perfect Score',
      subject: 'IBMYP4 Physics',
      school: 'Edubridge International School, Mumbai',
      period: 'May 2024',
      quote: 'Thanks to IVYDON i achieved a perfect 7/7 score in MYP 4 Physics. PROF, Rahul Yadav was the core to my success and without him this transformation would not be possible. IVYDON has been the backbone to my academic success, i can not be more thankful.',
      rating: 5,
      image: '/images/77cfd222-b743-4e15-947f-8bba9964615f.png'
    },
    {
      name: 'Aadit',
      achievement: 'Outstanding Student Of the Year Award',
      subject: 'IBDP Physics',
      school: 'Jumeira Baccalaureate IB School',
      period: 'June 2025',
      quote: 'It would be a crime to post this award without credits to my favourite teacher, PROF. RAHUL YADAV, who was the reason I was able to understand every physics concept and tackle even the most difficult of questions',
      rating: 5,
      image: '/images/033f1c15-8481-48b4-a5a6-5e905563c4a3.png'
    },
    {
      name: 'Akshat',
      achievement: '7/7 Score',
      subject: 'IBDP Physics HL',
      school: 'Oberai International School',
      period: 'May 2025',
      quote: 'Studying DP Physics with you was one of the best parts of my IB journey. After learning from you for 2 years, the way you contruct explanations concisely and clearly truly exemplifiy your experience in the field—especially during tricky topics like rigid body mechanics, special relativity, and current and circuits. The constant support and structured resources really helped me stay on track (especially savemyexams). Thanks to your teaching, and of course the resources you provided, I scored a 7 in Physics with a 71/100, well above the grade boundary. I would definitely recommend your classes to any serious IB student. I truly dont think i would have achieved a 7 without your help!',
      rating: 5,
      image: '/images/6fa76825-e39c-4193-9940-68c1f33fe12a.png'
    },
    {
      name: 'Arnav',
      achievement: '7/7 Score',
      subject: 'IBDP Physics SL',
      school: 'Oberai International School',
      period: 'May 2025',
      quote: 'The expert guidance helped me master Physics SL completely. The teaching methodology is exceptional and results-oriented.',
      rating: 5,
      image: '/images/b176f57d-47ca-4640-8789-e791a9ec8276.png'
    },
    {
      name: 'Vrisha',
      achievement: 'A*',
      subject: 'IGCSE GRADE 10',
      school: 'Singapur International School',
      period: 'May 2025',
      quote: 'hi sir i just wanted to thank you for all the help throughout the year, i coudnt have gotten that A* without you',
      rating: 5,
      image: '/images/'
    },
    {
      name: 'Tushita',
      achievement: 'A',
      subject: 'IGCSE GRADE 10',
      school: 'Singapur International School',
      period: 'May 2025',
      quote: 'Rahul Sir truly transformed my journey in physics. I went from struggling with D’s and C’s to achieving an A (87%). His teaching style is not only motivating but also makes learning fun. I’ve gone from dreading physics to genuinely enjoying it. I’m incredibly grateful for his constant support and guidance. Thank you so much, Sir!',
      rating: 5,
      image: '/lovable-uploads/32f418d5-6e76-4e74-96dd-46437c602874.png'
    },
    {
      name: 'Akangsha',
      achievement: 'A',
      subject: 'IBDP Physics',
      school: 'Nahar International School',
      period: 'May 2025',
      quote: 'Dear sir I just wanted to say that every student deserves a rahul sir in their life. Someone to guide them, support them and build them up even when they are falling. Your optimism is a true gift sir and I hope you carry it with you for all your future endeavours. Thank you so much for always having faith and confidence in my abilities over the last two years, even when I have sometimes not given you the reason to. The last two years have been let’s just say a complicated journey but to have you to navigate me and support me through it all makes me truly grateful. Please stay in touch sir, because your days of giving me advice are not over yet :)) it’s just the beginning. Alas, I just wanted to say, (stands on a chair for dramatic impact) “Oh captain, my captain”,PS: could you please watch the movie Love you so much sir (you know I’m writer so couldn’t help myself)',
      rating: 5,
      image: '/images/'
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students consistently achieve top grades and secure places at world's best universities
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="bg-gradient-primary border-0 shadow-hero max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center text-white">
              <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Grade D To A </h3>
              <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                "Rahul Sir truly transformed my journey in physics. I went from struggling with D’s and C’s to achieving an A (87%). His teaching style is not only motivating but also makes learning fun. I’ve gone from dreading physics to genuinely enjoying it. I’m incredibly grateful for his constant support and guidance. Thank you so much, Sir!🤍"
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-24 h-32 rounded-lg overflow-hidden border-2 border-white/20">
                  <img 
                    src="/lovable-uploads/32f418d5-6e76-4e74-96dd-46437c602874.png" 
                    alt="Tushita"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const fallback = img.parentElement?.querySelector('.fallback-avatar') as HTMLElement;
                      img.style.display = 'none';
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-avatar w-full h-full bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-2xl" style={{display: 'none'}}>
                    T
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Tushita</div>
                  <div className="text-white/80">IGCSE 10 </div>
                  <div className="text-white/60 text-sm">Singapore International School 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Testimonials Carousel */}
        <div className="relative">
          <Carousel 
            className="w-full" 
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.slice(1).map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setIsPaused(!isPaused)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-muted-foreground italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.currentTarget;
                              const fallback = img.parentElement?.querySelector('.fallback-avatar') as HTMLElement;
                              img.style.display = 'none';
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="fallback-avatar w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold" style={{display: 'none'}}>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-success font-medium">{testimonial.achievement}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.subject}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Mobile scroll hint */}
          <div className="text-center mt-4 md:hidden">
            <p className="text-sm text-muted-foreground">Swipe to see more testimonials</p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">A*/A Grades</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Country Toppers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">University Acceptance</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
