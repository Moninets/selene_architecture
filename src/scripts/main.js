; (function ($) {
  'use strict';
;(function(){
 $(window).on('load', function() {
  $('#banner-slider').slick({
   slide: '.ba-slide',
   prevArrow: '#banner-slider .ba-slider__arrow--left',
   nextArrow: '#banner-slider .ba-slider__arrow--right',
   dots: true
  });
  updateCurrentSlide();
  $('#banner-slider').on('afterChange', function(e) {
   updateCurrentSlide();
  });
 });
 function updateCurrentSlide() {
  var currentSlideIndex = $('#banner-slider .slick-current').data('slick-index') + 1;
  $('#banner-slider .ba-current-position').text( '0' + currentSlideIndex);

 }
})();

		
})(jQuery);  
