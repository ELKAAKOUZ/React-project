import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Product extends Component {
    state = { 
        // name: this.props.product.name,
        // count:this.props.product.count
    }
    
    render() {
        console.log(this.props);
        let classes 
        if(this.props.product.count===0){
            classes="badge badge-warning m-2"
        }
        else{
            classes ="badge badge-primary m-2"
        }
        
        return (
            <div className="row">
                <div className="col-2">
                    <span>
                        <Link to="#">{this.props.product.name}</Link>
                        {/* <Link to={`/products/${this.props.products.id}`}>{this.props.product.name}</Link> */}
                    </span>
                </div>
                <div className="col">
                    {this.props.children}
                    
                    <span className={classes}>{this.props.product.count}</span>
                    {/* <h1>{this.state.count}</h1> */}
                    <button className={"badge badge-primary m-2"} onClick={ () => this.props.onIncrement(this.props.product)}>add to cart</button>
                    <span style={{cursor:'pointer'}} onClick={() => this.props.onDelete(this.props.product)}>
                    <i className="fas fa-trash m-2"></i>
                    </span>
                </div> 
            </div>
         );
    }
}
 
export default Product;<span>Products</span>