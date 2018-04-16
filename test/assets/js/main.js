jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    gamba.mainFunction = function() {

        
        // ----------------------- SLIDE --------------------------- //
            $('.partner-block').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                responsive: [
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 481,
                    settings: {
                      slidesToShow: 1
                    }
                  },
                ]
            });
        /*----------  Welcome  ----------*/

            $('.welcome-block .block-right').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                dots: true,
                arrows: false,
            });
        /*----------  Slider banner  ----------*/

            $('#slider-banner .slider-for').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  asNavFor: '.slider-nav',
            });
            $('#slider-banner .slider-nav').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  asNavFor: '.slider-for',
                  dots: true,
                  arrows: false,
                  centerMode: true,
                  focusOnSelect: true,
                  centerPadding: '0px',
                  adaptiveHeight: true,
                  autoplay: true,
                  
                 
            });

            // $('#slider-banner .slider-for').on('afterChange', function(event, slick, currentSlide) {
               
            // });

            // $('#slider-banner .slider .slider-nav').each(function(){
                    
            //         var x =($(this).find('.description').width()) /4;
            //         var y = $(this).find('.description').height() ;
            //             $(this).find('ul').css({
            //                // 'width' : x + 'px',
            //                'height': y + 'px'
            //             });
            //     });


        /*----------  dot slider banner  ----------*/
            

    };


    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
