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
});


$(".hover").mouseleave(function(){
    $(this).removeClass("hover");
});


