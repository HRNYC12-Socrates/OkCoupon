import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';

 import Home from './main.js';
 import SavedDealsComp from './SavedDealsComp.js'

 //import path files

//Create Nav Bar with links

//Move route paths to App using React-Router-switch statments
//React Router switch

const Navigation = () => (
	<Router>
	  <div>
	    <div><Link to="/">More Coupons</Link></div>
        <div><Link to="/saved">Saved Coupons</Link></div>



	    <Route exact path="/" component={Home}/>
        <Route path="/saved" component={SavedDealsComp}/>
      </div>
    </Router>
)



export default Navigation;
