$(document).ready(function() {
  var options = {
    percentageInnerCutout: 70,
    animationEasing: 'easeOutQuint',
    animateScale: true,
    showTooltips: false,
  };

  var data = {
    html_css: [
      { value: 93, color: 'hsl(120, 39%, 54%)' },
      { value: 7, color: 'hsl(120, 0%, 90%)' },
    ],
    sass: [
      { value: 93, color: 'hsl(120, 39%, 54%)' },
      { value: 7, color: 'hsl(120, 0%, 90%)' },
    ],
    backbone: [
      { value: 93, color: 'hsl(120, 39%, 54%)' },
      { value: 7, color: 'hsl(120, 0%, 90%)' },
    ],
    react: [
      { value: 85, color: 'hsl(120, 39%, 54%)' },
      { value: 15, color: 'hsl(120, 0%, 90%)' },
    ],
    serverside: [
      { value: 70, color: 'hsl(120, 39%, 54%)' },
      { value: 30, color: 'hsl(120, 0%, 90%)' },
    ],
    design: [
      { value: 60, color: 'hsl(120, 39%, 54%)' },
      { value: 40, color: 'hsl(120, 0%, 90%)' },
    ],
  };

  var initGraphs = function() {
    var graphInitDelay = 250;

    $.each(data, function(key, data) {
      var canvas = document.querySelector('#' + key);

      if (canvas) {
        graphInitDelay += 250;

        setTimeout(function() {
          var ctx = canvas.getContext('2d');
          var chart = new Chart(ctx);
          chart.Doughnut(data, options);
        }, graphInitDelay);
      }
    });
  };

  $('#skills').on('inview', function() {
    $(this).off('inview');
    initGraphs();
  });
});
