import React, { useState} from 'react'
import Button from '../../Button';
import './AddMeals.css';

let addMealsButtonText = "Add Meals"
let addMealsButtonClassName = "add-meals-btn"

const allMeals = ["Apple Pie","Carrot Cake","Hamburger","Jumbalaya","Lasagna","Meringue Pie","Pea Soup","XXX","YYY","ZZZ"]
  .map(meal => ({name: meal, isSelected: false, isVisible: true}))

const AddMeal = () => {
  const [meals,setmeals] = useState(allMeals)
  // const [regexMatch,setRegexMatch] = useState("")

  const handleOnTextInputChange = async ({target}) => { // updates filter

    /* TODO investigate escaping regex */

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
    // setRegexMatch(target.value)
      
    console.log("\""+target.value+"\" yields:")
    console.log(meals)
  }

  const handleAllMealsBtnClick = (e) => {
    console.log("Clicked button at "+e.clientX+", "+e.clientY+" from parent!")
    const dataToSend = meals.filter(
      meal => meal.isSelected
    )
    console.log("SENDING:",dataToSend)

    const updatedArr = meals.map(meal => {return {...meal,isSelected: false}});
    setmeals(updatedArr);

    // setRegexMatch("")
  }

  const handleOnCheck = async ({target}, selectedMeal, i) => { // sets meal > isSelected

    const updatedArr = meals.map(meal => {
      if (meal.name === selectedMeal.name) {
        return {
          ...meal,isSelected: target.checked
        }
      }
      return meal
    })
    setmeals(updatedArr);
    console.log(selectedMeal);
    console.log("\""+selectedMeal.name+"\" set to "+target.checked);
    console.log(meals);
  }

  // useEffect(() => {
  //   const updatedArr = meals.map(meal => {
  //     if (meal.name.toLowerCase().match(new RegExp(regexMatch.toLowerCase()))) {
  //       return {
  //         ...meal,isVisible: true
  //       }
  //     }
  //     return {
  //       ...meal,isVisible: false
  //     }
  //   })
  //   setmeals(updatedArr)
  // },[regexMatch])

  return (
    <div className="page-wrapper">
        <div className="page">
            <h1 className="h1">Add Meals</h1>

            <input 
              id="mealSearchAddMeals"
              className="meal-search-input"
              type="text"
              placeholder="Filter meals..."
              onChange={(e) => handleOnTextInputChange(e)}
              // value={regexMatch}
              />

            <Button
              text={addMealsButtonText}
              className={addMealsButtonClassName}
              onClick={handleAllMealsBtnClick}/>

            <div className="meal-wrapper">
              <ul className="meal-ul">
                {meals.filter(meal => meal.isVisible).map((meal, i) => 
                  <li
                    className="meal-li"
                    key={i}>
                    <div className="meal-li-div">
                      <input 
                        id={meal.name}
                        type="checkbox"
                        htmlFor="meal"
                        checked={(meal.isSelected)}
                        onChange={(e) => handleOnCheck(e, meal, i)}/>
                        
                      <div className="meal-li-title">
                        {meal.name}
                      </div>
                    </div>
                  </li>)
                }
              </ul>
            </div>

            {/* <div className="meal-wrapper">
              <ul className="meal-ul">
                {meals.filter(meal => !meal.isSelected && meal.isVisible).map((meal, i) => 
                  <li
                    className="meal-li"
                    key={i}>
                    <div className="meal-li-div">
                      <input 
                        type="checkbox"
                        htmlFor="meal"
                        checked={(meal.isSelected)}
                        onChange={(e) => handleOnCheck(e, meal, i)}/>
                      <div className="meal-li-title">
                        {meal.name}
                      </div>
                    </div>
                  </li>)
                }
              </ul>
            </div> */}
        </div>
    </div>
  )
}

export default AddMeal