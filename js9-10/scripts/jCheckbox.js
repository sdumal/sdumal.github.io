"use strict";

(function() {
    
    $(document).ready(function() {
        
        $('.jCheckBox--inner').mousedown(
            function() {
                changeCheck($(this));
            }
        );
        
        $('.jCheckBox--inner').each(
            function() {
                changeCheckStart($(this));
            }        
        );
        
        function changeCheck(el) {
            var el      = el,
                input   = el.find("input").eq(0);
            
            if(!input.attr("checked")) {
                el.css("background-position", "-48px, 0");
                input.attr("checked", true);
            } else {
                el.css("background-position", "-24px, 0");
                input.attr("checked", false);
            }
            
            return true;
        };
        
        function changeCheckStart(el) {
            var el      = el,
                input   = el.find("input").eq(0);
            
            if(input.attr("checked")) {
                el.css("background-position", "-24px, 0");
            }
            
            return true;
        };        
        
    });
    
})(document);