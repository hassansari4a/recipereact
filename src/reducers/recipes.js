export const recipeReducer = (recipes= [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE_RECIPE':
      return [...recipes, action.payload]
    case 'FILTER_RECIPE':
      return action.payload
    default:
      return recipes
  }
}