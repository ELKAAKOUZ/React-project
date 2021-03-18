import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import Team from './team'
import Company from './company'
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               <h1>this is about bage</h1> 
               <div className='row'>
                   <div className='col-3'>
                       <ul>
                           <li>
                               <Link to='/about/company'>company</Link>
                           </li>
                           <li>
                                <Link to='/about/team'>team</Link>
                           </li>
                       </ul>

                   </div>
                   <div className='col'>
                            <Route path='/about/team' component={Team}/>
                            <Route path='/about/company' component={Company}/>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}
 
export default About;