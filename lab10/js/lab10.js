/**
 * Author: Skylar Harp
 * Created: 05/15/2023
 * 
 **/

function sortMe(str) {
    return str.split('').sort().join('');
}


var buttonEl = document.getElementById("my-button");

buttonEl.addEventListener("click", function(){
    console.log("Button Pressed");

    var name = document.getElementById("getit").value
    var nameStr = "Hello " + sortMe(name)+ ", " + "here's your new name!";

    var helloEl = document.getElementById("hello-you");
    helloEl.innerHTML = nameStr

})
