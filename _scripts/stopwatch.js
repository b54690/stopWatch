const h1 = document.getElementsByTagName('h2')[0];
let seconds = 0, minutes = 0, hours = 0,
    time;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    time = setTimeout(add, 1000);
}

function start() {
    timer();
}

function stop() {
    clearTimeout(time);
}

function reset() {
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}
