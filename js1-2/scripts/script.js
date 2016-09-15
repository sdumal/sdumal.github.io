"use strict";

(function() {

var base = prompt("Введите целое число");
var extent = prompt("Введите степень для возведения");

if (!isNumeric(base) || !isNumeric(extent) || !isInteger(base) || !isInteger(extent)) {
    console.error("Error");
} else {
    console.log(base, " ^ ", extent, " = ", pow(base, extent));
}

function pow(x, y) {    
    if (y == 0) {
        return 1;
    } else if (y > 0) {    
        var baseNUmber = x;
        
        for (var i = 1; i < y; i++) {
            x *= baseNUmber;
        }
        
        return x;
    } else {
        var baseNUmber = x;
        y *= -1;
        
        for (var i = 1; i < y; i++) {
            x *= baseNUmber;
        }
        
        return (1 / x);
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInteger(n) {
    return (n - Math.round(n) == 0);
} 

})(window);
