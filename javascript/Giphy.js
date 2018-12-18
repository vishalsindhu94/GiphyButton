
    var topics= ["dog","cat","mouse","rat","bear","bird"];
    var image="";
    function renderButtons(){
      $("#createdButtons").empty();
      $("#giphySearch").val("");

      for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button class='btn btn-primary'>");
          newButton.addClass("animal-btn");
          newButton.attr("data-animal", topics[i]);
          newButton.text(topics[i]);
        $("#createdButtons").append(newButton);
        $("#createdButtons").append("");
      }
    }
    renderButtons();
    displayAnimalInfo();

    $("#search").on("click", function(event) {
      event.preventDefault();
      animalInput = $("#giphySearch").val().trim();
      animal= $(this).attr("data-animal");
      console.log(animal);
      topics.push(animalInput);
      renderButtons();  
      return false;
    });

    $(document).on("click",".animal-btn",displayAnimalInfo)
    function displayAnimalInfo() {
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
            var displayRating = $("<p>").text("Rating: " + results[i].rating);
            console.log(animal);
            console.log(displayRating);
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);
            console.log(image);
            animalDiv.append(displayRating);
            animalDiv.append(image);
            $("#giphyOutput").append(animalDiv);
            
    });
};
    

