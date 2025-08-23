import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import MomenceModal, { useMomenceModal } from "./momence-modal";

export default function Classes() {
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal();
  const { isOpen, openModal, closeModal } = useMomenceModal();

  const handleBookNow = () => {
    openModal();
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="classes" className="py-20" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={revealRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Our Classes</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
          <p className="text-xl max-w-2xl mx-auto font-bodoni" style={{color: 'var(--brand-665446)'}}>
            Discover the transformative power of Reformer Pilates through our carefully crafted class offerings
          </p>
        </div>

        <div className="classes-container">
          {/* Auto-rotating carousel */}
          <div className="classes-scroll">
            {/* Reformer Pilates Group */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/community-front.jpg" 
                alt="Group Reformer Pilates class" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Reformer Pilates (Group)</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Challenge yourself with dynamic, full-body movements using the Reformer. Build strength, improve flexibility, and feel balanced.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Private Sessions */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/laptop-pilates.jpg" 
                alt="Private Reformer session with instructor" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Private Reformer Sessions</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  One-on-one sessions tailored to your goals and pace. Perfect for beginners or those seeking focused guidance.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Special Series */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/pilates-ring.png" 
                alt="Pilates ring equipment for strength and control training" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Special Series & Workshops</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Seasonal or themed classes designed to inspire and energize. Explore new dimensions of your practice.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Video Showcase 1 */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <video 
                className="w-full h-48 object-cover"
                muted 
                loop 
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src="/videos/pilates-workout.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Experience the Movement</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  See the precision and flow of Reformer Pilates in action. Every movement is intentional, every breath purposeful.
                </p>
              </div>
            </div>

            {/* Video Showcase 2 */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <video 
                className="w-full h-48 object-cover"
                muted 
                loop 
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src="/videos/reformer-movement.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Reformer Precision</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Watch the elegant control and strength required for Reformer work. This is where transformation begins.
                </p>
              </div>
            </div>

            {/* Duplicate cards for seamless scroll */}
            {/* Reformer Pilates Group - Duplicate */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/community-front.jpg" 
                alt="Group Reformer Pilates class" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Reformer Pilates (Group)</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Challenge yourself with dynamic, full-body movements using the Reformer. Build strength, improve flexibility, and feel balanced.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Private Sessions - Duplicate */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/laptop-pilates.jpg" 
                alt="Private Reformer session with instructor" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Private Reformer Sessions</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  One-on-one sessions tailored to your goals and pace. Perfect for beginners or those seeking focused guidance.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Special Series - Duplicate */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <img 
                src="/images/pilates-ring.png" 
                alt="Pilates ring equipment for strength and control training" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Special Series & Workshops</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Seasonal or themed classes designed to inspire and energize. Explore new dimensions of your practice.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Video Showcase 1 - Duplicate */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <video 
                className="w-full h-48 object-cover"
                muted 
                loop 
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src="/videos/pilates-workout.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Experience the Movement</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  See the precision and flow of Reformer Pilates in action. Every movement is intentional, every breath purposeful.
                </p>
              </div>
            </div>

            {/* Video Showcase 2 - Duplicate */}
            <div className="classes-card overflow-hidden shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
              <video 
                className="w-full h-48 object-cover"
                muted 
                loop 
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src="/videos/reformer-movement.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Reformer Precision</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                  Watch the elegant control and strength required for Reformer work. This is where transformation begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MomenceModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
