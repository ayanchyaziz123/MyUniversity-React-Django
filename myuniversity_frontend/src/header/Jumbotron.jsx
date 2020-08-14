import React, { Component, Fragment } from 'react';

class Jumbotron extends Component{


    render(){
        return(
            <>
        
           
            <div class="jumbotron jumbotron-fluid  mb-0 jbe pt-4 pb-3">
  <div class="container">
  <div className="row  align-items-center">
  <div className="col-sm-4 jalign-items-center">
          <h1>Ayan is here</h1>

      </div>
      <div className="col-12 col-sm-4 align-items-center">
      <h1>My website</h1>
   
   <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>

      </div>

    
      <div className="col-sm-4 align-items-center">
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
  Fetch Your Attendances
</button>

      </div>

  </div>
</div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info text-light">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




            </>

        )
    }
}
export default Jumbotron;