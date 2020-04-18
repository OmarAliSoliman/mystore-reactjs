import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// component
import Footer from '../Component/Footer';

class Home extends Component{
  render(){
    return(
      <div className="home-page">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col_content">
            <img className="anim-image" src="./images/header-images/tringel-1.png" width="3%" alt="ima-anim" style={{top:'20%', left:'40%'}}/>
            <img className="anim-image" src="./images/header-images/circule4.png" width="3%" alt="ima-anim" style={{top:'10%', left:'20%'}}/>
            <img className="anim-image" src="./images/header-images/square-2.png" width="3%" alt="ima-anim" style={{top:'20%', left:'100%'}}/>
            <div className="content">
              <h3>Best quality pillow</h3>
              <p>Seamlessly empower fully researched growth strategies and interoperable internal</p>
              <Link to="/products" className="btn">Shop Now</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col_image">
            <img className="anim-image" src="./images/header-images/square-1.png" width="3%" alt="ima-anim" style={{top:'20%', left:'50%'}}/>
            <img className="anim-image" src="./images/header-images/circule3.png" width="3%" alt="ima-anim" style={{top:'80%', left:'90%'}}/>
            <img className="anim-image" src="./images/header-images/circule2.png" width="3%" alt="ima-anim" style={{top:'80%', left:'10%'}}/>
            <div className=" header-image">
              <img src="./images/header-images/header.png" alt="headr img"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;