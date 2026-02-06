// Mobile navigation toggle and simple contact form feedback
(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-menu');
  const status = document.querySelector('.form-status');
  const form = document.querySelector('.contact-form');
  const year = document.getElementById('year');

  // Set footer year
  if (year) year.textContent = new Date().getFullYear();

  // Toggle navigation for mobile
  if (navToggle && navMenu){
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Close menu when clicking a link (mobile)
    navMenu.addEventListener('click', (e) => {
      if (e.target.matches('a')){
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Fake form submission feedback
  if (form && status){
    form.addEventListener('submit', () => {
      const name = document.getElementById('name').value.trim();
      status.textContent = `Thanks${name ? ", " + name : ''}! I will get back to you shortly.`;
      form.reset();
    });
  }
})();
