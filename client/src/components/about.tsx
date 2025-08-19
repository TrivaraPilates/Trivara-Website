import { Dumbbell, Brain, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">What is Trivāra?</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Sanskrit pronunciation and meaning visual */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 hover-lift">
              <img 
                src="/images/trivara-meaning.png"
                alt="Trivāra Sanskrit meaning - strength of body, clarity of mind, peace of soul" 
                className="w-full rounded-xl mb-4"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a boutique Reformer Pilates studio in Scarborough, built for community, inclusivity, and transformation. Whether you're brand new or experienced, Trivāra is your space to move, breathe, and grow.
            </p>
            
            {/* Three pillars */}
            <div className="grid grid-cols-1 gap-6 mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                  <Dumbbell className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-taupe">Strength of Body</h4>
                  <p className="text-gray-600">Build physical resilience and power</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                  <Brain className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-taupe">Clarity of Mind</h4>
                  <p className="text-gray-600">Cultivate focus and mental wellbeing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-taupe">Peace of Soul</h4>
                  <p className="text-gray-600">Find inner balance and tranquility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
