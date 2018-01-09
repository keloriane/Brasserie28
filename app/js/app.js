$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    function parallax(){
        $('.img_block').css('top', (wScroll*0.12)+'px');
    };


    if(wScroll > $('.beerBlock').offset().top - ($(window).height() / 1.2)) {

        $('.beerBlock .thumbnail').each(function(i){

            setTimeout(function(){
                $('.beerBlock .thumbnail').eq(i).addClass('is-showing');
            }, (700 * (Math.exp(i * 0.14))) - 700);
        });
    }

});

$('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
        });
    }
});


$(window).scroll(function() {
    $('.has-animation').each(function(index) {
        if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
            $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('animate-in');
            });
        }
    });
});







$(document).ready(function(){
    //init scroll magic

    var controller = new ScrollMagic.Controller();
    //build scene

    var text = new ScrollMagic.Scene({
        triggerElement:'#left',
        reverse:false

    })
        .setClassToggle('#describe', 'fade-in')//add class to project01
        .addIndicators()//
        .addTo(controller);

    var glass = new ScrollMagic.Scene({
        triggerElement:'#glass'
    })

        .setClassToggle('#glass', 'fade-in')
        .addIndicators()
        .addTo(controller);

    var slides = new ScrollMagic.Scene({
        triggerElement:'#slide-content',
        reverse: false
    })

        .setClassToggle('#slide-content', 'is-visible')
        .addIndicators()
        .addTo(controller);

    var speciales = new ScrollMagic.Scene({
        triggerElement:'#t2'
    })
        .setClassToggle('#textWrapper', 'show')

        .addIndicators()
        .addTo(controller);


    var specialeTexte = new ScrollMagic.Scene({
        triggerElement:'#t2'
    })
        .setClassToggle('#titleWrapper', 'show')
        .addIndicators()
        .addTo(controller);





});