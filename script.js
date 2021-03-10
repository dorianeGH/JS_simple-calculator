//const premierNombre = parseInt(prompt('Entrez premiere valeur'));
/*const operateur = prompt("entrez l'operateur");
//const secondNombre = parseInt(prompt("entrez une seconde valeur"));

let resultat = "Inconnu";

if (operateur === "+"){
    resultat = parseInt(document.getElementById('userResponseFirst').value) + parseInt(document.getElementById('userResponseSecond').value);
} else if (operateur ==="-"){
    resultat = parseInt(document.getElementById('userResponseFirst').value) - parseInt(document.getElementById('userResponseSecond').value);
} else if (operateur ==="*"){
    resultat = parseInt(document.getElementById('userResponseFirst').value) * parseInt(document.getElementById('userResponseSecond').value);
} else if (operateur ==="/"){
    resultat = parseInt(document.getElementById('userResponseFirst').value) / parseInt(document.getElementById('userResponseSecond').value);
}
alert (resultat);*/

//Exo 2 : 
//on aurait pu :
//const userResponseFirst = parseInt(document.getElementById('userResponseFirst').value);
//const userResponseSecond = parseInt(document.getElementById('userResponseSecond').value);


const btnCalul = document.getElementById("btnCalcul"); //prend en charge btn sur ma charge 
btnCalul.addEventListener('click', event =>{//on lui donne maintenant un comportement

const userResponseFirst = document.getElementById('userResponseFirst');
const userResponseSecond = document.getElementById('userResponseSecond');
const ope = document.getElementById('operateur');

const premierNombre = parseInt(userResponseFirst.value);
const secondNombre = parseInt(userResponseSecond.value);
const operateur = ope.value;

let resultat = "Inconnu";

if (operateur === "+"){
    resultat = premierNombre + secondNombre;
} else if (operateur ==="-"){
    resultat = premierNombre - secondNombre;
} else if (operateur ==="*"){
    resultat = premierNombre * secondNombre;
} else if (operateur ==="/"){
    resultat = premierNombre / secondNombre;
}

//console.log(resultat); //changé alert pr console, voit pu le resultat // on peut le supprimer grace au getelement
const printResult = document.getElementById("resultat") // balise b "resultat" de html
printResult.innerHTML = resultat //fait apparaitre le resultat dans html
});