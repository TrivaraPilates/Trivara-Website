import { useFadeInOut } from "@/hooks/use-scroll-reveal";

export default function Philosophy() {
  const philosophyRef = useFadeInOut();
  
  return (
    <section className="py-20" style={{background: 'linear-gradient(to right, rgba(101, 84, 70, 0.05), rgba(101, 84, 70, 0.1))', backgroundColor: 'var(--brand-e1d4c5)'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={philosophyRef} className="fade-in-out backdrop-blur-sm p-12 shadow-lg" style={{backgroundColor: 'rgba(244, 239, 233, 0.9)'}}>
          <div className="mb-8">
            <span className="text-6xl">✨</span>
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-medium leading-relaxed mb-6" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>
            "Strength in stillness, power in flow."
          </blockquote>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{color: 'var(--brand-665446)'}}>
            Pilates isn't just about movement, it's about mindful control, strength, and alignment. 
            This is where transformation begins.
          </p>
        </div>
      </div>
    </section>
  );
}