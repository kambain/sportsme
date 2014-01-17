(function( $ ){

  /********************************************************************
    video modal
  ********************************************************************/
  var open = function(embed) {
    var a = '<iframe width="800" height="510" src="http://www.youtube.com/embed/';
    var b = '" frameborder="0" allowfullscreen></iframe>';
    $('.video').html(a + embed + b);
    setTimeout(function() {
      $('.open').fadeIn();
    }, 500);
  }
  var close = function() {
    $('.close').fadeOut();
    $('.video').html(' ');
  }
  $('.info').click( function(e) {
    var embed = $(this).attr("id");
    open(embed);
  });
  $(document).keyup( function(e) {
    if (e.keyCode == 27) { close(); }   // esc
  });
  $('.overlay').click( function() {
    close();
  });



  /********************************************************************
    voting
  ********************************************************************/
  $('.votes').click( function(e) {
    var n = $(this).children('.number').html();
    var newNum =  parseInt(n) + 1;
    $(this).children('.number').html(newNum);
  });

})( jQuery );