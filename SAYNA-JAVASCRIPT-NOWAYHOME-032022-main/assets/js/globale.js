// effet “hover” lorsque la souris survole l’élément bouton1

let btnover = document.getElementsByClassName("btnover");

for (let i =0; i < btnover.length;i++){
    btnover[i].addEventListener('mouseover',()=>{
        btnover[i].style.backgoundcolor ='#b11313';
        btnover[i].style.color ='white';
        btnover[i].style.fontWeight = 'bold';
        btnover[i].style.boxShadow = '5px 5px 30px white';
    });
    btnover[i].addEventListener('mouseout',()=>{
        btnover[i].style.backgoundcolor ='white';
        btnover[i].style.color ='#b11313';
        btnover[i].style.boxShadow = 'none';
    });

};
// effet “hover” lorsque la souris survole l’élément bouton2

let btnover2 = document.getElementsByClassName("btnover2");

for (let i =0; i < btnover2.length;i++){
    btnover2[i].addEventListener('mouseover',()=>{
        btnover2[i].style.backgoundcolor ='white';
        btnover2[i].style.color ='#b11313';
        btnover2[i].style.fontWeight = 'bold';
        btnover2[i].style.boxShadow = '5px 5px 30px #b11313';
    });
    btnover[i].addEventListener('mouseout',()=>{
        btnover2[i].style.backgoundcolor ='#b11313';
        btnover2[i].style.color ='white';
        btnover2[i].style.boxShadow ='none';
    });
};
// le footer faire un effet “hover” sur les icônes des réseaux sociaux lorsque la souris(couleur blanc) 
let footericone = document.getElementsByClassName("icone");
for (let a =0; a < footericone.length;a++){
    footericone[a].addEventListener('mouseover',()=>{
        footericone[a].style.color ='white';
     
    });
    footericone[a].addEventListener('mouseout',()=>{
        footericone[a].style.color ='black';
    });
}
// le header les rubriques du menu doivent être surligné
let menuheader = document.querySelectorAll("li");
// console.log( menuheader);
menuheader.forEach(function(li){
    li.addEventListener('mouseover',()=>{
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout',()=>{
        li.style.textDecoration = 'none';
    });
});

//   Tous les titres du site (avec la police Far From Home) doivent apparaître avec un fade in











// remplir le formulaire et recevoire un popup
let popup = document.querySelector(".popup");
var spiderman = document.querySelector(".spider-content");
function changepop(clicked_id){
    popup.style.display="block";
    spiderman.style.display ="block";}
function endpopup(clicked_id){
    popup.style.display="none";
};

// remplir le newsleter avec un popup

let Newsletter = document.querySelector(".popnews");
function overNews(clicked_id){
    popnews.style.display="block";
};
function outnews(clicked_id){
       popnews.style.display="none";
};




  









