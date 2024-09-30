// 平滑捲動功能
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 防止預設行為
        const targetID = this.getAttribute('href').substring(1); // 獲取目標ID
        const targetElement = document.getElementById(targetID); // 獲取目標元素

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // 目標位置
            const startPosition = window.scrollY; // 當前捲動位置
            const distance = targetPosition - startPosition; // 移動距離
            const duration = 2000; // 滾動持續時間（毫秒）
            let startTime = null;

            // 滾動動畫
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime; // 設定開始時間
                const timeElapsed = currentTime - startTime; // 計算經過時間
                const progress = Math.min(timeElapsed / duration, 1); // 確保不超過 1

                window.scrollTo(0, startPosition + distance * easeInOutQuad(progress)); // 根據進度捲動

                if (timeElapsed < duration) requestAnimationFrame(animation); // 進行下一幀動畫
            }

            requestAnimationFrame(animation); // 啟動動畫
        } else {
            // 若點擊首頁，直接跳到頁面最上方
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// 緩動函數
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // 緩動公式
}
