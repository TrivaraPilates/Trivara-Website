import React, { useState, useEffect } from "react";

type ArchCardProps = {
  img: string;
  title: string;
  onClick?: () => void;
};

const ArchCard: React.FC<ArchCardProps> = ({ img, title, onClick }) => {
  return (
    <article
      className="
        group relative w-full h-full flex flex-col
        transition-transform duration-300 hover:scale-105
        overflow-visible pb-10
      "
    >
      {/* Arch image */}
      <div
        className="
          h-[320px]
          border border-black/70
          rounded-t-[200px]
          overflow-hidden
          relative
          flex-shrink-0
        "
      >
        <img
          src={img}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Text block */}
      <div
        className="
          border border-t-0 border-black/70
          px-8 py-10
          text-center
          flex-1 flex
        "
        style={{ backgroundColor: "#fff7f1" }}
      >
        <h3
          className="
            text-2xl leading-tight tracking-[0.01em]
            m-auto whitespace-pre-line
          "
          style={{ fontFamily: "Lora, serif", color: "#000000" }}
        >
          {title}
        </h3>
      </div>

      {/* Floating button (overlaps the bottom border) */}
      <button
        onClick={onClick}
        aria-label="Read more"
            className="
              absolute left-1/2 -translate-x-1/2 bottom-6
              block text-center px-3 py-2 bg-[#32180b] text-white font-semibold hover:bg-[#1a0f05] transition-colors mx-auto
              shadow-[0_8px_24px_rgba(0,0,0,0.28)]
              hover:shadow-[0_12px_28px_rgba(0,0,0,0.34)]
            "
        style={{
          borderRadius: '6px',
          width: '120px',
          fontFamily: 'Barlow, sans-serif',
          color: '#ffffff',
        }}
      >
            READ MORE
      </button>
    </article>
  );
};

const BlogModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  img: string; 
  title: string; 
  content: string; 
}> = ({ isOpen, onClose, img, title, content }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{backgroundColor: 'rgba(32, 16, 8, 0.76)'}}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[70vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-in fade-in zoom-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'modalIn 0.3s ease-out forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          style={{color: '#32180b'}}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Blog Image */}
          <div className="lg:w-1/2">
            <img 
              src={img} 
              alt={title}
              className="w-full h-64 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
          </div>

          {/* Blog Content */}
          <div className="lg:w-1/2 p-8">
            <h3 className="text-3xl font-bold mb-6 text-center" style={{fontFamily: 'Barlow, sans-serif', color: '#32180b'}}>
              {title}
            </h3>
            <p className="mb-8 leading-relaxed text-2xl" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
              {content}
            </p>
            
            <p className="mb-8 leading-relaxed text-2xl" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="mb-8 leading-relaxed text-2xl" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  );
};

const Wellness = () => {
  const [selectedBlog, setSelectedBlog] = useState<{
    img: string;
    title: string;
    content: string;
  } | null>(null);

  // Lock scrolling when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  const blogs = [
    {
      img: "/images/joyful-stretch.jpg",
      title: "Calming Rituals\nfor your Soul",
      content: "Discover the transformative power of mindful rituals that nourish your soul and bring peace to your daily life. Learn how simple practices can create profound moments of tranquility and self-care."
    },
    {
      img: "/images/laptop-pilates.jpg", 
      title: "Why Pilates is the\nbest thing you will\ndo for yourself",
      content: "Explore the incredible benefits of Pilates and why it's considered one of the most effective forms of exercise for both body and mind. From improved posture to enhanced mental clarity, discover what makes Pilates truly special."
    },
    {
      img: "/images/community-front.jpg",
      title: "Heal through\nSound Therapy",
      content: "Experience the healing power of sound therapy and how vibrational frequencies can restore balance to your body and mind. Learn about ancient practices and modern applications of therapeutic sound."
    }
  ];

  const handleBlogClick = (blog: typeof blogs[0]) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <section id="wellness" className="py-32 md:py-48" style={{ backgroundColor: "#bdada3" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="
              grid gap-16 md:gap-20
              md:grid-cols-3
            "
          >
            {blogs.map((blog, index) => (
              <ArchCard
                key={index}
                img={blog.img}
                title={blog.title}
                onClick={() => handleBlogClick(blog)}
              />
            ))}
        </div>
      </div>
    </section>

      {/* Blog Modal */}
      <BlogModal
        isOpen={selectedBlog !== null}
        onClose={handleCloseModal}
        img={selectedBlog?.img || ""}
        title={selectedBlog?.title || ""}
        content={selectedBlog?.content || ""}
      />
    </>
  );
};

export default Wellness;
