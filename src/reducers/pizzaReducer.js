
const initialState = {
    pizzas:[],
    currentPizza:{
        id:null,
        topping:'',
        size:"Small",
        vegetarian:false
    }
}

const pizzaReducer = (state= initialState, action) => {
    switch(action.type){
        case 'GET_PIZZAS':
            // console.log(action)
            return {
                ...state,
                pizzas: action.pizzas
            }
        case 'CHANGE_PIZZA':
            return{
                ...state,
                currentPizza: action.pizza
            }
        case 'UPDATE_PIZZA':
            return{
                ...state,
                pizzas: state.pizzas.map(pizza => {
                    if(pizza.id === action.pizza.id){
                        return action.pizza
                    }else{
                        return pizza
                    }
                })
            }
        case 'CLEAR_FORM':
            return{
                ...state,
                currentPizza:{
                    id:null,
                    topping:'',
                    size:"Small",
                    vegetarian:false
                }
            }
        default:
            return state
    }
}
export default pizzaReducer