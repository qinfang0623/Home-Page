

/* --------------------------------------------------------------------
                           Clock
-------------------------------------------------------------------- */

function updateTime() {
  var dateInfo = new Date();

  /* time */
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    day = dateInfo.getDate();

  // store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);





/* --------------------------------------------------------------------
                           Cover page
-------------------------------------------------------------------- */

function greeting() {
  for (var i = 0; i < 2; i++) {
    if (document.querySelector(".ampm").textContent === "AM" && ["6", "7", "8", "9", "10", "11"].includes(document.querySelector(".hms").textContent.split(":")[0])) {
      document.querySelectorAll(".big-title")[i].innerHTML = "Morning, Qinfang.";
    }
    if (document.querySelector(".ampm").textContent === "PM" && ["12", "1", "2", "3", "4", "5"].includes(document.querySelector(".hms").textContent.split(":")[0])) {
      document.querySelectorAll(".big-title")[i].innerHTML = "Afternoon, Qinfang.";
    }
    if (document.querySelector(".ampm").textContent === "PM" && ["6", "7", "8", "9", "10", "11"].includes(document.querySelector(".hms").textContent.split(":")[0])) {
      document.querySelectorAll(".big-title")[i].innerHTML = "Evening, Qinfang.";
    }
    if (document.querySelector(".ampm").textContent === "AM" && ["12", "1", "2", "3", "4", "5"].includes(document.querySelector(".hms").textContent.split(":")[0])) {
      document.querySelectorAll(".big-title")[i].innerHTML = "Night, Qinfang.";
    }
  }
}


function containerFunc1() {
  greeting();
  var randomImage = "image/img" + Math.floor(Math.random() * 80 + 1) + ".jpg";
  var img_tag = new Image();
  img_tag.src = randomImage;
  img_tag.onload = function() {
    document.querySelector(".title-container1").style.backgroundImage = `url(${img_tag.src})`;
  }
  var signatures = ["Keep Going!", "Life, love, laugh!", "Dream Big!", "Never Give Up!", "Just Do It!", "You Can Make It!", "You Are The Best!", "Learning is magic!", "Get Started Now!"]
  var randomMessage = signatures[Math.floor(Math.random() * 3 + 1)];
  document.querySelectorAll(".signiture")[0].innerHTML = randomMessage;
}

function containerFunc2() {
  greeting();
  $('.title-container2').delay(1000 * 3).fadeIn(1000 * 2).delay(1000 * 23).fadeOut(1000 * 2);
  var randomImage = "image/img" + Math.floor(Math.random() * 80 + 1) + ".jpg";
  var img_tag = new Image();
  img_tag.src = randomImage;
  img_tag.onload = function() {
    document.querySelector(".title-container2").style.backgroundImage = `url(${img_tag.src})`;
  }
  var signatures = ["Keep Going!", "Life, love, laugh!", "Dream Big!", "Never Give Up!", "Just Do It!", "You Can Make It!", "You Are The Best!", "Learning is magic!", "Get Started Now!"]
  var randomMessage = signatures[Math.floor(Math.random() * 3 + 1)];
  document.querySelectorAll(".signiture")[1].innerHTML = randomMessage;
}


greeting();
 $('.title-container2').fadeIn(1000 * 2).delay(1000 * 26).fadeOut(1000 * 2);

$(function () {
    setInterval(function () {
      containerFunc2();
      setTimeout(function(){
        containerFunc1();
      }, 1000 * 10);
    }, 1000 * 60);
});







/* --------------------------------------------------------------------
                         background music
-------------------------------------------------------------------- */

document.querySelector(".clock").addEventListener("click", function(event) {
  var backgroundMusic = new Audio("music/background-music.mp3");
  backgroundMusic.play();
  console.log(event);
})
