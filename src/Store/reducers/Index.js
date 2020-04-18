import {ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER} from '../action/Typed';

function crateReducers(state, action){
  switch(action.type){
    case ADD_TO_CART:{
      return{
        cart:[
          ...state.cart,
          {
            product: action.productInfo,
            quantity: action.quantity,
          }
        ]
      }
    }

    case REMOVE_FROM_CART:{
      const newState = {...state};
      const cartIndex = action.index;
      newState.cart.splice(cartIndex, 1);
      return newState;
    }

    case PLACE_ORDER:{
      const newState = {...state};
      newState.cart=[];
      return newState;
    }

    default :
    return state;
  }
}

export default crateReducers;