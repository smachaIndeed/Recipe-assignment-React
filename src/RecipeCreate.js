import React, { useState } from "react";

function RecipeCreate({recipes, handleRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleNameChange = (event) => setName(event.target.value)
  const handleCuisineChange = (event) => setCuisine(event.target.value)
  const handlePhotoChange = (event) => setPhoto(event.target.value)
  const handleIngredientsChange = (event) => setIngredients(event.target.value)
  const handlePreparationChange = (event) => setPreparation(event.target.value)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleRecipe([name,cuisine, photo, ingredients, preparation])
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }
  
  
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                value={name}
                type='text'
                onChange={handleNameChange}
                placeholder="Name"
                />
            </td>
            <td>
              <input 
                name="cuisine"
                value={cuisine}
                type='text'
                onChange={handleCuisineChange}
                placeholder="Cuisine"
               />
            </td>
            <td>
              <input 
                name="photo"
                value={photo}
                type='text'
                onChange={handlePhotoChange}
                placeholder="Photo URL"
              />
            </td>
            <td>
              <textarea 
                name="ingredients"
                value={ingredients}
                onChange={handleIngredientsChange}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea 
                name="preparation"
                value={preparation}
                onChange={handlePreparationChange}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
