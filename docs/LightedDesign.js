/* The JavaScript from the NJ-web-design */


var progessbars = document.getElementsByClassName("progressbar");
var windows = document.getElementsByClassName("window");
var winPos = new Array();


/* Init *******************************************************************/
function init() {
    console.groupCollapsed("init");

    var nav = document.getElementsByTagName("nav")[0];
    var navHTML = nav.innerHTML;
    nav.innerHTML = "<elem onclick='toggle_menu();'></elem>" + navHTML;

    progressbar();

    let toggleSwitches = document.getElementsByClassName("toggleSwitch");
    toggleSwitch(toggleSwitches);

    for (i = 0; i < windows.length; i++) {
        windows[i].style = "left: "+ i + "00%;";
        winPos[i] = i + "00";
        console.count("set window position");    
    }
    if (windows.length == 0) {console.warn("windows: ", windows.length);}
    else {console.info("windows: ", windows.length);}
    console.info("progessbars: ", progessbars.length);
    console.info(winPos[0], winPos[1], winPos[2]);

    /* download_window */
    document.write("<div style='visibility:hidden' id='download_window'><div id='download_window_background' onclick='close_download_window()''></div><div id='download_window-pane1'><header id='download_window_name'>Nicht vorhanden</header><a id='download_window_button' href='' download><button style='float:right;'>Download</button></a><div id='download_window_pane2'><img id='download_window_image' src='' width='400px'></div></div></div>");
    console.info("download_window prepared");

    console.groupEnd();
    console.log("init finished");
}

function mobileDevice() {
    let UserAgent = navigator.userAgent.toLowerCase();
    if(UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60)/)>-1){
      return(true);
    } else {return(false);}
}

function getSize() {
    var myWidth = 0, myHeight = 0;

    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [ myWidth, myHeight ];
}

/* ProgressBar *************************************************************/

function progressbar() {
    let progressbars = document.getElementsByClassName("progressbar");
    for(i=0;i<progressbars.length;i++) {
        let settings = progressbars[i].innerHTML.split(",");
        progressbars[i].style = "width: " + settings[1] + "pt;";
        progressbars[i].innerHTML = "<div id='" + i + "b' style='width: "+settings[1]/100*settings[0]+"pt;'></div>";
        //window.setTimeout(function(){ document.getElementById(i + "b").style.width = settings[1]/100*settings[0] + "pt;"; }, 100);
    }
}


/* Navigation ***************************************************************/
var elem = document.getElementsByTagName("elem");
var menuStatus = "close";
function toggle_menu() {
    if (getSize()[0] <= "550") {
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

function link(link) {
    window.location.href = link;
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


/* download-window ******************************************************/

function download_window(src, img, title) {
    var download_window = document.getElementById("download_window");
    download_window.style = "visibility: visible;";
    document.getElementById("download_window_button").href = src;
    document.getElementById("download_window_image").src = img;
    document.getElementById("download_window_name").innerHTML = title;
}

function close_download_window() {
    document.getElementById("download_window").style = "visibility: hidden;"
}


/* toggleSwitch *********************************************************/

function toggleSwitch(toggleSwitches) {
    for (i=0; i < toggleSwitches.length; i++) {
        if (toggleSwitches[i].getAttribute("checked") == "true") {
            toggleSwitches[i].innerHTML = "<span id='bar' checked='true'></span><span id='knob' checked='true'></span>";
        } else {
            toggleSwitches[i].innerHTML = "<span id='bar' checked='false'></span><span id='knob' checked='false'></span>";
        }
        toggleSwitches[i].setAttribute('onclick','changeToggleSwitch("", "'+i+'")');
    }
}

function changeToggleSwitch(id, i) {
    if(id == "") {
        let toggleSwitch = document.getElementsByClassName("toggleSwitch")[i];

        if (toggleSwitch.getAttribute("checked") == "false") {
            toggleSwitch.innerHTML = "<span id=\'bar\' checked='true'></span><span id=\'knob\' checked='true'></span>";
            toggleSwitch.setAttribute("checked", "true");
        } else {
            toggleSwitch.innerHTML = "<span id=\'bar\' checked='false'></span><span id=\'knob\' checked='false'></span>";
            toggleSwitch.setAttribute("checked", "false");
        }
    } else {
        let toggleSwitch = document.getElementById(id);

        if (toggleSwitch.getAttribute("checked") == "false") {
            toggleSwitch.innerHTML = "<span id=\'bar\' checked='true'></span><span id=\'knob\' checked='true'></span>";
            toggleSwitch.setAttribute("checked", "true");
        } else {
            toggleSwitch.innerHTML = "<span id=\'bar\' checked='false'></span><span id=\'knob\' checked='false'></span>";
            toggleSwitch.setAttribute("checked", "false");
        }
    }
}

function getToggleSwitch(id) {
    if (document.getElementById(id).getAttribute("checked") == "true") {return true;}
    else if (document.getElementById(id).getAttribute("checked") == "false") {return false;}
}

function setToggleSwitch(id, value) {
    let toggleSwitch = document.getElementById(id);

    if (value == true) {
        toggleSwitch.innerHTML = "<span id=\'bar\' checked='true'></span><span id=\'knob\' checked='true'></span>";
        toggleSwitch.setAttribute("checked", "true");
    } else if (value == false) {
        toggleSwitch.innerHTML = "<span id=\'bar\' checked='false'></span><span id=\'knob\' checked='false'></span>";
        toggleSwitch.setAttribute("checked", "false");
    }
}