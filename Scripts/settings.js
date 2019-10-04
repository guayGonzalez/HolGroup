$('.menuButton').click(function() {
  const s = $('.menuButton').attr('data-state');

  if (s == 'closed') {
    $('.Navbar').addClass('openNav');

    $('.menuButton').attr('data-state', 'open');
  } else {
    $('.Navbar').removeClass('openNav');

    $('.menuButton').attr('data-state', 'closed');
  }
});
