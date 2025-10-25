export default function Footer() {
  const handleContactClick = () => {
    const el = document.querySelector('#contact');
    if (!el) return;
    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--dark-brown)] text-center">
      {/* Logo */}
      <div className="relative flex items-center justify-center py-4">
        <img
          src="/images/Trivara_Log_Fot_trimmed.svg"
          alt="Trivāra"
          className="w-full max-w-[1200px] h-auto mx-auto"
        />
      </div>

      {/* Links */}
      <div className="flex justify-center gap-8 py-8 text-sm">
        <a
          href="#"
          className="transition-colors"
          style={{ color: 'var(--brand-f4efe9)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--peach)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-f4efe9)')}
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="transition-colors"
          style={{ color: 'var(--brand-f4efe9)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--peach)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-f4efe9)')}
        >
          Terms
        </a>
        <button
          onClick={handleContactClick}
          className="transition-colors"
          style={{ color: 'var(--brand-f4efe9)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--peach)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-f4efe9)')}
        >
          Contact
        </button>
      </div>

      <p className="pb-10 text-sm" style={{ color: 'var(--brand-c5ae99)' }}>
        © 2025 Trivāra Pilates. All rights reserved.
      </p>
    </footer>
  );
}