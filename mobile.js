(function($) {

//attach overlay to the page
  //build overlay
  $menuOverlay = $('<div class="menu-overlay"></div>');

 
  //add close button to overlay
  $('#close-menu').appendTo($menuOverlay);

  //append overlay to body
  $("body").append($menuOverlay);

//hide main navigation 
//CSS

//show mobile navigation when click the button
$("#bars-menu").click(function(event){
  
  //unhide/apend menu to overlay
  $(".nav").show();
  $(".nav").appendTo($menuOverlay);

  event.preventDefault();
  $menuOverlay.fadeIn('slow');
  $('#bars-menu').fadeOut('slow'); 

});

//attach button to nav
//CSS

//format mobile links inside the page
//pending

//close navigation
$("#close-menu").click(function(event){

  event.preventDefault();
  $menuOverlay.fadeOut('medium');
  $('#bars-menu').fadeIn('medium'); 

});

//show mobile buttons in the page
//CSS

})(jQuery); // Fully reference jQuery after this point.
