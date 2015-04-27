// function playKan(){
//      var audio = document.getElementById("kan");
//      audio.play();
//                }


// function playKen(){
//      var audio = document.getElementById("ken");
//      audio.play();
//                }

// function playWale(){
//      var audio = document.getElementById("wale");
//      audio.play();
//                }






$(document).ready(function(){
  // $("#music-box2").hover(function() {
  //   console.log(10);
  //   $("#play-button").show();
  //     }, function () {
  //   $("#play-button").hide();
  // });
  $("#music-box1").click(function() {
      var audio = document.getElementById("kan");
      if (audio.paused == false) {
        audio.pause();
      }
      else {
        audio.play();
      }
  });
  $("#music-box2").click(function() {
      var audio = document.getElementById("ken");
      if (audio.paused == false) {
        audio.pause();
      }
      else {
        audio.play();
      }
  });
  $("#music-box3").click(function() {
      var audio = document.getElementById("wale");
      if (audio.paused == false) {
        audio.pause();
      }
      else {
        audio.play();
      }
  });

});