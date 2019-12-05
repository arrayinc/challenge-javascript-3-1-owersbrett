// # CHALLENGE 1

// As a way to pass the time on long bus trips, young people growing up in the
// United States have been known to sing the following rather repetitive song:

// > 99 bottles of beer on the wall.
// > 99 bottles of beer.
// > You take one down, pass it around. 98 bottles of beer on the wall.
// > 98 bottles of beer on the wall. . . .

// Anyway, you get the idea. Write a JavaScript program to display the lyrics of this song using console.log. In testing your program, it would make sense to use some constant other than 99 as the initial number of bottles.


function singAboutBeer(x){
    let s;
    let np;
    for (let i = x; i > 0; i--){
        s = "s";
        if (i === 1){
            s = "";
        }
        console.log(`${i} bottle${s} of beer on the wall.`);
        console.log(`${i} bottle${s} of beer.`);

        if (i - 1 === 1){
            s = "";
        } else {
            s = "s";
        }

        console.log(`You take one down, pass it around. ${i-1} bottle${s} of beer on the wall.`);
        if (i - 1 !== 0){
            console.log(`${i-1} bottle${s} of beer on the wall.`);
        }
    
    }
}

singAboutBeer(5);