'use strict'
window.addEventListener('load', () => {
    console.log("Script");


    $(document).ready(function () {
        console.log('jQuery')


var theme = $("#theme");
$("#to-green").click(function () {
    theme.attr("href", "green.css")
});
$("#to-red").click(function () {
    theme.attr("href", "red.css")
});
$("#to-blue").click(function () {
    theme.attr("href", "blue.css")
});

//scroll
$(".subir").click(function(){
   
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// login falso
$("#login form").click(function(){
    var form_name = $("#form_name").val();
   localStorage.setItem("usuario", form_name);
});
var form_name = localStorage.getItem("usuario");
if(form_name != null && form_name != "undefined"){
    var about_p = $("#about p")
    about_p.html("<br><strong>Bienvenide, " + form_name +"</strong>");
    about_p.append('<br><a href="#" id="logout">Cerrar sesion</a>');

    $("#login").hide();

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}

$.validate({
    lang:'es'
})
    



});

});