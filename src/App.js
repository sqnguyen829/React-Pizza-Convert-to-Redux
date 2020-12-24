import React, { Component, Fragment, useEffect } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => {
      dispatch({type:'GET_PIZZAS', pizzas:data})
    })
  }, [])

  return (
    <Fragment>
      <Header/>
      <PizzaForm/>
      <PizzaList/>
    </Fragment>
  );
}

export default App;
