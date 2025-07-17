import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Subjects from '@/components/Subjects';
import Testimonials from '@/components/Testimonials';
import Teachers from '@/components/Teachers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Subjects />
      <Testimonials />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
