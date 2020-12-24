import React, { Component } from 'react';
import Pizza from '../components/Pizza'

import { useSelector } from 'react-redux'

function PizzaList(){

  const pizzas = useSelector(state => state.pizzaState.pizzas)
  // console.log(pizzas)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.id}/>)
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
