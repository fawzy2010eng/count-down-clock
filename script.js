'use strict'
var days = document.querySelector('.days');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var d = new Date();
var end = (d.getTime()+(7*24*60*60*1000));

function settime(){
    var dif = end - (new Date()).getTime();
    var day = Math.floor(dif / (24*60*60*1000));
    days.textContent = day;
    var hour = Math.floor((dif - (day*24*60*60*1000))/(60*60*1000));
    hours.textContent = hour
    var minute = Math.floor((dif - (day*(24*60*60*1000)) - (hour*60*60*1000))/(60*1000));
    minutes.textContent = minute;
    var sec = Math.floor((dif - (day*24*60*60*1000) - (hour*60*60*1000) -(minute*60*1000))/(1000));
    seconds.textContent = sec
}
setInterval(settime,1000);
//settime()