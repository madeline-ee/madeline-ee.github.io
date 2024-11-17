// script.js
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const cardContainer = document.querySelector(".card-container");
    const hint = document.querySelector(".hint");
  
    // 控制提示文字顯現
    if (scrollY >= window.innerHeight * 1.5 && scrollY < window.innerHeight * 2.5) {
      hint.classList.add("reveal");
    } else {
      hint.classList.remove("reveal");
    }
  
    // 控制卡片進場與翻開
    if (scrollY >= window.innerHeight * 2.5) {
      cardContainer.classList.add("flipped");
    } else {
      cardContainer.classList.remove("flipped");
    }
  });
  