import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'; 
import './css/style.css';

// store
import {Provider} from 'react-redux';
import store from './Store/Store';

// Components
import DeskTopNavBar from './Component/DeskTopNavBar';
import MobileNavBar from './Component/MobileNavBar';

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetils';
import Cart from './Pages/Cart';
// import About from './Pages/About';
import Error from './Pages/Error';

class App extends Component{

  state={
    darkMode: false
  }

  changeMode=()=>{
    const newDarkMode=this.state.darkMode;
    this.setState({
      darkMode: !newDarkMode
    })
  }

  render(){
    return (
      <Router>
        <div className={this.state.darkMode ? "dark-mode":"light-mode"}>
          <DeskTopNavBar changeMode = {this.changeMode} cheaked={this.state.darkMode} />
  
          <MobileNavBar changeMode = {this.changeMode} cheaked={this.state.darkMode} />

          {/* Switch pages */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            {/* <Route path="/about" exact component={About}/> */}
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
