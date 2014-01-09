$(document).ready(function() {

  // collapse navbar onclick in small screens
  if (window.matchMedia) {
    var mq = window.matchMedia("(max-width: 767px)");
    var mediaQueryChange = function(mq) {
      if (mq.matches) {

        $(".navbar").on("click", "a", function(ev) {
          var navbarCollapse = $(ev.delegateTarget).find(".navbar-collapse");
          if (navbarCollapse.hasClass("in")) {
            navbarCollapse.collapse("hide");
          }
        });

      } else {

        $(".navbar").off("click", "a");

      }
    };
    mq.addListener(mediaQueryChange);
    mediaQueryChange(mq);
  }

});
