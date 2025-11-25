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

document.querySelectorAll("button[target='maximize']").forEach(element => {
    element.addEventListener('click', (event) => {
        ToggleWindowSize(element);
    })
});

document.querySelectorAll("button[target='close']").forEach(element => {
    element.addEventListener('click', (event) => {
        element.parentNode.parentNode.parentNode.parentNode.open = false;
    })
});

document.querySelectorAll("input[target='openWindow']").forEach(element => {
    element.addEventListener('click', (event) => {
        const page_title = element.getAttribute("value");
        const page_url = element.getAttribute("link");
        openWindow(page_title, page_url);
    })
});
document.querySelectorAll("a[target='openWindow']").forEach(element => {
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
    newWindow.setAttribute('style', 'display: block; width: 99.7vw; height: 97vh; position: fixed; top: 0; left: 0;');
    newWindow.querySelector("button[target='closeInstWindow']").addEventListener('click', (event) => {newWindow.remove();});
    newWindow.querySelector('div.title-bar-text').innerHTML = title
    newWindow.querySelector('iframe').setAttribute('src', url);
}

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