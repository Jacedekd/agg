const Storage_Type = localStorage;
const siteCheck = 'siteCheck';

const shouldShowPopap = () => !Storage_Type.getItem(siteCheck)

const saveToStorage = () => Storage_Type.setItem(siteCheck, true)

let popap__Close = document.querySelector('.popap__Close')
let body = document.querySelector('body')


window.addEventListener('scroll', function () {
  if (shouldShowPopap()) {
    setTimeout(() => {
      popap__Close.parentElement.classList.add('is-active');
      body.style = 'overflow: hidden'
    }, 6000)
    saveToStorage()
  }
});

// setTimeout(() => {
//   popap__Close.parentElement.classList.add('is-active');
//   body.style = 'overflow: hidden'
// }, 300)





popap__Close.addEventListener('click', () => {

  popap__Close.parentElement.classList.remove('is-active');
  body.style = 'overflow: visible'
})


popap__Close.nextElementSibling.lastElementChild.addEventListener('click', () => {

  popap__Close.parentElement.classList.remove('is-active');
  body.style = 'overflow: visible'


})

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




let hamburger = document.querySelector(".hamburger");
let toolbar__MainGroup = document.querySelector('.toolbar__MainGroup');
let menuBg = document.querySelector('.menu-bg');


hamburger.addEventListener("click", function () {
  toolbar__MainGroup.classList.toggle('is-active')
  hamburger.classList.toggle("is-active");
  menuBg.classList.toggle("change-bg");
  body.classList.toggle('is-active')
});



let feedback__Form = document.querySelectorAll('.feedback__Form'),
  feed1 = document.querySelector('.feedback__Form__name'),
  feed2 = document.querySelector('.feedback__Form__phone'),
  feed3 = document.querySelector('.feedback__Form__email');

let feedback__alert = document.querySelector('.feedback__alert');

feedback__Form.forEach(e => {
  e.addEventListener('submit', function (e) {
    e.preventDefault();
    popap__Close.parentElement.classList.remove('is-active');
    body.style = 'overflow: visible'
  
    const TOKEN = `5524873480:AAFe4nbz5EUauDdHrtcGX7yEv2k3IQXnZxs`;
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const CHAT_ID = `-729397711`;
  
  
    let text =
      `
    <b>Заявка с сайта!</b>\n
    Имя отправителя: ${this.name.value},
    Телефон: ${this.phone.value},
    Почта: ${this.email.value}
    `;
  
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: text
    })
      .then((res) => {
  
        this.name.value = "";
        this.phone.value = "";
        this.email.value = "";
        feedback__alert.classList.add('is-active')
        setTimeout(() => {
          feedback__alert.classList.remove('is-active')
        }, 5000)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('end');
      })
  
  });
})



// let panel__Close = document.querySelectorAll('.pClose');


let acc = document.querySelectorAll(".accordion");


acc.forEach(e => {
  let panelClose = e.nextElementSibling.lastElementChild;
  e.addEventListener('click', function () {
    e.classList.toggle("active");
    let panel = e.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }


  })
  panelClose.addEventListener('click', () => {
    e.classList.toggle("active");
    let panel = e.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
})

