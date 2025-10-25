import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to scroll to section with proper navbar offset
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // Approximate navbar height
    const elementPosition = element.offsetTop - navbarHeight - 40; // Extra padding
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Enhanced scroll function with better positioning
export function scrollToSectionEnhanced(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get actual navbar height
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    // Calculate position with extra padding
    const elementPosition = element.offsetTop - navbarHeight - 60;
    
    // Use scrollIntoView with custom positioning
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    
    // Additional offset after scroll
    setTimeout(() => {
      window.scrollBy({
        top: -60,
        behavior: 'smooth'
      });
    }, 100);
  }
}
