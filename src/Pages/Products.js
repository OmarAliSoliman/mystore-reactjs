import React, {Component} from 'react';

// component
import Product from '../Component/Prouduct';
import ProductSale from '../Component/ProductSale';
import Footer from '../Component/Footer';

// Api
import {getProducts} from '../Api/GetProduct';


class Products extends Component{
  
  state = {
    products: [],
    productsSale: [],
    search: ''
  }

  updateSearch =(e)=>{
    this.setState({
      search: e.target.value.substr(0,20)
    })
  }

  componentDidMount = () =>{
    getProducts()
    .then((data)=>{
      this.setState({
        products: data.products,
        productsSale: data.productsSales
      })
    })
  }


  render(){
    const filterProducts = this.state.products.filter((product)=>{
      return product.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
    });
    const filterProductsSale = this.state.productsSale.filter((productsale)=>{
      return productsale.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
    });
    return(
      <div className="products-page">
        <div className="container-fluid">
          <div className="container text-center">
            <div className="row mt-5 mb-3">
              <div className="col-sm-12 col-md-6">
                <h3 className=" search-heaeder">Search for any thing</h3>
              </div>
              <div className="col-sm-12 col-md-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control" autoFocus value={this.state.search} onChange={this.updateSearch} placeholder="just type..." aria-label="Recipient's username" aria-describedby="button-addon2" />
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            {filterProducts.map((item, index)=>(
              <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                <Product product={item} />
              </div>
            ))}
          </div>
          <div className="btn-sho-more">
            <button className="btn show-more-product">Show more</button>
          </div>
        </div>
        <div className="sale">
          <h4>Sale</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            {filterProductsSale.map((item, index)=>(
              <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                <ProductSale product={item} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Products;