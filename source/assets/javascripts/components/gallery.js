/* Backend portfolio gallery animation. It requires h4 and p to have 0 default opacity */
$(".fb-panel").hover(function () {
   $(this).find('h4').animate({opacity: '1', bottom: '10px'}, 100, 'swing');
   $(this).find('p').delay(100).animate({opacity: '1', bottom: '10px'}, 100, 'swing');
},
function (){
   $(this).find('h4, p').animate({opacity: '0'}, 0);
   $(this).find('h4').delay(200).animate({bottom: '-10px'}, 0, 'swing');
   $(this).find('p').delay(200).animate({bottom: '-10px'}, 0, 'swing');
});
// ------------------------------------------------------------
// Gallery http://codepen.io/svelts/pen/VYxPWW
// ------------------------------------------------------------
var lix = true;

function image(x) {
  var section = document.getElementById('fire');
  
  if(lix == true) { 
   var kid = document.getElementsByTagName("div")[x].cloneNode(true);
   section.appendChild(kid);
   section.style.display="block";
    lix=false;
  }
  else {
     var kid2 = document.getElementsByTagName("div")[x+1].cloneNode(true);
     section.replaceChild(kid2,section.getElementsByTagName("div")[0]);
    }  
}
function prev(y) {
    var section = document.getElementById('fire');
    var kid2 = document.getElementsByTagName("div")[y].cloneNode(true);
    section.replaceChild(kid2,section.getElementsByTagName("div")[0]);
}
function xit() {
   lix = true;
    var section = document.getElementById('fire');
    section.removeChild(section.getElementsByTagName("div")[0]);
    section.style.display="none";
}