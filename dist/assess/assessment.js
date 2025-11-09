let windowObjectReference = null; // global variable
const features_sier = "left=775,top=600,width=500,height=420";
const features_spr = "left=1325,top=600,width=500,height=420";

function openRequestedTab() {
    var sier = window.open('https://www.lexie.land/dist/sierpinski.html', '1', features_sier);
    var spr = window.open('https://www.lexie.land/dist/sprout_div.html', '2', features_spr);
}

const linker = document.querySelector("input[target='OpenWindows']");
linker.addEventListener("click", (event) => {
    openRequestedTab();
    event.preventDefault();
});