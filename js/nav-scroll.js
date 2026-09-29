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
