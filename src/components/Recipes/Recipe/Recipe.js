import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'

function Recipe(props) {
  const {recipe} = props
  return (
    <Card className="card recipe-container">
      <CardHeader className="cardname"
        title = {recipe.dishname}
        align = "center"
      />
      <CardMedia className="cardimage"
        image ={recipe.image}
        alt = {recipe.dishname}
      />
      <CardContent className="cardcontent">
        <Typography variant="h6" color="textSecondary">
            Ingredients:
        </Typography>
        {recipe.ingredients.map((ingredient, index) => (
          <Typography className="recipe-ingredients" gutterBottom variant="body2" color="textPrimary" component="p">
            {index+1}) {ingredient.quantity} {ingredient.unit} {ingredient.ingredientname}
          </Typography>  
        ))}
        <Typography variant="h6" color="textSecondary">
            Steps:
        </Typography>
        <Typography className="recipe-steps" variant="body2" color="textPrimary" component="p">
          {recipe.steps}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Recipe