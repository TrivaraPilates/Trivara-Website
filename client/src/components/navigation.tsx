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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: isScrolled ? '#fff7f1' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24 pt-2">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center gap-16">
            <a 
              href="#pricing" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
            >
              Offerings
            </a>
            <a 
              href="#team" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
            >
              Team
            </a>
            <a 
              href="#community" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
            >
              Community
            </a>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/images/Trivara_logo.png" 
                alt="TRIVĀRA" 
                className="h-56 w-auto transition-all duration-300 -mt-2"
                onError={(e) => {
                  console.log('Logo image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </a>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex items-center gap-16">
            <a 
              href="#reviews" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
            >
              Our Story
            </a>
            <a 
              href="#wellness" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('wellness')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Journal
            </a>
            <a 
              href="#contact" 
              className={`text-lg font-serif font-medium transition-all duration-300 hover:opacity-80 tracking-wide ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled ? 'text-[#32180b]' : 'text-white'
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
                href="#pricing" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Offerings
              </a>
              <a 
                href="#team" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a 
                href="#community" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Community
              </a>
              <a 
                href="#reviews" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </a>
              <a 
                href="#wellness" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById('wellness')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Journal
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-sm font-medium text-[#32180b] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              {isScrolled && (
                <div className="pt-2">
                  <a href="/book-classes" className="w-full block text-center px-3 py-2 bg-[#32180b] text-white font-semibold rounded-md hover:bg-[#1a0f05] transition-colors">
                    BOOK NOW
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
