$(document).ready(function(){
  $(document).on('click','.target-scroll',function() {
    $('.target-scroll').removeClass('check');

    let sectionTo = $(this);
    sectionTo.addClass('check');
    $('html, body').animate({
      scrollTop: $(sectionTo.attr('href')).offset().top -50
    }, 1000, 'swing');
  });
})
