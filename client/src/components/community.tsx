import { useFadeIn } from '../hooks/use-fade-in';

const Community = () => {
  const titleRef = useFadeIn();

  const instagramPosts = [
    {
      id: 1,
      username: "@pilates_lover_23",
      caption: "Amazing session at Trivāra today! 💪✨",
      image: "/api/placeholder/300/300",
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      username: "@wellness_warrior",
      caption: "Love the energy here! Best Pilates studio in town 🧘‍♀️",
      image: "/api/placeholder/300/300",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      username: "@fit_and_strong",
      caption: "Transformation Tuesday! 6 months of consistent Pilates at Trivāra 💫",
      image: "/api/placeholder/300/300",
      likes: 234,
      comments: 45
    },
    {
      id: 4,
      username: "@mindful_movement",
      caption: "The instructors here are incredible! So knowledgeable and supportive 🙏",
      image: "/api/placeholder/300/300",
      likes: 178,
      comments: 31
    },
    {
      id: 5,
      username: "@core_strength_queen",
      caption: "Morning Pilates session = best way to start the day! ☀️",
      image: "/api/placeholder/300/300",
      likes: 112,
      comments: 18
    }
  ];

  return (
    <section id="community" className="py-32 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(75, 60, 50, 0.05) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-16`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>
            Our Community
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--peach)'}}></div>
          <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-665446)'}}>
            See what our amazing community members are saying about their Pilates journey with us
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {instagramPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Post Image */}
                <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 mx-auto"></div>
                    <p className="text-xs font-medium" style={{color: 'var(--dark-brown)'}}>Instagram Post</p>
                  </div>
                  
                  {/* Instagram icon overlay */}
                  <div className="absolute top-2 right-2">
                    <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm font-medium" style={{color: 'var(--dark-brown)'}}>
                      {post.username}
                    </span>
                  </div>
                  
                  <p className="text-sm mb-3 leading-relaxed" style={{color: 'var(--brand-665446)'}}>
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs" style={{color: 'var(--brand-665446)'}}>
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Follow Us CTA */}
          <div className="text-center mt-12">
            <p className="text-lg mb-4" style={{color: 'var(--brand-665446)'}}>
              Join our community and share your Pilates journey with us!
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center brand-button py-3 px-6 font-semibold transition-all duration-300 hover:scale-105"
              style={{borderRadius: '0px'}}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;