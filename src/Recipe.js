import React,{useState} from 'react'

function Recipe({ recipes, handleDeleteRecipe }){

  return ( recipes.map((recipe, index) => (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} /></td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td><button name="delete" onClick={() => handleDeleteRecipe(index)}>Delete</button></td>
    </tr>
  ))   
  )
}

export default Recipe;