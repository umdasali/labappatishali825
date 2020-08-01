/*===============================================
                  clients
=================================================*/
$(function(){
  $('#clients-list').owlCarousel({
    items:4,
    autoplay:true,
    smartSpeed:1000,
    loop:true,
    responsive: {
      0:{items:2},
      480:{items:3},
      768:{items:4},
      991:{items:5}
    }
  });
});
/*===============================================
                  animation on screen
=================================================*/
$(function(){
  //animate on scroll
  new WOW().init();
});