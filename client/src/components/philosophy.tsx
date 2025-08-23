import { useFadeInOut } from "@/hooks/use-scroll-reveal";

export default function Philosophy() {
  const contentRef = useFadeInOut();
  
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-978170)'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={contentRef} className="fade-in-out backdrop-blur-sm p-12 shadow-lg" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
          <div className="mb-8">
            <span className="text-6xl" style={{color: 'var(--peach)'}}>✨</span>
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