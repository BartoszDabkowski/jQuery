$(function() {
    $("#list1").children("li").addClass("highlight1");
    $("#list2").find("li").addClass("highlight2");
    $("#list3").find("ul").addClass("highlight3");
    $("#list4").find("ul").addClass("highlight4");

    $("#list4")
        .children("li")
        .children("ul")
        .children("li")
        .filter(function(index){
            return index % 3 === 0;
        })
        .css("background-color", "rgba(255, 150, 200, 1)");

    $("#list1")
        .children("li")
        .not(":first")
        .not(":last")
        .css("background-color", "rgba(255, 150, 200, 1)");
});
