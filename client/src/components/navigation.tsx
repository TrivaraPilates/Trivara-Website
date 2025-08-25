import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useFadeIn } from "../hooks/use-fade-in";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useFadeIn({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef.ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-[#f4efe9] border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className={`text-2xl font-bold transition-all duration-500 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`} style={{fontFamily: 'var(--font-serif)'}}>
                TRIVĀRA
              </div>
              <div className={`text-sm font-medium transition-all duration-500 ${
                isScrolled ? 'text-brand-665446' : 'text-white/90'
              }`}>
                PILATES
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#classes" 
              className={`text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              Classes
            </a>
            <a 
              href="#events" 
              className={`text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              Events
            </a>
            <a 
              href="#community" 
              className={`text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              Community
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          {isScrolled && (
            <div className="hidden md:block">
              <button 
                className="px-6 py-3 rounded-none font-semibold transition-all duration-300 transform hover:scale-105 bg-white text-dark-brown border-2 border-dark-brown hover:bg-dark-brown hover:text-brand-f4efe9 hover:border-brand-f4efe9 shadow-lg"
              >
                Book Your Class
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled ? 'text-dark-brown' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <a 
                href="#about" 
                className="block px-3 py-2 text-sm font-medium text-dark-brown hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#classes" 
                className="block px-3 py-2 text-sm font-medium text-dark-brown hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Classes
              </a>
              <a 
                href="#events" 
                className="block px-3 py-2 text-sm font-medium text-dark-brown hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Events
              </a>
              <a 
                href="#community" 
                className="block px-3 py-2 text-sm font-medium text-dark-brown hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Community
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-sm font-medium text-dark-brown hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              {isScrolled && (
                <div className="pt-2">
                  <button className="w-full px-3 py-2 bg-dark-brown text-white font-semibold rounded-md hover:bg-brand-665446 transition-colors">
                    Book Your Class
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
