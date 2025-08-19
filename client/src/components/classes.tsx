import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Classes() {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "Booking System Coming Soon!",
      description: "We're finalizing our booking system. Join our Founder's List below for early access and special pricing!",
    });
  };

  return (
    <section id="classes" className="py-20 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">Our Classes</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the transformative power of Reformer Pilates through our carefully crafted class offerings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Reformer Pilates Group */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
            {/* Group reformer pilates class with diverse participants */}
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
              <Button onClick={handleBookNow} className="w-full brand-button rounded-full font-semibold">
                Book Now
              </Button>
            </div>
          </div>

          {/* Private Sessions */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
            {/* One-on-one private pilates session */}
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
              <Button onClick={handleBookNow} className="w-full brand-button rounded-full font-semibold">
                Book Now
              </Button>
            </div>
          </div>

          {/* Special Series */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
            {/* Workshop or special themed class setting */}
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
              <Button onClick={handleBookNow} className="w-full brand-button rounded-full font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
