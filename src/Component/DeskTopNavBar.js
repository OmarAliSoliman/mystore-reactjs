import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'; 
import CartIcon from './CartIcon';


class DeskTopNavBar extends Component{
  render(){
    const {changeMode, cheaked} = this.props;
    return(
      <div>
        {/* desktop navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/ios/32/000000/animation.png" alt="Logo"/></Link>
            <div className="btn-dark-mode custom-control custom-switch">
              <input type="checkbox" checked={cheaked} className="custom-control-input" id="customSwitch1" onChange={changeMode} />
              <label className="custom-control-label" htmlFor="customSwitch1">Dark</label>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Home<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/products">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/cart">Cart</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/about">About</NavLink>
                </li> */}
              </ul>
            </div>
            <CartIcon />
          </nav>
      </div>
    )
  }
}

export default DeskTopNavBar;