document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split("/").pop();

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('text-red-600', 'border-red-600');
    } else {
      link.classList.remove('text-red-600', 'border-red-600');
    }
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
          preloader.remove(); // remove it fully after fade out
        }, 500); // allow fade-out animation
      }
    }, 1500); // show for at least 1.5 seconds even if page is ready earlier
  });

  document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
      scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
      scrollToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



