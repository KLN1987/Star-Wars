$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navClass: ['slider__arrow--right', 'slider__arrow--left'],
    responsive: {
      0: {
        items: 1
      },    
      700: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});