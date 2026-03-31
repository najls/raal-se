const arrow = document.getElementById('downArrow'),
      edge = document.getElementById('mainNav').offsetHeight;

window.addEventListener('scroll', () => {
    let s = window.scrollY
    if (window.scrollY <= edge) arrow.style.opacity = 1 - s / edge;
    else arrow.style.opacity = 0;
});
