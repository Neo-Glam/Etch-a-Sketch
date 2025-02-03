let input = 16;
const boite = document.querySelector('#boite');

function carre(){
    for(i = 0;i < input * input; i++ ){
        const box = document.createElement('div');
        box.classList.add("box");
        boite.appendChild(box);
    } 
}

carre();
