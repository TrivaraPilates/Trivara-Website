export default function Footer() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-12" style={{backgroundColor: 'var(--dark-brown)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-8xl md:text-[10.8rem] lg:text-[12.6rem] font-serif font-bold mb-2 leading-none tracking-[0.2em] flex justify-center items-center" style={{fontFamily: 'var(--font-serif)', color: 'var(--peach)'}}>TRIVĀRA</div>
          <div className="text-xl md:text-2xl mb-8 font-barlow" style={{color: 'var(--brand-f4efe9)'}}>PILATES</div>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#" className="transition-colors duration-300" style={{color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--peach)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-f4efe9)'}>Privacy Policy</a>
            <a href="#" className="transition-colors duration-300" style={{color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--peach)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-f4efe9)'}>Terms</a>
            <button onClick={handleContactClick} className="transition-colors duration-300" style={{color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--peach)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-f4efe9)'}>Contact</button>
          </div>
          
          <p className="text-sm" style={{color: 'var(--brand-c5ae99)'}}>
            © 2025 Trivāra Pilates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
