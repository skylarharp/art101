/**
 * Author: Skylar Harp
 * Created: 05/17/2023
 * 
 **/


$("#challenge").append("<button id='c-button'>Button</button>");
$("#problems").append("<button id='p-button'></button>");
$("#result").append("<button id='r-button'></button>");

$("#c-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
    $(this).parent().toggleClass("special");

})

$("#r-button").click(function(){
    $(this).parent().toggleClass("special");

})