var requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
var apiKey = "de97dc6df0294b1abbe327d186a0de3d"
var directionUrl = "https://api.spoonacular.com/recipes/"
var button = document.getElementById("test")
var btn = $("#search-btn")


btn.on("click", function(){
    var userInput = document.getElementById('input').value
    if (userInput !== null) {
        localStorage.setItem("ingredient", userInput)
    }
    getRec();
    recipeInfo();
    function getRec() {
    fetch(requestUrl + apiKey + "&ingredients=" + userInput + "&number=5")
    .then((response) => response.json())
    .then (function(data) {
        console.log(data);
        displayRecipe(data);
    })}

function displayRecipe(data) {
    recipeCard(data);
    var name = data[0].title;
    var ingredient = data[0].usedIngredients;
    document.querySelector("#bRecipe1").innerText = " " + name;
    document.querySelector("#bIngredients1").innerText = " " + ingredient;

    function recipeCard(data) {
        for (i = 0; i < 5; i++) {
            $("#idTitle"+ i).html(data[i].title)
            $("#card" + i).attr("src", data[i].image)
        }
        
    }
    
}

function recipeInfo(data) {
    fetch(directionUrl + "673463" + "/information" + "?apiKey=" + apiKey)
    .then((response) => response.json())
    .then (function(data) {
        console.log(data);
    })
    }

    

})