$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    nav:true,
    autoplayTimeout:4000,
});


$('.menu').click(function() {
    $('nav ul').slideToggle();
});