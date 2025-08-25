import { useFadeIn } from "../hooks/use-fade-in";
import { useState, useEffect } from "react";

export default function Hero() {
  const titleRef = useFadeIn();
  const subtitleRef = useFadeIn({ threshold: 0.3 });
  const ctaRef = useFadeIn({ threshold: 0.5 });
  const [showHeroButton, setShowHeroButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Hide hero button after scrolling past 100px
      setShowHeroButton(scrollTop < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/pilates-workout.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <img 
            src="/images/joyful-stretch.jpg" 
            alt="Woman doing joyful pilates stretch" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} mb-8`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: 'var(--font-serif)'}}>
            Welcome to Trivāra
          </h1>
          <div className="w-32 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--peach)'}}></div>
        </div>
        
        <div 
          ref={subtitleRef.ref} 
          className={`fade-in-on-scroll ${subtitleRef.isVisible ? 'visible' : ''} mb-12`}
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Where strength meets serenity. Discover the transformative power of Reformer Pilates in our boutique Scarborough studio.
          </p>
        </div>
        
        <div 
          className={`space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center transition-all duration-500 ease-in-out ${
            showHeroButton ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
          }`}
        >
            <button className="px-8 py-4 bg-white text-dark-brown font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Class
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-dark-brown transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
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
