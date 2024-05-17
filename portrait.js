const root = document.querySelector('root');

window.addEventListener('orientationchange', function(
) {
  if (window.innerHeight < window.innerWidth) {
    root.style.transform = 'rotate(-90deg)';
  } else {
    root.style.transform = 'rotate(0)';
  }
});
