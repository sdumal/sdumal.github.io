"use strict";

(function() {
    
    $(document).ready(function() {
        
        $('.secondMenu').mouseenter( function() {
            $(this).animate({
                backgroundColor: "#1f9b28"
            }, 200);
        });        
        
        $('.secondMenu').mouseleave( function() {
            $(this).animate({
                backgroundColor: "green"
            }, 200);
        });
        
        $('select').fancySelect();
        
        $('.jcarousel').jcarousel({
            animation: 'slow',
            wrap: 'circular'
        });
        
        $('.jcarousel2').jcarousel({
            animation: 'slow',
            wrap: 'circular',
            vertical: 'true'
        });
        
        $('.jcarousel3').jcarousel({
            animation: 'fast',
            wrap: 'circular'
        });
        
        $('.jcarousel-prev').click(function() {
            $('.jcarousel').jcarousel('scroll', '+=1');
            $('.jcarousel2').jcarousel('scroll', '+=1');
            $('.jcarousel3').jcarousel('scroll', '+=1');
        });

        $('.jcarousel-next').click(function() {
            $('.jcarousel').jcarousel('scroll', '-=1');
            $('.jcarousel2').jcarousel('scroll', '-=1');
            $('.jcarousel3').jcarousel('scroll', '-=1');
        });
        
        $('.options li').click(function() {
            $('.active')
                .removeClass('active')
                .addClass('disable');
            
            var atr = $(this).attr('data-raw-value');
            $('.'+atr)
                .addClass('active')
                .removeClass('disable');
        });
    });
})(document);
