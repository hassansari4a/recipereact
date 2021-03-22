import { Grid } from '@material-ui/core'
import Recipe from './Recipe/Recipe'

function Recipes() {
  return (
    <Grid className="container" alignContent="stretch" spacing={3}>
      {/* {recipes.map((recipe) => (
        <Grid key={recipe._id} item>
          <Recipe />
        </Grid>
      ))
      } */}
      <Recipe />
      <Recipe />
    </Grid>
  )
}

export default Recipes