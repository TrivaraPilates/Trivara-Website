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
    <section id="classes" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={revealRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">Our Classes</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the transformative power of Reformer Pilates through our carefully crafted class offerings
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous classes"
          >
            <ChevronLeft className="w-6 h-6 text-taupe" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next classes"
          >
            <ChevronRight className="w-6 h-6 text-taupe" />
          </button>

          {/* Horizontal scrolling classes */}
          <div 
            ref={scrollRef}
            className="classes-scroll flex gap-8 overflow-x-auto pb-4"
          >
            {/* Reformer Pilates Group */}
            <div className="classes-card bg-white overflow-hidden shadow-lg hover-lift w-80">
              <img 
                src="/images/community-front.jpg" 
                alt="Group Reformer Pilates class" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Reformer Pilates (Group)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Challenge yourself with dynamic, full-body movements using the Reformer. Build strength, improve flexibility, and feel balanced.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Private Sessions */}
            <div className="classes-card bg-white overflow-hidden shadow-lg hover-lift w-80">
              <img 
                src="/images/laptop-pilates.jpg" 
                alt="Private Reformer session with instructor" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Private Reformer Sessions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  One-on-one sessions tailored to your goals and pace. Perfect for beginners or those seeking focused guidance.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Special Series */}
            <div className="classes-card bg-white overflow-hidden shadow-lg hover-lift w-80">
              <img 
                src="/images/pilates-ring.png" 
                alt="Pilates ring equipment for strength and control training" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Special Series & Workshops</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seasonal or themed classes designed to inspire and energize. Explore new dimensions of your practice.
                </p>
                <Button onClick={handleBookNow} className="w-full brand-button font-semibold">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Video Showcase 1 */}
            <div className="classes-card bg-white overflow-hidden shadow-lg hover-lift w-80">
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
                <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Experience the Movement</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See the precision and flow of Reformer Pilates in action. Every movement is intentional, every breath purposeful.
                </p>
              </div>
            </div>

            {/* Video Showcase 2 */}
            <div className="classes-card bg-white overflow-hidden shadow-lg hover-lift w-80">
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
                <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Reformer Precision</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
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
