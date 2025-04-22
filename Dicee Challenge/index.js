function diceRoll () {
    //roll random number for both dice
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    //change dice image according to numbers
    document.getElementsByClassName("img1")[0].src = "./images/dice"+randomNumber1+".png";
    document.getElementsByClassName("img2")[0].src = "./images/dice"+randomNumber2+".png";
    //prints the player who wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "☝️ Player 1 Wins!"
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerText = "🙌 It's a tie!"
    }
    else {
        document.querySelector("h1").innerText = "✌️ Player 2 Wins!"
    }
}



function play(){
    let count = 0;

    const rollInterval = setInterval(roll, 200)
    function roll (){
        let roll1 = Math.floor(Math.random() * 6) + 1; //roll dice1 random number
        let roll2 = Math.floor(Math.random() * 6) + 1; //roll dice2 random number
        document.getElementsByClassName("img1")[0].src = "./images/dice"+roll1+".png";
        document.getElementsByClassName("img2")[0].src = "./images/dice"+roll2+".png";

        count++;

        //stop iteration after 5 tries
        if(count > 5){
            clearInterval(rollInterval);
            diceRoll(); // print winner after rolling dice
        }

    }
    
}

