//const premierNombre = parseInt(prompt('Entrez premiere valeur'));
const operateur = prompt("entrez l'operateur");
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

alert (resultat);