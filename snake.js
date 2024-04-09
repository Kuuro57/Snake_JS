// ##################################################
//                  FICHIER SNAKE.JS
// ##################################################

let canvas_jeu = document.getElementById('jeu_snake');
let ctx = canvas_jeu.getContext('2d');



// ##################################################
//                 FONCTION CREER_JEU
// ##################################################

let creer_jeu = () => {

    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, 1000, 1000);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.strokeRect(2, 2, 896, 896);

    ctx.fillStyle = 'yellow';
    ctx.arc(450, 450, 15, 0, 2 * Math.PI);
    ctx.fill();

};



// ##################################################
//                  SCRIPT PRINCIPAL
// ##################################################

creer_jeu();