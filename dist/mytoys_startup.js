const overlay = document.querySelector('#startupOverlay');
const button = overlay.querySelector('button');
const title = overlay.querySelector('span');
const scanlines = overlay.querySelector('#scanlines');

overlay.querySelector("button[target='startup']").addEventListener('click', (event) => {startupSeq()});

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

    let audio = new Audio('sounds/webtoys/visunov_alien.mp3');
    audio.play();

    // setTimeout(() => {
    //     overlay.remove();
    // }, 5500);
}