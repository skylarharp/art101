/**
 * Author: Skylar Harp
 * Created: 05/10/2023
 * 
 **/


var outputEl = document.getElementById("output");
console.log("outputEl:", outputEl);

var new1El = document.createElement("p");

new1El.innerHTML = "Hello World"; 
new1El.id = "new-one";

var new2El = document.createElement("p");
new1El.id = "new-two";

new2El.innerHTML = "Goodbye World";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


new1El.style.color = "green";
new2El.style.color = "orange";
outputEl.style.border = "dotted 4px green"
outputEl.className = "changed"