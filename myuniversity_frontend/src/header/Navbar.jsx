import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Jumbotron from './Jumbotron';
import Slider from './Slider';



class Navbar extends Component{

  constructor(){
    super()
    this.state = {
      s:false
    }
  }
    render(){
        return(
          <>

          
          
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
              <div className="container">
                 <NavLink className="navbar-brand" to="/">MU-CSE44th</NavLink>
                 <button type="button" class="btn btn-info ml-md-3" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-search" aria-hidden="true"></i></button>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Recent Post</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Teacher</a>
          <a class="dropdown-item" href="#">Cr</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    
  </div>
  </div>
</nav>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <div class="modal-header bg-info text-light">
        <h5 class="modal-title" id="exampleModalLabel">Search Here</h5>
        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    <div class="form-group p-3">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <input type="search" class="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"/>
    <button className="btn btn-info">Search</button>
  </div>
    </div>
  </div>
</div>



<Jumbotron/>


</>
        );
    }
}

export default Navbar;