const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchRecipes(query);
  }
});

async function fetchRecipes(query) {
  results.innerHTML = "Loading...";
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    showResults(data.meals);
  } catch (err) {
    results.innerHTML = "Error fetching data.";
  }
}

function showResults(meals) {
  results.innerHTML = "";
  if (!meals) {
    results.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <button onclick="showIngredients('${meal.idMeal}')">View Ingredients</button>
    `;
    results.appendChild(card);
  });
}

async function showIngredients(id) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    const meal = data.meals[0];

    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients += `• ${ingredient} - ${measure}<br>`;
      }
    }

    alert(`Ingredients for ${meal.strMeal}:\n\n` + ingredients.replace(/<br>/g, '\n'));
  } catch (err) {
    alert("Failed to load ingredients.");
  }
}