import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Recipe from './Recipe/Recipe'

function Recipes() {
  const recipeData = useSelector(state => state.recipes)
  return (
    <Grid container spacing={1}>
      {recipeData.map((recipe, index) => (
        <Grid item xs={12} sm={6}>
          <Recipe key={index} recipe={recipe}/>
        </Grid>
      ))
      }
    </Grid>
  )
}

export default Recipes