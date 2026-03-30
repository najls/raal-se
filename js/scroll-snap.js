var prevScrollDir = window.scrollY,
    snapTop = 0,
    snapBottom = window.innerHeight,
    snapZone = window.innerHeight * .2,
    mouseUp = true;

window.addEventListener('resize', () => {
    snapBottom = window.innerHeight;
    snapZone = window.innerHeight * .2;
});
window.addEventListener('mousedown', () => { mouseUp = false });
window.addEventListener('touchstart', () => { mouseUp = false });
window.addEventListener('mouseup', release);
window.addEventListener('touchend', release);
window.addEventListener('scroll', () => {
    if (mouseUp) {
        if (window.scrollY < snapBottom && prevScrollDir < window.scrollY) snap(snapBottom);
        else {
            if (snapBottom - snapZone < window.scrollY && window.scrollY < snapBottom) snap(snapBottom);
            else if (snapBottom - snapZone > window.scrollY) snap(snapTop);
        }
        prevScrollDir = window.scrollY;
    }
});

function release() {
    mouseUp = true;
    if (window.scrollY < snapBottom) snapToClosest();
}

function snapToClosest() {
    snap((window.scrollY - snapTop < snapBottom - window.scrollY) ? snapTop : snapBottom);
}

function snap(snapPosition) {
    window.scrollTo({
        top: snapPosition,
        behavior: 'smooth',
    });
}