$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      dots:false,
      autoplay: true,
      speed:600,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
          }
        },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
         }
      ]
    });

    
});


