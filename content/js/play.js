function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function loadGame() {
    let url = getCookie("url");
    let desc = getCookie("desc");
    if (url != "") {
        document.getElementById('game').src = url;
        document.getElementById("desc").innerHTML = desc;
    } else {
        window.location.replace("https://spinningchips.lol/games/");
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyF") {
        iframefull();
    }
});

function iframefull() {
    document.getElementById("game").requestFullscreen();
    document.getElementById("game").mozRequestFullScreen();
    document.getElementById("game").webkitRequestFullscreen();
    document.getElementById("game").msRequestFullscreen();
}