// JavaScript for add.html 

const addBtnInput = document.querySelector(".addbtn-input");
const addBtnTextarea = document.querySelector(".addbtn-textarea")
const newInputCont = document.querySelector(".new-input-container");
const newTextareacont = document.querySelector(".new-textarea-container")

// To add an input for ingredients
addBtnInput.addEventListener("click", addNewInput);

function addNewInput(){
    const newInput = document.createElement("input");
    newInput.classList.add("newinput-styled");

    newInputCont.appendChild(newInput);
}

// To add a textbox for steps
addBtnTextarea.addEventListener("click", addNewTextarea);

function addNewTextarea(){
    const newTextarea = document.createElement("textarea");
    newTextarea.classList.add("newtextarea-styled");

    newTextareacont.appendChild(newTextarea);
} 


// saving recipe information on a page 
let recipe = [];
let ingredients = [];
let StepByStep = [];

const addArrays = (ev) => {
    ev.preventDefault(); // Stopping the form from submitting
    let recipeTitle = {
        title: document.getElementById("recipeTitle").value,
        recipeType: document.getElementById("recipeType").value
    }
    recipe.push(recipeTitle);

    let ingredientsItems = {
        ing1: document.getElementById("ing1").value,
        ing2: document.getElementById("ing2").value,
        ing3: document.getElementById("ing3").value,
        ing4: document.getElementById("ing4").value,
        extraing: document.getElementsByClassName("newinput-styled").value
    }
    ingredients.push(ingredientsItems);

    let steps = {
        step1: document.getElementById("step1").value,
        step2: document.getElementById("step2").value, 
        step3: document.getElementById("step3").value, 
        extrasteps: document.getElementsByClassName("newtextarea-styled").value 
    }
    StepByStep.push(steps);

    localStorage.setItem("Recipe Title", JSON.stringify(recipe) );
    localStorage.setItem("Ingredient Items", JSON.stringify(ingredients) );
    localStorage.setItem("Step by step", JSON.stringify(StepByStep) );

}


document.addEventListener("DOMContentLoaded", () =>{ 
    document.getElementById("submitBtn").addEventListener("click", addArrays);
});

