import React, { useState } from 'react'
import Button from '../../Button';
import './PlanDay.css';

let mealsTemp = ["Hamburger","Lasagna","XXX"]

const confirmButtonText = "Confirm Selection"

const PlanDay = () => {
  const [mealsFiltered,setMealsFiltered] = useState(mealsTemp)

  const handleOnTextInputChange = (e, meals) => {
    let mealsResult = meals.filter(meal => meal.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log("\""+e.target.value+"\" yields:")
    console.log(mealsResult)
    setMealsFiltered(mealsResult)
    if (e.target.value === "") {
      setMealsFiltered(mealsTemp)
    }
  }

  const handleOnCheck = (e, meal) => {
    console.log("\""+meal+"\" set to "+e.target.value)
  }

  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Plan Day</h1>

            <input 
              id="mealSearchPlanDay"
              type="text"
              placeholder="Find a meal..."
              onChange={(e) => handleOnTextInputChange(e, mealsFiltered)}/>
            
            {mealsFiltered.length > 0 && <h2 className="h2">Filter Result</h2>}

            <div>
              {mealsFiltered.map((meal, i) => 
                <div>
                  <li key={i}>
                    {meal}
                    <input 
                      id={meal}
                      type="checkbox"
                      onChange={(e) => handleOnCheck(e, meal)}/>
                  </li>
                </div>)
              }
            </div>

            {mealsFiltered.length > 0 &&
              <Button
              className="btn"
              text={confirmButtonText}/>
            }
        </div>
    </div>
  )
}

export default PlanDay