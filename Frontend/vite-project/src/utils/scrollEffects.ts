// Scroll Effects Utility
export const initScrollEffects = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale-in, .scroll-slide-up, .card-stagger'
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((el) => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  });

  return observer;
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Add scroll effects to specific sections
export const addScrollEffectsToSection = (sectionId: string, effectType: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add(effectType);
  }
}; 