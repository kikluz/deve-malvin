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

$("section img").click(function(){
  $(".lightbox").fadeIn(300);
  $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />" );
  $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
  $(".title").append("<h1>" + $(this).attr("alt") + "</h1>" );
  $("html").css("overflow","hidden");
});

$(".close").click(function(){
  $(".lightbox").fadeOut(300);
  $("h1").remove();
  $(".lightbox img").remove();
  $("html").css("overflow","auto");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $(".lightbox").fadeOut(300); 
    $(".lightbox img").remove();
    $("html").css("overflow","auto");
  }
});

$(".arrowr").click(function(){
  next();
});

///////
 // portfolio
