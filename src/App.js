import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,Link, NavLink} from 'react-router-dom'; 
import './css/style.css';

// store
import {Provider} from 'react-redux';
import store from './Store/Store';

// Components
import CartIcon from './Component/CartIcon';

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetils';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Error from './Pages/Error';

class App extends Component{

  openNav = ()=>{
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav = () =>{
    document.getElementById("mySidenav").style.width = "0";
  }

  render(){
    return (
      <Router>
        <div className="App">
          {/* desktop navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/ios/32/000000/animation.png" alt="Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
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
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/about">About</NavLink>
                </li>
              </ul>
            </div>
            <CartIcon />
          </nav>
  
          {/* mobile navbar */}
          <div id="mySidenav" className="sidenav">
            <span className="closebtn" onClick={this.closeNav}>&times;</span>
            <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/ios/32/000000/animation.png" alt="Logo"/></Link>
            <NavLink activeClassName="mobile-active-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="mobile-active-link" exact to="/products">Products</NavLink>
            <NavLink activeClassName="mobile-active-link" exact to="/cart">Cart</NavLink>
            <NavLink activeClassName="mobile-active-link" exact to="/about">About</NavLink>
          </div>
          <div className="navbar side-nav-button">
           <div className="container">
            <span onClick={this.openNav}> <i className="fas fa-bars"></i> </span>
           </div>
           <CartIcon />
          </div>

  
          {/* Switch pages */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/about" exact component={About}/>
            <Route path="/product-details/:id" exact component={ProductDetails}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function AppWithStore(){
 return(
  <Provider store={store}>
    <App />
  </Provider>
 )
}

export default AppWithStore;
