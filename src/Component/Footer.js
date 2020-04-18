import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div className="footer mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="links">
                <span><a href="https://www.linkedin.com/in/omar-ali-089aa9186/"><i className="fab fa-linkedin"></i></a></span>
                <span><a href="https://github.com/OmarAliSoliman"><i className="fab fa-github"></i></a></span>
                <span><a href="mailto:omar.ali.alasmar@gmail.com"><i className="fas fa-envelope"></i></a></span>
                <span><a href="https://www.facebook.com/profile.php?id=100003115112489"><i className="fab fa-facebook-f"></i></a></span>
                {/* <span><a href="#"><i className="fab fa-twitter"></i></a></span> */}
                <span><a href="tel:00201098586783"><i className="fab fa-whatsapp"></i></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;