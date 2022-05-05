"use strict"

let afficherJour = document.querySelector('#jours button');
let afficherheures = document.querySelector('#heures button');
let afficherMinutes = document.querySelector('#minutes button');
let afficherSecondes = document.querySelector('#secondes button');

function getchrono(){
    let today = new Date().getTime();
    let deadline = new Date(2022, 4, 5,20, 30, 0).getTime();
    let decalage = deadline - today;
    const jours = Math.floor(decalage /(1000 * 60 * 60 * 24));
    const heures = Math.floor((decalage % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((decalage % (1000 * 60 *60)) / (1000 *60));
    const secondes = Math.floor((decalage % (1000 * 60)) / 1000);
    afficherJour.innerHTML = (jours);
    afficherheures.innerHTML = (heures);
    afficherMinutes.innerHTML = (minutes);
    afficherSecondes.innerHTML = (secondes);
}

const countintervale = setInterval(()=>{  
        getchrono()      
},1000);
// function terminer(){
//     if(today === deadline){
//         document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet`

//     } else if (today > deadline){
//         afficherJour.innerHTML = "0";
//         afficherheures.innerHTML = "0";
//         afficherMinutes.innerHTML = "0";
//         afficherSecondes.innerHTML = "0";
//     } else {
//         countintervale;
//     }
// }
// !getchrono()  
