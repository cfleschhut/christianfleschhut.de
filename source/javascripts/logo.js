var rotate = function(element, value) {
  element.css({
    '-webkit-transform': 'rotate(' + value + 'deg)',
    '-moz-transform': 'rotate(' + value + 'deg)',
    'transform': 'rotate(' + value + 'deg)'
  });
};

$(window).on('scroll', function(ev) {
  var logo = $('#logo a'),
    scrollPos = $(this).scrollTop(),
    value = Math.floor(scrollPos * 0.25) * -1;
  rotate(logo, value);
});
