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
    <footer className="bg-taupe text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-serif font-bold mb-2">TRIVĀRA</div>
          <div className="text-cream text-sm mb-8">PILATES</div>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#" className="hover:text-cream transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors duration-300">Terms</a>
            <button onClick={handleContactClick} className="hover:text-cream transition-colors duration-300">Contact</button>
          </div>
          
          <p className="text-gray-300 text-sm">
            © 2025 Trivāra Pilates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
