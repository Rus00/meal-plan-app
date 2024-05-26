import React, { useState } from 'react'
import Button from '../../Button';
import './ManageMeals.css';
import { Link } from 'react-router-dom';

let mealsTemp = ["Apple Pie","Carrot Cake","Hamburger","Jumbalaya","Lasagna","Meringue Pie","Pea Soup","XXX","YYY","ZZZ"]
  .map(meal => ({name: meal, isSelected: false, isVisible: true}))

const addMealsButtonText = "Add Meals"

const ManageMeals = () => {
  const [meals,setmeals] = useState(mealsTemp)

  const handleOnTextInputChange = ({target}) => {
    // if (e.target.value.length !== 0) {
    //   let mealsResult = meals.filter(meal => meal.toLowerCase().includes(e.target.value.toLowerCase())) //regex?
    //   console.log("\""+e.target.value+"\" yields:")
    //   console.log(mealsResult)
    //   setmeals(mealsResult)
    //   return
    // }
    // setmeals(mealsTemp)

    const updatedArr = meals.map(meal => {
      if (meal.name.toLowerCase().match(new RegExp(target.value.toLowerCase()))) {
        return {
          ...meal,isVisible: true
        }
      }
      return {
        ...meal,isVisible: false
      }
    })
    setmeals(updatedArr);
  }

  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Manage Meals</h1>
            <Link to="/addmeal">
              <Button
              classname="btn"
              text={addMealsButtonText}/>
            </Link>

            <input 
              id="mealSearchManageMeals"
              type="text"
              placeholder="Find a meal..."
              onChange={(e) => handleOnTextInputChange(e)}/>

            <div>
              {meals.filter(meal => meal.isVisible).map((meal, i) => 
                <li key={i}>{meal.name}</li>)
              }
            </div>
        </div>
    </div>
  )
}

export default ManageMeals