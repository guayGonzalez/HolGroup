/* eslint-disable require-jsdoc */
$(document).ready(()=>{
  animateSingle('.Header img', 'mainAppear', 'mainHidden', 500);

  animateSingle('.mainTitle', 'leftAppear', 'mainHidden', 4000);

  animateGroup('.menu ul li', 'x', 'x', 'x');
});

function animateSingle(obj, sc, rc, t) {
  setTimeout(() =>{
    $(obj).addClass(sc).removeClass(rc);
  }, t);
}

function animateGroup(objs, sc, rc, t) {
  const objects = $(objs);

  for (let i = 0; i<objects.length; i++) {
    console.log(objects[i]);
  }
}
