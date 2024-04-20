function init(){
    var audio = $("#audio");
    var playlist = $(".playlist");
    var tracks = playlist.getElementsByTagName('a');
    audio.volume = 0.30;
    audio.
    audio.play();

};


$("a").click(function(e){
    
    $("a").css('background-color', 'white');
    $("a").children('img').attr('src', 'assets/fotos/portada.png');
    $(this).css('background-color', '#ff8e04');
    $(this).children('img').attr('src','assets/fotos/music.gif');
    
    var cancion = $(this).find(":nth-child(3)").text();
    var url = $(this).attr('href');
    var audio = $('#audio');
    e.preventDefault();
    audio.volume = 0.3;
    //audio.src(url);
    
    

    
    $("#nombre_tema").html(cancion);
    
    
    console.log(url);
});