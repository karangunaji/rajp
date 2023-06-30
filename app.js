

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    // autoplay: {
    //     delay:3000,
    //     disableOnInteraction:false
    //    },
    
    breakpoints: {
       640: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
    },
 });



 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
     delay: 2000,
     disableOnInteraction: false,
   },
    breakpoints: {
       450: {
          slidesPerView: 2,
        },
       640: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 4,
       },
       1000: {
         slidesPerView: 5,
       },
    },
 });



  
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('show_color', window.scrollY > 100);
  }) 
  
