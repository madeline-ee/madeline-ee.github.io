const textContainer = document.querySelector(".text-container");
const nextSection = document.querySelector(".next-section");

let canScrollToNext = false;

// 偵測右側滾動完成
textContainer.addEventListener("scroll", () => {
  const maxScroll = textContainer.scrollHeight - textContainer.clientHeight;
  const currentScroll = textContainer.scrollTop;

  if (currentScroll >= maxScroll) {
    canScrollToNext = true; // 允許滾動到下一段
  }
});

// 偵測整頁滾動
window.addEventListener("wheel", (e) => {
  if (canScrollToNext) {
    return; // 滾動到下一段
  }

  // 阻止預設滾動行為
  e.preventDefault();
});



// prototype
document.querySelectorAll(".flip-box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.querySelector(".flip-box-inner").style.transform = "rotateY(180deg)";
  });
  box.addEventListener("mouseout", () => {
    box.querySelector(".flip-box-inner").style.transform = "rotateY(0deg)";
  });
});

window.addEventListener("load", function () {
  const section = document.querySelector(".video-section");
  const expectedHeight = section.offsetHeight; // 期望的高度
  if (expectedHeight < window.innerHeight * 2.3) {
    // 假设期望最少高度为屏幕高度的三倍
    section.style.height = `${window.innerHeight * 2.3}px`; // 调整到最小高度
  }
});
