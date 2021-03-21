import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRecipes } from './actions/recipes'
import Form from './components/Form/Form'
import Recipes from './components/Recipes/Recipes'

import useStyles from './styles'

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(getRecipes())
  // }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} className="appbar" position="static">
        <Typography className={classes.heading} className="heading" variant="h2" align="center">Recipes!</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid xs={12} sm={7}>
              <Recipes />
            </Grid>
            <Grid xs={12} sm={4}>
              <Form />
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
