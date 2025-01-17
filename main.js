// script.js
document.addEventListener('DOMContentLoaded', function () {
  const pages = document.querySelectorAll('.page');

  window.navigateTo = function (id) {
      pages.forEach(page => {
          page.classList.remove('active');
          if (page.id === id) {
              page.classList.add('active');
          }
      });
  };

  // Default to show home page
  navigateTo('home');
});