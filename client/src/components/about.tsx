import { Dumbbell, Brain, Heart } from "lucide-react";
import { useFadeIn } from "../hooks/use-fade-in";

export default function About() {
  const titleRef = useFadeIn();
  const contentRef = useFadeIn({ threshold: 0.2 });
  const pillarsRef = useFadeIn({ threshold: 0.3 });

  return (
    <section id="about" className="py-20" style={{backgroundColor: 'var(--peach)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-16`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>What is Trivāra?</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
        </div>
        
        <div 
          ref={contentRef.ref} 
          className={`fade-in-on-scroll ${contentRef.isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-16 items-center`}
        >
          <div>
            {/* Sanskrit pronunciation and meaning visual */}
            <div className="p-8 shadow-lg mb-8 hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/trivara-meaning.png"
                alt="Trivāra Sanskrit meaning - strength of body, clarity of mind, peace of soul" 
                className="w-full mb-4"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{color: 'var(--brand-665446)'}}>
              We are a boutique Reformer Pilates studio in Scarborough, built for community, inclusivity, and transformation. Whether you're brand new or experienced, Trivāra is your space to move, breathe, and grow.
            </p>
            
            {/* Three pillars */}
            <div 
              ref={pillarsRef.ref} 
              className={`fade-in-on-scroll ${pillarsRef.isVisible ? 'visible' : ''} grid grid-cols-1 gap-6 mt-12`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}>
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Strength of Body</h4>
                  <p style={{color: 'var(--brand-665446)'}}>Build physical resilience and power</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}>
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Clarity of Mind</h4>
                  <p style={{color: 'var(--brand-665446)'}}>Cultivate focus and mental wellbeing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}>
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Peace of Soul</h4>
                  <p style={{color: 'var(--brand-665446)'}}>Find inner balance and tranquility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
