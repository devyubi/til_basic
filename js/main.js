window.addEventListener("DOMContentLoaded", function () {
  // main
  const main = this.document.querySelector(".main");
  // 윈도우 스크롤 체크
  window.addEventListener("scroll", function () {
    const scY = window.scrollY;
    if (scY > 0) {
      // console.log("스크롤 됨");
    } else {
      main.classList.remove("main_scroll");
    }
  });
});
