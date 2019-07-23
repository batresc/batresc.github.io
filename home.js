jQuery(document).ready(function($) {
  var body = $('body'),
      transout = function() {
        if (!body.hasClass('is-exploded')) {
          body.addClass('is-exploded');
          setTimeout(function() {
            body.removeClass('is-exploded');
          }, 5000);
        }        
      };

  $('#header').click(transout);
  $('body').bind('mousewheel', transout);
});