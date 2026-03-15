const overlay = document.querySelector('#startupOverlay');
const button = overlay.querySelector('.buttonContainer');
const title = overlay.querySelector('span');
const scanlines = overlay.querySelector('#scanlines');

overlay.querySelector("button[target='startup']").addEventListener('click', (event) => {startupSeq()});
overlay.querySelector("button[target='quickstart']").addEventListener('click', (event) => {quickStart()});

function startupSeq() {
    console.log('called startupSeq()');

    overlay.style.setProperty('transition', '3s');
    overlay.style.setProperty('background', 'none');
    overlay.style.setProperty('pointer-events', 'none');
    scanlines.style.setProperty('pointer-events', 'none');

    button.remove();
    setTimeout(() => {
        title.remove();
    }, 4500);

    const audio = new Audio('sounds/webtoys/visunov_alien_var.mp3');
    audio.play();
}

function quickStart() {
    console.log('called quickStart()');

    overlay.style.setProperty('background', 'none');
    overlay.style.setProperty('pointer-events', 'none');
    scanlines.style.setProperty('pointer-events', 'none');

    button.remove();
    title.remove();
}