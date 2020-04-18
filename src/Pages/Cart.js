import React, {Component} from 'react';
import CartItem from '../Component/CartItem';

// component
import Footer from '../Component/Footer';

// store
import {connect} from 'react-redux';
import {placeOrder} from '../Store/action/Action';

class Cart extends Component{

  confirmOrder = ()=>{
    if(prompt("Are You Sure", "Ok or Cansel")){
      console.log(window.prompt);
      alert("We are Recive your Order");
      this.props.placeOrder();
    }
  }

  render(){
    return(
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            {this.props.cartItems.map((item, index)=>(
              <div className="col-sm-12 col-md-6 col-lg-4"  key={index} >
                <CartItem cartitem = {item} cartIndex={index}/>
                {/* as item.product as all >> cartItem contain product and quantity*/}
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            {this.props.totalPrice > 0 ? (
              <div>
                <div className="total-price shadow rounded p-2 mb-3">
                <span>Total Price: <span className="total-price-number">{this.props.totalPrice}$</span></span>
                </div><br />
                <button className="btn btn-primary p-3" onClick={this.confirmOrder}>Place order</button>
              </div>
            ):(<h4 className="text-capitalize cart-item-not-Found">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="64" height="64"
              viewBox="0 0 172 172"
              style={{fill:'#000000'}}><defs><linearGradient x1="126.3125" y1="122.33769" x2="126.3125" y2="139.09963" gradientUnits="userSpaceOnUse" id="color-1_NLny0jPTcuun_gr1"><stop offset="0" stopColor="#55abff"></stop><stop offset="1" stopColor="#70afff"></stop></linearGradient><linearGradient x1="77.9375" y1="122.33769" x2="77.9375" y2="139.09963" gradientUnits="userSpaceOnUse" id="color-2_NLny0jPTcuun_gr2"><stop offset="0" stopColor="#55abff"></stop><stop offset="1" stopColor="#70afff"></stop></linearGradient><linearGradient x1="102.125" y1="26.59013" x2="102.125" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-3_NLny0jPTcuun_gr3"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient><linearGradient x1="104.8125" y1="26.59013" x2="104.8125" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-4_NLny0jPTcuun_gr4"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient><linearGradient x1="86" y1="26.59013" x2="86" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-5_NLny0jPTcuun_gr5"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient><linearGradient x1="106.15625" y1="26.59013" x2="106.15625" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-6_NLny0jPTcuun_gr6"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient><linearGradient x1="98.09375" y1="26.59013" x2="98.09375" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-7_NLny0jPTcuun_gr7"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient><linearGradient x1="114.21875" y1="26.59013" x2="114.21875" y2="143.77587" gradientUnits="userSpaceOnUse" id="color-8_NLny0jPTcuun_gr8"><stop offset="0" stopColor="#0074e4"></stop><stop offset="1" stopColor="#0072ff"></stop></linearGradient></defs><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g id="Layer_2"><path d="M137.0625,131.6875c0,5.9125 -4.8375,10.75 -10.75,10.75c-5.9125,0 -10.75,-4.8375 -10.75,-10.75c0,-5.9125 4.8375,-10.75 10.75,-10.75c5.9125,0 10.75,4.8375 10.75,10.75z" fill="url(#color-1_NLny0jPTcuun_gr1)"></path><path d="M88.6875,131.6875c0,5.9125 -4.8375,10.75 -10.75,10.75c-5.9125,0 -10.75,-4.8375 -10.75,-10.75c0,-5.9125 4.8375,-10.75 10.75,-10.75c5.9125,0 10.75,4.8375 10.75,10.75z" fill="url(#color-2_NLny0jPTcuun_gr2)"></path><path d="M126.3125,118.25c-6.45,0 -11.825,4.56875 -13.16875,10.75h-22.0375c-1.34375,-6.18125 -6.71875,-10.75 -13.16875,-10.75c-7.525,0 -13.4375,5.9125 -13.4375,13.4375c0,7.525 5.9125,13.4375 13.4375,13.4375c6.45,0 11.825,-4.56875 13.16875,-10.75h22.0375c1.34375,6.18125 6.71875,10.75 13.16875,10.75c7.525,0 13.4375,-5.9125 13.4375,-13.4375c0,-7.525 -5.9125,-13.4375 -13.4375,-13.4375zM77.9375,139.75c-4.56875,0 -8.0625,-3.49375 -8.0625,-8.0625c0,-4.56875 3.49375,-8.0625 8.0625,-8.0625c4.56875,0 8.0625,3.49375 8.0625,8.0625c0,4.56875 -3.49375,8.0625 -8.0625,8.0625zM126.3125,139.75c-4.56875,0 -8.0625,-3.49375 -8.0625,-8.0625c0,-4.56875 3.49375,-8.0625 8.0625,-8.0625c4.56875,0 8.0625,3.49375 8.0625,8.0625c0,4.56875 -3.49375,8.0625 -8.0625,8.0625z" fill="url(#color-3_NLny0jPTcuun_gr3)"></path><rect x="30" y="33" transform="scale(2.6875,2.6875)" width="18" height="2" fill="url(#color-4_NLny0jPTcuun_gr4)"></rect><path d="M147.8125,51.0625h-16.125c-0.80625,-13.4375 -11.825,-24.1875 -25.53125,-24.1875c-13.70625,0 -24.725,10.75 -25.53125,24.1875h-22.0375l-4.03125,-18.00625c-0.80625,-3.49375 -4.03125,-6.18125 -7.79375,-6.18125h-22.575c-4.56875,0 -8.0625,3.49375 -8.0625,8.0625c0,4.56875 3.49375,8.0625 8.0625,8.0625h10.75c4.56875,0 8.0625,-3.49375 8.0625,-8.0625v-2.6875h3.7625c1.34375,0 2.41875,0.80625 2.6875,2.15l13.4375,59.93125c1.34375,6.18125 6.71875,10.48125 13.16875,10.48125h58.31875c5.9125,0 11.2875,-4.03125 12.9,-9.675l8.0625,-28.4875c0.26875,-1.075 0.5375,-2.41875 0.5375,-3.7625v-3.7625c0,-4.56875 -3.49375,-8.0625 -8.0625,-8.0625zM37.625,34.9375c0,1.6125 -1.075,2.6875 -2.6875,2.6875h-10.75c-1.6125,0 -2.6875,-1.075 -2.6875,-2.6875c0,-1.6125 1.075,-2.6875 2.6875,-2.6875h13.4375zM106.15625,32.25c11.01875,0 20.15625,9.1375 20.15625,20.15625c0,11.01875 -9.1375,20.15625 -20.15625,20.15625c-11.01875,0 -20.15625,-9.1375 -20.15625,-20.15625c0,-11.01875 9.1375,-20.15625 20.15625,-20.15625zM150.5,62.8875c0,0.80625 0,1.6125 -0.26875,2.15l-8.0625,28.4875c-1.075,3.49375 -4.3,5.9125 -7.79375,5.9125h-58.5875c-3.7625,0 -6.9875,-2.6875 -7.79375,-6.18125l-8.0625,-36.81875h21.23125c1.88125,12.09375 12.3625,21.5 25.2625,21.5c12.9,0 23.1125,-9.40625 25.2625,-21.5h16.125c1.6125,0 2.6875,1.075 2.6875,2.6875z" fill="url(#color-5_NLny0jPTcuun_gr5)"></path><path d="M101.5875,63.425l13.4375,-18.8125l-4.3,-3.225l-13.4375,18.8125z" fill="url(#color-6_NLny0jPTcuun_gr6)"></path><circle cx="36.5" cy="16.5" transform="scale(2.6875,2.6875)" r="1.5" fill="url(#color-7_NLny0jPTcuun_gr7)"></circle><circle cx="42.5" cy="22.5" transform="scale(2.6875,2.6875)" r="1.5" fill="url(#color-8_NLny0jPTcuun_gr8)"></circle></g></g></svg><br/>
              No Item Found in cart
              </h4>)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    cartItems: state.cart,
    totalPrice : state.cart.reduce((total, item)=>(
      total + item.product.price * item.quantity
    ),0)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    placeOrder: () =>{
      dispatch(placeOrder())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);