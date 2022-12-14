
$(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 100); });
    });

    $(document).ready(function () {

        $('.card').click(function () {
    
            $imgsrc = $(this).find('.img-src').attr('src');
            $("#imagechange").attr("src", $imgsrc).fadeIn(1000);
    
        });
    
    });

// -------------- Slider ---------------- // 
$('#slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('#category').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        480 : {
            items: 1,
        },
        600: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
})

$('#testi').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        991: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('#gallery').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 4
        },
        1200: {
            items: 5
        },
    }
})

