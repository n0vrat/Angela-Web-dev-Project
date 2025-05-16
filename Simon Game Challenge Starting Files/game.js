var gamePattern = [];
let buttonColors = ["filler", "red", "blue", "yellow", "green"];
var lastColor = gamePattern[gamePattern.length - 1];


//generate a random number from 1 to 4
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber;
}

//choose a random color from buttonColors
function randomChosenColor (){
    return buttonColors[nextSequence()];
}

// $(".green").on("click", function(){
//     gamePattern.push(randomChosenColor());
//     alert(gamePattern + " last color is:  " + gamePattern[gamePattern.length - 1]);
    
// });

function flashColor(currentKey){
    $("#" + currentKey).addClass("pressed");
    setTimeout(() => {
        // Code to be executed after the delay
        $("#" + currentKey).removeClass("pressed");;
      }, 100);
    playSound(currentKey);
}

function playSound(key){
    switch (key) {
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.autoplay = true;
            red.play();
            break;

        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.autoplay = true;
            blue.play();
            break;
        
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.autoplay = true;
            yellow.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.autoplay = true;
            green.play();
            break;  
               
        default:
            break;
    }
}



$(".green").on("click", function(){
    gamePattern.push(randomChosenColor());
    flashColor(gamePattern[gamePattern.length - 1]);
    console.log(gamePattern);
    
});



