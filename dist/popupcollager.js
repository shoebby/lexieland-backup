const dict = [];
const popups = [];

const popupNum = document.querySelector("input[target='PopupNum']");
popupNum.addEventListener("change", () => {
    InitControllers();
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

function InitControllers() {
    const ctrls = document.getElementsByClassName("popupController");

    const want = popupNum.value;
    const have = ctrls.length;

    if (want > have) {
        const controller = document.createElement("div");
        document.body.appendChild(controller);
        controller.classList.add("popupController");
        controller.innerHTML = `<p>Link: <input type='text' value='https://www.lexie.land/dist/index.html' target='pu${want}_l'></p><p>Inject HTML: <input type='text' value='<div>Cool Beans!</div>' target='pu${want}_html'></p><p>All following values are in px:</p><p>ScreenX: <input type='number' value='0' target='pu${want}_sX'></p><p>ScreenY: <input type='number' value='0' target='pu${want}_sY'></p><p>Width: <input type='number' value='500' target='pu${want}_w'></p><p>Height: <input type='number' value='500' target='pu${want}_h'></p>`;
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