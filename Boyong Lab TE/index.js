function scrolltoprograms(){
  const section = document.getElementById('programs');
  const offset = -70; // Offset value in pixels (5rem = 80px)
  const offsetPosition = section.offsetTop + offset;
  window.scrollTo({
    top: offsetPosition,
    behavior:'smooth',
  });
}

window.addEventListener('scroll',()=>{
  if(window.scrollY>0){ 
      document.getElementById('myNavbar').classList.add('shadow-sm')
  }else{
      document.getElementById('myNavbar').classList.remove('shadow-sm')
  }
})

/* SCROLL REVEAL */
window.addEventListener('DOMContentLoaded', function() {

  /* CONSTANTS */
  var originValue = window.innerWidth <= 768 ? 'bottom'  : null;
  var duration = 800;
  var delay = 400;
  // Slide-up animation
ScrollReveal().reveal('#slide-up',{
  delay: delay,
  duration: duration,
  distance: '20px',
  origin: originValue || 'bottom',
  easing: 'ease-out',
  mobile: true,
  reset: false
});
// Slide-down animation
ScrollReveal().reveal('#slide-down', {
  delay: delay,
  duration: duration,
  distance: '20px',
  origin:originValue || 'top', // Slide down from the top
  easing:  'ease-out',
  mobile: true,
  reset: false
});

// Slide-left animation
ScrollReveal().reveal('#slide-left', {
  delay: delay,
  duration: duration,
  distance: '20px',
  origin: originValue ||'right', // Slide from the right
  easing:   'ease-out',
  mobile: true,
  reset: false
});
// Slide-right and top at larger screen animation
ScrollReveal().reveal('#slide-right', {
  delay: delay,
  duration: duration,
  distance: '20px',
  origin: originValue ||'left', // Slide from the left
  easing:   'ease-out',
  mobile: true,
  reset: false
});

});
