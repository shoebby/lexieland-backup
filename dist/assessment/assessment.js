let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

console.log("width: " + vw + "| height: " + vh);

const features_spr = "left=1325,top=600,width=" + vw/3 + ",height=" + vh/2;
const features_sier = "left=" + vw/2 + ",top=100,width=" + vw/3 + ",height=" + vh/2;
const features_plot = "left=0,top=0,width=" + vw/2 + ",height=" + vh;

const features_1 = "left=0,top=0,width=" + vw/2 + ",height=" + vh/2;
const features_2 = "left=0,top=" + vh/2 + ",width=" + vw/2 + ",height=" + vh/2;
const features_3 = "left=" + vw/2 + ",top=0,width=" + vw/2 + ",height=" + vh/2;
const features_4 = "left=" + vw/2 + ",top=" + vh/2 + ",width=" + vw/2 + ",height=" + vh/2;

function openRequestedTab(links, features) {
    for (let i = 0; i < links.length; i++) {
        let newWindow = window.open(links[i], i, features[i]);
    }
}

const linker = document.querySelector("input[target='OpenWindows']");
if (linker != null){
    linker.addEventListener("click", (event) => {
        openRequestedTab(
            ['https://www.lexie.land/dist/visualizer.html',
            'https://www.lexie.land/dist/sierpinski.html',
            'https://www.lexie.land/dist/blogpost-penplot.html']
            ,
            [features_spr,features_sier, features_plot]
        );
        event.preventDefault();
    });
}


const tryOuts = document.querySelector("input[target='OpenTryOuts']");
if (tryOuts != null) {
    tryOuts.addEventListener("click", (event) => {
        openRequestedTab(
            [
                '../images/assessment/slide7/bigscreen.JPG',
                '../images/assessment/slide7/desktop.JPG',
                '../images/assessment/slide7/final.mp4',
                '../images/assessment/slide7/intermediary.mp4'
            ]
            ,
            [
                features_1, features_2, features_3, features_4
            ]
        );
        event.preventDefault();
    });
}
