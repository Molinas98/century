$(document).ready(function () {
    $('.btn_poup').click(function () {
        $('.popup').removeClass("collapse");
    });

    $('#close').click(function () {
        $('.popup').addClass("collapse");
        $('.overlay').toggleClass("collapse");
    });

});