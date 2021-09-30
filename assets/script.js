var requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=de97dc6df0294b1abbe327d186a0de3d'
var button = document.getElementById("test")
var btn = $("#search-btn")


btn.on("click", function(){
    var userInput = document.getElementById('input').value
    if (userInput !== null) {
        localStorage.setItem("ingredient", userInput)
    }
    getRec();
    function getRec() {
    fetch(requestUrl + "&ingredients=" + userInput)
    .then((response) => response.json())
    .then ((data) => console.log(data))
};
function displayRecipe(data) {
    const {name} = title;
    console.log(name);
}

});