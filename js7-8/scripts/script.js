"use strict";

(function() {
    
    $(document).ready(function() {

        $(".tab:first").toggleClass("active--tab");
        $("p span:first").show();

        $(".tab").click(function() {
            $(".active--tab").toggleClass("active--tab");
            $("p span").hide();

            $(this).toggleClass("active--tab");

            var $tabAttr = $(this).html();

            $('span[data = "'+$tabAttr+'"]').animate({opacity: "show"}, 1000);
        })
    })

})(window);
