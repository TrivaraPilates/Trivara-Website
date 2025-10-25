import { useState, useRef } from 'react';
import { useFadeIn } from '../hooks/use-fade-in';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Instructors = () => {
  const titleRef = useFadeIn();
  const [hoveredInstructor, setHoveredInstructor] = useState<number | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      let newScroll;
      if (direction === 'left') {
        newScroll = Math.max(0, currentScroll - scrollAmount);
      } else {
        newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      }
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      displayName: "Sarah J.",
      title: "Lead Pilates Instructor",
      photo: "/images/joyful-stretch.jpg",
      video: "/videos/pilates-workout.mp4",
      bio: "Sarah has been teaching Pilates for over 10 years and specializes in rehabilitation and core strengthening. She brings a holistic approach to wellness.",
      classes: ["Mat Pilates", "Reformer", "Private Sessions"]
    },
    {
      id: 2,
      name: "Michael Chen",
      displayName: "Michael C.",
      title: "Senior Instructor",
      photo: "/images/laptop-pilates.jpg", 
      video: "/videos/reformer-movement.mp4",
      bio: "Michael combines traditional Pilates with modern movement science. His dynamic classes challenge both body and mind.",
      classes: ["Power Pilates", "Barre Fusion", "Group Classes"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      displayName: "Emma R.",
      title: "Instructor & Wellness Coach",
      photo: "/images/community-front.jpg",
      video: "/videos/pilates-workout.mp4", 
      bio: "Emma focuses on mindful movement and breath work. She helps clients connect with their bodies through intentional practice.",
      classes: ["Mindful Pilates", "Breath Work", "Yoga Fusion"]
    },
    {
      id: 4,
      name: "David Thompson",
      displayName: "David T.",
      title: "Master Instructor",
      photo: "/images/community-back.jpg",
      video: "/videos/reformer-movement.mp4",
      bio: "David brings 15 years of experience and is certified in multiple Pilates methods. He specializes in advanced techniques and injury prevention.",
      classes: ["Advanced Pilates", "Injury Prevention", "Teacher Training"]
    }
  ];

  return (
    <>
      <section id="team" className="py-32" style={{backgroundColor: '#fff7f1'}}>
        <div className="relative z-10">
          {/* Header */}
          <div 
            ref={titleRef.ref} 
            className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-16`}
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
              Meet Our Instructors
            </h2>
          </div>

          {/* Instructors Carousel */}
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="instructors-container">
              {/* Quarter-circle overlay masks at top corners */}

              {/* Navigation arrows */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                style={{color: '#32180b', zIndex: 15}}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                style={{color: '#32180b', zIndex: 15}}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Carousel */}
              <div ref={scrollRef} className="instructors-scroll">
                {instructors.map((instructor, index) => (
                  <div 
                    key={instructor.id}
                    className="instructors-card relative group cursor-pointer overflow-hidden"
                    style={{backgroundColor: '#fff7f1'}}
                  >
                    {/* Instructor Photo/Video */}
                    <div 
                      className="relative h-80 overflow-hidden rounded-t-md"
                      onMouseEnter={() => setHoveredInstructor(instructor.id)}
                      onMouseLeave={() => setHoveredInstructor(null)}
                    >
                      {/* Static Image */}
                      <img 
                        src={instructor.photo} 
                        alt={instructor.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      
                      {/* Video */}
                      <video 
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-100' : 'opacity-0'
                        }`}
                        muted 
                        loop 
                        playsInline
                        ref={(el) => {
                          if (el) {
                            if (hoveredInstructor === instructor.id) {
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          }
                        }}
                      >
                        <source src={instructor.video} type="video/mp4" />
                      </video>
                    </div>

                    <div 
                      className="px-6 pt-6 pb-3 text-center"
                      onMouseEnter={() => setHoveredInstructor(instructor.id)}
                      onMouseLeave={() => setHoveredInstructor(null)}
                    >
                      <button 
                        className="block text-center px-3 py-2 bg-[#32180b] text-white font-semibold hover:bg-[#1a0f05] transition-colors mx-auto transform -translate-y-10 relative z-20"
                        style={{ borderRadius: '6px', width: '120px' }}
                        onClick={() => setSelectedInstructor(instructor)}
                      >
                        {instructor.displayName}
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate instructors for infinite scroll */}
                {instructors.map((instructor, index) => (
                  <div 
                    key={`duplicate-${instructor.id}`}
                    className="instructors-card relative group cursor-pointer overflow-hidden"
                    style={{backgroundColor: '#fff7f1'}}
                    onMouseEnter={() => setHoveredInstructor(instructor.id)}
                    onMouseLeave={() => setHoveredInstructor(null)}
                  >
                    {/* Instructor Photo/Video */}
                    <div className="relative h-80 overflow-hidden rounded-t-md">
                      {/* Static Image */}
                      <img 
                        src={instructor.photo} 
                        alt={instructor.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      
                      {/* Video */}
                      <video 
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-100' : 'opacity-0'
                        }`}
                        muted 
                        loop 
                        playsInline
                        ref={(el) => {
                          if (el) {
                            if (hoveredInstructor === instructor.id) {
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          }
                        }}
                      >
                        <source src={instructor.video} type="video/mp4" />
                      </video>
                    </div>

                    <div 
                      className="px-6 pt-6 pb-3 text-center"
                      onMouseEnter={() => setHoveredInstructor(instructor.id)}
                      onMouseLeave={() => setHoveredInstructor(null)}
                    >
                      <button 
                        className="block text-center px-3 py-2 bg-[#32180b] text-white font-semibold hover:bg-[#1a0f05] transition-colors mx-auto transform -translate-y-10 relative z-20"
                        style={{ borderRadius: '6px', width: '120px' }}
                        onClick={() => setSelectedInstructor(instructor)}
                      >
                        {instructor.displayName}
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate instructors for infinite scroll */}
                {instructors.map((instructor, index) => (
                  <div 
                    key={`duplicate-${instructor.id}`}
                    className="instructors-card relative group cursor-pointer overflow-hidden"
                    style={{backgroundColor: '#fff7f1'}}
                    onMouseEnter={() => setHoveredInstructor(instructor.id)}
                    onMouseLeave={() => setHoveredInstructor(null)}
                  >
                    {/* Instructor Photo/Video */}
                    <div className="relative h-80 overflow-hidden rounded-t-md">
                      {/* Static Image */}
                      <img 
                        src={instructor.photo} 
                        alt={instructor.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      
                      {/* Video */}
                      <video 
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                          hoveredInstructor === instructor.id ? 'opacity-100' : 'opacity-0'
                        }`}
                        muted 
                        loop 
                        playsInline
                        ref={(el) => {
                          if (el) {
                            if (hoveredInstructor === instructor.id) {
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          }
                        }}
                      >
                        <source src={instructor.video} type="video/mp4" />
                      </video>
                    </div>

                    <div 
                      className="px-6 pt-6 pb-3 text-center"
                      onMouseEnter={() => setHoveredInstructor(instructor.id)}
                      onMouseLeave={() => setHoveredInstructor(null)}
                    >
                      <button 
                        className="block text-center px-3 py-2 bg-[#32180b] text-white font-semibold hover:bg-[#1a0f05] transition-colors mx-auto transform -translate-y-10 relative z-20"
                        style={{ borderRadius: '6px', width: '120px' }}
                        onClick={() => setSelectedInstructor(instructor)}
                      >
                        {instructor.displayName}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedInstructor && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{backgroundColor: 'rgba(32, 16, 8, 0.76)'}}
          onClick={() => setSelectedInstructor(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalIn 0.3s ease-out forwards'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedInstructor(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              style={{color: '#32180b'}}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Instructor Image */}
              <div className="lg:w-1/2">
                <img 
                  src={selectedInstructor.photo} 
                  alt={selectedInstructor.name}
                  className="w-full h-64 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                />
              </div>

              {/* Bio Content */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-6 text-center" style={{fontFamily: 'Barlow, sans-serif', color: '#32180b'}}>
                  {selectedInstructor.name}
                </h3>
                <p className="mb-8 leading-relaxed text-2xl" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
                  {selectedInstructor.bio}
                </p>

                <button 
                  className="block text-center px-3 py-2 bg-[#32180b] text-white font-semibold hover:bg-[#1a0f05] transition-colors mx-auto"
                  style={{ borderRadius: '6px', width: '120px', fontFamily: 'Lora, serif' }}
                  onClick={() => {
                    window.open('https://momence.com', '_blank');
                  }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Instructors;