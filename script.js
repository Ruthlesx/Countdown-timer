
function updateLabels() {
  var startDate = new Date( '2024-01-01');
  var now = new Date();
  var daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById('day').innerHTML = "Days Passed:  366/" + daysPassed; 
  



  var tomorrow = new Date( now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var timeLeft = tomorrow - now;
  var hours = Math.floor((timeLeft / (1000 * 60 * 60 )) % 24);
  var minutes = Math.floor((timeLeft / 1000 /60) % 60);
  var seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById('countdown').innerHTML = "Countdown:  " + 
       hours.toString().padStart(2, '0') + ":" + 
       minutes.toString().padStart(2, '0') + ":" + 
       seconds.toString().padStart(2, '0');

  if (timeLeft => 0) {
    setTimeout(updateLabels, 1000);
  } else {
    setTimeout(updateLabels, timeLeft)
  }

}

updateLabels();


const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {

  var now = new Date();

  document.getElementById("time").innerText =
      "Current Time: " +
     zeroPadding(now.getHours(), 2) + ":" +
      zeroPadding(now.getMinutes(), 2) + ":" +
      zeroPadding(now.getSeconds(), 2);

  document.getElementById("date").innerText =
      now.getFullYear() + "-" +
      zeroPadding(now.getMonth() + 1, 2)+ "-" +
      zeroPadding(now.getDate(), 2) + " "+
      WEEK[now.getDay()] 

     }

     updateTime();
     setInterval(updateTime, 1000);

     function zeroPadding(num, digit) {
      return String(num).padStart(digit,'0');
     }