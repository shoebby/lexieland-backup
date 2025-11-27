let isDrawing = false;

(function() {
    "use strict";

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
            
        event = event || window.event;
            
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        if (isDrawing)
            draw(event);
        else
            return;
    }
    document.onmousedown = (event) => { isDrawing = true }
    document.onmouseup = (event) => { isDrawing = false }

    
})();

function draw(event) {
    let dot;
    dot = document.createElement('div');

    dot.style.setProperty("background", input_background.value);
    dot.style.setProperty("width", input_width.value + "px");
    dot.style.setProperty("height", input_height.value + "px");

    dot.className = "brush";
    dot.style.left = event.pageX + "px";
    dot.style.top = event.pageY + "px";
    document.body.appendChild(dot);
}

const input_width = document.querySelector("#width");
const input_height = document.querySelector("#height");
const input_background = document.querySelector("#background")