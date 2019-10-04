/* eslint-disable require-jsdoc */
let elements;
let windowHeight;

function init() {
  elements = document.querySelectorAll('.hidden');

  windowHeight = window.innerHeight;
}

function checkPosition() {
  const news = document.getElementsByClassName('News');

  if (news[0].getBoundingClientRect().top - windowHeight <= -250) {
    news[0].classList.add('fade-InLeft');
    news[0].classList.remove('hiddenLeft');
  }

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    const posFromTop = elements[i].getBoundingClientRect().top;

    if (posFromTop - windowHeight <= 0) {
      element.classList.add('fade-In');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkPosition);

init();
checkPosition();

