$('.nav-toggle-label').on('click', function () {
  $('#nav-toggle').addClass('open');
});

$( '.nav-toggle-label a' ).on("click", function(){
  $('#nav-toggle').removeClass('open');
});
