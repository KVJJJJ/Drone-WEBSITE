/*/var message = "la somme fait : ";
var val1 =15;
var val2 =4;
var resultat = val1 + val2;
console.log("VAL1 vaut : " + val1);
console.log("VAL2 vaut : " + val2);
console.log("RESULTAT vaut : " + resultat);
console.log(message + resultat);
console.log(message + val1 + val2);


var hamburger = document.getElementById("hamburger");
hamburger .addEventListener('click', mon_popup);
function mon_popup(){
    alert("gestion de l'event 'click' sur mon footer");
}/*/