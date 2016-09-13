"use strict";

(function() {
var timerID, splitDiv;
var ms = 0, ss = 0, mn = 0, hr = 0;

var wrapper = document.createElement('div');
var splitContainer = document.createElement('div');
var splitPoint = document.createElement('div');

var msec = document.createElement('div');
var sec = document.createElement('div');
var min = document.createElement('div');
var hour = document.createElement('div');

var start = document.createElement('button');
var pause = document.createElement('button');
var reset = document.createElement('button');
var split = document.createElement('button');

wrapper.className = "wrapper";

msec.classList.add("position", "bold", "h3");
sec.classList.add("position", "bold", "h1");
min.classList.add("position", "bold", "h1");
hour.classList.add("position", "bold", "h1");

start.classList.add("btn", "btn-primary", "btn-size", "btn-position");
pause.classList.add("btn", "btn-primary", "btn-size", "hide", "btn-position");
reset.classList.add("btn", "btn-primary", "btn-size", "btn-position");
split.classList.add("btn", "btn-primary", "btn-size", "btn-position");

msec.innerHTML = '00';
sec.innerHTML = '00.';
min.innerHTML = '00:';
hour.innerHTML = '00:';

start.innerHTML = "start";
pause.innerHTML = "pause";
reset.innerHTML = "reset";
split.innerHTML = "split";

document.body.appendChild(wrapper);

wrapper.appendChild(hour);
wrapper.appendChild(min);
wrapper.appendChild(sec);
wrapper.appendChild(msec);

document.body.appendChild(start);
document.body.appendChild(pause);
document.body.appendChild(reset);
document.body.appendChild(split);

document.body.appendChild(splitContainer);

start.onclick = function() { timerID = setInterval(msCount, 10);            
                            pause.classList.toggle("hide"); 
                            start.classList.toggle("hide"); };

pause.onclick = function() { clearInterval(timerID); 
                            start.classList.toggle("hide"); 
                            pause.classList.toggle("hide"); };

reset.onclick = function() { clearInterval(timerID);
                           resetTimer(); };

split.onclick = splitAction;

function msCount() {
    if (ms < 100) {
      
        if (ms < 10) {
            msec.innerHTML = '0' + ms;
        } else {
            msec.innerHTML = ms;
        }
        
        ms += 1;
    } else {
        count();
        
        ms = 0;
        msec.innerHTML = ms;
        
        msCount();
    }
}

function count() {
    if (ss < 60) {
        ss++;
      
        if (ss < 10) { 
            sec.innerHTML = '0' + ss + '.';
        } else {
            sec.innerHTML = ss + '.';
        }
     } else {
        ss = 0;
        sec.innerHTML = '00.';
        mn++;
        
        if (mn < 10) {
            min.innerHTML = '0' + mn + ':';
        } else {
            min.innerHTML = mn + ':';
        }
        
        if (mn === 60) {
            mn = 0;
            min.innerHTML = '00:';
            hr++;
            
            if (hr < 10) {
                hour.innerHTML = '0' + hr + ':';
            } else {
                hour.innerHTML = hr + ':';
            }
        }
        
        count();
     }
}

function resetTimer() {
    clearSplit();
    
    msec.innerHTML = '00'; 
    sec.innerHTML = '00.'; 
    min.innerHTML = '00:'; 
    hour.innerHTML = '00:';
    
    ms = 0;
    ss = 0;
    mn = 0;
    hr = 0;
    
    if (start.classList.contains("hide")) {
        pause.classList.toggle("hide"); 
        start.classList.toggle("hide");
    }                            
}

function splitAction() {
    // splitContainer.appendChild(splitPoint);
    
    splitPoint = hour.innerHTML + min.innerHTML + sec.innerHTML + 
                 msec.innerHTML;
                 
    splitDiv = document.createElement('div');
    splitDiv.innerHTML = "split: " + splitPoint;
    splitDiv.classList.add("h5");
    
    splitContainer.appendChild(splitDiv);
}

function clearSplit() {
    splitContainer.innerHTML = "";
}
})();
