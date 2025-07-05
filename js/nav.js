// js/nav.js

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
});
