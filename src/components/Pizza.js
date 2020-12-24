import React from "react"
import {useDispatch} from 'react-redux'

const Pizza = (props) => {
  const dispatch = useDispatch()

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian? 'Yes': 'No'}</td>
      <td><button type="button" 
                  className="btn btn-primary" 
                  onClick={()=> dispatch({type:'CHANGE_PIZZA', pizza:props.pizza})}>
                    Edit Pizza
        </button></td>
    </tr>
  )
}

export default Pizza
