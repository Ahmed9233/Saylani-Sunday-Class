
function displaytime() {

    var nab = new Date();
    var hrs = nab.getHours();
    var min = nab.getMinutes();
    var sec = nab.getSeconds();
    var ampm = document.getElementById('ampm');
    var hrrs = nab.getHours();

    if (hrs === 0) {
        hrs = hrs + 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12
    }

    if (hrrs >= 12) {
        ampm.innerText = 'PM';
    }
    else {
        ampm.innerText = 'AM';
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }

    document.getElementById('hours').innerText = hrs;
    document.getElementById('minutes').innerText = min;
    document.getElementById('second').innerText = sec;
}
setInterval(displaytime, 1000);

// Iftari Coundown.

function telltime() {

var a = new Date().getTime();
var b = new Date("April 02, 2023 20:30:00").getTime();
var c = b - a;
var sec = c / (1000);
var min = sec * 60;
var hrs = min * 60;
var day = hrs * 24;

document.getElementById('days').innerText = day;
document.getElementById('hours').innerText = hrs;
document.getElementById('minutes').innerText = min;
document.getElementById('second').innerText = sec;
}
setInterval(telltime, 1000);