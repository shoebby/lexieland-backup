let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

console.log("width: " + vw + "| height: " + vh);

const features_sier = "left=775,top=600,width=500,height=420";
const features_spr = "left=1325,top=600,width=750,height=750";

function openRequestedTab() {
    let spr = window.open('https://www.lexie.land/dist/visualizer.html', '1', features_spr);
    let sier = window.open('https://www.lexie.land/dist/sierpinski.html', '2', features_sier);
}

const linker = document.querySelector("input[target='OpenWindows']");
linker.addEventListener("click", (event) => {
    openRequestedTab();
    event.preventDefault();
});