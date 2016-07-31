$(function () {
    var par = $("p");
    console.log(par.text());
    console.log(par.html());

    par.text("<strong>Hello</strong>");
    par.html("<strong>Hello</strong>");
    par.html(par.html() + " hello");
});

