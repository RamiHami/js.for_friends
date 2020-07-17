init = function() {
    let buttons = document.getElementsByClassName('js-video-button play__term');
    for (let i in buttons) {
        buttons[i].onclick = playAudio;
        buttons[i].className += " audio_" + i;
    }
    
    let innerAudio = document.getElementsByClassName("term__item");
    for (let j = 0; j < innerAudio.length; j++) {
        let audio = document.createElement("audio");
        let audioName = "audio_" + j;
        audio.id = audioName;
        audio.src = "media/audio/" + audioName + ".mp3";
        innerAudio[j].append(audio);
    }
}

playAudio = function(event) {
    let getAudioName = event.path[0].classList[2];
    document.getElementById(getAudioName).play();
}

window.onload = init;