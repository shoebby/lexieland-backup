const dict = [];
const popups = [];
const template = document.querySelector("#popupController");

let popupNum = 1;
const popupNum_add = document.querySelector("input[target='PopupNumAdd']");
popupNum_add.addEventListener("click", () => {
    InitControllers(1);
});
const popupNum_remove = document.querySelector("input[target='PopupNumRemove']");
popupNum_remove.addEventListener("click", () => {
    InitControllers(-1);
});

const linker = document.querySelector("input[target='GenerateCollage']");
linker.addEventListener("click", (event) => {
    InitDict();
    openRequestedTab();
    event.preventDefault();
});

function InitDict() {
    dict.length = popupNum.value;

    for (let i = 0; i < dict.length; i++) {
        const link = document.querySelector("input[target='pu" + (i+1) + "_l']");
        const scrX = document.querySelector("input[target='pu" + (i+1) + "_sX']");
        const scrY = document.querySelector("input[target='pu" + (i+1) + "_sY']");
        const width = document.querySelector("input[target='pu" + (i+1) + "_w']");
        const height = document.querySelector("input[target='pu" + (i+1) + "_h']");
        const html = document.querySelector("input[target='pu" + (i+1) + "_html']");

        dict[i] = {
            url: link.value,
            features:"left=" + scrX.value + ",top=" + scrY.value + ",width=" + width.value + ",height=" + height.value,
            html: html.value
        };
    }
}

function InitControllers(modifier) {
    if (popupNum + modifier < 1)
        return

    const ctrls = document.querySelectorAll("#popupController");
    
    popupNum += modifier;

    const want = popupNum;
    const have = ctrls.length;

    if (want > have) {
        const controller = template.cloneNode(true);
        document.body.appendChild(controller);
    } else if (want < have) {
        for (let i = 0; i < (have - want); i++) {
            document.body.removeChild(ctrls[ctrls.length-1]);
        }
    }
}

function openRequestedTab() {
    for (let i = 0; i < popups.length; i++) {
        popups[i].close();
    }

    for (let i = 0; i < dict.length; i++) {
        popups[i] = window.open(dict[i].url, i+1, dict[i].features);
        popups[i].document.body.innerHTML = dict[i].html;
    }    
}