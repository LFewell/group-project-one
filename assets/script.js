var requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
var apiKey = "de97dc6df0294b1abbe327d186a0de3d"
var directionUrl = "https://api.spoonacular.com/recipes/"
var btn = $("#search-btn") 


btn.on("click", function() {
    var userInput = document.getElementById('input').value
    if (userInput !== null) {
        localStorage.setItem("ingredient", userInput)
    }
    getRec();
    function getRec() {
    fetch(requestUrl + apiKey + "&ingredients=" + userInput + "&number=5")
    .then((response) => response.json())
    .then (function(data) {
        getDataId();
        console.log(data);
        // console.log(data[0].id)
        displayRecipe(data);

        function getDataId() {
            var id = data[0].id
            console.log(id)
;            if (id) {
                return id;
        }id.push(dataId)}
        recipeInfo(data);
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
// function getDataId(data) {
//     if (data[0].id) {
//         return this.data.id;
//     }
//     data.id.push(dataId);
// }

var dataId = [];
console.log(dataId);

function recipeInfo(data) {
    var id = data[0].id
    fetch(directionUrl + id + "/information" + "?apiKey=" + apiKey)
    .then((response) => response.json())
    .then (function(data) {
        console.log(data);


    })
    }



})
