
    var animals= ["dog","cat","mouse","rat","bear","bird"];
    var animal;
    function displayAnimalInfo() {

         animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JiKCiDrv0cfw357iDe8Bd74lbNMXfHWd&q="+animal+"&limit=10&offset=0&rating=PG-13&lang=en";
        console.log(queryURL);
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
        console.log("hello");
        $("#giphyOutput").empty();
        var results=response.data;
        for(var i = 0; i < results.length; i++)

        var rating = response.rating;
        var displayRating = $("<p>").text("Rating: " + rating);
        animalDiv.append(displayRating);

        var imgURL = response.images;
        var image = $("<img>").attr("src", imgURL);
        animalDiv.append(image);
        $("#giphyOutput").prepend(animalDiv);
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
        animal = $("#giphySearch").val().trim();
        animals.push(animal);
        renderButtons();
      });

      $(document).on("click", ".animal-btn", displayAnimalInfo);
      renderButtons();
      displayAnimalInfo();
    

