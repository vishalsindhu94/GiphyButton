
    var topics= ["dog","cat","mouse","rat","bear","bird"];
    var animal;
    function displayAnimalInfo() {

         animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JiKCiDrv0cfw357iDe8Bd74lbNMXfHWd&q=animal&limit=10&offset=0&rating=PG-13&lang=en"
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
            var giphyDiv= $("<div>");
            $(giphyDiv).addClass("giphyDiv");
            var rating = response.rating;
            var displayRating = $("<p>").text("Rating: " + rating);
            $(giphyDiv).append(displayRating);

            var imgURL = results[i].images;
            var image = $("<img>").attr("src", imgURL);
            $(giphyDiv).addClass("image");
            $(giphyDiv).append(image);
            $("#giphyOutput").prepend(giphyDiv);
    });
};
    function renderButtons(){
        $("#createdButtons").empty();
        $("#giphySearch").val("");

        for (var i = 0; i < topics.length; i++) {
          var newButton = $("<button>");
            newButton.addClass("animal-btn");
            newButton.attr("data-name", topics[i]);
            newButton.text(topics[i]);
          $("#createdButtons").append(newButton);
        }
      }
      renderButtons();

      $("#search").on("click", function(event) {
        event.preventDefault();
        animal = $("#giphySearch").val().trim();
        topics.push(animal);
      });

      $(document).on("click", ".animal-btn", displayAnimalInfo);
      displayAnimalInfo();
      
    

