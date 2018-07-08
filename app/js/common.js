$(document).ready(function(){
    // табы
    var myTabContent;

    $('.programs__tabs-item').click(function(event) {
        myTabContent = $(this).attr('data-content');
        $('.programs__container').hide().removeClass('active');
        $(myTabContent).fadeIn().addClass('active');
        $('.programs__tabs-item').removeClass('active');
        $(this).addClass('active');
    });



    // маска
    $(".phone-mask-js").mask("+7 (9 9 9) 9 9 9 - 9 9 9 9");



    $('.conatcts-form').submit(function (e) { 
        var nameVal = $(this).find('.name-js').val();
        var telVal = $(this).find('.phone-mask-js').val();
        if(nameVal == ''){
            e.preventDefault();
            $(this).find('.name-js').addClass('errow');
            $(this).find('.name-js').parent('.input-group').addClass('errow');
        }
        if(telVal == ''){
            e.preventDefault();
            $(this).find('.phone-mask-js').addClass('errow');
            $(this).find('.phone-mask-js').parent('.input-group').addClass('errow');
        }
    });

        /*up*/
        /*Плавная прокрутка*/
        $(".push-up").click(function() {
            $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
            duration: 800,
            easing: "swing"
            });
            return false;
        });


        /*слайдер на главной*/
        $('.baner-slider__js').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            adaptiveHeight: true,
            arrows:false,
            cssEase: 'linear'
        });

        $('.next-slide').click(function () { 
            $('.baner-slider__js').slick('slickNext');
        });
        $('.prev-slide').click(function () { 
            $('.baner-slider__js').slick('slickPrev');
        });
        
        /*Слайдер отзывов*/
        $('.recalls__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            adaptiveHeight: true,
            arrows:false
        });

        $('.next-recall').click(function () { 
            $('.recalls__slider').slick('slickNext');
        });
        $('.prev-recall').click(function () { 
            $('.recalls__slider').slick('slickPrev');
        });

        /*мобильное меню*/
        $(".btn_mnu").click(function() {
            $(this).toggleClass("active");
            $('.page-nav').fadeToggle(400,
                function(){
                    $('.page-nav').removeAttr('style');
                }
            ).toggleClass('open');
        });
});

