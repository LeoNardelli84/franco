
$("#btn-stop").hide();
let playlist = $('#playlist');
let canciones = playlist.children('a');
let audio = new Audio();

//sconsole.log(temas[2]);
//function changeTrack(url, audio){
//    $("#reproductor").attr('src', url).appendTo(audio);

$("a").click(function(e){
    
    var cancion = $(this).find(":nth-child(3)").text();
    var url = $(this).attr('href');
    audio.volume = 0.3;
    audio.src = url;
    
    audio.load();
    audio.play();

    $("#nombre_tema").html(cancion);
    $("#btn-stop").show();
    $("a").css('background-color', 'white');
    $("a").children('img').attr('src', 'assets/fotos/portada.png');
    $(this).css('background-color', '#ff8e04');
    $(this).children('img').attr('src','assets/fotos/music.gif');
    e.preventDefault();
});

$("#btn-stop").click(function(){
   audio.pause();
   audio.currentTime = 0;
   $("a").children('img').attr('src', 'assets/fotos/portada.png');
   
});
