window.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 부르기
  async function getData() {
    try {
      const res = await fetch("/apis/trip.json");
      const data = await res.json();
      makeHtml(data);
    } catch (error) {
      console.log(error);
    }
  }
  // 2. html 태그 만들기
  let html = "";
  function makeHtml(data) {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const tag = `
      <div class="swiper-slide">
      <a href="#" class="trip_slide_item">
                      <div class="trip_image">
                        <img
                          src="${obj.이미지}"
                          alt="${obj.alt}"
                        />
                      </div>
                      <div class="trip_info">
                        <div class="trip_icon">
                          <img 
                          src="https://openimage.interpark.com/UI/tour/pages/package/main/icon/icon_w_logo_new.svg"
                          alt="${obj.alt}"
                          />${obj.대상}
                        </div>
                        <p class="trip_item_title">${obj.상품타이틀}</p>
                        <p class="trip_schedule">${obj.스케쥴}</p>
                        <p class="trip_price"><b>${obj.상품가격}</b>원~</p>
                        <span class="m_line">${obj.정상가}</span>
                      </div>
                    </a>
                    </div>`;

      html += tag;
    }
    const where = document.querySelector(".sw_trip .swiper-wrapper");
    // 기존 html 의 내용 삭제
    where.innerHTML = "";
    // 다시 새로운 내용 채움
    where.innerHTML = html;
    // 3. 슬라이드 만들기
    makeSlide();
  }

  // 3단계 슬라이드 만들기
  let swTrip;
  function makeSlide() {
    if (swTrip) {
      swTrip.destroy();
    }
    swTrip = new Swiper(".sw_trip", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".trip_slide_next",
        prevEl: ".trip_slide_prev",
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
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
  }
  getData();
});
