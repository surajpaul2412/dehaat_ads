$(document).ready(function(){
    $('.carousel1').slick({
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1
        }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.carousel2').slick({
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1
        }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.carousel3').slick({
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1
        }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);
    });
});