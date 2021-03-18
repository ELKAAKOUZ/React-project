import React, { Component } from 'react';
import qs from "query-string";

class ProductDetails extends Component {
    handleSave = () => {
        this.props.history.replace('/card')
    }
    render() { 
        console.log(this.props.location.search);
    const res =qs.parse(this.props.location.search);
    console.log(res);
    const product=this.props.products.filter(c => c.id === parseInt(this.props.match.params.id))[0];
    return ( 
            <React.Fragment>
                 <h1>product details.{this.props.match.params.id}</h1> 
                 <h2>{product.name}</h2>
                 <h2>count in shopping card : {product.count}</h2>
                 <button onClick={this.handleSave} className="btn btn-primary btn-sm">save</button>
            </React.Fragment>
    );
    }
}
 
export default ProductDetails;
