(function($) {
	$.fn.jCarousel=function(){
	
    var leftUIEl = $('.left-arrow');
    var rightUIEl = $('.right-arrow');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 339;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {
       if (currentLeftValue != maximumOffset) {
            currentLeftValue += 339;
            elementsList.animate({ left : currentLeftValue + "px"}, 900);
        }    
    });
 
    rightUIEl.click(function() {
         if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 339;
            elementsList.animate({ left : currentLeftValue + "px"}, 900);
          }
    });
};

})(jQuery);