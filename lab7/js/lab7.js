/**
 * Author: Skylar Harp
 * Created: 05/02/2023
 * 
 **/

function sortUserName() {

    var userName = window.prompt("Let's put your name in the correct order.");
    console.log("userName =", userName);

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray)

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort)

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;

}

document.writeln("Sorted Name: ",
    sortUserName(), "</br>", "Your new name is above.");