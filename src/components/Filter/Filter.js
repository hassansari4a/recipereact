import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { filterRecipe, getRecipes } from '../../actions/recipes'

function Filter() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  
  const handleChange = (e) => {
    setFilter(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterRecipe(filter.split(",")))
  }
  const removeFilter = (e) => {
    setFilter('')
    dispatch(getRecipes())
  }

  return(
    <div className="filter-box">
    <form  onSubmit={handleSubmit}>
      <TextField className="filter" value={filter} onChange={handleChange} placeholder="Filter (Separate with ,)" width="auto"/>
    </form>
    <Button className="remove-filter" onClick={removeFilter}>remove</Button>
    </div >
  )
}

export default Filter