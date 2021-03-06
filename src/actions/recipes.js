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

export const filterRecipe = (filter) => async(dispatch) =>{
  if(localStorage.getItem('recipeData') != null) {
    const recipe = JSON.parse(localStorage.getItem('recipeData'))
    const recipeData = recipe.concat(defaultRecipe)
    const filterData = recipeData.filter(recipe => {
      let flag = 0
        recipe.ingredients.forEach(ingredient => {
          filter.forEach(filter => {
            if (ingredient.ingredientname.toUpperCase() === filter.toUpperCase()) {
              flag = flag + 1
            }  
          })
        });
        if (flag === filter.length) return recipe
        else return null
    })
    dispatch({type:'FILTER_RECIPE', payload: filterData})
  }else {
    const filterData = defaultRecipe.filter(recipe => {
      let flag = 0
        recipe.ingredients.forEach(ingredient => {
          filter.forEach(filter => {
            if (ingredient.ingredientname.toUpperCase() === filter.toUpperCase()) {
              flag = flag + 1
            }  
          })
        });
        if (flag === filter.length) return recipe
        else return null
    })
    dispatch({type:'FILTER_RECIPE', payload: filterData})
  }
}