'use strict'
window.addEventListener('load', () => {
    console.log("Script");


    $(document).ready(function () {
        console.log('jQuery')
        //slider
        $(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1000,
                pager: false
            });



            //posts
            var posts = [
                {
                    title: 'Prueba de titulo 1',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },
                {
                    title: 'Prueba de titulo 2',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },
                {
                    title: 'Prueba de titulo 3',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },

                {
                    title: 'Prueba de titulo 4',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },
                {
                    title: 'Prueba de titulo 5',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },
                {
                    title: 'Prueba de titulo 6',
                    date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit.Integer sed scelerisque turpis. Class aptent taciti Vestibulum dapibus auctor magna ac ullamcorper. sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis bibendum ex feugiat, porttitor enim quis, aliquam lectus.Suspendisse et condimentum libero. Vivamus ornare augue in nibh feugiat aliquam a in nulla. Fusce eget porttitor sem. Duis non suscipit enim. Integer blandit auctor massa. Fusce in felis pellentesque, pulvinar ligula eget, rhoncus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id orci metus. Quisque lacus orci, pellentesque efficitur tincidunt et, mattis suscipit mi.Ut eget sodales massa, eget efficitur nibh.'
                },
            ];
            posts.forEach((item, index) => {
                var post =
                    `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                 </article>
                 `
                    ;
                $("#posts").append(post);
            });



        });
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
    
      
        

    });

});
