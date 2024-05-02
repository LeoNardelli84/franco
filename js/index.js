$("#btn-pause").hide();

let playlist = $('#playlist');
let canciones = playlist.children('a');
let audio = new Audio();



$("a").click(function(e){
    
    var cancion = $(this).find(":nth-child(3)").text();
    var url = $(this).attr('href');
    audio.volume = 0.3;
    audio.src = url;
    audio.play();
    
    audio.onloadeddata = function() {
        
        audio.addEventListener("timeupdate", function(){
            var timeleft = document.getElementById('timeleft');
            timeleft.innerHTML = "00:00";  
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
    //e.preventDefault();
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
