function scrolldown(){
  const section = document.getElementById('welcome');
  const offset = -70; // Offset value in pixels (5rem = 80px)
  const offsetPosition = section.offsetTop + offset;
  window.scrollTo({
    top: offsetPosition,
    behavior:'smooth',
    
  });
}

