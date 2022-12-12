let amount = document.querySelector('.amount'),
  weight = document.querySelector('.weight'),
  ot_where = document.querySelector('.ot_where'),
  where = document.querySelector('.where'),
  totalBtn = document.querySelector('.calculator__totalBtn'),
  totalNumber = document.querySelector('.calculator__totalNumber span');


function clearBorder(item) {
  item.addEventListener('click', () => {
    item.style.border = '1px solid rgba(92, 92, 92, 0.3)';
  })
}
clearBorder(amount);
clearBorder(weight);



totalBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let weightNum = Number(weight.value);
  let amountNum = Number(amount.value);

  function numberExamination(num1, num2, num3, num4, num5, num5, num7, num8) {

    if (weightNum > 0 && amountNum > 0) {

      if (weightNum <= 5) {
        totalNumber.innerHTML = 2000 * amountNum + ' ' + 'тенге'
      } else if (weightNum <= 10) {
        totalNumber.innerHTML = 3240 * amountNum + ' ' + 'тенге'
      } else if (weightNum <= 30) {
        totalNumber.innerHTML = 5400 * amountNum + ' ' + 'тенге'
      } else if (weightNum <= 50) {
        totalNumber.innerHTML = 170 * amountNum + ' ' + 'тенге'
      } else if (weightNum <= 100) {
        totalNumber.innerHTML = 150 * amountNum + ' ' + 'тенге'
      } else if (weightNum <= 500) {
        totalNumber.innerHTML = 120 * amountNum + ' ' + 'тенге'
      } else if (weightNum >= 500) {
        totalNumber.innerHTML = 100 * amountNum + ' ' + 'тенге'
      }

    }

    if (weightNum <= 0) {
      weight.style.border = '1px solid red'
      totalNumber.innerHTML = 0;
    }
    if (amountNum <= 0) {
      amount.style.border = '1px solid red'
      totalNumber.innerHTML = 0;
    }
  }
  numberExamination()
})

  const swiper = new Swiper(`.swiper`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 50,
  });

  const swiper2 = new Swiper(`.swiper2`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 50,
    nested: true,
    slideToClickedSlide: false,
  });



let hamburger = document.querySelector(".hamburger");
let toolbar__MainGroup = document.querySelector('.toolbar__MainGroup');
let menuBg = document.querySelector('.menu-bg');
let body = document.querySelector('body')

hamburger.addEventListener("click", function () {
  toolbar__MainGroup.classList.toggle('is-active')
  hamburger.classList.toggle("is-active");
  menuBg.classList.toggle("change-bg");
  body.classList.toggle('is-active')
});


