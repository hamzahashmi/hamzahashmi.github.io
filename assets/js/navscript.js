
$(document).ready(function(){


var messages = [
    "GO TO UC BERKELEY.",
    "STUDY CS.",
    "GRADUATE IN 2016.",
];

var counter = 0;
var elem = document.getElementById("message");
setInterval(change, 4000);

function change(){
 $('#message').html(messages[counter]).fadeIn(1000).delay(2000).fadeOut(1000);



 counter++;
    if(counter >= messages.length) { counter = 0; }
}






});