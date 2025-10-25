import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function FloatingBookButton() {
  const [showButton, setShowButton] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create a backup button directly in DOM as fallback
    const createBackupButton = () => {
      const existingButton = document.getElementById('backup-floating-button');
      if (existingButton) return;
      
      const buttonDiv = document.createElement('div');
      buttonDiv.id = 'backup-floating-button';
      buttonDiv.style.cssText = `
        position: fixed !important;
        top: 4.84rem !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        z-index: 9999999 !important;
        isolation: isolate !important;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
      `;
      
      const button = document.createElement('button');
      button.innerHTML = 'BOOK NOW';
      button.style.cssText = `
        background-color: #32180b !important;
        color: #fff !important;
        border: 2px solid #32180b !important;
        border-radius: 6px !important;
        padding: 0.5rem 1rem !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        font-family: "Barlow", sans-serif !important;
        cursor: pointer !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
        transform: translateZ(0) !important;
        display: block !important;
        width: auto !important;
        min-width: 100px !important;
        transition: all 0.3s ease !important;
      `;
      
      button.onclick = () => window.location.href = '/book-classes';
      buttonDiv.appendChild(button);
      document.body.appendChild(buttonDiv);
      
      return buttonDiv;
    };
    
    const backupButton = createBackupButton();
    
    return () => {
      if (backupButton && backupButton.parentNode) {
        backupButton.parentNode.removeChild(backupButton);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Show button when scrolling starts (after 50px)
      if (scrollTop > 50) {
        setShowButton(true);
        setHasScrolled(true);
        
        // Also show backup button
        const backupButton = document.getElementById('backup-floating-button');
        if (backupButton) {
          backupButton.style.opacity = '1';
          backupButton.style.pointerEvents = 'auto';
        }
      } else {
        // Hide button when at top
        setShowButton(false);
        setHasScrolled(false);
        
        // Also hide backup button
        const backupButton = document.getElementById('backup-floating-button');
        if (backupButton) {
          backupButton.style.opacity = '0';
          backupButton.style.pointerEvents = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const buttonElement = (
    <div 
      id="floating-book-button"
      className={`transition-all duration-500 ease-in-out ${
        showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={() => window.location.href = '/book-classes'}
      >
        BOOK NOW
      </button>
    </div>
  );

  // Render directly to document.body to bypass any stacking context issues
  return createPortal(buttonElement, document.body);
}
