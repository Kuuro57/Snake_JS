// ##################################################
//                  FICHIER SNAKE.JS
// ##################################################

let canvas_jeu = document.getElementById('jeu_snake');
let ctx = canvas_jeu.getContext('2d');

let coo_x = 450;
let coo_y = 450;
let snake_est_mort = false;



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
//                 FONCTION FIN_JEU
// ##################################################

let fin_jeu = () => {

    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, 1000, 1000);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.strokeRect(2, 2, 896, 896);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(coo_x, coo_y, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    snake_est_mort = true;

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

let deplacer_perso = (direction) => {

    ctx.fillStyle = 'darkblue';

    if (!snake_est_mort) {
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
    }
};



// ##################################################
//                  SCRIPT PRINCIPAL
// ##################################################

creer_jeu();

document.addEventListener("keydown", (event) => {

    if (event.key === 'ArrowUp') {
        deplacer_perso('haut');
        console.log(`{x:${coo_x}; y:${coo_y}}`);
    }
    else if (event.key === 'ArrowDown') {
        deplacer_perso('bas');
        console.log(`{x:${coo_x}; y:${coo_y}}`);
    }
    else if (event.key === 'ArrowLeft') {
        deplacer_perso('gauche');
        console.log(`{x:${coo_x}; y:${coo_y}}`);
    }
    else if (event.key === 'ArrowRight') {
        deplacer_perso('droite');
        console.log(`{x:${coo_x}; y:${coo_y}}`);
    }


    if (coo_x < 30 || coo_x > 870 || coo_y < 30 || coo_y > 870) {
        fin_jeu();
    }

});