let scroll = document.querySelectorAll("#scroll");
console.log(scroll);
for (let a =0; a < scroll.length;a++){
   scroll[a].addEventListener('mouseover',()=>{
        scroll[a].style. transform= "scale(1.09)";
        scroll[a].style. opacity= "0.9";
     
    });
    scroll[a].addEventListener('mouseout',()=>{
       scroll[a].style.transform= "scale(1)";
       scroll[a].style. opacity= "1";
    });
};
// surligner les menu
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
// le footer faire un effet “hover” sur les icônes des réseaux sociaux lorsque la souris(couleur blanc) 
let footericone = document.getElementsByClassName("icone");
for (let a =0; a < footericone.length;a++){
    footericone[a].addEventListener('mouseover',()=>{
        footericone[a].style.color ='white';
     
    });
    footericone[a].addEventListener('mouseout',()=>{
        footericone[a].style.color ='black';
    });
};
// / slide image page hero avengers

const imageslide = document.querySelectorAll(".imageslide");
const nexteimage = 9000;
let counterimage = 0;
imageslide[counterimage].style.display = "block";
setInterval(nextImage,nexteimage)
function nextImage(){
   imageslide[counterimage].style.display = "none";
  counterimage = (counterimage+1) % imageslide.legth;
 imageslide[counterimage].style.display = "block";
}
nextImage();
