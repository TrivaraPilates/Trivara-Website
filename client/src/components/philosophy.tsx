import { useFadeIn } from "../hooks/use-fade-in";

export default function Philosophy() {
  const contentRef = useFadeIn({ threshold: 0.2 });
  
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div 
          ref={contentRef.ref} 
          className={`fade-in-on-scroll ${contentRef.isVisible ? 'visible' : ''}`}
        >
          <div className="mb-8">
            <span className="text-6xl" style={{color: 'var(--peach)'}}>✨</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>
            Our Philosophy
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
          
          <p className="text-xl leading-relaxed mb-8" style={{color: 'var(--brand-665446)'}}>
            At Trivāra, we believe that true wellness comes from the harmony of body, mind, and spirit. Our approach to Pilates goes beyond physical exercise—it's a journey of self-discovery and transformation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--dark-brown)'}}>
                <span className="text-2xl" style={{color: 'var(--brand-f4efe9)'}}>🧘‍♀️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Mindful Movement</h3>
              <p className="text-sm" style={{color: 'var(--brand-665446)'}}>Every exercise is performed with intention and awareness</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--dark-brown)'}}>
                <span className="text-2xl" style={{color: 'var(--brand-f4efe9)'}}>💪</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Progressive Strength</h3>
              <p className="text-sm" style={{color: 'var(--brand-665446)'}}>Build sustainable strength from the inside out</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--dark-brown)'}}>
                <span className="text-2xl" style={{color: 'var(--brand-f4efe9)'}}>🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Holistic Growth</h3>
              <p className="text-sm" style={{color: 'var(--brand-665446)'}}>Nurture your entire being, not just your body</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}