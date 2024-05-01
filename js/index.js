$("#btn-pause").hide();

let playlist = $('#playlist');
let canciones = playlist.children('a');
let audio = new Audio();

$("a").click(function(e){
    
    var cancion = $(this).find(":nth-child(3)").text();
    var url = $(this).attr('href');
    audio.volume = 0.3;
    audio.src = url;
    
    audio.load();
    audio.play();
    
    audio.onloadeddata = function() {
        console.log(audio.duration/60);
        //me da la duracion del tema. twngo que ver 
        //como hago para que aparezca el tiempo
    };

    $("#btn-play").hide();
    $("#btn-pause").show();

    $(".leyenda").show();
    $("#nombre_tema").html(cancion);
    $("a").css('background-color', 'white');
    $("a").children('img').attr('src', 'assets/fotos/portada.png');
    $(this).css('background-color', '#ff8e04');
    $(this).children('img').attr('src','assets/fotos/music.gif');
    e.preventDefault();
});
$("#btn-stop").click(function(){
    audio.pause();
    $("#btn-pause").hide();
    $("#btn-play").show();
    audio.currentTime = 0;
});

$("#btn-play").click(function(){
    $("#btn-play").hide();
    $("#btn-pause").show();
    audio.play();
});

$("#btn-pause").click(function(){
   if (audio.paused){
       audio.play();
       
   } else{
       audio.pause();
       $("#btn-pause").hide();
       $("#btn-play").show();
   }

   
   $("a").children('img').attr('src', 'assets/fotos/portada.png');
   
});
