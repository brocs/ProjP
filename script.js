$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 350){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed (".typing", {
        strings: ["FILBEN JOHN BROCA", "BROX", "FILBEN"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed (".typing-1", {
        strings: ["BROX", "FILBEN"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


$(".hover").mouseleave(function(){
    $(this).removeClass("hover");
});


