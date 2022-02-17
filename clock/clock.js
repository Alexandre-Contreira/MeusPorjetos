function clock() {
    let today = new Date();
    let h = addZero(today.getHours());
    let m = addZero(today.getMinutes());
    let s = addZero(today.getSeconds());
    let now = h + ':' + m + ':' + s;
    setTimeout(clock, 1000);
    document.getElementById('clock').innerHTML = now;

}


function addZero(number) {

    if (number < 10) {
        number = '0' + number;

    }
    return number;
}



