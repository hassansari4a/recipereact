export const recipeReducer = (recipes= [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return recipes
    case 'CREATE_RECIPE':
      return [...recipes, action.payload]
    default:
      return recipes
  }
}