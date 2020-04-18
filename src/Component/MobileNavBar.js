import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'; 
import CartIcon from './CartIcon';

class MobileNavBar extends Component{
  openNav = ()=>{
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav = () =>{
    document.getElementById("mySidenav").style.width = "0";
  }
  render(){
    const {changeMode, cheaked} = this.props;
    return(
      <div>
        {/* mobile navbar */}
        <div id="mySidenav" className="sidenav">
          <span className="closebtn" onClick={this.closeNav}>&times;</span>
          <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/ios/32/000000/animation.png" alt="Logo"/></Link>
          <NavLink activeClassName="mobile-active-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="mobile-active-link" exact to="/products">Products</NavLink>
          <NavLink activeClassName="mobile-active-link" exact to="/cart">Cart</NavLink>
          {/* <NavLink activeClassName="mobile-active-link" exact to="/about">About</NavLink> */}
        </div>
        <div className="navbar side-nav-button">
          <div className="container">
          <div className="btn-dark-mode custom-control custom-switch">
              <input type="checkbox" checked={cheaked} className="custom-control-input" id="customSwitch1" onChange={changeMode} />
              <label className="custom-control-label" htmlFor="customSwitch1" style={{color:'white'}}>Dark</label>
            </div>
          <span onClick={this.openNav}> <i className="fas fa-bars"></i> </span>
          </div>
          <CartIcon />
        </div>
      </div>
    )
  }
}

export default MobileNavBar;