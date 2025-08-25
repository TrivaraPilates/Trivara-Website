import { Heart, HandHeart, Sprout } from "lucide-react";
import { useFadeIn } from "../hooks/use-fade-in";

export default function Community() {
  const titleRef = useFadeIn();
  const contentRef = useFadeIn({ threshold: 0.2 });
  
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-16`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Our Community</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--brand-665446)'}}>
            Celebrating the beautiful diversity and strength of our Trivāra family
          </p>
        </div>
        
        <div 
          ref={contentRef.ref} 
          className={`fade-in-on-scroll ${contentRef.isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-12 items-center`}
        >
          <div className="space-y-6">
            {/* Diverse group of women embracing after pilates class */}
            <img 
              src="/images/community-front.jpg" 
              alt="Diverse community of women supporting each other" 
              className="shadow-lg w-full hover-lift" 
            />
            
            {/* Reformer movement video */}
            <div className="shadow-lg overflow-hidden hover-lift">
              <video 
                className="w-full h-48 object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/videos/reformer-movement.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
          <div>
            <blockquote className="text-2xl italic mb-8 leading-relaxed" style={{fontFamily: 'var(--font-serif)', color: 'var(--brand-665446)'}}>
              "At Trivāra, we don't just build stronger bodies—we build a stronger community. Every breath, every movement, every moment of growth is shared."
            </blockquote>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5" style={{color: 'var(--dark-brown)'}} />
                <span style={{color: 'var(--brand-665446)'}}>Inclusive and welcoming environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <HandHeart className="w-5 h-5" style={{color: 'var(--dark-brown)'}} />
                <span style={{color: 'var(--brand-665446)'}}>Supportive community atmosphere</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sprout className="w-5 h-5" style={{color: 'var(--dark-brown)'}} />
                <span style={{color: 'var(--brand-665446)'}}>Personal growth and transformation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
