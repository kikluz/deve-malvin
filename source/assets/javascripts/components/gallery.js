/* Backend portfolio gallery animation. It requires h4 and p to have 0 default opacity
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
// Gallery
// ------------------------------------------------------------
*/
