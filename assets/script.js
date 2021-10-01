var requestUrl =
  "https://api.spoonacular.com/recipes/findByIngredients?apiKey=";
var apiKey = "360bc10ebb6f43fd953b5e1ff0f3dc83";
var directionUrl = "https://api.spoonacular.com/recipes/";
var btn = $("#search-btn");
var nutritionUrl = "https://api.spoonacular.com/recipes/";

btn.on("click", function () {
  var userInput = document.getElementById("input").value;
  if (userInput !== null) {
    localStorage.setItem("ingredient", userInput);
  }
  getRec();
  function getRec() {
    fetch(requestUrl + apiKey + "&ingredients=" + userInput + "&number=5")
      .then((response) => response.json())
      .then(function (data) {
        getDataId();
        console.log(data);
        // console.log(data[0].id)
        displayRecipe(data);

        function getDataId() {
          var id = data[0].id;
          console.log(id);
          if (id) {
            dataId.push(id);
            return id;
          }
        }
        recipeInfo(data);
        displayCards();
      });
  }

  function displayRecipe(data) {
    recipeCard(data);
    var name = data[0].title;
    var ingredient = data[0].usedIngredients;
    document.querySelector("#bRecipe1").innerText = " " + name;
    document.querySelector("#bIngredients1").innerText = " " + ingredient;

    function recipeCard(data) {
      for (i = 0; i < 5; i++) {
        $("#idTitle" + i).html(data[i].title);
        $("#card" + i).attr("src", data[i].image);
      }
    }
  }
  // function getDataId(data) {
  //     if (data[0].id) {
  //         return this.data.id;
  //     }
  //     data.id.push(dataId);
  // }

  var dataId = [];
  console.log(dataId);

  function recipeInfo(data) {
    var id = data[0].id;
    fetch(directionUrl + id + "/information" + "?apiKey=" + apiKey)
      .then((response) => response.json())
      .then(function (data) {
        var recipe = "Recipe";
        var link = data.sourceUrl;
        console.log(data);
        document.querySelector(".card-text").innerHTML = recipe.link(link);
      });
    fetch(nutritionUrl + id + "/nutritionWidget.json" + "?apiKey=" + apiKey)
      .then((response) => response.json())
      .then(function (data) {
        var calories = data.calories;
        document.querySelector("#bCalorie1").innerText = " " + calories;
        console.log("widgetdata", data);
      });
  }
  function displayCards() {
      var cards = document.querySelector(".testl");
      cards.classList.toggle("d-none")
      cards.classList.toggle("is-shown");
  }
});
