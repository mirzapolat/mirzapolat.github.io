var i = 0;
var speed = 70;
var txt;
var soundeffect = new Audio("audio/typingsound.mp3");
soundeffect.currentTime = 5;
soundeffect.playbackRate = 1.5;

var textIndex = 0;
var text = ["HEY", "WIE", "IST", "DAS", "LEBEN?", ":)"];

var d;

var inprogress = false;
function onTextClick() {
    if (inprogress) return;
    inprogress = true;

    d = document.getElementById("yay");

    d.style = "font-size: 60px";
    d.className = "centertext rainbowTextAnimated";

    d.innerHTML = "";
    txt = text[textIndex];

    textIndex++;

    if (textIndex >= text.length) {
        textIndex = 0;
    }


    soundeffect.play();
    writeTypeWriter();
}

function writeTypeWriter() {
    if (i < txt.length) {
        d.innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeTypeWriter, speed);
    }
    else {
        i = 0;
        soundeffect.pause();
        inprogress = false;
    }
}

var muted = false;

function onMuteClick() {
    if (muted) {
        document.getElementById("mutesign").src = "img/volume.png";
        muted = false;
        soundeffect.muted = false;
    }
    else {
        document.getElementById("mutesign").src = "img/mute.png";
        muted = true;
        soundeffect.muted = true;
    }
}