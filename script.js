document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link-button, .social-icon');
  const banner = document.querySelector('.banner');
  const profileImage = document.querySelector('.profile-image');
  const bio = document.querySelector('.bio');

  // Función para manejar clics en enlaces
  const handleLinkClick = (e) => {
    e.preventDefault();

    const link = e.currentTarget;
    const linkText = link.textContent || link.getAttribute('aria-label');
    const category = link.dataset.category || 'social';

    // Efecto de clic con animación suave
    link.style.transition = 'transform 0.2s ease';
    link.style.transform = 'scale(0.95)';

    setTimeout(() => {
      link.style.transform = 'scale(1)';

      // Redirigir al enlace después de un breve retraso
      setTimeout(() => {
        window.location.href = link.href;
      }, 100);
    }, 300);
  };

  // Añadir manejadores de eventos a los enlaces
  links.forEach(link => link.addEventListener('click', handleLinkClick));

  // Implementar lazy loading para imágenes
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src || image.src;
            image.removeAttribute('loading');
            observer.unobserve(image);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback para navegadores que no soportan IntersectionObserver
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
        img.removeAttribute('loading');
      });
    }
  };

  lazyLoadImages();

  // Animación de entrada para el banner, la imagen de perfil y la bio
  const animateElements = () => {
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(20px)';
      setTimeout(() => {
        banner.style.transition = 'opacity 1s ease, transform 1s ease';
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
      }, 300);
    }

    if (profileImage) {
      profileImage.style.opacity = '0';
      profileImage.style.transform = 'scale(0.8)';
      setTimeout(() => {
        profileImage.style.transition = 'opacity 1s ease, transform 1s ease';
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'scale(1)';
      }, 600);
    }

    if (bio) {
      bio.style.opacity = '0';
      bio.style.transform = 'translateY(20px)';
      setTimeout(() => {
        bio.style.transition = 'opacity 1s ease, transform 1s ease';
        bio.style.opacity = '1';
        bio.style.transform = 'translateY(0)';
      }, 900);
    }
  };

  animateElements();
});

