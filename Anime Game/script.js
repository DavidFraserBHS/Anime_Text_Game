var audio, playbtn;
var current;

if (1 == 1){current = 1;}

if (current == 1){
    parkMusic();
}

function parkMusic(){
    audio = new Audio();
    audio.src = "Sound_Files/bensound-cute.mp3";
    audio.loop = true;
    audio.play();
}