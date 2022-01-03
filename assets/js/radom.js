var record = [];
var visit = document.cookie;
var arry = [];
var choise = "ran";
function compute() {
    if (choise == "ran") {
        var frequency = document.getElementById("frequency").value;
        var max = parseInt(document.getElementById("max").value), min = parseInt(document.getElementById("min").value);
        function random() {
            x = Math.floor(Math.random() * (max - min + 1) + min);
            return parseInt(x);
        }
        function match() {
            num = random();
            while (record.includes(num)) {
                num = random();
            }
            return parseInt(num);
        }
        if (record.length > (max - min)) {
            var r = confirm("已经抽取完毕所有数字" + "\n" + "按下确认重置抽取");
            if (r == true) {
                reset();
            }
        }
        else {
            for (s = 0; s < frequency; s++) {
                record.push(match());
                document.getElementById("text").innerText = num;
            }
            var text = "";
            for (i = 0; i < record.length; i++) {
                text += record[i] + "         ";
            }
            document.getElementById("record").innerText = text;
        }
    }
    else if (choise == "spec" && arry != false) {
        var frequency = document.getElementById("frequency").value;
        var max = parseInt(arry.length);
        var num = 0;
        if (record.length >= max) {
            var r = confirm("已经抽取完毕所有数字" + "\n" + "按下确认重置抽取");
            if (r == true) {
                reset();
            }
        }
        else {
            function random() {
                x = Math.floor(Math.random() * (max));
                return parseInt(x);
            }
            function match() {
                num = random();
                while (record.includes(arry[num])) {
                    num = random();
                }
                return parseInt(num);
            }
            for (s = 0; s < frequency; s++) {
                n = match();
                record.push(arry[n]);
            }
            document.getElementById("text").innerText = arry[n];
            var text = "";
            for (i = 0; i < record.length; i++) {
                text += record[i] + "         ";
            }
            document.getElementById("record").innerText = text;
        }
    }
    else {
        alert("请添加数值");
    }
}
function add() {
    var max = parseInt(document.getElementById("max").value), min = parseInt(document.getElementById("min").value);
    var numb = document.getElementById("add").value;
    if (numb !== "" && numb >= min && numb <= max) {
        if (arry.includes(numb) == false) {
            arry.push(numb);
        }
        else {
            alert("请不要重复输入同一数值");
        }
        var text = "";
        document.getElementById("arry").innerText = "";
        for (i = 0; i < arry.length; i++) {
            text = arry[i];
            document.getElementById("arry").insertAdjacentHTML('beforeend', '<a onclick="delect()">' + text + "         " + '</a>');
        }
    }
    else {
        alert("请输入正确的数值");
    }
}
function resest() {
    document.getElementById("arry").innerText = "要抽取的学号";
    arry = [];
}
function select() {
    reset();
    if (choise == "ran") {
        choise = "spec";
    }
    else {
        choise = "ran";
    }
}
function reset() {
    record = [];
    document.getElementById("record").innerText = "已抽取学号";
    document.getElementById("text").innerText = "学号抽取";
}
function welcome() {
    if (visit == "") {
        alert("随机数生成器 V0.3" + "\n" + "添加了特定学号抽取功能和使用说明" + "\n" + "优化了抽取器的性能" + "\n" + "细节优化：已抽取学号更易读");
        document.cookie = "y=0; expires=Thu, 18 Dec 2043 12:00:00 GMT";
    }
}
function delect() {
    alert("单个删除功能正在开发中");
    //alert(document.getElementById("yue").outerText);
}