function playAudio(audioData) {
    var audio = document.querySelector('audio[data-sound="' + audioData + '"]');

    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        return;
    }

    audio.play();
}

function removeClass() {
    this.classList.remove('playing');
}

window.addEventListener('keydown', function (e) {
    var elem = document.querySelector('a[data-sound="' + e.keyCode + '"]').parentElement;
    elem.classList.add('playing');
    playAudio(e.keyCode);
});

document.querySelector('.sounds').addEventListener('click', function (e) {
    var target = e.target;

    if (target.tagName !== 'A') {
        target = target.parentElement;
    }

    playAudio(target.dataset.sound);

});

var sounds =  document.querySelectorAll('.sound');
[].forEach.call(sounds, function (sound) {
    sound.addEventListener('transitionend', removeClass);
})

