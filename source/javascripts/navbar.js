// collapse navbar onclick in small screens
$(document).ready(function() {

  if (window.matchMedia) {
    var mq = window.matchMedia("(max-width: 767px)");
    var mediaQueryChange = function(mq) {
      if (mq.matches) {
        $(".navbar-collapse").on("click", "a", function(ev) {
          $(ev.delegateTarget).collapse("hide");
        });
      }
    };
    mq.addListener(mediaQueryChange);
    mediaQueryChange(mq);
  }

});
