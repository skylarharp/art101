/**
 * Author: Skylar Harp
 * Created: 05/22/2023
 * 
 **/

function sortingHat(str) {
    length = str.length;
    mod = length % 4;
    if (mod ==0) {
        return "Ravenclaw"
    } 
    else if (mod ==1) {
        return "Gryffindor"
    }
    else if (mod ==2){
        return "Hufflepuff"
    }
    else if (mod ==3){
        return "Slytherin"
     }

}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>Sorting Hat says you're in " + house + "!" + "</p>";
    document.getElementById("output").innerHTML = newText

})