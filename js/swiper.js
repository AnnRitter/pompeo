const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 'auto',

    slideToClickedSlide: true,

    autoHeight: true,

    loop: true,

    direction: 'horizontal',

    preloadImages: false, 

    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
    },

    watchSlidesProgress: true, 

    watchSlidesVisibility: true,




    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 10000000,
      disableOnInteraction: false,
    },

    // hashNavigation: {
    //   wacthState: true,
    // },

    keyboard: {
      enabled: true, 
      onlyInViewport: true,
      pageUpDown: true,

    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.swiper',
    },

    // pagination: {
    //   el: '.swiper-pagination',
    //   // clickable: true,
    //   // dynamicBullets: true,
    //   // renderBullet: function (index, className) {
    //   //   return '<span class="' + className + '" > ' + (index + 1) + ' </span>';
    //   // }


    //   // type: 'fraction',
    //   // renderFraction: function (currentClass, totalClass) {
    //   //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    //   // },

    //   // type: 'progressbar';

      

    // },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    //   hide: true,
    // },

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

