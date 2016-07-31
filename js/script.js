$(function() {
    $("#list1")
        .append("<li>Main Item 5" +
                "<ul>" +
                "<li>Inserted 1</li>" +
                "</i>Inserted 2</li>" +
                "</ul>" +
                "</li>");

    $("#list1").children("li:last").addClass("highlight1");

    $("#red-box").after("<div id='purple-box'>Purple</div>");
    $("#purple-box").before("<div id='orange-box'>Orange</div>");

    $("#blue-box").after($("#red-box"));
});
