// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.nav').offsetHeight;

        // Smooth scroll function
        const targetPosition = target.offsetTop - offset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 3000; // 滾動時間設為 3 秒
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});

// Fixed nav on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 150) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.zIndex = '1000';
    } else {
        nav.style.position = 'relative';
    }
});
