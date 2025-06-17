// 파일 로딩 완료시 실행
window.addEventListener("load", function () {
  // 배너 데이터
  const bannerApiData = [
    { uid: 1, link: "#", image: "images/b1.png", title: "banner1" },
    { uid: 2, link: "#", image: "images/b2.png", title: "banner2" },
    { uid: 3, link: "#", image: "images/b3.png", title: "banner3" },
    { uid: 4, link: "#", image: "images/b4.png", title: "banner4" },
  ];
  // html 태그의 속성의 값 바꾸기
  // html 선택하기
  const bannerAnchorTag = document.querySelector(".sale");
  const bannerImgTag = document.querySelector(".sale img");
  // rolling 작동하기
  //   console.log("링크주소 : ", bannerAnchorTag.href);
  //   console.log("이미지경로 : ", bannerImgTag.src);
  bannerAnchorTag.href = bannerApiData[0].link;
  bannerImgTag.src = bannerApiData[0].image;
  bannerImgTag.alt = bannerApiData[0].title;

  // 알고리즘
  let startIndex = 0;
  let totalCount = bannerApiData.length;

  // 타이머 만들기
  let bannerTimer = setInterval(function () {
    startIndex = startIndex + 1;
    if (startIndex >= totalCount) {
      startIndex = 0;
    }
    bannerAnchorTag.href = bannerApiData[startIndex].link;
    bannerImgTag.src = bannerApiData[startIndex].image;
    bannerImgTag.alt = bannerApiData[startIndex].title;
  }, 1000);

  // 마우스 커서로 배너 제어하기
  bannerAnchorTag.addEventListener("mouseenter", function () {
    // 배너 타이머 지우기 - 마우스 커서가 빠져나갈때 멈추기
    clearInterval(bannerTimer);
  });
  bannerAnchorTag.addEventListener("mouseleave", function () {
    //배너 타이머 다시 실행 - 마우스 커서가 빠져나갈때 다시 실행
    setInterval(function () {
      startIndex = startIndex + 1;
      if (startIndex >= totalCount) {
        startIndex = 0;
      }
      bannerAnchorTag.href = bannerApiData[startIndex].link;
      bannerImgTag.src = bannerApiData[startIndex].image;
      bannerImgTag.alt = bannerApiData[startIndex].title;
    }, 1000);
  });
});
