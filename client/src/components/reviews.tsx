import { useFadeIn } from '../hooks/use-fade-in';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const titleRef = useFadeIn();
  const [currentPair, setCurrentPair] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Jessica Martinez",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely love Trivāra! The instructors are knowledgeable and the studio has such a welcoming atmosphere. My Pilates practice has improved tremendously since joining."
    },
    {
      id: 2,
      name: "Robert Chen",
      rating: 5,
      date: "1 month ago", 
      review: "Best Pilates studio in the area! The classes are challenging but accessible, and the instructors really care about proper form. Highly recommend to anyone looking to improve their core strength."
    },
    {
      id: 3,
      name: "Amanda Thompson",
      rating: 5,
      date: "3 weeks ago",
      review: "I've been coming here for 6 months and it's been life-changing. The community is amazing and the instructors are so supportive. The facilities are clean and well-maintained."
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      date: "1 week ago",
      review: "Professional, friendly, and effective. The private sessions have helped me recover from back pain. Sarah is an incredible instructor who really knows her stuff!"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      date: "2 months ago",
      review: "Trivāra has exceeded all my expectations. The variety of classes keeps things interesting, and I've seen real results in my strength and flexibility. Worth every penny!"
    },
    {
      id: 6,
      name: "Michael Johnson",
      rating: 5,
      date: "1 week ago",
      review: "The reformer classes are incredible! The instructors provide excellent guidance and the equipment is top-notch. I've seen amazing improvements in my core strength."
    }
  ];

  // Group reviews into pairs
  const reviewPairs = [];
  for (let i = 0; i < reviews.length; i += 2) {
    reviewPairs.push(reviews.slice(i, i + 2));
  }

  // Auto-rotate reviews every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % reviewPairs.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [reviewPairs.length]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-10 h-10 ${star <= rating ? 'text-[#32180b]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-32" style={{backgroundColor: '#fff7f1'}}>
      <div className="relative z-10">

        {/* Rotating Reviews */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative">
            {reviewPairs.map((pair, pairIndex) => (
              <div 
                key={pairIndex}
                className={`flex flex-col md:flex-row gap-8 transition-opacity duration-600 ${
                  pairIndex === currentPair ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                {pair.map((review) => (
                  <div 
                    key={review.id}
                    className="flex-1 bg-white shadow-lg p-6"
                    style={{borderRadius: '8px'}}
                  >
                    {/* Stars at top left */}
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Header */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <h4 className="font-semibold" style={{color: '#32180b'}}>{review.name}</h4>
                        <span className="text-sm" style={{color: '#32180b'}}>{review.date}</span>
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-sm leading-relaxed" style={{color: '#32180b'}}>
                      "{review.review}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
