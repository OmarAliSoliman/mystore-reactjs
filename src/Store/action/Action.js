import {ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER} from './Typed';

export function addToCart(productInfo, quantity, sale){
  return{
    type: 'ADD_TO_CART',
    productInfo,
    quantity
  }
}

export function removeFromCart(index){
  return{
    type: 'REMOVE_FROM_CART',
    index
  }
}

export function placeOrder(){
  return{
    type: 'PLACE_ORDER'
  }
}