let collapsibleMenuContent = document.getElementsByClassName("collapsible");
for (let index = 0; index < collapsibleMenuContent.length; index++) {
    collapsibleMenuContent[index].addEventListener("click", function() {
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
let buttonsOfTimer = document.getElementsByClassName("1min");
buttonsOfTimer[0].addEventListener("click",function(){
    setInterval(function(){
        let currentTime = new Date();
        document.getElementById("clock").style.color = 'red';
        document.getElementById("clock").innerHTML = currentTime.toLocaleDateString();
    },1000);
});