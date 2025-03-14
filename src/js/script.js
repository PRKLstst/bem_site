/* var устаревший вариант переменной */
let number = 7;
const pi = 3.14;

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
});