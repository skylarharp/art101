/**
 * Author: Skylar Harp
 * Created: 06/05/2023
 * 
 **/

// Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://www.balldontlie.io/api/v1/players/237",
    // The data to send (will be converted to a query string)
    data: {
      id: "237"
    } ,
    // Whether this is a POST or GET request
    type: "GET",
   
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        var first_name = data.first_name
  
    $("#output").append("first_name:" + " " + first_name );
  
    },
  })
  
 