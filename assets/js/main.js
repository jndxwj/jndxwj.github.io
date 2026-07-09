/**
 * My Life · 个人生活网站
 */
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { navLinks.classList.remove('open'); });
    });
  }
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === path || path.endsWith(href)) a.classList.add('active');
  });
});
