var requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=de97dc6df0294b1abbe327d186a0de3d'
var userInput = document.querySelector(".form-control")

function getRec() {
    fetch(requestUrl) + "&ingredients=" + userInput
    .then((response) => response.json())
    .then ((data) => this.displayRecipe(data));
};

function displayRecipe() {
    const { name } = data;
    console.log(name);
}