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
});