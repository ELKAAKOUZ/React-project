import React, { Component } from 'react';
import Joi from "joi-browser";
class Login extends Component {
    state = { 
        username : "",
        password : "",
        errors:{}
    }
    schema = {
        username:Joi.string().required(),
        password:Joi.string().required(),
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate()
        if(errors) return;
        console.log("submit");
        
    }
    handleChange = e => {
        //clone
        let state={...this.state};
        //edit
        state[e.currentTarget.name]=e.currentTarget.value;
        //setState
        this.setState(state);
    }
    validate = () => {
        const errors ={};
        const state ={...this.state};
        const res = Joi.validate(this.state,this.schema);
        // const res = Joi.validate(this.state,this.schema,{abourtEarly:false});
        delete state.errors;
        if(res.errors===null){
            this.setState({errors:{}});
            return null;
        } 

        for (const error of res.error.details){
            errors[error.path]=error.message;
        }

        this.setState({errors})
    };
    render() { 
        return ( 
            <React.Fragment>
                <h1>Login page</h1>
                <form onSubmit={this.handleSubmit}> 
                     <div className="mb-3">
                         <label htmlFor="username" className="form-label">User name</label>
                         <input name="username" value={this.state.username} onChange={this.handleChange}  type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
                         {this.state.errors.username &&<div className="alert alert-danger">
                             {this.state.errors.username}
                         </div>}
                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                     </div>
                     <div className="mb-3">
                         <label htmlFor="password" className="form-label">Password</label>
                         <input name="password" value={this.state.password} onChange={this.handleChange}  type="password" className="form-control" id="password"/>
                         {this.state.errors.password &&<div className="alert alert-danger">
                             {this.state.errors.password}
                         </div>}
                     </div>
                     <div className="mb-3 form-check">
                         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
            </React.Fragment>
         );
    }
}
 
export default Login;