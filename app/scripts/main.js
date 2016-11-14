jQuery(document).ready(function($) {

    $('.center').slick({
        centerMode: true,
        centerPadding: '2%',
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        navs:true,
          focusOnSelect: true,

        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
});
