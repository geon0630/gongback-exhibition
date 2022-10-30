history.scrollRestoration = "manual"

$(document).ready(function(){
    //slick slide box
    $('.slide-box').slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },{
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    //scroll trigger
    var lastScroll = 0;
    var scroll = $(this).scrollTop();
    $(window).on("scroll", function(event){
        scroll = $(this).scrollTop();
         //스크롤 상태
         if (scroll > 975){
            $('header').addClass("header-scrolled");
            $('.gnb li a').addClass("gnb-scrolled");
            $('.loginTop .btn-login').addClass("btn-scrolled");
            $('.logo .global-banner').attr("src", "./images/global/Banner_White.png");
            $('.goTop').addClass("top-scrolled");
            $('.goTop a').unbind('click', false);
         }
         else if (scroll <= 975 && scroll > 400){
            $('.goTop').removeClass("top-scrolled");
            $('.goTop a').bind('click', false);
         }
         //상단 화면 상태
         else {
            $("header").removeClass("header-scrolled");
            $('.gnb li a').removeClass("gnb-scrolled");
            $('.loginTop .btn-login').removeClass("btn-scrolled");
            $('.logo .global-banner').attr("src", "./images/global/Banner_Color.png");
         }
         //버튼 스크롤 범위 제한
         if(scroll > 3920){
            $('.goTop').css("position", "absolute").css("bottom", "350px");
         }
         else {
            $('.goTop').css("position", "fixed").css("bottom", "50px");
         }
         lastScroll = scroll;
    });
    //top button trigger
    $('.goTop').on('click', function(){
        $('html, body').animate({'scrollTop' : 0}, 500);
        return false;
    });

    //top button cursor enable/disenable
    $('.goTop a').on("mouseover", function(e){
        if(scroll > 975){
            $(this).css("cursor","pointer");
        }
        else {
            $(this).css("cursor","default");
        }
    });
});