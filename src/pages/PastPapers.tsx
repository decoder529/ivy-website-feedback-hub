import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PastPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600">
      <Header />
      
      {/* Coming Soon Section */}
      <section className="flex items-center justify-center min-h-screen pt-16">
        <div className="text-center animate-fade-in">
          <div className="animate-pulse">
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 animate-scale-in hover:scale-110 transition-all duration-500">
              Coming Soon
            </h1>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
              IVYZone is under development
            </p>
          </div>
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="inline-block px-8 py-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <span className="text-white text-lg font-medium">✨ Premium content coming your way ✨</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastPapers;