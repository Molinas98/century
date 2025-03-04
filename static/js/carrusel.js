$(document).ready(function () {

    $('.propiedades-carrusel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        prevArrow: '<img class="prev" src="../static/images/icons/prev.svg">',
        nextArrow: '<img class="next" src="../static/images/icons/next.svg">',
    });

    $('.carrusel-mensaje').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear', // Transición continua y sin pausas
        pauseOnHover: false,
    });

    $('.p_imagenes').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true,
            tCounter: '%curr% de %total%'
        },
        callbacks: {
            open: function() {
                // Cuando se abre el modal, ajusta el tamaño de la imagen
                $('.mfp-content').css('height', '95%');
                $('.mfp-content').css('width', '100vh');
                $('.mfp-img').css('max-height', '90%');
            }
        }
    });
    
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: true
    });

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

});
