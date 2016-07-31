$(function() {
    $("#list4")
        .children("li")
        .children("ul")
        .children("li")
        .filter(function(index){
            return index % 3 === 0;
        })
        .replaceWith("<li class='highlight1'> Replaced </li>");

    $("#red-box").replaceWith("<div id=purple-box>Purple</div>");

    $("#blue-box").remove();

    var detachedItem = $("#list3").children("li:last").detach();
    $("#list2").append(detachedItem);

    $('#list1').empty();
});
