var audio_timeup1 = new Audio("/audio/timeup.mp3"), audio_timetoup1 = new Audio("/audio/timetoup.mp3");
var timeset1 = 9000, nIntervId1, clock1, timems1 = 0, suspend1 = false, lock1 = false, audio_lock1 = false, audio_lock3 = false;

function toggle1() {
    var value = parseInt(document.getElementById("select1").value);
    switch (value != null) {
        case (value == 1):
            document.getElementById("time-display-left").innerText = "90s";
            timeset1 = 9000;
            break;
        case (value == 2):
            document.getElementById("time-display-left").innerText = "120s";
            timeset1 = 12000;
            break;
        case (value == 3):
            document.getElementById("time-display-left").innerText = "150s";
            timeset1 = 15000;
            break;
        case (value == 4):
            document.getElementById("time-display-left").innerText = "180s";
            timeset1 = 18000;
            break;
        case (value == 5):
            document.getElementById("time-display-left").innerText = "240s";
            timeset1 = 24000;
            break;
        case (value == 6):
            document.getElementById("time-display-left").innerText = "300s";
            timeset1 = 30000;
            break;
    }
}
function timer1() {
    timems1++;
}
function start1() {
    if (lock1 == false) {
        var lefttime1;
        clock1 = setInterval(timer1, 10);
        function output1() {
            if (timeset1 - timems1 >= 0) {
                if (timeset1 - timems1 <= 1500 && audio_lock3 == false) {
                    audio_timetoup1.play();
                    audio_lock3 = true;
                }
                document.getElementById("time-display-left").style.color = "white";
            }
            else if (timeset1 - timems1 < 0) {
                document.getElementById("time-display-left").style.color = "##70FB65";
                if (audio_lock1 == false) {
                    audio_timeup1.play();
                    audio_lock1 = true;
                }
            }
            lefttime1 = parseFloat((Math.abs(timeset1 - timems1)) / 100);
            document.getElementById("time-display-left").innerText = lefttime1.toFixed(0) + "s";
        }
        nIntervId1 = setInterval(output1, 1);
        lock1 = true;
    }
    else {
        return
    }
}
function pause1() {
    if (lock1==true) {
        clearInterval(nIntervId1);
        clearInterval(clock1);
        lock1 = false;
        suspend1 = true;
    }
    else {
        return
    }
}
function stop1() {
    clearInterval(nIntervId1);
    clearInterval(clock1);
    lock1 = false;
    audio_lock1 = false;
    audio_lock3 = false;
    timems1 = 0;
    suspend1 = false;
    document.getElementById("time-display-left").style.color = "white"
    toggle1();
}

var audio_timeup2 = new Audio("/audio/timeup.mp3"), audio_timetoup2 = new Audio("/audio/timetoup.mp3");
var timeset2 = 9000, nIntervId2, clock2, timems2 = 0, suspend2 = false, lock2 = false, audio_lock2 = false, audio_lock4 = false;

function toggle2() {
    var value = parseInt(document.getElementById("select2").value);
    switch (value != null) {
        case (value == 1):
            document.getElementById("time-display-right").innerText = "90s";
            timeset1 = 9000;
            break;
        case (value == 2):
            document.getElementById("time-display-right").innerText = "120s";
            timeset1 = 12000;
            break;
        case (value == 3):
            document.getElementById("time-display-right").innerText = "150s";
            timeset1 = 15000;
            break;
        case (value == 4):
            document.getElementById("time-display-right").innerText = "180s";
            timeset1 = 18000;
            break;
        case (value == 5):
            document.getElementById("time-display-right").innerText = "240s";
            timeset1 = 24000;
            break;
        case (value == 6):
            document.getElementById("time-display-right").innerText = "300s";
            timeset1 = 30000;
            break;
    }
}
function timer2() {
    timems2++;
}
function start2() {
    if (lock2 == false) {
        var lefttime2;
        clock2 = setInterval(timer2, 10);
        function output2() {
            if (timeset2 - timems2 >= 0) {
                if (timeset2 - timems2 <= 1500 && audio_lock4 == false) {
                    audio_timetoup2.play();
                    audio_lock4 = true;
                }
                document.getElementById("time-display-right").style.color = "white";
            }
            else if (timeset2 - timems2 < 0) {
                document.getElementById("time-display-right").style.color = "##70FB65";
                if (audio_lock2 == false) {
                    audio_timeup2.play();
                    audio_lock2 = true;
                }
            }
            lefttime2 = parseFloat((Math.abs(timeset2 - timems2)) / 100);
            document.getElementById("time-display-right").innerText = lefttime2.toFixed(0) + "s";
        }
        nIntervId2 = setInterval(output2, 1);
        lock2 = true;
    }
    else {
        return
    }
}
function pause2() {
    if (lock2==true) {
        clearInterval(nIntervId2);
        clearInterval(clock2);
        lock2 = false;
        suspend2 = true;
    }
    else {
        return
    }
}
function stop2() {
    clearInterval(nIntervId2);
    clearInterval(clock2);
    lock2 = false;
    audio_lock2 = false
    audio_lock4 = false
    timems2 = 0;
    suspend2 = false;
    document.getElementById("time-display-right").style.color = "white"
    toggle2();
}