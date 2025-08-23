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
    <nav className="fixed top-0 w-full backdrop-blur-sm border-b z-40" style={{backgroundColor: 'rgba(244, 239, 233, 0.95)', borderBottomColor: 'var(--brand-e1d4c5)'}}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>
            TRIVĀRA
            <span className="text-sm font-normal block -mt-1 font-barlow" style={{color: 'var(--brand-665446)'}}>PILATES</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="transition-colors duration-300 font-medium" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#classes')} 
              className="transition-colors duration-300 font-medium" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              Classes
            </button>
            <button 
              onClick={() => handleNavClick('#events')} 
              className="transition-colors duration-300 font-medium" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              Special Events
            </button>
            <button 
              onClick={() => handleNavClick('#about')} 
              className="transition-colors duration-300 font-medium" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('#contact')} 
              className="transition-colors duration-300 font-medium" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden" style={{color: 'var(--dark-brown)'}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t" style={{borderTopColor: 'var(--brand-e1d4c5)'}}>
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('#home')} 
                className="transition-colors duration-300 font-medium text-left" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('#classes')} 
                className="transition-colors duration-300 font-medium text-left" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
              >
                Classes
              </button>
              <button 
                onClick={() => handleNavClick('#events')} 
                className="transition-colors duration-300 font-medium text-left" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
              >
                Special Events
              </button>
              <button 
                onClick={() => handleNavClick('#about')} 
                className="transition-colors duration-300 font-medium text-left" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('#contact')} 
                className="transition-colors duration-300 font-medium text-left" style={{color: 'var(--dark-brown)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
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
