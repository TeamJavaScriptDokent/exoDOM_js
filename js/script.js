    
//A/ 1- Écrivez un programme JavaScript pour définir la couleur d'arrière-plan d'un paragraphe.
document.getElementById('mypar').style.backgroundColor='#900'
    



/*2- Écrivez un programme JavaScript pour 
obtenir la largeur et la hauteur de la fenêtre (àchaque fois que la fenêtre est redimensionnée).*/
 
 alert( window.innerHeight );
 alert( document.documentElement.clientWidth);

//exemple 2
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;













//getElementById
/*var div = document.getElementById('myDiv');
console.log(div);
alert(div);
*/

//getElementsByTagName

/*var divs = document.getElementsByTagName('div');
for(var i = 0, c = divs.length; i< c ; i++){
    alert('Element n' + (i+1)+ ':'+ divs[i]);
}

var query = document.querySelector('#menu .item span'),
queryAll = document.querySelectorAll('#menu .item span');
alert(query.innerHTML);
alert(queryAll.length);
alert(queryAll[0].innerHTML+ ' _ '+ queryAll[1].innerHTML);
*/
