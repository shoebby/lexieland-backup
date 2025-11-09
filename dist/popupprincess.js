const ft_frac1 = "left=0,top=0,width=1361,height=465";
const ft_frac2 = "left=0,top=550,width=524,height=861";
const ft_frac3 = "left=670,top=400,width=1152,height=779";
const ft_princ = "left=400,top=200,width=450,height=779";
const ft_bub = "left=800,top=0,width=255,height=255";

function openRequestedTab() {
    var frac1 = window.open('./images/popupprincess/frac1.PNG', '1', ft_frac1);
    var frac2 = window.open('./images/popupprincess/frac2.PNG', '2', ft_frac2);
    var frac3 = window.open('./images/popupprincess/frac3.PNG', '3', ft_frac3);
    var princess = window.open('./images/popupprincess/princess.html', '4', ft_princ);
    var bubble = window.open('./images/popupprincess/thought.html', '5', ft_bub);

    var audioElement = document.createElement('audio');
    audioElement.src='./sounds/princessbeat.mp3';
    audioElement.autoplay=true;
    audioElement.loop=true;
    audioElement.Play(); 
}

const linker = document.querySelector("input[target='StartPrincess']");
linker.addEventListener("click", (event) => {
    openRequestedTab();
    event.preventDefault();
});

function sleep(ms) {
   var currentTime = new Date().getTime();

   while (currentTime + ms >= new Date().getTime()) {
   }
}