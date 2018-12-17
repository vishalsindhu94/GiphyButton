
    var animals= [];
    function displayAnimalInfo() {

        var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&" + animal + "&limit=10&offset=0&rating=PG-13&lang=en";

   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
        console.log("hello");
        var animalDiv = $("<div class='animal'>");

        var rating = response.Rating;
        var displayRating = $("<p>").text("Rating: " + rating);
        animalDiv.append(displayRating);

        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        animalDiv.append(image);
        $("#giphyOutput").prepend(movieDiv);
    });
};
    function renderButtons(){
        $("#createdButtons").empty();

        for (var i = 0; i < animals.length; i++) {
          var newButton = $("<button>");
          
            newButton.addClass("animal-btn");
            newButton.attr("data-name", animals[i]);
            newButton.text(animals[i]);
          $("#createdButtons").append(newButton);
        }
      }
      $("#search").on("click", function(event) {
        event.preventDefault();
        var animal = $("#giphySearch").val().trim();
        animals.push(animal);
        renderButtons();
      });

      $(document).on("click", ".animal-btn", displayAnimalInfo);
      renderButtons();
    

