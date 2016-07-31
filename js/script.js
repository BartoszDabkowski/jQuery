$(function() {
    // attr(), prop(), val()

    var link = $("#link");
    link.attr("href", "www.facebook.com");
    console.log(link.attr("href"));

    var cb = $('#cb');
    console.log(cb.prop("checked"));
    console.log(cb.attr("checked"));

    var text = $('#text');
    console.log(text.val());

    var range = $('#range');
    console.log(range.val());
});
