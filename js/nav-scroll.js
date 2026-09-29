/* Alexandria United FC: nav scroll state, progress bar, and mobile menu */
(function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  var bar = nav.querySelector('.nav-progress-bar');
  var menu = document.querySelector('.mobile-menu');
  var burger = nav.querySelector('.nav-hamburger');

  function update() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('is-scrolled', y > 20);
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
    }
    if (menu) menu.style.top = nav.offsetHeight + 'px';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Close the mobile menu after picking a link
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (!e.target.closest('a')) return;
      menu.classList.remove('open');
      if (burger) burger.classList.remove('open');
    });
  }
})();

/* Scroll-in reveals and count-up numbers */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');

  function countUp(el) {
    var end = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = null, dur = 1200;
    el.textContent = '0';
    function step(t) {
      if (!start) start = t;
      var p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });
  items.forEach(function (el) { io.observe(el); });
})();
