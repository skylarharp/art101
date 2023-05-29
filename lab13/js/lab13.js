/**
 * Author: Skylar Harp
 * Created: 05/29/2023
 * 
 **/

function fizzBuzzBoom () {
    var audi = "";

    for (var num = 1;num<=200; num++) {

        if (num % 105 == 0){
            audi += "FizzBuzzBoom";
        }
        else if (num % 35 == 0){
            audi += "BuzzBoom";
        }
        else if (num % 21 == 0){
            audi += "FizzBoom ";
        }
        else if (num % 15 == 0){
            audi += "FizzBuzz ";
        }
        else if (num % 7 == 0){
            audi += "Boom ";
        }
        else if (num % 5 == 0){
            audi += "Buzz ";
        }
        else if (num % 5 == 0){
            audi += "Fizz ";
        } else {
            audi += num +" ";
        }
    }
    return audi;
}
$

var results = document.getElementById("output");
var outty = document.createElement("p");
outty.innerHTML = fizzBuzzBoom();
results.appendChild(outty)



