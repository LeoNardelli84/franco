$("a").click(function(e){
    e.preventDefault();
    $("a").css('background-color', 'white');
    $("a").children('img').attr('src', 'assets/fotos/portada.png')
    
    $(this).css('background-color', '#ff8e04');
    $(this).children('img').attr('src','assets/fotos/music.gif');
});