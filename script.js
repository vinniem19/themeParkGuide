


function sendMessage () {
    let contactEmail = $("#exampleFormControlInput1").val();
    let contactMessage = $("#exampleFormControlTextarea1").val();
    console.log(contactEmail);
    console.log(contactMessage);

    // Changing the page html to say "Thank You!  Message Received."

    $("#page1").html("<h1>Thank you! Message Received.</h1>")
}

// I used this function to create a db entry from a form body

/* create: function(req, res) {
        console.log(req.body);
        db.Event.create(req.body)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    */

   // Using ajax

   /*
   var query url = www.obdmi.com;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
*/
