/* The JavaScript from the NJ-web-design */
function mobileDevice() {
    let UserAgent = navigator.userAgent.toLowerCase();
    if(UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60)/)>-1){
      return(true);
    } else {return(false);}
}



function progressbar(id, width, progress) {
    let progressbar = document.getElementById(id);
    progressbar.style = "width: " + width + "pt;";
    progressbar.innerHTML = "<div id='" + id + "b'></div>";
    for (i = 0; i < width/100*progress; i++) {
        window.setTimeout(function(){ progressbar() }, 500);
        document.getElementById(id + "b").style = "width: " + i + "pt;";
    }
}

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