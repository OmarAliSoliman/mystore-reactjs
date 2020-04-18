import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import{connect} from 'react-redux';

// Api
import {getProducts} from '../Api/GetProduct';

// css
import '../css/style.css';

class CartIcon extends Component{

  state={
    products: [],
    product: {},
  }

  componentDidMount = () =>{
    getProducts()
    .then((data)=>{
      this.setState({
        products: data
      })
    })
  }

  render(){
    return(
      <div className="cart-icon">
        <Link to="/cart">
          <span className="shopping_cart"> <i className="fas fa-shopping-bag"></i></span>
          <span className="badge badge-dark badge_number">{this.props.quantity}</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    quantity: state.cart.reduce((total, item)=>(
      total + parseInt(item.quantity)
    ),0)
  }
}

export default connect(mapStateToProps)(CartIcon);