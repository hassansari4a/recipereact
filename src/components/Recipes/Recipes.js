import { Paper, Typography, Grid } from '@material-ui/core'
import { PostAddSharp } from '@material-ui/icons'
import react from 'react'
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