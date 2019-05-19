/* The JavaScript from the NJ-web-design */


/* ProgressBar *************************************************************/
function progressbar(id, width, progress) {
    let progressbar = document.getElementById(id);
    progressbar.style = "width: " + width + "pt;";
    progressbar.innerHTML = "<div id='" + id + "b'></div>";
    document.getElementById(id + "b").style = "width: " + width/100*progress + "pt;";
}


/* Menu Bar ***************************************************************/
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

/* Header image ********************************************************/
var body = document.getElementsByTagName("body");

function headerImg(url, size) {
    body[0].style = "background: url(\'" + url + "\') no-repeat center top; background-size: auto " + size +  "pt; background-attachment: scroll";
}