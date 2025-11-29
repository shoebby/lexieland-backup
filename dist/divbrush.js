let isDrawing = false;

const dotTemplate = document.createElement('div');

const canvasEl = document.querySelector("#canvas");

    canvasEl.onmousemove = handleMouseMove;
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
    canvasEl.onmousedown = (event) => { isDrawing = true; setStroke(); handleMouseMove(event);}
    canvasEl.onmouseup = (event) => { isDrawing = false }

function setStroke() {
    dotTemplate.style.setProperty("background", input_background.value);
    dotTemplate.style.setProperty("background-repeat", "no-repeat");
    dotTemplate.style.setProperty("background-size", "cover");

    dotTemplate.style.setProperty("border-left", input_borderL.value);
    dotTemplate.style.setProperty("border-right", input_borderR.value);
    dotTemplate.style.setProperty("border-top", input_borderT.value);
    dotTemplate.style.setProperty("border-bottom", input_borderB.value);
    dotTemplate.style.setProperty("border-radius", input_borderRadius.value + "px");

    dotTemplate.style.setProperty("width", input_width.value + "px");
    dotTemplate.style.setProperty("height", input_height.value + "px");

    dotTemplate.style.setProperty("animation", "brushAnim " + input_animSettings.value);

    dotTemplate.className = "brush";
}

function draw(event) {
    let newDot = dotTemplate.cloneNode();
    let shadow = newDot.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [new CSSStyleSheet()];
    shadow.adoptedStyleSheets[0].replaceSync("@keyframes brushAnim {" + input_animation.value + "}");

    newDot.style.left = event.pageX - (input_width.value/2) + "px";
    newDot.style.top = event.pageY - (input_height.value/2) + "px";

    canvasEl.appendChild(newDot);
}

const input_width = document.querySelector("#width");
const input_height = document.querySelector("#height");
const input_background = document.querySelector("#background");
const input_borderL = document.querySelector("#borderL");
const input_borderR = document.querySelector("#borderR");
const input_borderT = document.querySelector("#borderT");
const input_borderB = document.querySelector("#borderB");
const input_borderRadius = document.querySelector("#borderRadius");
const input_animation = document.querySelector("#animation");
const input_animSettings = document.querySelector("#animSettings");