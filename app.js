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
let currentDate = new Date().getTime();
currentDate + 60000; //testing
let buttonsOfTimer = document.getElementsByClassName("1min");
buttonsOfTimer[0].addEventListener(
  "click",
  function () {
    let now = new Date().getTime();
    let distance = now - currentDate;
    console.log(distance);
    if (distance < 0) {
      console.log("it works?");
    }
  },
  1000
);
