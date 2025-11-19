// Navigation et interactions
document.addEventListener('DOMContentLoaded', function() {
  // Navigation active
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === '/' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Gestion des images fixes avec IntersectionObserver
  const fixedImageSections = document.querySelectorAll('.section-fixed-image');
  
  if (fixedImageSections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };
    
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Désactiver toutes les autres images fixes
          fixedImageSections.forEach(section => {
            section.classList.remove('active');
          });
          // Activer l'image de la section visible
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    fixedImageSections.forEach(section => {
      imageObserver.observe(section);
    });
    
    // Activer la première section au chargement si elle est visible
    const firstSection = fixedImageSections[0];
    if (firstSection) {
      const rect = firstSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        firstSection.classList.add('active');
      }
    }
  }
  
  // Animation au scroll pour les autres éléments
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .section:not(.section-fixed-image)').forEach(el => {
    observer.observe(el);
  });
  
  // Gestion des formulaires
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Merci ! Votre message a été envoyé.');
      form.reset();
    });
  });
  
  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(214, 44, 17, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
});
