import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './component/home/Home';
import Navbar from './header/Navbar';
import Contact from './component/contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './component/about/About';



class  App extends Component{
  render(){
    return (
      <>
     <Navbar/>
      
     <switch>
 <Route exact path="/" component={Home}  />
 <Route exact path="/contact" component={Contact}  />
 <Route exact path="/about" component={About}  />
 <Redirect to="/" />
 </switch>



      </>
     
  
    );

  }

}

export default App;
