let clock = document.getElementById('clock');

function getTime () {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day_night = "AM";

    if(hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }




    clock.innerHTML =`${hours}:${minutes}:${seconds} ${day_night}`

}

setInterval(getTime,500);