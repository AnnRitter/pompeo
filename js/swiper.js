const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" > ' + (index + 1) + ' </span>';
      }
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      738: {
        slidesPerView: 2,
        spaceBetween: 70,
    },
    1248: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      
    }
    
  }, );

