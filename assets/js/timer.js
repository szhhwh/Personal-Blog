var timeset = 2000;
function toggle() {
    var value = parseInt(document.getElementById("select").value);
    switch (value != null) {
        case (value == 1):
            timeset = 2000;
            break;
        case (value == 2):
            timeset = 150000;
            break;
        case (value == 3):
            timeset = 180000;
            break;
        case (value == 4):
            timeset = 240000;
            break;
    }
}
function start() {
    var betime = Date.now(), lefttime;
    stopflag = false;
    function check() {
        return Date.now() - betime <= timeset;
    }
    function output() {
        document.getElementById("time-display").innerText = Math.round((Date.now() - betime)/1000);
    }
    setInterval(() => {
        if (check()==true){
            output();
        }
        else if(check()==false){
            clearInterval();
        }
    }, 100);
}
function stop() {
    clearInterval();
}
function test() {
}