// const root = document.getElementById('root');

// window.addEventListener('orientationchange', function(
// ) {
//   if (window.innerWidth < 768 && window.innerHeight < window.innerWidth) {
//     root.style.transform = 'rotate(-90deg)';
//   } else {
//     root.style.transform = 'rotate(0)';
//   }
// });

const root = document.getElementById('root');

window.addEventListener('orientationchange', function(
) {
  if (window.innerHeight < window.innerWidth) {
    // Disable the rotation effect on landscape mode
    root.style.transform = 'none';
    root.style.width = '100vw';
    root.style.height = '100vh';
  } else {
    root.style.width = '100vh';
    root.style.height = '100vw';
  }
});
