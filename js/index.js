const time = document.querySelectorAll(".time");
let sec = Number(time[2].innerHTML);
let min = Number(time[1].innerHTML);
let hrs = Number(time[0].innerHTML);

var seconds;
var minutes;
var hours;

function go() {
  seconds = setInterval(() => {
    sec = sec + 1;
    if (sec >= 60) {
      sec = 0;
      time[2].innerHTML = "0" + sec;
    } else {
      if (sec <= 9) {
        time[2].innerHTML = "0" + sec;
      } else {
        time[2].innerHTML = sec;
      }
    }
  }, 1000);

  minutes = setInterval(() => {
    min = min + 1;
    if (min >= 60) {
      min = 0;
      time[1].innerHTML = "0" + min;
    } else {
      if (min <= 9) {
        time[1].innerHTML = "0" + min;
      } else {
        time[1].innerHTML = min;
      }
    }
  }, 60000);

  hours = setInterval(() => {
    hours = hours + 1;
    if (hrs <= 9) {
      time[0].innerHTML = "0" + hrs;
    } else {
      time[0].innerHTML = hrs;
    }
  }, 3.6e6);
}

function timer(e) {
  if (e == "play") {
    go();
  }

  if (e == "pause") {
    clearInterval(seconds);
    clearInterval(minutes);
    clearInterval(hours);
  }

  if (e == "reset") {
    clearInterval(seconds);
    clearInterval(minutes);
    clearInterval(hours);
    sec = 0;
    min = 0;
    hrs = 0;
    time[2].innerHTML = "0" + sec;
    time[1].innerHTML = "0" + min;
    time[0].innerHTML = "0" + hrs;
  }
}
