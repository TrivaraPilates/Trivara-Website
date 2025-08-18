import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-sand z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-taupe">
            TRIVĀRA
            <span className="text-sm font-sans font-normal text-coffee block -mt-1">PILATES</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="text-taupe hover:text-coffee transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#classes')} 
              className="text-taupe hover:text-coffee transition-colors duration-300 font-medium"
            >
              Classes
            </button>
            <button 
              onClick={() => handleNavClick('#events')} 
              className="text-taupe hover:text-coffee transition-colors duration-300 font-medium"
            >
              Special Events
            </button>
            <button 
              onClick={() => handleNavClick('#about')} 
              className="text-taupe hover:text-coffee transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('#contact')} 
              className="text-taupe hover:text-coffee transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-taupe"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sand">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('#home')} 
                className="text-taupe hover:text-coffee transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('#classes')} 
                className="text-taupe hover:text-coffee transition-colors duration-300 font-medium text-left"
              >
                Classes
              </button>
              <button 
                onClick={() => handleNavClick('#events')} 
                className="text-taupe hover:text-coffee transition-colors duration-300 font-medium text-left"
              >
                Special Events
              </button>
              <button 
                onClick={() => handleNavClick('#about')} 
                className="text-taupe hover:text-coffee transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('#contact')} 
                className="text-taupe hover:text-coffee transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
