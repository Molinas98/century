$(document).ready(function () {
    $('.btn_poup').click(function () {
        $('.popup').removeClass("collapse");
    });

    $('#close').click(function () {
        $('.popup').addClass("collapse");
        $('.overlay').toggleClass("collapse");
    });


    $('.todas.mb--30').click(function () {
        $('.tarjeta .mapa').addClass("collapse");
        $('.tarjeta iframe').removeClass("collapse");
        $(this).addClass("collapse");
    });

    $('.todas.mb--30.mt-0').click(function () {
        $('.mapa2 .mapa').addClass("collapse");
        $('.mapa2 iframe').removeClass("collapse");
        $(this).addClass("collapse");
    });
});