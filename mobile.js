(function($) {

//attach overlay to the page
  //build overlay
  $menuOverlay = $('<div class="menu-overlay"></div>');

  //apend menu to overlay
  $(".nav-public").clone().appendTo($menuOverlay);
  //add close button to overlay
  $('#close-menu').appendTo($menuOverlay);

  //append overlay to body
  $("body").append($menuOverlay);

//hide main navigation 
//CSS

//show mobile navigation when click the button
$("#bars-menu").on('click',function(event){

  event.preventDefault();
  $(".menu-overlay .nav-public").show();
  $menuOverlay.fadeIn('slow');
  //$('#bars-menu').fadeOut('slow'); 

});

//attach button to nav
//CSS

//format mobile links inside the page
//pending

//close navigation
$("#close-menu").on('click',function(event){

  event.preventDefault();
  $menuOverlay.fadeOut('medium'); 

});

//show mobile buttons in the page
//CSS

})(jQuery); // Fully reference jQuery after this point.
