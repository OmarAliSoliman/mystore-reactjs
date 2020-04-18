import {createStore} from 'redux';
import crateReducers from './reducers/Index';

function loadState(){

  try{
    const state = localStorage.getItem('cart');
    if(state !== null){
      return JSON.parse(state)
    }
  }catch(e){

  }

  return{
    cart: []
  }
}

const initialState = {
  cart:[]
}

function saveState(state){
  localStorage.setItem('cart', JSON.stringify(state));
}

const store = createStore(crateReducers, loadState());

store.subscribe(()=>{
  saveState(store.getState());
})

export default store;