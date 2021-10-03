var apiKey = "360bc10ebb6f43fd953b5e1ff0f3dc83";
var spoonacularUrl = "https://api.spoonacular.com/recipes/";
var btnSearchIngredients = $("#btn-search-ingredients");
var btnSaveCalendar = $("#btn-save-calendar");
var btnClearCalendar = $("#btn-clear-calendar");
var dataIds = [];
var calendarSlots = ["mon-b", "mon-l", "mon-d", "tue-b", "tue-l", "tue-d", "wed-b", "wed-l", "wed-d", "thu-b", "thu-l", "thu-d", "fri-b", "fri-l", "fri-d"]

/*
    If there is any data in local storage for a Calendar Slot,
    populate Slot with stored data
*/
for (slot of calendarSlots) {
    var slotId = "#" + slot
    var savedSlot = localStorage.getItem(slot)
    if (savedSlot && savedSlot != "") {
        $(slotId).html(localStorage.getItem(slot))
    }
}

//Enables adding a Recipe Card to a Calendar Slot 
$("#card-add0").on('click', function() {
    addRecipeToSlot("#card-add0");
});
$("#card-add1").on('click', function() {
    addRecipeToSlot("#card-add1");
});
$("#card-add2").on('click', function() {
    addRecipeToSlot("#card-add2");
});
$("#card-add3").on('click', function() {
    addRecipeToSlot("#card-add3");
});
$("#card-add4").on('click', function() {
    addRecipeToSlot("#card-add4");
});

function addRecipeToSlot(buttonId) {
    //TODO: Save Data from Recipe Card into calendar slot specified in drop downs
}

btnSaveCalendar.on("click", function() {
    for (slot of calendarSlots) {
        var slotId = "#" + slot
        localStorage.setItem(slot, $(slotId).html())
    }
})

btnClearCalendar.on("click", function() {
    for (slot of calendarSlots) {
        localStorage.removeItem(slot)
    }
})

btnSearchIngredients.on("click", function() {
    var userInput = document.getElementById("input-ingredients").value;

    if (userInput !== null) {
        localStorage.setItem("ingredient", userInput);
    }

    getRecipe();

    function getRecipe() {
        fetch(spoonacularUrl + "findByIngredients?apiKey=" + apiKey + "&ingredients=" + userInput + "&number=5")
            .then((response) => response.json())
            .then(function(data) {
                for (recipe of data) {
                    dataIds.push(recipe.id);
                    console.log(dataIds)
                }
                displayRecipe(data); //Populating first 5 Recipe Cards, Hardcoding Monday Breakfast
                recipeInfo(data);
                displayCards(); //Show hidden Recipe Cards
            });
    }

    function displayRecipe(data) {
        for (var i = 0; i < 5; i++) {
            $("#idTitle" + i).html(data[i].title);
            $("#card" + i).attr("src", data[i].image);
        }

        //Hardcode First Recipe title and first ingredient to Monday's Breakfast
        var name = data[0].title;
        var ingredient = data[0].usedIngredients[0].name;
        document.querySelector("#bRecipe1").innerText = " " + name;
        document.querySelector("#bIngredients1").innerText = " " + ingredient;
    }

    function recipeInfo(data) {
        for (let i = 0; i < 5; i++) {
            var id = data[i].id;
            fetch(spoonacularUrl + id + "/information" + "?apiKey=" + apiKey)
                .then((response) => response.json())
                .then(function(recipeData) {
                    console.log("Setting recipe link for " + i + " with data url " + recipeData.sourceUrl)
                    var recipeLink = "Recipe".link(recipeData.sourceUrl);
                    document.getElementById("card-text" + i).innerHTML = recipeLink;
                });
            fetch(spoonacularUrl + id + "/nutritionWidget.json" + "?apiKey=" + apiKey)
                .then((response) => response.json())
                .then(function(nutritionData) {
                    var calories = nutritionData.calories;
                    console.log("Setting calories for " + i + " with calories " + nutritionData.calories)
                    document.getElementById("bCalorie" + i).innerText = " " + calories;
                    console.log("widgetdata", nutritionData);
                });
            fetch(spoonacularUrl + id + "/ingredientWidget.json" + "?apiKey=" + apiKey)
                .then ((response) => response.json())
                .then(function (data) {
                    var ingredients = data.ingredients;
                    console.log(ingredients);
                    document.querySelector("#bIngredients1").innerText = " " + ingredients;
                }
                )
            }
        }
    });

    function displayCards() {
        var cards = document.querySelector("#recipeChocies");
        cards.classList.toggle("d-none");
        cards.classList.toggle("d-block");
    }