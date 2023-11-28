import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const handleRecipe = (newRecipe) => {
    const newDat = {
    name: newRecipe[0],
    cuisine: newRecipe[1],
    photo: newRecipe[2],
    ingredients: newRecipe[3],
    preparation: newRecipe[4]
  }
    setRecipes([...recipes, newDat])
  }
  const handleDeleteRecipe = (deleteIndex) => {
    setRecipes(recipes.filter((eachRecipe, index) => index !== deleteIndex))
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate recipes={recipes} handleRecipe={handleRecipe} />
    </div>
  );
}

export default App;
