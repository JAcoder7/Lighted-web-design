/* The JavaScript from the NJ-web-design */
var progessbars = document.getElementsByClassName("progressbar");
var windows = document.getElementsByClassName("window");

var winPos = new Array();
function init() {
    console.groupCollapsed("init");

    for (i = 0; i < document.getElementsByClassName("window").length; i++) {
        windows[i].style = "left: "+i + "00%;";
        winPos[i] = i + "00";
        console.count("set window position");    
    }
    if (windows.length == 0) {console.warn("windows: ", windows.length);}
    else {console.info("windows: ", windows.length);}
    console.info("progessbars: ", progessbars.length);
    console.info(winPos[0], winPos[1], winPos[2]);
    console.groupEnd();
    console.log("init finished");
}

function progressbar(id, width, progress) {
    let progressbar = document.getElementById(id);
    progressbar.style = "width: " + width + "pt;";
    progressbar.innerHTML = "<div id='" + id + "b'></div>";
    document.getElementById(id + "b").style = "width: " + width/100*progress + "pt;";
}

var elem = document.getElementsByTagName("elem");
var menuStatus = "close";
function toggle_menu() {
    if (menuStatus == "close") {
        document.getElementsByTagName("nav")[0].style = "height: 100%;";
        for (i = 0; i < elem.length; i++) {
            elem[i].style = "visibility: visible";
        }
        menuStatus = "open";
    }
    else {
        document.getElementsByTagName("nav")[0].style = "height: 50pt;";
        for (i = 0; i < elem.length; i++) {
            elem[i].style = "visibility: hidden";
        }
        elem[0].style = "visibility: visible";
        menuStatus = "close";
    }
}

function del(str, symbol) {
    let temp = str.toString();
    temp = temp.replace(symbol, "");
    return temp;
}


function windowChange(win) {
    var changingWin = windows[win];
    let IDwinLeft = del(changingWin.style.left, "%");

    if (IDwinLeft < 0) {
        alert("left");
    }
    else if (winPos[win] >= 0) { //right
        console.info("right");
        console.info(win, winPos[win]);
        for (x = winPos[win]; x > 0;) {
            for (i = 0; i < windows.length; i++) {
                windows[i].style.left = winPos[i] - 100 + "%";
                winPos[i] = winPos[i] - 100;
            }
            console.log(winPos[0], winPos[1], winPos[2]);
        }
        console.info(winPos[0], winPos[1], winPos[2]);
    }
}