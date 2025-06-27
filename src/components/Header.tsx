
import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/abe-sshift/15-minute-meeting-for-edits', '_blank');
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            edits
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <button
              onClick={handleScheduleCall}
              className="bg-white border-2 border-red-500 text-red-600 px-6 py-2 rounded-full hover:bg-red-50 transition-all duration-200 flex items-center gap-2"
            >
              <Calendar size={16} />
              Schedule a call
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-left px-4"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/blog"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-left px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={handleScheduleCall}
                className="bg-white border-2 border-red-500 text-red-600 px-6 py-2 rounded-full mx-4 text-center hover:bg-red-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Schedule a call
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full mx-4 text-center hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
