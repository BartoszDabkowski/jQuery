$(function() {
    $("#blue-box").animate({
        "margin-left": "+=200px",
        "margin-top": "25px",
        "opacity": "0",
        "height": "50px",
        "width": "50px"
    }, 1000);

    $("#blue-box").animate({
        "margin-left": "-=200px",
        "opacity": "0.75"
    }, 250);

    $("#red-box").animate({
        "margin-top": "-=125px"
    }, 250);

    $("p").animate({
        "font-size": "20px"
    }, 1000);
});
