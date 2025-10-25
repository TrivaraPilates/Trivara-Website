import { useFadeIn } from '../hooks/use-fade-in';

const InstagramGrid = () => {
  const titleRef = useFadeIn();

  // Instagram posts - actual Instagram content
  const instagramImages = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DPuF5HPiaQZ/?igsh=aXd2YnpjbWxueWVh",
      alt: "Three women in fitness gear with Pilates equipment",
      caption: "Community vibes ✨",
      image: "/images/Insta1.jpeg"
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DQE5Be7jWx7/?igsh=MXNtdXV4MHphcWplMA==",
      alt: "Woman on a Pilates reformer",
      caption: "Mindful movement",
      image: "/images/Insta2.jpg"
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DPJnL4Cgcrp/?igsh=MXhwbDg2cTZpamV3dQ==",
      alt: "Instagram post",
      caption: "Studio moments",
      image: "/images/Insta3.png"
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DPB_pcUD82O/?igsh=MXZwZHRoeDZ0ZzVhYg==",
      alt: "Instagram post",
      caption: "Community vibes",
      image: "/images/Insta4.png"
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/DNqVuB611UM/?igsh=MTl4ZndjamozdXpkMQ==",
      alt: "Instagram post",
      caption: "Wellness journey",
      image: "/images/Insta5.png"
    }
  ];

  return (
    <section className="py-16" style={{backgroundColor: '#fff7f1'}}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-12`}
        >
          <h2 className="text-3xl md:text-4xl mb-4" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
            Stay Connected
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {instagramImages.map((image) => (
            <a 
              key={image.id}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer block"
            >
              {/* Instagram Post Preview */}
              <div className="w-full h-80 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden border border-gray-200" style={{borderRadius: '12px'}}>
                {/* Instagram Post Header */}
                <div className="flex items-center p-2 border-b border-gray-100">
                  <div className="w-6 h-6 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="w-16 h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="w-12 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                {/* Post Content Area */}
                <div className="flex-1 p-2">
                  {image.image ? (
                    // Show actual image for posts with image property
                    <div className="w-full h-48 bg-gradient-to-br from-[#32180b] to-[#1a0f05] rounded mb-2 flex items-center justify-center overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // Show placeholder for posts without image
                    <div className="w-full h-48 bg-gradient-to-br from-[#32180b] to-[#1a0f05] rounded mb-2 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg 
                          className="w-8 h-8 mx-auto mb-1 opacity-80" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <p className="text-xs font-medium">{image.caption}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Post Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center" style={{borderRadius: '12px'}}>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-700">View on Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramGrid;
