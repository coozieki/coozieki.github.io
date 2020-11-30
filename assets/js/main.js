let sidemenuBreakpoint = 750;
let sidemenuWidth = 300;
let lastWidth = window.innerWidth;

function setControlActive(item, name) {
    if (item.attr('class').indexOf('active')>0)
    {
        return;
    }
    let className = item.attr('class');
    let id = item.attr('id').replace(name, '');
    id = Number(id)-1;
    console.log(className);
    $("."+className.replace(' ', '.')+".active").attr('class', className.replace('.', ' '));
    item.attr('class', className + ' active');

    return id;
} 

function animateSlide(slider, currentId) {
    slider.animate({
        'margin-left': Number(-currentId*100)+'%',

        duration: 200
    })
}


$(document).ready(function() {

    $(".section-intro-slider-controls-container-item").click(function() {
        let currentId = setControlActive($(this), 'intro-');

        animateSlide($('.section-intro-slider'), currentId);
    })
    
    $(".showcase-inner-slider-controls-item").click(function() {
        let currentId = setControlActive($(this), 'showcase-');

        animateSlide($('.showcase-inner-slides'), currentId);
    })

    $(".section-reviews-slider-controls-container-item").click(function() {
        let currentId = setControlActive($(this), 'review-');

        animateSlide($('.reviews-inner-slides'), currentId);
    })

    $(".section-intro-header-container-navbtn").click(function (e) {
        $("html, body").css('overflow-y', 'hidden');
        $(this).css("visibility", "hidden");
        if (window.innerWidth>sidemenuBreakpoint)
        {
            $(".section-intro-header-container-navsml").css("left", "auto");
            $(".section-intro-header-container-navsml").animate({
                'right': '0',
                duration: 100
            });
        } 
        else {
            $(".section-intro-header-container-navsml").animate(
                {
                    'left': '0',
                    'right': '0'
                },
                {
                    duration: 0
                }
            );
        }
    })

    $(".section-intro-header-container-navsml-close_button").click(function (e) { 
        $("html, body").css('overflow-y', 'visible');
        $(".section-intro-header-container-navbtn").css('visibility', 'visible');
        if (window.innerWidth>sidemenuBreakpoint)
        {
            $(".section-intro-header-container-navsml").animate({
                'right': '-300px',
                duration: 100
            });
        } 
        else {
            $(".section-intro-header-container-navsml").animate(
                {
                    'left': '100%',
                    'right': '-100%'
                },
                {
                    duration: 0
                }
            );
        }
    })

    $(window).resize(function () { 
        if ($(".section-intro-header-container-navsml").css('right') == '0px') {
            if (lastWidth>sidemenuBreakpoint && window.innerWidth<=sidemenuBreakpoint) {
                $(".section-intro-header-container-navsml").css('left', '0');
            }
            if (lastWidth<sidemenuBreakpoint && window.innerWidth>=sidemenuBreakpoint) {
                $(".section-intro-header-container-navsml").css({
                    right: 0,
                    left: 'auto'
                });
            }
        }
        lastWidth = window.innerWidth;
    });
})

$(window).load(function() {
    $('.showcase-inner-slides').css('margin-left', Number(-(Number($(".showcase-inner-slider-controls-item.active").attr('id').replace('showcase-',''))-1)*100)+'%');
})