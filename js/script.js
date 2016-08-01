$(function () {
    $('#button').on("click", function(e){
        console.log(e);
    });

    $('#red-box').on({
        mouseenter: function(){
            $(this).stop().fadeTo(1000, .5);
        },
        mouseleave: function(){
            $(this).stop().fadeTo(1000, 1);
        }
    });

    $('#content').on("click",'p', function(){
        $(this).slideUp();
    });

    $('#pars').append("<p>dynamically allocated</p>");

    $('#button').click({
        user: "Peter",
        num: 10
    },function(event){
        alert(event.data.user + " is " + event.data.num);
    });

    $('html').keydown(function(event){
        if(event.which === 39){
            $('#blue-box').stop().animate({
                marginLeft: '+=10px'
            }, 50)
        }
    });
});
