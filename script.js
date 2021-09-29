var requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=de97dc6df0294b1abbe327d186a0de3d'
 var userInput; //document.querySelector(".form-control").value
var button = document.getElementById("test")
var btn = $("#searched-btn")

btn.on("click", function(){
    var btn = $("#searched-btn").val();
    if (btn !== null) {
        localStorage.setItem("ingredient", btn)
    }
    getRec();
})


function getRec() {
    fetch(requestUrl + "&ingredients=" + "apple")
    .then((response) => response.json())
    .then ((data) => console.log(data))
};


// button.addEventListener("click", getRec);