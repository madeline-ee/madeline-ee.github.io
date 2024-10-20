window.addEventListener('scroll', function () {
    const boat = document.querySelector('.boat');
    const triggerPoint = window.innerHeight * 1.5;

    if (window.scrollY >= triggerPoint) {
        boat.style.bottom = '50%'; 
    }
});