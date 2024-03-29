var allDrums = document.querySelectorAll(".drum").length

for (var i = 0; i < allDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var keys = this.innerHTML;
        play(keys);
        anim(keys);
    })
}

document.addEventListener("keypress", function (event) {
    play(event.key)
    anim(event.key)
})


function play(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            // alert("something went wrong");
            break;
    }
}

function anim(currKey) {
    var activeBtn = document.querySelector("."+currKey);
    activeBtn.classList.add("pressed")
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    },100)
}
