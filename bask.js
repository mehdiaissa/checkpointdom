if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded', remove)
}else{
    remove()
}

function somme()
{ var total= document.getElementById('total')
var number=document.getElementById('cartitem');

var somme=0;
var tab;
tab= document.getElementsByClassName("box")

for (let i=0;i<tab.length;i++) {
  tab[i] = document.getElementsByClassName("box")[i];
  var quantite =tab[i].querySelector('.qantitebtn').value;
var prix=parseFloat( tab[i].querySelector('span').innerHTML);
somme= somme+(prix*quantite);

}
number.innerText="N.article            "+ tab.length;
total.innerText=(somme)+" d";
console.log(somme);
}
 
 function remove(){
  
  console.log("mehdi aissa");
  var suprimer = document.getElementsByClassName("fa fa-trash")
  for(let i of suprimer){
    var boutton=i;
    boutton.addEventListener('click',dellete)
    
  }
  
}
function dellete (event) {
  
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    
    somme();

}

 var quantiteinput=document.getElementsByClassName('qantitebtn');
 for(let i =0;i<quantiteinput.length;i++){
  var input = quantiteinput[i];
  input.addEventListener('change',qauantitechange)
  somme();
  
 }
 function qauantitechange(event){
   var input =event.target;
   if(isNaN(input.value)|| input.value <=0){
    input.value =1;
   }
  somme();

 }
 
 let color = "red";

function toggleColor(element) {
  element.style.color = color;
  color = (color === "red") ? "white" : "red";
}
  
let isZoomed = false;

function zoom() {
    var element= document.getElementsByClassName("myimg");
    if(isZoomed){
      classlist.element.style.transform = "scale(1)";
      isZoomed = false;
    }else{
     classlist. element.style.transform = "scale(1.5)";
      isZoomed = true;
    }
}


