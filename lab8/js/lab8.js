/**
 * Author: Skylar Harp
 * Created: 05/08/2023
 * 
 **/


function halfDat (x) {
    return (x * 0.5);
}
//test function
console.log("Divide the numbers in half", halfDat (1));

array = [9, 29, 10, 20, 39]
console.log("My Array", array);

var result =array.map(halfDat);
//should return divided numbers
console.log("testing testing:", result);

var result = array.map(function(x){
    return x ** .25;
})

console.log("Calculations:", result);

