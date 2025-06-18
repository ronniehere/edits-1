import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Viral Content", "Engaging Reels", "Brand Stories", "Social Growth"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '0.5s'
        }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated background elements */}
        <div className="mb-8 mt-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Professional Social Media Editing</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
          Create{' '}
          <span className="bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-scale-in">
            {texts[currentText]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
          Transform your raw footage into scroll-stopping content that drives engagement, builds your brand, and grows your audience across all platforms.
        </p>

        <div className="flex justify-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105" 
            onClick={() => scrollToSection('contact')}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Your Project
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-red-200">Videos Edited</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50M+</div>
            <div className="text-red-200">Views Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24hr</div>
            <div className="text-red-200">Turnaround Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
