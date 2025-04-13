var i = 100;

function bottlesOfBeer(){
    while (i >= 1){
        if (i === 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        }
        else {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall");   
        }
        i--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
}