/* eslint-disable require-jsdoc */
$(document).ready(()=>{
  window.innerWidth > 600 ? set() : setMobile();
});

function setMobile() {
  animateSingle('.Header img', 'Appear', 'mainHidden', 500);

  animateSingle('.mainTitle', 'leftAppear', 'mainHidden', 2000);

  animateSingle('.menu', 'topAppear', 'mainHidden', 4000);

  animateSingle('.logo', 'Appear', 'mainHidden', 5000);
}

function set() {
  animateSingle('.Header img', 'mainAppear', 'mainHidden', 500);

  animateSingle('.mainTitle', 'leftAppear', 'mainHidden', 4000);

  animateSingle('.menu', 'topAppear', 'mainHidden', 6000);

  animateSingle('.logo', 'Appear', 'mainHidden', 7000);
}

function animateSingle(obj, sc, rc, t) {
  setTimeout(() =>{
    $(obj).addClass(sc).removeClass(rc);
  }, t);
}


