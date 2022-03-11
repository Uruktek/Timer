let collapsibleMenuContent = document.getElementsByClassName("collapsible");
for (let index = 0; index < collapsibleMenuContent.length; index++) {
  collapsibleMenuContent[index].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function startTimer(duration, display) {
  var timer = duration,
    seconds;
  setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = seconds;
    console.log("beep?");
    console.log(timer);
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

let oneminButton = document.getElementsByClassName("1min");
console.log(oneminButton);
oneminButton[0].addEventListener("click", function () {
  startTimer(60, document.querySelector("#clock"));
});
