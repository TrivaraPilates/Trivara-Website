import { Heart, HandHeart, Sprout } from "lucide-react";

export default function Community() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">Our Community</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Celebrating the beautiful diversity and strength of our Trivāra family
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Diverse group of women embracing after pilates class */}
            <img 
              src="/attached_assets/Photo 2025-08-03, 8 13 40 PM (1)_1755583307903.jpg" 
              alt="Diverse community of women supporting each other" 
              className="rounded-2xl shadow-lg w-full hover-lift" 
            />
          </div>
          
          <div>
            <blockquote className="text-2xl font-serif text-gray-700 italic mb-8 leading-relaxed">
              "At Trivāra, we don't just build stronger bodies—we build a stronger community. Every breath, every movement, every moment of growth is shared."
            </blockquote>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="text-coffee w-5 h-5" />
                <span className="text-gray-700">Inclusive and welcoming environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <HandHeart className="text-coffee w-5 h-5" />
                <span className="text-gray-700">Supportive community atmosphere</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sprout className="text-coffee w-5 h-5" />
                <span className="text-gray-700">Personal growth and transformation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
