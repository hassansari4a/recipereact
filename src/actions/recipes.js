import defaultRecipe from '../data'

export const getRecipes = ()=> async(dispatch) => {
  if (localStorage.getItem('recipeData') == null){
    dispatch({type: 'FETCH_ALL', payload: defaultRecipe})
  }else{  
    const recipe = JSON.parse(localStorage.getItem('recipeData'))
    dispatch({type: 'FETCH_ALL', payload: recipe.concat(defaultRecipe)})
  }
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