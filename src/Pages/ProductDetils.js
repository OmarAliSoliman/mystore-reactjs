import React, {Component} from 'react';
import {getProducts} from '../Api/GetProduct';
import {Link} from 'react-router-dom';

// component
import Footer from '../Component/Footer';

// store
import {connect} from 'react-redux';
import {addToCart} from '../Store/action/Action';


class ProductDetails extends Component{

  state = {
    product: {},
    productId: '',
    sale: '',
    star: [],
    quantity: 1

  }

  componentDidMount = () =>{
    const productId = this.props.match.params.id;
    var productIndex = '';
    getProducts()
    .then((data)=>{
      if(productId >= 7 && productId <= 10){
        productIndex = productId - 7;
        this.setState({
          product: data.productsSales[productIndex],
          productId: productId,
          sale: data.productsSales[productIndex].sale
        })
      }else{
        productIndex = productId - 1;
        this.setState({
          product: data.products[productIndex],
          productId: productId
        })
      }
      var star = [];
      for(var i=0; i< this.state.product.evaluation; i++){
        star.push(<i className="fas fa-star" key={i}></i>);
      }
      this.setState({
        star: star
      })
    })
  }

  updateQuantity =(e)=>{
    this.setState({
      quantity: e.target.value
    })
  }

  addToCart = (productInfo) =>{
    // const productInfo = this.state.product;
    const quantity = this.state.quantity;
    const sale = this.state.sale;
    this.props.addToCart(productInfo, quantity, sale);
  }

  render(){
    const {product} = this.state;
    return(
      <div className="product-details-page">
       <div className="container-fluid">
         <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={product.image} alt="product img" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="product-info text-capitalize">
              <h4 className="product-name"> {product.name} </h4>
              <h6>status: <span className="product-status">{product.status}</span> </h6>
              <span className="product-rate" >{this.state.star}</span>
              <h5 className="product-price"> {product.price}$ </h5>
              <span className="product-sale">
                {this.state.productId >= 7 ? (<span> {this.state.sale}% </span>):"no sale"}
              </span>
              <p className="product-description"> {product.descreption} </p>
              <input className="product-quantity" type="number" value={this.state.quantity} min="1" onChange={this.updateQuantity} />
              <h5>Total: <span className="product-total">{this.state.quantity * product.price}$</span></h5>
              <button className="btn" onClick={()=>this.addToCart(product)}>add to cart</button>
              <Link to="/products" className="btn btn-danger">cansel</Link>
            </div>
          </div>
         </div>
       </div>
       <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addToCart: (productInfo, quantity)=>{
      dispatch(addToCart(productInfo, quantity))
    }
  }
}

// dispatch mean call or نفذ

export default connect(null,mapDispatchToProps)(ProductDetails);