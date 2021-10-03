var apiKey = "de97dc6df0294b1abbe327d186a0de3d";
var spoonacularUrl = "https://api.spoonacular.com/recipes/";
var btnSearchIngredients = $("#btn-search-ingredients");
var btnSaveCalendar = $("#btn-save-calendar");
var btnClearCalendar = $("#btn-clear-calendar");
var dataIds = [];
var calendarSlots = ["mon-b", "mon-l", "mon-d", "tue-b", "tue-l", "tue-d", "wed-b", "wed-l", "wed-d", "thu-b", "thu-l", "thu-d", "fri-b", "fri-l", "fri-d"]

const mockInfoResponse = {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 5,
    "spoonacularScore": 44.0,
    "healthScore": 7.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 74.48,
    "extendedIngredients": [{
        "id": 12023,
        "aisle": "Ethnic Foods;Spices and Seasonings",
        "image": "sesame-seeds.png",
        "consistency": "solid",
        "name": "sesame",
        "nameClean": "sesame seeds",
        "original": "1 pack of fresh sesame leaves, approximately 25 to 30 leaves.",
        "originalString": "1 pack of fresh sesame leaves, approximately 25 to 30 leaves.",
        "originalName": "pack of fresh sesame leaves, approximately 25 to 30 leaves",
        "amount": 1.0,
        "unit": "",
        "meta": ["fresh"],
        "metaInformation": ["fresh"],
        "measures": {
            "us": {
                "amount": 1.0,
                "unitShort": "",
                "unitLong": ""
            },
            "metric": {
                "amount": 1.0,
                "unitShort": "",
                "unitLong": ""
            }
        }
    }, {
        "id": 12147,
        "aisle": "Produce;Baking",
        "image": "pine-nuts.png",
        "consistency": "solid",
        "name": "pine nuts",
        "nameClean": "pine nuts",
        "original": "1/2 cup of pine nuts, toasted in a dry pan until slightly brown",
        "originalString": "1/2 cup of pine nuts, toasted in a dry pan until slightly brown",
        "originalName": "pine nuts, toasted in a dry pan until slightly brown",
        "amount": 0.5,
        "unit": "cup",
        "meta": ["dry", "toasted"],
        "metaInformation": ["dry", "toasted"],
        "measures": {
            "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
            },
            "metric": { "amount": 118.294, "unitShort": "ml", "unitLong": "milliliters" }
        }
    }, {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic",
        "nameClean": "garlic",
        "original": "2 tablespoons minced garlic,",
        "originalString": "2 tablespoons minced garlic,",
        "originalName": "minced garlic",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": ["minced"],
        "metaInformation": ["minced"],
        "measures": {
            "us": {
                "amount": 2.0,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
            },
            "metric": {
                "amount": 2.0,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
            }
        }
    }, {
        "id": 1034053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "liquid",
        "name": "extra-virgin olive oil",
        "nameClean": "extra virgin olive oil",
        "original": "3/4 cup of extra virgin olive oil—the best you can afford",
        "originalString": "3/4 cup of extra virgin olive oil—the best you can afford",
        "originalName": "extra virgin olive oil—the best you can afford",
        "amount": 0.75,
        "unit": "cup",
        "meta": ["canned"],
        "metaInformation": ["canned"],
        "measures": {
            "us": {
                "amount": 0.75,
                "unitShort": "cups",
                "unitLong": "cups"
            },
            "metric": {
                "amount": 177.441,
                "unitShort": "ml",
                "unitLong": "milliliters"
            }
        }
    }, {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "salt",
        "nameClean": "salt",
        "original": "1/2 teaspoon of salt,",
        "originalString": "1/2 teaspoon of salt,",
        "originalName": "salt",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
            "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
            },
            "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
            }
        }
    }, {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consistency": "solid",
        "name": "black pepper",
        "nameClean": "black pepper",
        "original": "1/4 teaspoon black pepper",
        "originalString": "1/4 teaspoon black pepper",
        "originalName": "black pepper",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": ["black"],
        "metaInformation": ["black"],
        "measures": {
            "us": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
            },
            "metric": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
            }
        }
    }],
    "id": 649062,
    "title": "Korean Perilla Pesto",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/BRFS7BMZ/korean-perilla-pesto",
    "image": "https://spoonacular.com/recipeImages/649062-556x370.jpg",
    "imageType": "jpg",
    "summary": "Forget going out to eat or ordering takeout every time you crave Korean food. Try making Korean Perilla Pesto at home. This recipe serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe has <b>240 calories</b>, <b>1g of protein</b>, and <b>26g of fat</b> per serving. For <b>74 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. If you have pepper, salt, extra virgin olive oil—the best you can afford, and a few other ingredients on hand, you can make it. It works best as a condiment, and is done in about <b>roughly 45 minutes</b>. 5 people have tried and liked this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 43%</b>, which is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/kkaetnip-jangajji-korean-pickled-perilla-leaves-648975\">Kkaetnip Jangajji (Korean Pickled Perilla Leaves)</a>, <a href=\"https://spoonacular.com/recipes/marinated-perilla-leaves-200127\">Marinated Perilla Leaves</a>, and <a href=\"https://spoonacular.com/recipes/crab-and-perilla-summer-rolls-493014\">Crab-and-Perilla Summer Rolls</a>.",
    "cuisines": ["Korean", "Asian"],
    "dishTypes": ["condiment", "dip", "sauce", "spread"],
    "diets": ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    "occasions": [],
    "winePairing": {
        "pairedWines": ["chenin blanc", "gewurztraminer", "riesling"],
        "pairingText": "Chenin Blanc, Gewurztraminer, and Riesling are my top picks for Asian. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try David & Nadia Chenin Blanc. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 36 dollars per bottle.",
        "productMatches": [{
            "id": 484378,
            "title": "David & Nadia Chenin Blanc",
            "description": "Chenin Blanc from the Swartland focuses yet again on various Old Vine Vineyards, ranging plantings from 1962 till 1982 and based on granite from the Paardeberg, blended with schale/schist from the east, clay from the north and iron from the western parts of the Swartland. Dry-land farmed bush vines stood the test of time and it showcases the ultimate reason why Chenin Blanc is their main focus in the Swartland. Whole bunch pressed and naturally fermented, matured for 11 months in old neutral French oak barrels.",
            "price": "$35.99",
            "imageUrl": "https://spoonacular.com/productImages/484378-312x231.jpg",
            "averageRating": 0.8400000000000001,
            "ratingCount": 12.0,
            "score": 0.8129729729729731,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fdavid-and-nadia-chenin-blanc-2017%2F600857"
        }]
    },
    "instructions": "Put all the ingredients into a food processor and blend everything until it is a smooth paste.\nToss it in a bowl with some freshly cooked pasta of your choice and serve, garnishing with some leftover pine nuts.",
    "analyzedInstructions": [{
        "name": "",
        "steps": [{
            "number": 1,
            "step": "Put all the ingredients into a food processor and blend everything until it is a smooth paste.",
            "ingredients": [],
            "equipment": [{
                "id": 404771,
                "name": "food processor",
                "localizedName": "food processor",
                "image": "food-processor.png"
            }]
        }, {
            "number": 2,
            "step": "Toss it in a bowl with some freshly cooked pasta of your choice and serve, garnishing with some leftover pine nuts.",
            "ingredients": [{
                "id": 20421,
                "name": "cooked pasta",
                "localizedName": "cooked pasta",
                "image": "fusilli.jpg"
            }, {
                "id": 12147,
                "name": "pine nuts",
                "localizedName": "pine nuts",
                "image": "pine-nuts.png"
            }],
            "equipment": [{
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
            }]
        }]
    }],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/korean-perilla-pesto-649062"
}
const mockNutrientResponse = {
    "calories": "239k",
    "carbs": "1g",
    "fat": "26g",
    "protein": "1g",
    "bad": [{
            "title": "Calories",
            "amount": "239k",
            "indented": false,
            "percentOfDailyNeeds": 11.98
        }, {
            "title": "Fat",
            "amount": "26g",
            "indented": false,
            "percentOfDailyNeeds": 40.14
        },
        {
            "title": "Saturated Fat",
            "amount": "3g",
            "indented": true,
            "percentOfDailyNeeds": 20.13
        }, {
            "title": "Carbohydrates",

            "amount": "1g",
            "indented": false,
            "percentOfDailyNeeds": 0.61
        }, {
            "title": "Sugar",
            "amount": "0.32g",
            "indented": true,
            "percentOfDailyNeeds": 0.36
        }, {
            "title": "Cholesterol",
            "amount": "0.0mg",
            "indented": false,
            "percentOfDailyNeeds": 0.0
        }, {
            "title": "Sodium",
            "amount": "146mg",
            "indented": false,
            "percentOfDailyNeeds": 6.36
        }
    ],
    "good": [{
        "title": "Protein",
        "amount": "1g",
        "indented": false,
        "percentOfDailyNeeds": 2.62
    }, {
        "title": "Manganese",
        "amount": "0.79mg",
        "indented": false,
        "percentOfDailyNeeds": 39.38
    }, {
        "title": "Vitamin E",
        "amount": "3mg",
        "indented": false,
        "percentOfDailyNeeds": 24.64
    }, {
        "title": "Vitamin K",
        "amount": "16µg",
        "indented": false,
        "percentOfDailyNeeds": 16.07
    }, {
        "title": "Copper",
        "amount": "0.12mg",
        "indented": false,
        "percentOfDailyNeeds": 6.19
    }, {
        "title": "Magnesium",
        "amount": "22mg",
        "indented": false,
        "percentOfDailyNeeds": 5.56
    }, {
        "title": "Phosphorus",
        "amount": "52mg",
        "indented": false,
        "percentOfDailyNeeds": 5.25
    }, {
        "title": "Zinc",
        "amount": "0.58mg",
        "indented": false,
        "percentOfDailyNeeds": 3.85
    }, {
        "title": "Iron",
        "amount": "0.64mg",
        "indented": false,
        "percentOfDailyNeeds": 3.55
    }, {
        "title": "Vitamin B1",
        "amount": "0.04mg",
        "indented": false,
        "percentOfDailyNeeds": 2.38
    }, {
        "title": "Vitamin B3",
        "amount": "0.39mg",
        "indented": false,
        "percentOfDailyNeeds": 1.95
    }, {
        "title": "Potassium",
        "amount": "60mg",
        "indented": false,
        "percentOfDailyNeeds": 1.72
    }, { "title": "Vitamin B6", "amount": "0.03mg", "indented": false, "percentOfDailyNeeds": 1.69 }, {
        "title": "Fiber",
        "amount": "0.38g",
        "indented": false,
        "percentOfDailyNeeds": 1.54
    }, {
        "title": "Vitamin B2",
        "amount": "0.02mg",
        "indented": false,
        "percentOfDailyNeeds": 1.28
    }],
    "expires": 1633827320807
}
const mockRecipesResponse = [{
    "id": 649062,
    "title": "Korean Perilla Pesto",
    "image": "https://spoonacular.com/recipeImages/649062-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "missedIngredients": [{
        "id": 12023,
        "amount": 1.0,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Ethnic Foods;Spices and Seasonings",
        "name": "sesame",
        "original": "1 pack of fresh sesame leaves, approximately 25 to 30 leaves.",
        "originalString": "1 pack of fresh sesame leaves, approximately 25 to 30 leaves.",
        "originalName": "pack of fresh sesame leaves, approximately 25 to 30 leaves",
        "metaInformation": ["fresh"],
        "meta": ["fresh"],
        "extendedName": "fresh sesame",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/sesame-seeds.png"
    }, {
        "id": 11215,
        "amount": 2.0,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Produce",
        "name": "garlic",
        "original": "2 tablespoons minced garlic,",
        "originalString": "2 tablespoons minced garlic,",
        "originalName": "minced garlic",
        "metaInformation": ["minced"],
        "meta": ["minced"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    }],
    "usedIngredients": [{
        "id": 12147,
        "amount": 0.5,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce;Baking",
        "name": "pine nuts",
        "original": "1/2 cup of pine nuts, toasted in a dry pan until slightly brown",
        "originalString": "1/2 cup of pine nuts, toasted in a dry pan until slightly brown",
        "originalName": "pine nuts, toasted in a dry pan until slightly brown",
        "metaInformation": ["dry", "toasted"],
        "meta": ["dry", "toasted"],
        "extendedName": "dry pine nuts",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.png"
    }],
    "unusedIngredients": [],
    "likes": 5
}, {
    "id": 659479,
    "title": "Savory Olive & Goat Cheese Palmiers",
    "image": "https://spoonacular.com/recipeImages/659479-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [{
        "id": 1159,
        "amount": 0.5,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Cheese",
        "name": "goat cheese",
        "original": "1/2 cup crumbled goat cheese",
        "originalString": "1/2 cup crumbled goat cheese",
        "originalName": "crumbled goat cheese",
        "metaInformation": ["crumbled"],
        "meta": ["crumbled"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
    }, {
        "id": 98862,
        "amount": 0.25,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Canned and Jarred",
        "name": "olive tapenade",
        "original": "1/4 cup prepared olive tapenade (or another type, like artichoke tapenade)",
        "originalString": "1/4 cup prepared olive tapenade (or another type, like artichoke tapenade)",
        "originalName": "prepared olive tapenade (or another type, like artichoke tapenade)",
        "metaInformation": ["prepared", "(or another type, like artichoke tapenade)"],
        "meta": ["prepared", "(or another type, like artichoke tapenade)"],
        "extendedName": "cooked olive tapenade",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-tapenade.jpg"
    }, {
        "id": 18337,
        "amount": 1.0,
        "unit": "package",
        "unitLong": "package",
        "unitShort": "pkg",
        "aisle": "Refrigerated;Frozen",
        "name": "puff pastry dough",
        "original": "1 package (2 sheets) prepared puff pastry dough, thawed",
        "originalString": "1 package (2 sheets) prepared puff pastry dough, thawed",
        "originalName": "(2 sheets) prepared puff pastry dough, thawed",
        "metaInformation": ["thawed", "prepared", "(2 sheets)"],
        "meta": ["thawed", "prepared", "(2 sheets)"],
        "extendedName": "cooked puff pastry dough",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/puff-pastry.png"
    }],
    "usedIngredients": [{
        "id": 12147,
        "amount": 0.25,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce;Baking",
        "name": "pine nuts",
        "original": "1/4 cup toasted pine nuts",
        "originalString": "1/4 cup toasted pine nuts",
        "originalName": "toasted pine nuts",
        "metaInformation": ["toasted"],
        "meta": ["toasted"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.png"
    }],
    "unusedIngredients": [],
    "likes": 7
}, {
    "id": 657610,
    "title": "Quick N' Easy Basil Pesto",
    "image": "https://spoonacular.com/recipeImages/657610-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [{
        "id": 2044,
        "amount": 8.0,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "fresh basil leaves",
        "original": "8 cups of fresh basil leaves loosely packed",
        "originalString": "8 cups of fresh basil leaves loosely packed",
        "originalName": "fresh basil leaves loosely packed",
        "metaInformation": ["fresh", "loosely packed"],
        "meta": ["fresh", "loosely packed"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
    }, {
        "id": 11215,
        "amount": 2.0,
        "unit": "cloves",
        "unitLong": "cloves",
        "unitShort": "cloves",
        "aisle": "Produce",
        "name": "garlic",
        "original": "2 cloves of garlic coarsely chopped",
        "originalString": "2 cloves of garlic coarsely chopped",
        "originalName": "garlic coarsely chopped",
        "metaInformation": ["coarsely chopped"],
        "meta": ["coarsely chopped"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    }, {
        "id": 1033,
        "amount": 0.75,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Cheese",
        "name": "parmesan cheese",
        "original": "3/4 cup grated Parmesan cheese",
        "originalString": "3/4 cup grated Parmesan cheese",
        "originalName": "grated Parmesan cheese",
        "metaInformation": ["grated"],
        "meta": ["grated"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
    }],
    "usedIngredients": [{
        "id": 12147,
        "amount": 0.75,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce;Baking",
        "name": "pine nuts",
        "original": "3/4 cup Heaping of pine nuts",
        "originalString": "3/4 cup Heaping of pine nuts",
        "originalName": "Heaping of pine nuts",
        "metaInformation": [],
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.png"
    }],
    "unusedIngredients": [],
    "likes": 3
}, {
    "id": 660130,
    "title": "Simple Sage Pesto",
    "image": "https://spoonacular.com/recipeImages/660130-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [{
        "id": 99226,
        "amount": 2.0,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "fresh sage leaves",
        "original": "2 cups fresh sage leaves, loosely packed",
        "originalString": "2 cups fresh sage leaves, loosely packed",
        "originalName": "fresh sage leaves, loosely packed",
        "metaInformation": ["fresh", "loosely packed"],
        "meta": ["fresh", "loosely packed"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-sage.png"
    }, {
        "id": 11215,
        "amount": 2.0,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "garlic cloves",
        "original": "2 garlic cloves",
        "originalString": "2 garlic cloves",
        "originalName": "garlic cloves",
        "metaInformation": [],
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    }, {
        "id": 1033,
        "amount": 0.5,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Cheese",
        "name": "parmesan",
        "original": "1/2 cup freshly grated parmesan",
        "originalString": "1/2 cup freshly grated parmesan",
        "originalName": "freshly grated parmesan",
        "metaInformation": ["freshly grated"],
        "meta": ["freshly grated"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
    }],
    "usedIngredients": [{
        "id": 12147,
        "amount": 0.25,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce;Baking",
        "name": "pine nuts",
        "original": "1/4 cup pine nuts",
        "originalString": "1/4 cup pine nuts",
        "originalName": "pine nuts",
        "metaInformation": [],
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.png"
    }],
    "unusedIngredients": [],
    "likes": 1
}, {
    "id": 634435,
    "title": "Basil Pesto",
    "image": "https://spoonacular.com/recipeImages/634435-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 4,
    "missedIngredients": [{
        "id": 11215,
        "amount": 2.0,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "garlic cloves",
        "original": "2 lrgs garlic cloves",
        "originalString": "2 lrgs garlic cloves",
        "originalName": "lrgs garlic cloves",
        "metaInformation": [],
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    }, {
        "id": 2044,
        "amount": 1.0,
        "unit": "cup",
        "unitLong": "cup",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "basil leaves",
        "original": "cup fresh basil leaves (6 bunches)",
        "originalString": "cup fresh basil leaves (6 bunches)",
        "originalName": "fresh basil leaves (6 bunches)",
        "metaInformation": ["fresh", "(6 bunches)"],
        "meta": ["fresh", "(6 bunches)"],
        "extendedName": "fresh basil leaves",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
    }, {
        "id": 1033,
        "amount": 0.5,
        "unit": "ounce",
        "unitLong": "ounces",
        "unitShort": "oz",
        "aisle": "Cheese",
        "name": "parmesan cheese",
        "original": "2 tablespoons grated fresh Parmesan cheese (½ ounce)",
        "originalString": "2 tablespoons grated fresh Parmesan cheese (½ ounce)",
        "originalName": "tablespoons grated fresh Parmesan cheese",
        "metaInformation": ["fresh", "grated"],
        "meta": ["fresh", "grated"],
        "extendedName": "fresh parmesan cheese",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
    }, {
        "id": 9152,
        "amount": 2.0,
        "unit": "teaspoons",
        "unitLong": "teaspoons",
        "unitShort": "tsp",
        "aisle": "Produce",
        "name": "lemon juice",
        "original": "2 teaspoons lemon juice",
        "originalString": "2 teaspoons lemon juice",
        "originalName": "lemon juice",
        "metaInformation": [],
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
    }],
    "usedIngredients": [{
        "id": 12147,
        "amount": 2.0,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Produce;Baking",
        "name": "pine nuts",
        "original": "2 tablespoons pine nuts toasted",
        "originalString": "2 tablespoons pine nuts toasted",
        "originalName": "pine nuts toasted",
        "metaInformation": ["toasted"],
        "meta": ["toasted"],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.png"
    }],
    "unusedIngredients": [],
    "likes": 1
}]

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
            //.then((response) => response.json())
            .then(function() { // Mocks spoonacular response, since daily point limit is reached
                return new Promise(function(resolve, reject) {
                    resolve(mockRecipesResponse);
                });
            })
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
                //.then((response) => response.json())
                .then(function() { // Mocks spoonacular response, since daily point limit is reached
                    return new Promise(function(resolve, reject) {
                        resolve(mockInfoResponse);
                    });
                })
                .then(function(recipeData) {
                    console.log("Setting recipe link for " + i + " with data url " + recipeData.sourceUrl)
                    var recipeLink = "Recipe".link(recipeData.sourceUrl);
                    document.getElementById("card-text" + i).innerHTML = recipeLink;
                });
            fetch(spoonacularUrl + id + "/nutritionWidget.json" + "?apiKey=" + apiKey)
                //.then((response) => response.json())
                .then(function() { // Mocks spoonacular response, since daily point limit is reached
                    return new Promise(function(resolve, reject) {
                        resolve(mockNutrientResponse);
                    });
                })
                .then(function(nutritionData) {
                    var calories = nutritionData.calories;
                    console.log("Setting calories for " + i + " with calories " + nutritionData.calories)
                    document.getElementById("bCalorie" + i).innerText = " " + calories;
                    console.log("widgetdata", nutritionData);
                });
        }
    }

    function displayCards() {
        var cards = document.querySelector("#recipeChocies");
        cards.classList.toggle("d-none");
        cards.classList.toggle("d-block");
    }
});