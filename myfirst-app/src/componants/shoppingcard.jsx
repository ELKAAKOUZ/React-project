import React, { Component } from 'react';
import Product from './product';
class Shoppingcard extends Component {
    
    render() { 
        // console.log(this.prop)
        const {products,onDelete,onReset,onIncrement} = this.props;
        return ( 
            <React.Fragment>
                {/* 3amlto bdl el div 3lshan y3mel wrap */}
               <h1>shopping card</h1>
               <button onClick={onReset} className="btn btn-warning btn-sm m-2">Reset</button>
               {products.map(product => (
                   <Product 
                   key={product.id} 
                   product={product} 
                   onDelete={onDelete} 
                   onIncrement={onIncrement}>
                       {/* <h4>{product.id}</h4> */}
                   </Product>
               ))} 
               
             </React.Fragment>
        
        
        );
    }
}
 
export default Shoppingcard;