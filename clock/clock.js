let div  = document.querySelector(".container")

function updateClock() {
    let time = new Date()
    let ch = time.getHours()
    let cm = time.getMinutes()
    let cs = time.getSeconds()

    let hour;
    if (ch == 0) {
        hour = 12;
    } else if (ch > 12) {
        hour = ch - 12;
    } else {
        hour = ch;
    }

    let ampm = ch < 12 ? "AM" : "PM";

    hour = hour < 10 ? '0' + hour : hour;
    let minute = cm < 10 ? '0' + cm : cm;
    let second = cs < 10 ? '0' + cs : cs;
    
    div.innerHTML = `<h1> ${hour} : ${minute} : ${second} ${ampm} </h1>`
}

setInterval(updateClock, 1000)