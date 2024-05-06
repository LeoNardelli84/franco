//inicializar animate on scroll
AOS.init();

$("#btn-pause").hide();

let playlist = $('#playlist');
//let canciones = playlist.children('a');
let audio = new Audio();



$("a").click(function(e){
    
    var cancion = $(this).find(":nth-child(3)").text();
    var url = $(this).attr('href');
    audio.volume = 0.3;
    audio.src = url;
    audio.play();
    
    //$(this).addClass("animate__animated animate__heartBeat")
    audio.onloadeddata = function() {
        
        audio.addEventListener("timeupdate", function(){
            var timeleft = document.getElementById('timeleft');
            var duration = parseInt(audio.duration);


            var currentTime = parseInt(audio.currentTime);
            var timeLeft = duration - currentTime, s, m;
            
            

            s = timeLeft % 60;
            m = Math.floor( timeLeft / 60 ) % 60;
    
            s = s < 10 ? "0"+s : s;
            m = m < 10 ? "0"+m : m;
            
            timeleft.innerHTML = m+":"+s;
            
        }, false);
            
    };
    
    audio.addEventListener("timeupdate", function() {
        var timeline = document.getElementById('duration');
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);
        



        if (s < 10) {
            timeline.innerHTML = m + ':0' + s;
        }
        else {
            timeline.innerHTML = m + ':' + s;
        }
    }, false);


    $("#btn-play").hide();
    $("#btn-pause").show();
    $("#nombre_tema").html(cancion);
    $("a").css('background-color', 'white');
    $("a").children('img').attr('src', 'assets/fotos/portada.png');
    $(this).css('background-color', '#ff8e04');
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
   };

});

//barra de desplazamiento de audio
//id = seek
$("#seek").bind("change", function(){
    audio.currentTime = $(this).val();
    $("#seek").attr("max", audio.duration);
});
audio.addEventListener('timeupdate', function(){
    curtime = parseInt(audio.currentTime, 10);
    $("#seek").attr("value", curtime);
});

//botones links a redes sociales
$(".btn-redes").click(function(e){
    var social = $(this).find(":nth-child(1)").text();
    //console.log(social);
    //e.preventDefault();
    switch (social) {
        case 'Ponte en contacto conmigo':
            $(location).attr('href', 'https://api.whatsapp.com/send?phone=351931944363&text=Hi%20Franco!,%20');
            break;
        case 'Spotify':
            $(location).attr('href', 'https://www.spotify.com');
            break;
        case 'Canal de Youtube':
            $(location).attr('href', 'https://www.youtube.com/@FrancoNadal/featured');
            break;
        case 'Mi Tiktok':
            $(location).attr('href', 'https://www.tiktok.com/@franconadal42');
            break;
        case 'Instagram':
            $(location).attr('href', 'https://www.instagram.com/franco.nadal.musica/');
            break;

    }

});
