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
//              FONCTION SUPPRIMER_CERCLE
// ##################################################

let supprimer_cercle = (x, y) => {

    ctx.beginPath();
    ctx.fillStyle = 'darkblue';
    ctx.arc(x, y, 16, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

};



// ##################################################
//              FONCTION AJOUTER_CERCLE
// ##################################################

let ajouter_cercle = (x, y) => {

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

};



// ##################################################
//              FONCTION DEPLACER_PERSO
// ##################################################

let coo_x = 450;
let coo_y = 450;

let deplacer_perso = (direction) => {

    ctx.fillStyle = 'darkblue';

    if (direction === 'haut') {
        supprimer_cercle(coo_x, coo_y);
        coo_y -= 30;
        ajouter_cercle(coo_x, coo_y);
    }
    else if (direction === 'bas') {
        supprimer_cercle(coo_x, coo_y);
        coo_y += 30;
        ajouter_cercle(coo_x, coo_y);
    }
    else if (direction === 'gauche') {
        supprimer_cercle(coo_x, coo_y);
        coo_x -= 30;
        ajouter_cercle(coo_x, coo_y);
    }
    else if (direction === 'droite') {
        supprimer_cercle(coo_x, coo_y);
        coo_x += 30;
        ajouter_cercle(coo_x, coo_y);
    }
};



// ##################################################
//                  SCRIPT PRINCIPAL
// ##################################################

creer_jeu();

document.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowUp') {
        console.log('deplacement haut');
        deplacer_perso('haut');
    }
    else if (event.key === 'ArrowDown') {
        console.log('deplacement bas');
        deplacer_perso('bas');
    }
    else if (event.key === 'ArrowLeft') {
        console.log('deplacement gauche');
        deplacer_perso('gauche');
    }
    else if (event.key === 'ArrowRight') {
        console.log('deplacement droite');
        deplacer_perso('droite');
    }
});