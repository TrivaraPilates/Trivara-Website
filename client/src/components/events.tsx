import { Star, Users, Leaf } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-20 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">What's Coming Up</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-white text-2xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-taupe mb-4">Grand Opening Specials</h3>
            <p className="text-gray-600 leading-relaxed">
              Founder's List early pricing & first-access bookings. Be among the first to experience Trivāra.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white text-2xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-taupe mb-4">Community Classes</h3>
            <p className="text-gray-600 leading-relaxed">
              Bring a friend and experience Pilates together. Strengthen bonds while strengthening your body.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
            <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-white text-2xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-taupe mb-4">Seasonal Workshops</h3>
            <p className="text-gray-600 leading-relaxed">
              Mindfulness, movement, and balance beyond the Reformer. Explore holistic wellness practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
