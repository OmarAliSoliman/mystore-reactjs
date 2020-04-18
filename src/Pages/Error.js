import React, {Component} from 'react';

// component
import Redirect from '../Component/Redirect';

class Error extends Component{
  componentDidMount() {
    setTimeout(()=>{
      this.props.history.push("/");
    }, 10000)
  }
  render(){
    return(
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="error-message text-capitalize">
                <img src="./images/error-page/error.png" alt="error-img" />
                <h5>404, page no found</h5>
                <h6>you will be redirected after<Redirect /></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Error;