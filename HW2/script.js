// Smooth Scrolling 功能
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // 使用requestAnimationFrame來實現更慢的滾動
        smoothScroll(targetElement, 1500); // 滾動時間設定為1500毫秒，即1.5秒
    });
});

// 平滑滾動函數，設置過渡效果時間
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top; // 目標元素距離視窗頂部的距離
    const startPosition = window.pageYOffset; // 當前滾動條位置
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) { // 緩動函數
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// 按下「首頁」按鈕，回到視窗最上方
document.querySelector('.home').addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(document.body, 1500); // 設定滑動回到頂部
});
