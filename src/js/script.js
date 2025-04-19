/* var устаревший вариант переменной */
// number
// string - '', "", ``
// boolean - true/false
// null
// undefined
/* let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
}*/
// Symbol
// alert(1234)
/* console.log(number) */
/* let answer = confirm("Вам есть 18?");
console.log(answer); */
/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

//const { name } = require("browser-sync");

/* console.log(4 + 'fdd'); */
/* let isCheked = true,
    isClose = true;

console.log(isCheked && isClose) или
console.log(isCheked || isClose) и  */
/* if (2*4 == 8*3) {
    console.log('Da')
} else {
    console.log('MiNet')
} */

/* for(let i = 1; i < 8; i++) {
    console.log(i)
} */

/* function logging(a, b) {
    console.log( a + b )
}

logging(3, 5);

logging(3, 15); */


$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false
                }
            },
        ]
      });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut();
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
    
    function ValidForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Как вас зовут?",
                phone: "Введите ваш номер телефона",
                email: {
                    required: "Необходимо ввести электронную почту",
                    email: "Неправильно введена почта"
                }
            }
        });
    };

    ValidForms('#consultation-form');
    ValidForms('#consultation form');
    ValidForms('#order form');

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        };

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('form').trigger("reset");
        })
        return false;
    });
    //smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('a[href^="#"]').click(function(){
        const _href = $(this).attr("href");
        $('html, body').animate({scrollTop: $(_href).offset().top+"px"});
        return false
    });
});