
new Swiper('.swiper-container', {
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
});
