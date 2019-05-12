/* The JavaScript from the NJ-web-design */

function progressbar(id, width, progress) {
    let progressbar = document.getElementById(id);
    progressbar.style = "width: " + width + "pt;";
    progressbar.innerHTML = "<div id='" + id + "b'></div>";
    document.getElementById(id + "b").style = "width: " + width/100*progress + "pt;";
}