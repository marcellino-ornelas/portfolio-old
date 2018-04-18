$(function(){

  const REQUIRED = { required: true };

  const isPage = (page) => page.test( window.location.pathname )

  // Initiate materialize side nav
  $(".button-collapse").sideNav();

  const $form = $('#contact');
  const parallax = $('.parallax');

  if(parallax.length){
    parallax.parallax();
  }


  if( $form.length ){
    $form.validate( getPageValidator() );
  }


  function getPageValidator(){
    let rules = null;
    // set form field rules
    switch( true ){
      case isPage(/contact-us/):
        rules = { rules: {"email": { required: true, email: true }, "last-name": REQUIRED, "first-name": REQUIRED, "description": REQUIRED } };
        break;
      default:
        return {}
    }

    rules.errorElement = 'div';
    rules.errorPlacement = function(error, element) {
      error.addClass('error').insertAfter(element);
    }
    return rules
  }

})
