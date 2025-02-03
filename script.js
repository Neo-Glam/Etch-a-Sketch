let input = 16;
let taille = 800/input;

const boite = document.querySelector('#boite');

function color(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}


function carre(){
    for(i = 0;i < input * input; i++ ){
        color();
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.height = taille + "px";
        box.style.width = taille + "px";
        boite.appendChild(box);

        const couleur = color();

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor = color();
        })
    } 
}


carre();

const reset = document.querySelector('#reset');

reset.addEventListener("click",()=>{
    boite.replaceChildren();
    carre();
})

const size = document.querySelector('#size')

size.addEventListener("click", ()=>{
    input = prompt("chose a number above 0 and below 100",)
    while (input < 0 ||input > 100){
        input = prompt("chose a number above 0 and below 100",)
    }
    boite.replaceChildren();
    taille = 800/input;
    carre();
})


