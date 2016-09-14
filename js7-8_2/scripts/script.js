"use strict";

(function() {
    
    $(document).ready(function() {
        $("input").mousemove(function() {
            $(this).next().show();
            });
        
        $("input").mouseleave(function() {
            $(this).next().hide();
            });
        
        $(".showHelp").click(function() {
            $(".tip").show();                   
            });
    });
})();
