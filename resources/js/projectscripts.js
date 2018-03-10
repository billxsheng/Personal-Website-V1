$(document).ready(function() {
    $('.js--prog').waypoint(function(direction) {
        $('.js--prog').addClass('animated slideInRight');
    }, {
        offset: '80%'
});
    $('.js--myweb').waypoint(function(direction) {
        $('.js--myweb').addClass('animated slideInLeft');
    }, {
        offset: '80%'
});
    $('.js--moodify').waypoint(function(direction) {
        $('.js--moodify').addClass('animated slideInRight');
    }, {
        offset: '80%'
});
    
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.sticky').slideUp(200);
   } else {
      $('.sticky').slideDown(200);
   }
   lastScrollTop = st;
});

$('*').hide();
$('*').fadeIn(800);

    
});

