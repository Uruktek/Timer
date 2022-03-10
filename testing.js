let startTime = new Date().getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    console.log(now);

    var distance = startTime - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    console.log(minutes);

    if(distance < 0){
        clearInterval(x);
        console.log("Expired");
    }
})