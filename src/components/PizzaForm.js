import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'

const PizzaForm = () => {

  const dispatch = useDispatch()

  const currentPizza = useSelector(state => state.pizzaState.currentPizza)
  // console.log(currentPizza)
  let [pizza, setPizza] = useState(currentPizza)

  useEffect(()=> {
    setPizza(currentPizza)
  }, [currentPizza])

  const handleChange = (e) => {
    if(e.target.type === 'text'){
      setPizza({
        ...pizza, 
        topping:e.target.value
      })
    }else if(e.target.type=== "select-one"){
      setPizza({
        ...pizza, 
        size:e.target.value
      })
    }else{
      setPizza({
        ...pizza,
        vegetarian: !pizza.vegetarian
      })
    }
  }

  const handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(pizza)
    })
    .then(res=> res.json())
    .then(data => {
      dispatch({type:'UPDATE_PIZZA', pizza:data})
      dispatch({type:'CLEAR_FORM'})
    })
  }

  console.log(pizza)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" onChange={(e)=> handleChange(e)} placeholder="Pizza Topping" value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" onChange={(e)=> handleChange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={(e)=> handleChange(e)} value="Vegetarian" checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={(e)=> handleChange(e)} value="Not Vegetarian" checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=> handleSubmit()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
