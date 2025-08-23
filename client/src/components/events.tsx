import { Star, Users, Leaf } from "lucide-react";
import { useFadeInOut, useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Events() {
  const titleRef = useFadeInOut();
  const cardsRef = useScrollReveal();
  
  return (
    <section id="events" className="py-20" style={{backgroundColor: 'var(--brand-e1d4c5)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-in-out text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>What's Coming Up</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
        </div>

        <div ref={cardsRef} className="scroll-reveal grid md:grid-cols-3 gap-8">
          <div className="p-8 shadow-lg text-center hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: 'var(--dark-brown)'}}>
              <Star className="text-2xl w-8 h-8" style={{color: 'var(--brand-f4efe9)'}} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Grand Opening Specials</h3>
            <p className="leading-relaxed" style={{color: 'var(--brand-665446)'}}>
              Founder's List early pricing & first-access bookings. Be among the first to experience Trivāra.
            </p>
          </div>

          <div className="p-8 shadow-lg text-center hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: 'var(--dark-brown)'}}>
              <Users className="text-2xl w-8 h-8" style={{color: 'var(--brand-f4efe9)'}} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Community Classes</h3>
            <p className="leading-relaxed" style={{color: 'var(--brand-665446)'}}>
              Bring a friend and experience Pilates together. Strengthen bonds while strengthening your body.
            </p>
          </div>

          <div className="p-8 shadow-lg text-center hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: 'var(--dark-brown)'}}>
              <Leaf className="text-2xl w-8 h-8" style={{color: 'var(--brand-f4efe9)'}} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Seasonal Workshops</h3>
            <p className="leading-relaxed" style={{color: 'var(--brand-665446)'}}>
              Mindfulness, movement, and balance beyond the Reformer. Explore holistic wellness practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
