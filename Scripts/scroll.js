/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
const controller = new ScrollMagic.Controller();

function Big() {
  // News Section

  const tl = new TimelineMax({onUpdate: updatePercentage});

  tl.from('.News', .5, {x: '-100%', opacity: 0});

  new ScrollMagic.Scene({
    triggerElement: '.Header',
    triggerHook: 0,
    duration: '50%',
  })
      .setTween(tl)
      .addTo(controller);

  // Experience Section

  const tl2 = new TimelineMax();

  tl2.from('#expTitle', 1, {opacity: 0});
  tl2.from('#expDesc', 1, {opacity: 0}, .5);

  new ScrollMagic.Scene({
    triggerElement: '.Titles',
    triggerHook: 0.75,
  })
      .setTween(tl2)
      .addTo(controller);

  // Us Section

  const tl3 = new TimelineMax();

  tl3.from('#usTitle', 1, {opacity: 0});

  new ScrollMagic.Scene({
    triggerElement: '.About',
    triggerHook: 0.75,
  })
      .setTween(tl3)
      .addTo(controller);

  const tl4 = new TimelineMax({onUpdate: updatePercentage});

  tl4.from('.About .images .colorSec', 1, {x: '-100%'});

  new ScrollMagic.Scene({
    triggerElement: '.About',
    triggerHook: 0.70,
    duration: '20%',
  })
      .setTween(tl4)
      .addTo(controller);

  const tl5 = new TimelineMax();

  tl5.from('.About .images img', 1, {opacity: 0});

  new ScrollMagic.Scene({
    triggerElement: '#usDesc',
    triggerHook: 0.70,
  })
      .setTween(tl5)
      .addTo(controller);

  // Contact Section

  if (window.innerWidth > 600) {
    const tl6 = new TimelineMax();

    tl6.from('.Contact .main h2', 1, {opacity: 0});

    new ScrollMagic.Scene({
      triggerElement: '.Contact',
      triggerHook: 0.75,
    })
        .setTween(tl6)
        .addTo(controller);

    const tl7 = new TimelineMax({onUpdate: updatePercentage});

    tl7.from('.contForm', 1, {width: 0});

    new ScrollMagic.Scene({
      triggerElement: '.Contact',
      triggerHook: 0.60,
      duration: '40%',
    })
        .setTween(tl7)
        .addTo(controller);
  }


  function updatePercentage() {
    tl.progress();
  }
}

Big();


