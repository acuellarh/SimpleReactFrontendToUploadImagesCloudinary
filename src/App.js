import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Upload from './pages/Upload';
import Home from './pages/Home.js';


import './app.style.css'

import {Page} from './components/Page'



export const App = ()=>{

  return (
    // <>
    //   <Page/>  
    // </>

<div className="container">
  <Router>
      <nav className="nav">
          <div className="nav-brand">Cloudinary Demo</div>
          <ul className="nav-items">
              <li className="nav-item">
                  <Link to="/">Gallery</Link>
              </li>
              <li className="nav-item">
                  <Link to="/upload">Upload</Link>
              </li>
          </ul>
      </nav>
      <Switch>
          <Route component={Upload} path="/upload" />
          <Route component={Home} path="/" />
      </Switch>
  </Router>

</div>

   )
}




