(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    $(document).ready(function () {
        $(".common-spinner, .common-demo-close").on("click", function(){
            $(".common-demo").toggleClass("open");
        });
        $(".common-demo-overlay").on("click", function(){
            $(".common-demo").removeClass("open");
        });
    })
}(jQuery));