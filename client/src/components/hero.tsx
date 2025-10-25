import { useFadeIn } from "../hooks/use-fade-in";
import { useState, useEffect } from "react";

export default function Hero() {
  const titleRef = useFadeIn();
  const subtitleRef = useFadeIn({ threshold: 0.3 });
  const ctaRef = useFadeIn({ threshold: 0.5 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 50;
      console.log('Scroll position:', scrollTop, 'isScrolled:', scrolled);
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Pilates studio background" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} mb-4 relative transition-all duration-700 ease-out ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            opacity: isScrolled ? 0 : 1,
            pointerEvents: isScrolled ? 'none' : 'auto'
          }}
        >
          <img 
            src="/images/trivara-logo-full.png" 
            alt="Trivāra Pilates" 
            className="h-96 md:h-[28rem] lg:h-[36rem] xl:h-[40rem] 2xl:h-[48rem] w-auto mx-auto"
          />
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 transition-all duration-700 ease-out ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ 
              opacity: isScrolled ? 0 : 1,
              pointerEvents: isScrolled ? 'none' : 'auto'
            }}
          >
            <button 
              onClick={() => window.location.href = '/book-classes'}
              className="uiverse-button"
            >
              START MOVING WITH US
            </button>
          </div>
        </div>
        
        
        </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-0 animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l5 5 5-5" />
          </svg>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
