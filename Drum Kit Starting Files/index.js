// for (var i = 0; i<document.querySelectorAll(".drum").length; i++){


// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
//     var buttonInnerHTML = this.innerHTML;
//     playSound(buttonInnerHTML);
//     animateButton(buttonInnerHTML);
//     // setTimeout(() => {
//     //     // Code to be executed after the delay
//     //     animateRemove(buttonInnerHTML);
//     //   }, 100);


    
// });

// }

// document.addEventListener("keydown", function(event){
//     playSound(event.key);
//     animateButton(event.key);
//     // setTimeout(() => {
//     //     // Code to be executed after the delay
//     //     animateRemove(event.key);
//     //   }, 100);
// })

$(".drum").on("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
});

$(document).keypress(function(event) {
    playSound(event.key);
    animateButton(event.key);
});

function playSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;   

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;  

       
        default:
            break;
    }
}

function animateButton(currentKey){
    $("." + currentKey).addClass("pressed");
    setTimeout(() => {
        // Code to be executed after the delay
        $("." + currentKey).removeClass("pressed");;
      }, 200);
}

// function animateRemove(currentKey){
//     var activeButton = document.querySelector("." + currentKey);
//     activeButton.classList.remove("pressed");
// }