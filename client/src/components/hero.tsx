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
          backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
        <p className="text-lg md:text-xl font-medium mb-4 tracking-wider opacity-90">REFORMER PILATES | SCARBOROUGH</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Trivāra:<br />
          <span className="text-cream">The Power of Three</span>
        </h1>
        <p className="text-2xl md:text-3xl font-serif font-medium mb-8 text-cream">
          Breathe. Balance. Bloom.
        </p>
        <button 
          onClick={handleDiscoverClick}
          className="bg-white text-taupe px-8 py-4 rounded-full font-semibold text-lg hover:bg-cream transition-colors duration-300 transform hover:scale-105 shadow-xl"
        >
          Discover Your Journey
        </button>
      </div>
    </section>
  );
}
