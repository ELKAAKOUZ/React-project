import React, { Component } from 'react';
import axios from "axios"
import NavBar from './navbar';
import Shoppingcard from './shoppingcard';
import {Route,Switch,Redirect} from "react-router-dom";
import Login from "./login"
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import ProductDetails from './productDetails';
import NotFound from './pageNotFound';

class App extends Component {
    state = { 
        products :[
            {
                id:1,
                name:"burger",
                count:"1"
            },
            {
                id:2,
                name:"cheese mac",
                count:"2"
            },
            {
                id:3,
                name:"mac",
                count:"3"
            }
        ]
     }

     async componentDidMount(){
         const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
         console.log(data)
         
     }

     handleDelete = product => {
         const newProducts=this.state.products.filter(p => p.id !==product.id);
         this.setState({products:newProducts})
     };
     handleReset = () => {
         let products= [...this.state.products]
         products=products.map(p => {
             p.count=0;
             return p ;
         })
         this.setState({products})
     };
     clickhandler = (product) => {
        const products=[...this.state.products]
        const index =products.indexOf(product)
        products[index] = {...products[index]}
        products[index].count++;
        this.setState({products})
    };
    render() { 
        return ( 
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p => p.count>0 ).length}/>
                <main className="container">
                  <Switch>
                    <Route path="/card" render={(props) => <Shoppingcard 
                    products={this.state.products}
                    onIncrement={this.clickhandler}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    {...props}
                    /> }/> 
                    <Route path="/products/:id/:name?" render={ (props) => <ProductDetails 
                         products={this.state.products} 
                        {...props}/>}
                    />       
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/notfound" component={NotFound}/>
                    <Route path="/home" exact component={Home}/>
                    <Redirect from='/' to='/home'/> 
                    <Route path="/contact" component={Contact}/>
                    <Redirect to="/notfound" />
                  </Switch>
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;