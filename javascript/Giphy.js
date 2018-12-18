//initially var animal is undefined, im trying to set it to the created buttons so that when u click on them it registers the value
//after u click on a button the value is set and it pulls the right gifs but rating and images are giving me an error
//Uncaught TypeError: Cannot read property 'rating' of undefined, if i change it to result.rating it fixes the error but then gives me an error with images
//search function does not work,trying to capture the input value, push that into the topics array and then use the render function to create a button for that input
 //since my code isnt working ill try to explain what should be happening in my code overall from my understanding   
    var topics= ["dog","cat","mouse","rat","bear","bird"];
    var image="";
    // new button creating function
    function renderButtons(){
      $("#createdButtons").empty();
      $("#giphySearch").val("");
      for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button class='btn btn-primary'>");
          newButton.addClass("animal-btn");
          newButton.attr("data-animal", topics[i]);
          newButton.text(topics[i]);
          // move the new buttons to the html div
        $("#createdButtons").append(newButton);
        $("#createdButtons").append("");
      }
    }
    renderButtons();
    displayAnimalInfo();
//search function which uses the previous function to create a button for what was searched
    $("#search").on("click", function(event) {
      event.preventDefault();
      animalInput = $("#giphySearch").val().trim();
      console.log(animal);
      topics.push(animalInput);
      renderButtons();  
      
    });
//function that creates the gifs when u click on a button from createdButtons div
    
    function displayAnimalInfo() {
      // i think my problem is here, this is where the undefined stuff starts
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=JiKCiDrv0cfw357iDe8Bd74lbNMXfHWd&limit=10&lang=en"
        console.log(queryURL);
        console.log(animal);
        console.log(topics);
        $("#giphyOutput").empty();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log("hello");
        console.log(topics);
        renderButtons();
        var results = response.data;
        $("#giphyOutput").empty();
        for(var i = 0; i < results.length; i++)
            var animalDiv = $("<div>");
            //error here but this should be setting this variable to a p tag which contains the rating for whatever gif the loop is on
            var displayRating = $("<p>").text("Rating: " + results[i].rating);
            console.log(animal);
            console.log(displayRating);
            var image = $("<img>");
            //same thing here storing the image + error
            image.attr("src", results[i].images.fixed_height.url);
            console.log(image);
            animalDiv.append(displayRating);
            animalDiv.append(image);
            // this should push the rating/images onto the html for display
            $("#giphyOutput").prepend(animalDiv);
            
    });
};
$(document).on("click",".animal-btn",displayAnimalInfo);

