window.addEventListener("load", function () {
  // 데이터
  const liveApiData = [
    {
      uid: 1,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 2,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250218/14/153/20250218044810.jpg",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[강릉 세인트존스호텔] 여름맞이 오션뷰 호캉스 최대 76% 특가",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        [],
      detailalt: "상세정보",
      detailtitle: "[기획전] 국내숙소 쿠폰팩 다운받기",
    },
    {
      uid: 3,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[싱가포르항공] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 18일 (수)",
      time: "11:00",
      detailimage:
        [],
      detailalt: [],
      detailtitle: [],
    },
    {
      uid: 5,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 6,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 7,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 8,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 9,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 10,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 11,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
    {
      uid: 12,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      wait: "방송예정",
      itemtitle: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가🎊",
      date: "06월 16일 (월)",
      time: "18:00",
      detailimage:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detailalt: "상세정보",
      detailtitle: "[기획전 푸꾸옥 자유여행 혜택 보기]",
    },
  ];

  // html 태그 만들고 배치
  const livePos = this.document.querySelector(".sw_live .swiper-wrapper");
  let html = `
<div class="swiper-slide">
  <a href="${liveApiData[0].link}" class="live_slide_item">
    <div class="live_image">
      <img
        src="${liveApiData[0].image}"
        alt="${liveApiData[0].alt}"
      />
    </div>

    <div class="live_info">
      <div class="live_state">
        <span class="live_wait">${liveApiData[0].wait}</span>
      </div>
      <p class="live_item_title">
        ${liveApiData[0].itemtitle}
      </p>
      <div class="live_day">
        <div class="live_day_date">${liveApiData[0].date}</div>
        <div class="live_day_time">${liveApiData[0].time}</div>
      </div>
      <div class="live_detail">
        <div class="live_detail_image">
          <img
            src="${liveApiData[0].detailimage}"
            alt="${liveApiData[0].detailalt}"
          />
        </div>
        <p class="live_detail_title">
          ${liveApiData[0].detailtitle}
        </p>
      </div>
    </div>
  </a>
</div>
`;

  // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치
  html = ``;
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
<div class="swiper-slide">
<a href="${liveApiData[i].link}" class="live_slide_item">
  <div class="live_image">
    <img
      src="${liveApiData[i].image}"
      alt="${liveApiData[i].alt}"
    />
  </div>
  <div class="live_info">
    <div class="live_state">
      <span class="live_wait">${liveApiData[i].wait}</span>
    </div>
    <p class="live_item_title">
      ${liveApiData[i].itemtitle}
    </p>
    <div class="live_day">
      <div class="live_day_date">${liveApiData[i].date}</div>
      <div class="live_day_time">${liveApiData[i].time}</div>
    </div>
    <div class="live_detail">
      <div class="live_detail_image">
        <img
          src="${liveApiData[0].detailimage}"
          alt="${liveApiData[0].detailalt}"
        />
      </div>
      <p class="live_detail_title">
        ${liveApiData[i].detailtitle}
      </p>
    </div>
  </div>
</a>
</div>
`;

    html = html + tag;
  }

  // console.log("만들어진 태그 : ", html);

  livePos.innerHTML = html;

  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
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
