$(document).ready(function(){
    // табы
    var myTabContent;

    $('.tabs__item').click(function(event) {
        myTabContent = $(this).attr('data-content');
        $('.product__card').hide();
        $(myTabContent).fadeIn();
        $('.tabs__item').removeClass('active');
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
});

