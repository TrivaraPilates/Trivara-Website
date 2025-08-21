export default function Hero() {
  const handleDiscoverClick = () => {
    const element = document.querySelector('#about');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Hero background image showing diverse women doing pilates in warm natural lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/community-back.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
        <p className="text-lg md:text-xl font-medium mb-4 tracking-wider opacity-90 font-bodoni">REFORMER PILATES | SCARBOROUGH</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'var(--font-serif)'}}>
          Trivāra:<br />
          <span className="font-barlow" style={{color: 'var(--peach)'}}>The Power of Three</span>
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-8 font-bodoni" style={{color: 'var(--peach)'}}>
          Breathe. Balance. Bloom.
        </p>
        <button 
          onClick={handleDiscoverClick}
          className="px-8 py-4 font-semibold text-lg transition-colors duration-300 transform hover:scale-105 shadow-xl"
          style={{
            backgroundColor: 'var(--brand-f4efe9)',
            color: 'var(--dark-brown)',
            border: 'none'
          }}
        >
          Discover Your Journey
        </button>
      </div>
    </section>
  );
}
