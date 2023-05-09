$(document).ready(function() {
  $('.reviews__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  })
})

$(document).ready(function() {
  $('.team__slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  })
})

$(document).ready(function() {
  $('.projects__cards-card-photo-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
  })
})

