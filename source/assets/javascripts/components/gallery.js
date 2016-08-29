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
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Dave Melvin</small>';
      }
    }
  });
});
