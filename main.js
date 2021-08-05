
// Functions
function getRandomDish(dishArray) {
    return Math.floor(Math.random() * dishArray.length);
}

function changeDisplay() {
    document.querySelector(".start").classList.add("hidden")
    document.querySelector(".results").classList.remove("hidden")
}

function displayPot() {
    document.querySelector(".start").classList.remove("hidden")
    document.querySelector(".results").classList.add("hidden")
    clearRadioButton()
}

function clearRadioButton() {
    document.querySelector('#side').checked = false
    document.querySelector('#mainDish').checked = false
    document.querySelector('#dessert').checked = false
    document.querySelector('#entireMeal').checked = false
}

function generateRandomFood() {
    if (document.getElementById("side").checked) {
        foodResult.innerText = `${sides[getRandomDish(sides)]}!`
        changeDisplay()
    } else if (document.getElementById("mainDish").checked) {
        foodResult.innerText = `${mainDishes[getRandomDish(mainDishes)]}!`
        changeDisplay()
    } else if (document.getElementById("dessert").checked) {
        foodResult.innerText = `${desserts[getRandomDish(desserts)]}!`
        changeDisplay()
    } else if (document.getElementById("entireMeal").checked) {
        foodResult.innerText = `${mainDishes[getRandomDish(mainDishes)]} with a side of ${sides[getRandomDish(sides)]} and ${desserts[getRandomDish(desserts)]} for dessert!`
        changeDisplay()
    }
}

function displayCreateDish() {
    document.querySelector(".added-recipe").classList.toggle("hidden")
}

function addNewRecipe() {
    var newRecipeName = document.getElementById("recipe-name")
    var newRecipeType = document.getElementById("recipe-type").selectedIndex
    var optionHTML = document.getElementsByTagName("option") 
    
    if (optionHTML[newRecipeType].value === "side") {
        sides.push(newRecipeName.value)
    } 
    else if (optionHTML[newRecipeType].value === "mainDish") {
        mainDishes.push(newRecipeName.value)
    } 
    else if (optionHTML[newRecipeType].value === "dessert") {
        desserts.push(newRecipeName.value)
    }
    foodResult.innerText = `${newRecipeName.value}!`
    
    changeDisplay()
    displayCreateDish()
}

// DOM Elements
letsCookButton = document.querySelector(".cook-button")
foodResult = document.getElementById("result-text")
clearButton = document.querySelector(".empty-out")
addButton = document.querySelector(".button")
newRecipeButton = document.getElementById("new-addition")

// Event Listeners
letsCookButton.addEventListener("click", generateRandomFood)
clearButton.addEventListener("click",displayPot)
addButton.addEventListener("click", displayCreateDish)
newRecipeButton.addEventListener("click", addNewRecipe)
