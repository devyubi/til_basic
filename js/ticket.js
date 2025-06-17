window.addEventListener("load", function () {
  // API 데이터
  const ticketApiData = [
    {
      category: "뮤지컬",
      data: [
        {
          uid: 1,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/25/25008211_p.gif",
          alt: "뮤지컬팬텀",
          itemtitle: "[NOL 스페셜 스테이지] 뮤지컬 <팬텀> 10주년 기념 공연",
          rank: "1",
          place: "세종문화회관 대극장",
          date: "2025.07.12 ~ 2025.07.17",
          options: [{ style: "blue", text: "단독판매" }],
        },
        {
          uid: 2,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/25/25002866_p.gif",
          alt: "붉은정원",
          itemtitle: "뮤지컬 <붉은 정원>",
          rank: "2",
          place: "링크아트센터드림 드림2관",
          date: "2025.04.22 ~ 2025.07.20",
          options: [{ style: "red", text: "좌석우위" }],
        },
        {
          uid: 3,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
          alt: "뮤지컬위키드",
          itemtitle: "뮤지컬 <위키드> 내한 공연(WICKED The Musical)",
          rank: "3",
          place: "블루스퀘어 신한카드홀",
          date: "2025.07.12 ~ 2025.10.26",
          options: [{ style: "red", text: "좌석우위" }],
        },
        {
          uid: 4,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
          alt: "뮤지컬맘마미아",
          itemtitle: "뮤지컬 <맘마미아!>",
          rank: "4",
          place: "LG아트센터 서울 LG SIGNATURE 홀",
          date: "2025.07.26 ~ 2025.10.25",
          options: [{ style: "blue", text: "단독판매" }],
        },
        {
          uid: 5,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/25/25006546_p.gif",
          alt: "뮤지컬두낫디스터브",
          itemtitle: "뮤지컬 <두 낫 디스터브>",
          rank: "5",
          place: "NOL 서경스퀘어 스콘 1관",
          date: "2025.06.10 ~ 2025.08.31",
          options: [{ style: "red", text: "좌석우위" }],
        },
        {
          uid: 6,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
          alt: "슬립노모어",
          itemtitle: "<슬립노모어 서울> (Sleep No More Seoul)",
          rank: "6",
          place: "매키탄 호텔 (The McKithan Hotel)",
          date: "2025.07.24 ~ 2025.08.09",
          options: [{ style: "red", text: "좌석우위" }],
        },
        {
          uid: 7,
          link: "#",
          image:
            "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
          alt: "슬립노모어",
          itemtitle: "<슬립노모어 서울> (Sleep No More Seoul)",
          rank: "7",
          place: "매키탄 호텔 (The McKithan Hotel)",
          date: "2025.07.24 ~ 2025.08.09",
          options: [],
        },
      ],
    },
    {
      category: "콘서트",
      data: [],
    },
    {
      category: "스포츠",
      data: [],
    },
    {
      category: "전시/행사",
      data: [],
    },
    {
      category: "클래식/무용",
      data: [],
    },
    {
      category: "아동/가족",
      data: [],
    },
    {
      category: "연극",
      data: [],
    },
    {
      category: "레저/캠핑",
      data: [],
    },
  ];

  // 카테고리 html 태그 만들기
  let btHtml = ``;
  for (let i = 0; i < ticketApiData.length; i++) {
    const tag = `<li><button>${ticketApiData[i].category}</button></li>`;
    btHtml = btHtml + tag;
  }
  // 카테고리 버튼 출력장소 및 출력하기
  const btPos = document.querySelector(".ticket_category_list");
  btPos.innerHTML = btHtml;

  // 포커스 스타일 추가하기
  // 아래 숫자가 포커스 된 카테고리 의 순서이다.
  let focusIndex = 0;
  const btList = document.querySelectorAll(".ticket_category_list li button");
  // focusIndex 번호의 button 태그에 클래스 추가
  btList[focusIndex].classList.add("ticket_focus");

  // 클릭시 포커스 이동하기
  btList.forEach(function (item, index) {
    item.addEventListener("click", function () {
      focusIndex = index;
      resetBts();
    });
  });
  // 포커스 리셋 및 최종 포커스 적용하기
  function resetBts() {
    btList.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
    btList[focusIndex].classList.add("ticket_focus");
  }

  // html 태그 만들고 배치하기
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  let html = ``;

  // 실제 데이터 개수만큼 swiper-slide 태그 만들어서 배치
  html = ``;
  for (let i = 0; i < ticketApiData[focusIndex].data.length; i++) {
    let tag = `
<div class="swiper-slide">
  <a href="${ticketApiData[focusIndex].data[i].link}" class="ticket_slide_item" />
    <div class="ticket_image">
      <img
      src="${ticketApiData[focusIndex].data[i].image}"
      alt="${ticketApiData[focusIndex].data[i].alt}"
      />
      <div class="ticket_rank">${ticketApiData[focusIndex].data[i].rank}</div>
    </div>
    <div class="ticket_info">
      <p class="ticket_item_title">
      ${ticketApiData[focusIndex].data[i].itemtitle}
      </p>
      <p class="ticket_place">${ticketApiData[focusIndex].data[i].place}</p>
      <p class="ticket_date">${ticketApiData[focusIndex].data[i].date}</p>
      <div class="ticket_option">`;

    for (let j = 0; j < ticketApiData[focusIndex].data[i].options.length; j++) {
      tag =
        tag +
        `<span class="ticket_${ticketApiData[focusIndex].data[i].options[j].style}">${ticketApiData[focusIndex].data[i].options[j].text}</span>`;
    }
    tag =
      tag +
      `</div>
    </div>
  </a>
</div>
  `;

    html = html + tag;
  }
  console.log("만들어진 태그 : ", html);

  ticketPos.innerHTML = html;

  // //포커스 되었을 때 적용될 포커스 이름
  // const focusName = "ticket_focus";
  // const bts = document.querySelectorAll(".ticket_category_list li button");
  // // 태그 등의 DOM 들을 모아둔 배열을 다룰 때 추천하는 반복 문법
  // bts.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     // 모든 버튼에서 ticket_focus 클래스 제거
  //     removeFocus();
  //     // 클릭된 버튼은 ticket_focus 클래스 추가
  //     item.classList.add(focusName);
  //   });
  // });

  // // 버튼에서 포커스 제거하는 기능
  // function removeFocus() {
  //   bts.forEach(function (item) {
  //     item.classList.remove(focusName);
  //   });
  // }

  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
