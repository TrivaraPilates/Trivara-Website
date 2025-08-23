import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('revealed');
            entry.target.classList.add('hidden');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}

// Enhanced hook for fade in/out animations
export function useFadeInOut() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initially make element visible
    if (elementRef.current) {
      elementRef.current.classList.add('visible');
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            // Only fade out when completely out of view
            if (entry.intersectionRatio === 0) {
              entry.target.classList.remove('visible');
              entry.target.classList.add('hidden');
            }
          }
        });
      },
      {
        threshold: [0, 0.1],
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}