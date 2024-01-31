// Ingredient List
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

console.log(inputBox);
console.log(listContainer);

function addTask() {
  if (inputBox.value === "") {
    alert("You must enter an ingredient!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

// API Integration
async function findRecipe() {
            const ingredients = Array.from(document.getElementById("list-container").getElementsByTagName("li"))
                .map(li => li.textContent);

            if (ingredients.length === 0) {
                alert('Please add ingredients before finding recipes.');
                return;
            }

            const appId = '04005c03';
            const appKey = '8f1d2c48928e03c65ad7b4fe16dcde8c';

            try {
                // Use Edamam API for recipe search
                const apiUrl = `https://api.edamam.com/search?q=${ingredients.join('+')}&app_id=${appId}&app_key=${appKey}&to=5`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                
// Display the recipes
                const recipeList = document.getElementById("recipeList");
                recipeList.innerHTML = ''; // Clear previous recipes
            }
          }