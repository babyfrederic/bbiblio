let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

function alerte(){
    alerte('Bonjour : il faut prendre contact en remplissant le formulaire Merci');
}
function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Rubrique contact ajoutée';
    document.body.appendChild(para);
}
var cajout = 0;
var cretre = 0;
var dif = 0;
var cumulajout =0 ;
var cumulretre = 0;
var difcumul =0;
