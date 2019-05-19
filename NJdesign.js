/* The JavaScript from the NJ-web-design */


var progessbars = document.getElementsByClassName("progressbar");
var windows = document.getElementsByClassName("window");
var winPos = new Array();


/* Init *******************************************************************/
function init() {
    console.groupCollapsed("init");

    for (i = 0; i < windows.length; i++) {
        windows[i].style = "left: "+ i + "00%;";
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

function mobileDevice() {
    let UserAgent = navigator.userAgent.toLowerCase();
    if(UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60)/)>-1){
      return(true);
    } else {return(false);}
}


/* ProgressBar *************************************************************/
function progressbar(id, width, progress) {
    let progressbar = document.getElementById(id);
    progressbar.style = "width: " + width + "pt;";
    progressbar.innerHTML = "<div id='" + id + "b'></div>";
    for (i = 0; i < width/100*progress; i++) {
        window.setTimeout(function(){ progressbar() }, 500);
        document.getElementById(id + "b").style = "width: " + i + "pt;";
    }
}


/* Menu Bar ***************************************************************/
var elem = document.getElementsByTagName("elem");
var menuStatus = "close";
function toggle_menu() {
    if (mobileDevice()) {
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
}

function del(str, symbol) {
    let temp = str.toString();
    temp = temp.replace(symbol, "");
    return temp;
}

function windowChange(win) {
    var changingWin = windows[win];
    let IDwinLeft = del(changingWin.style.left, "%");
    toggle_menu();


    if (IDwinLeft < 0) { //left
        for (; winPos[win] != 0;) {
            for (i = 0; i < windows.length; i++) {
                winPos[i] = winPos[i] + 100;
                windows[i].style.left = winPos[i] + "%";
            }
        }
        console.info("window positions: ", winPos[0], winPos[1], winPos[2]);
    }
    
    if (winPos[win] > 0) { //right
        for (; winPos[win] != 0;) {
            for (i = 0; i < windows.length; i++) {
                winPos[i] = winPos[i] - 100;
                windows[i].style.left = winPos[i] + "%";
            }
        }
        console.info("window positions: ", winPos[0], winPos[1], winPos[2]);
    }
}

/* Header image ********************************************************/
var body = document.getElementsByTagName("body");

function headerImg(url, size) {
    body[0].style = "background: url(\'" + url + "\') no-repeat center top; background-size: auto " + size +  "pt; background-attachment: scroll";
}