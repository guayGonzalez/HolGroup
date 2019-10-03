/* eslint-disable require-jsdoc */
$(document).ready(()=>{
  animateSingle('.Header img', 'mainAppear', 'mainHidden', 500);

  animateSingle('.mainTitle', 'leftAppear', 'mainHidden', 4000);
});

function animateSingle(obj, sc, rc, t) {
  setTimeout(() =>{
    $(obj).addClass(sc).removeClass(rc);
  }, t);
}

function animateGroup(obj, sc, rc, t) {

  
  setTimeout(() =>{
    $(obj).addClass(sc).removeClass(rc);
  }, t);
}
