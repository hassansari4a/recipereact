
import { Button, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import { AddCircle, DeleteOutline} from '@material-ui/icons'
import react, {useState} from 'react'

function Form() { 
  const [recipeData, setRecipeData] = useState({
    dishname: '',
    ingredients: [{
      ingredientname : '',
      quantity : '',
      unit : ''
    }],
    steps: '',
    image: ''
  })
  const handleChange = (e) => {
    const { name } = e.target
    setRecipeData({...recipeData, [name]: e.target.value})
    console.log(recipeData.dishname)
  }

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...recipeData.ingredients];
    list[index][name] = value;
    setRecipeData({...recipeData,ingredients : list});
  };
  const handleRemoveClick = index => {
    const list = [...recipeData.ingredients];
    list.splice(index, 1);
    setRecipeData({...recipeData,ingredients : list})
  };
  const handleAddClick = () => {
    const addedItem = [...recipeData.ingredients, {
      ingredientname : '',
      quantity : '',
      unit : ''
    }]
    setRecipeData({...recipeData, ingredients : addedItem })
  }

  const handleSubmit = () => {
    console.log("Submitted")
  }
  return (
    <Paper>
      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Create Recipe</Typography>
        <TextField className="form-item" name = "dishname" value={recipeData.dishname} onChange={handleChange} variant="outlined" label="Name of Dish" fullWidth />
        {recipeData.ingredients.map((x, i) => {
          return(
            <div className="ingredientform" width="1">
            <TextField className="form-item ingredient-item" name="ingredientname" value={x.ingredientname} variant="outlined" onChange={(e) => handleIngredientChange(e, i)} label="Ingredient" />
            <TextField className="form-item ingredient-item" name="quantity" value={x.quantity} onChange={(e) => handleIngredientChange(e, i)} variant="outlined" label="Quantity" />
            <Select className="form-item ingredient-item" name="unit" value={x.unit} onChange={(e) => handleIngredientChange(e, i)}> 
              <MenuItem value={''}><em>None</em></MenuItem>
              <MenuItem value={'teaspoons'}>Teaspoons</MenuItem>
              <MenuItem value={'tablespoons'}>Tablespoons</MenuItem>
              <MenuItem value={'cups'}>Cups</MenuItem>
            </Select>
            {recipeData.ingredients.length -1 === i && <Button className="form-icon"><AddCircle color="secondary" onClick={handleAddClick}></AddCircle></Button>}
            {recipeData.ingredients.length !== 1 && <Button className="form-icon"><DeleteOutline color="secondary" onClick={() => handleRemoveClick(i)}></DeleteOutline></Button>}
          </div> 
          )
        })}
        <TextField className="form-item" name="steps" value={recipeData.steps} onChange={handleChange} variant="outlined" label="Steps" fullWidth multiline rows={4} />
        <TextField className="form-item" name="image" value={recipeData.image} onChange={handleChange} variant="outlined" label="Image Url" fullWidth />
        <Button className="form-item" variant="contained" color="primary" onSubmit={handleSubmit}>Submit</Button>
      </form>
    </Paper>
  )
}

export default Form