import React , {Component} from 'react';

// store 
import {connect} from 'react-redux';
import {removeFromCart} from '../Store/action/Action';

class CartItem extends Component{
  render(){
    const {cartitem, cartIndex} = this.props;
    const {product} = cartitem;

    return(
      <div className="cart-item-component text-capitalize">
        <div className="card">
          <div className="card-header">
            <h5 className="product-status">{product.status}</h5>
            <h5 className="product-name">{product.name}</h5>
          </div>
          <img className="card-img-top product-image" src = {product.image} alt="Card img cap" />
          <div className="card-body">
            <h5 className="card-title"><span className="product-prise">Price:</span> {product.price}$ </h5>
            <p className="card-text"><span className="product-quantity">Quantity:</span> {cartitem.quantity} </p>
            <p className="card-text">{product.descreption}</p>
            <span className="product-sale">
              {product.id >= 7 ?(<span> Sale:{product.sale}% </span>):"no sale"}
            </span><br />
            <button className="btn btn-link" onClick={()=>this.props.removeFromCart(cartIndex)}> <i className="fas fa-trash"></i> Delete</button>
          </div>
        </div>
     </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    removeFromCart: (index)=>{
      dispatch(removeFromCart(index))
    }
  }
}

export default connect(null,mapDispatchToProps)(CartItem);
