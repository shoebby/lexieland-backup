const windowTemplate = document.querySelector("#windowNaked");

document.querySelectorAll('table.interactive').forEach(element => {
    element.addEventListener('click', (event) => {
        const highlightedClass = 'highlighted';
        const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
        const newlySelectedRow = event.composedPath().find(isRow);
        const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
        if(previouslySelectedRow){
            previouslySelectedRow.classList.toggle(highlightedClass);
        }

        if (newlySelectedRow) {
            newlySelectedRow.classList.toggle(highlightedClass);
        }
    })
});

$( function() {
    $( ".container" ).draggable({
        handle: ".title-bar",
        stack: ".ui-draggable", /* Stack the currently dragged item on top of all other items. */
		distance: 0, /* I believe this has to do with mouse distance? */
		containment: "document", /* Makes it so pieces don't get lost off the page while dragging them */
    });
} );



// poppy
const poppy = document.querySelector("#poppy");
const poppyBox = poppy.querySelector("div");
const poppyDialog = poppy.querySelector("#poppyTxt");

document.querySelector("a[target='openPoppy']").addEventListener('click', (event) => {startPoppy()});

function startPoppy() {
    poppy.style.setProperty("bottom", "10vh");
    poppy.style.setProperty("right", "5vw");

    poppyBox.style.setProperty("top", "5%");
    poppyBox.style.setProperty("left", "-150%");

    poppyDialog.innerHTML = "Hi! I'm Poppy, your <red>V</red>isunov<red>OS</red> assistant! Let's craft some stories!"

    poppy.style.setProperty('display', 'block');
}
function closePoppy() {
    poppyStep = 0;
    poppy.style.setProperty('display', 'none');
}

let poppyStep = 0;
poppy.querySelector("input[target='progressPoppy']").addEventListener('click', (event) => {progressPoppy()});

function progressPoppy() {
    poppyStep += 1;

    switch (poppyStep) {
        case 1:
            poppy.style.setProperty("bottom", "65vh");
            poppy.style.setProperty("right", "70vw");

            poppyBox.style.setProperty("top", "10%");
            poppyBox.style.setProperty("left", "100%");

            poppyDialog.innerHTML = "Over here you can see some of your installed toys, Recurse^3 is my favourite!<br>Feel free to play around with them and see what they do!";
            break;
        case 2:
            document.querySelector("#cat_media summary").click();

            poppy.style.setProperty("bottom", "35vh");
            poppy.style.setProperty("right", "10vw");

            poppyBox.style.setProperty("top", "60%");
            poppyBox.style.setProperty("left", "-150%");

            poppyDialog.innerHTML = "The media player lets you listen to some songs while you work, with a pretty visualizer to boot!";
            break;
        default:
            closePoppy();
    }
}

// audio functionality
document.querySelectorAll("button, summary, input, a").forEach(element => {
    element.addEventListener('click', (event) => {
        playAudio('./sounds/webtoys/click.mp3')
    })
});

function playAudio(path) {
    console.log("playing " + path)
    const audio = new Audio(path);
    audio.play();
}



// maximizing and closing windows
document.querySelectorAll("button[target='maximize']").forEach(element => {
    element.addEventListener('click', (event) => {
        ToggleWindowSize(element);
    })
});
function ToggleWindowSize(button) {
    const target = button.parentNode.parentNode.parentNode;

    if (button.getAttribute("aria-label") == 'Maximize') {
        target.setAttribute('style', 'width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;');
        button.setAttribute('aria-label','Restore');
    }
    else if (button.getAttribute("aria-label") == 'Restore') {
        const daddy = target.parentNode.id;
        if (daddy == 'cat_fractal' || daddy == 'cat_popup' || daddy == 'cat_art'){
            target.setAttribute('style', 'width: 36vw;');
        } else if (daddy == 'cat_media') {
            target.setAttribute('style', 'width: 25vw;');
        } else if (daddy == 'cat_recurse') {
            target.setAttribute('style', 'width: 90vw;');
        }
        button.setAttribute('aria-label','Maximize');
    }
}
document.querySelectorAll("button[target='close']").forEach(element => {
    element.addEventListener('click', (event) => {
        element.parentNode.parentNode.parentNode.parentNode.open = false;
    })
});



// creating and closing instantiated windows
document.querySelectorAll("input[target='openWindow'], a[target='openWindow']").forEach(element => {
    element.addEventListener('click', (event) => {
        const page_title = element.getAttribute("value");
        const page_url = element.getAttribute("link");
        openWindow(page_title, page_url);
    })
});
document.querySelectorAll("button[target='closeInstWindow']").forEach(element => {
    element.addEventListener('click', (event) => {
        element.parentNode.parentNode.parentNode.remove();
    })
});
function openWindow(title, url) {
    const newWindow = windowTemplate.cloneNode(true);
    newWindow.removeAttribute('id');
    document.body.appendChild(newWindow);
    newWindow.setAttribute('style', 'display: block; width: 99.7vw; height: 97vh; position: fixed; top: 0; left: 0; z-index: 999;');
    newWindow.querySelector("button[target='closeInstWindow']").addEventListener('click', (event) => {newWindow.remove();});
    newWindow.querySelectorAll("button, input, a").forEach(element => {element.addEventListener('click', (event) => {playAudio('./sounds/webtoys/click.mp3')})});
    newWindow.querySelector('div.title-bar-text').innerHTML = "<img src='images/webtoys/icon_app.png' style='height: 1em; margin-right: .5em;'>" + title;
    newWindow.querySelector('iframe').setAttribute('src', url);
}