const getRecipes = () => {
  const action = {type: 'FETCH_ALL', payload: []}

  return action
}

export const createRecipe = (recipeData) => async(dispatch) =>{
  if (localStorage.getItem('recipeData') == null){
    localStorage.setItem('recipeData', JSON.stringify([recipeData]))
  }else {
    let recipe = JSON.parse(localStorage.getItem('recipeData'))
    recipe.push(recipeData)
    localStorage.setItem('recipeData', JSON.stringify(recipe))
  }
  dispatch({type:'CREATE_RECIPE', payload: recipeData})
}