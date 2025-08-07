import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Curricula from '@/components/Curricula';
import Subjects from '@/components/Subjects';
import Testimonials from '@/components/Testimonials';
import Teachers from '@/components/Teachers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TestSeriesPopup from '@/components/TestSeriesPopup';
import { usePopupTimer } from '@/hooks/usePopupTimer';

const Index = () => {
  const { showPopup, closePopup } = usePopupTimer(3000); // Show popup after 3 seconds

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Curricula />
      <Subjects />
      <Testimonials />
      <Teachers />
      <Contact />
      <Footer />
      <TestSeriesPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Index;
