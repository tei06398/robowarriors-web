// JavaScript Document
//var liveScoring = ""; //If Live Scores do not Exist
var liveScoring = "https://ftcscores.com/event/YVi2mSon"; //If live scores Exist
// Date set
var countDownDate = new Date("Jan 19, 2019 07:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
 "use strict"; 
  // Today
  var now = new Date().getTime();
    
  // Distance function
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    if (liveScoring == "") {
		document.getElementById("time").innerHTML = "Competition Time!";
	} else {
		document.getElementById("time").innerHTML = "<a style=\"color: white;\" href=\"" + liveScoring + "\">Live Scores</a>";
	}
  }
}, 1000);