import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Atom, TestTube, Dna, Calculator, Sparkles, CheckCircle, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TestSeriesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestSeriesPopup: React.FC<TestSeriesPopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showSparkles, setShowSparkles] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger sparkles animation
      const sparkleTimer = setTimeout(() => setShowSparkles(true), 800);
      const resultsTimer = setTimeout(() => setShowResults(true), 1200);
      
      return () => {
        clearTimeout(sparkleTimer);
        clearTimeout(resultsTimer);
      };
    } else {
      setShowSparkles(false);
      setShowResults(false);
    }
  }, [isOpen]);

  const handleStartTest = () => {
    navigate('/test-series');
    onClose();
  };

  const subjects = [
    { icon: Atom, name: 'Physics', color: 'text-blue-500' },
    { icon: TestTube, name: 'Chemistry', color: 'text-green-500' },
    { icon: Dna, name: 'Biology', color: 'text-purple-500' },
    { icon: Calculator, name: 'Math', color: 'text-orange-500' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gradient-to-br from-background via-background to-muted/30 border-2 border-primary/20 shadow-xl overflow-hidden animate-scale-in">
        {/* Close button */}
        <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 text-4xl">📚</div>
          <div className="absolute top-8 right-8 text-2xl">🎓</div>
          <div className="absolute bottom-4 left-8 text-3xl">📝</div>
          <div className="absolute bottom-8 right-4 text-2xl">⚗️</div>
        </div>

        <div className="relative p-8 pt-12">
          {/* Rocket emoji and headline */}
          <div className="text-center mb-6">
            <div className="text-4xl mb-3 animate-bounce">🚀</div>
            <h2 className="text-2xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Take the 2026 Board Challenge!
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Try Physics, Chemistry, Biology & Math Tests<br />
              <span className="font-medium">Based on Feb–Mar May–June Oct–Nov Past Papers</span>
            </p>
          </div>

          {/* Subject icons */}
          <div className="flex justify-center gap-3 mb-6">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className={`p-3 rounded-full bg-white/10 border border-white/20 transition-transform duration-300 hover:scale-110 ${subject.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <subject.icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Highlight section with sparkles */}
          <div className="relative bg-gradient-to-r from-success/10 to-primary/10 rounded-lg p-4 mb-6 border border-success/20">
            <div className="flex items-center justify-center gap-2 text-success font-semibold">
              <div className="relative">
                <span>✨ Instant Results, Real-Time Feedback!</span>
                {showSparkles && (
                  <>
                    <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                    <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </div>
            </div>
            
            {/* Animated result indicators */}
            {showResults && (
              <div className="flex justify-center gap-4 mt-3 animate-fade-in">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Accuracy</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <BarChart3 className="w-3 h-3 text-blue-500" />
                  <span>Progress</span>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleStartTest}
              className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Test Now
            </Button>
            
            <button
              onClick={onClose}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              Maybe later
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestSeriesPopup;