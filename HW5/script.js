$(function() {
    const video1 = $('#video-1').get(0);
    const video2 = $('#video-2').get(0);
    const section1 = $('#video-section-1');
    const section2 = $('#video-section-2');
    
    let video1HasStarted = false;
    let video2HasStarted = false;
    let video1PlayedUntil = 0;
    let video2PlayedUntil = 0;

    // 控制影片播放的進度
    function updateVideoPlayback() {
        const currentScrollPosition = $(document).scrollTop();
        
        // 第一段影片在進入區域後播放
        if (section1.offset().top <= currentScrollPosition + $(window).height() && !video1HasStarted) {
            video1HasStarted = true;
            video1.play();  // 開始播放影片
        }
        if (video1HasStarted && video1.duration) {
            video1.currentTime = video1.duration * ((currentScrollPosition - section1.offset().top) / section1.height());
        }
        
        // 第二段影片在進入區域後播放
        if (section2.offset().top <= currentScrollPosition + $(window).height() && !video2HasStarted) {
            video2HasStarted = true;
            video2.play();  // 開始播放影片
        }
        if (video2HasStarted && video2.duration) {
            video2.currentTime = video2.duration * ((currentScrollPosition - section2.offset().top) / section2.height());
        }

        // 影片播放完畢時停止，並讓下一個區塊進入視窗
        if (section1.offset().top + section1.height() <= currentScrollPosition) {
            video1.pause();
        }

        if (section2.offset().top + section2.height() <= currentScrollPosition) {
            video2.pause();
        }
    }

    // IntersectionObserver 用來監聽影片進入視窗的時候播放
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === "video-section-1" && !video1HasStarted) {
                video1HasStarted = true;
                video1.play();  // 影片開始播放
            }
            if (entry.isIntersecting && entry.target.id === "video-section-2" && !video2HasStarted) {
                video2HasStarted = true;
                video2.play();  // 影片開始播放
            }
        });
    }, { threshold: 0.5 });  // 影片進入視窗一半時開始播放

    // 監聽影片區域
    videoObserver.observe(section1[0]);
    videoObserver.observe(section2[0]);

    // 監聽滾動事件
    $(window).scroll(function() {
        updateVideoPlayback();
    });
});
