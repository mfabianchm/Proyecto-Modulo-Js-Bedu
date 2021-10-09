const animation = document.querySelector('.hero-animation');
const hero = document.querySelector('.hero');



document.addEventListener('DOMContentLoaded', () => {
   hero.classList.add('hero-animation');
});


const textMenu = document.querySelector('.text-menu');
const textMenu2 = document.querySelector("#text-menu2");
const textMenu3 = document.querySelector("#text-menu3");
const textMenu4 = document.querySelector("#text-menu4");
const buttonFaq = document.querySelector("#button-faq");
const buttonFaq2 = document.querySelector("#button-faq2");
const buttonFaq3 = document.querySelector("#button-faq3");
const buttonFaq4 = document.querySelector("#button-faq4");
const ul = document.querySelector(".ul");
const ul2 = document.querySelector(".ul2");
const ul3 = document.querySelector(".ul3");
const ul4 = document.querySelector(".ul4");
const arrow = document.querySelector("#arrow");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow4 = document.querySelector("#arrow4");
console.log(buttonFaq);



 buttonFaq.addEventListener('click', () => {
     textMenu.classList.replace('text-menu', 'tmc-animation');
     buttonFaq.classList.replace('button', 'button-animation');
     ul.classList.replace('ul', 'ul-animation');
     ul.classList.replace('ul', 'ul-animation');
     arrow.classList.replace('svg', 'svg-animation');

     buttonFaq.addEventListener('click', () => {
      textMenu.classList.replace('tmc-animation', 'text-menu');
      buttonFaq.classList.replace('button-animarion', 'button');
      ul.classList.replace('ul-animation', 'ul');
      ul.classList.replace('ul-animation', 'ul');
      arrow.classList.replace('svg-animation', 'svg');

     }); 
   });


  buttonFaq2.addEventListener('click', () => {
    textMenu2.classList.replace('text-menu', 'tmc-animation');
    buttonFaq2.classList.replace('button', 'button-animation');
    ul2.classList.replace('ul2', 'ul-animation');
    ul2.classList.replace('ul2', 'ul-animation');
    arrow2.classList.replace('svg2', 'svg-animation');

    buttonFaq2.addEventListener('click', () => {
      textMenu2.classList.replace('tmc-animation', 'text-menu');
      buttonFaq2.classList.replace('button-animarion', 'button');
      ul2.classList.replace('ul-animation', 'ul2');
      ul2.classList.replace('ul-animation', 'ul2');
      arrow2.classList.replace('svg-animation', 'svg2');

 });
});

 buttonFaq3.addEventListener('click', () => {
    textMenu3.classList.replace('text-menu', 'tmc-animation');
    buttonFaq3.classList.replace('button', 'button-animation');
    ul3.classList.replace('ul3', 'ul-animation');
    ul3.classList.replace('ul3', 'ul-animation');
    arrow3.classList.replace('svg3', 'svg-animation');

    buttonFaq3.addEventListener('click', () => {
      textMenu3.classList.replace('tmc-animation', 'text-menu');
      buttonFaq3.classList.replace('button-animation', 'button');
      ul3.classList.replace('ul-animation', 'ul3');
      ul3.classList.replace('ul-animation', 'ul3');
      arrow3.classList.replace('svg-animation', 'svg3');

 });
});

 buttonFaq4.addEventListener('click', () => {
    textMenu4.classList.replace('text-menu', 'tmc-animation');
    buttonFaq4.classList.replace('button', 'button-animation');
    ul4.classList.replace('ul4', 'ul-animation');
    ul4.classList.replace('ul4', 'ul-animation');
    arrow4.classList.replace('svg4', 'svg-animation');

    buttonFaq4.addEventListener('click', () => {
      textMenu4.classList.replace('tmc-animation', 'text-menu');
      buttonFaq4.classList.replace('button-animation', 'button');
      ul4.classList.replace('ul-animation', 'ul4');
      ul4.classList.replace('ul-animation', 'ul4');
      arrow4.classList.replace('svg-animation', 'svg4');

 });
});



window.addEventListener('scroll',()=> {
  let flexContainer = document.querySelector('.flex-container');
  let flexContainerPosition = flexContainer.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if(flexContainerPosition < screenPosition) {
   flexContainer.classList.add('active');
  } else {
    flexContainer.classList.remove('active');
  }
});
