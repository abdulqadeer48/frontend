import React from 'react'
import { Link } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'


export const Navbar = () => {

  return (
    
     
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3 ">
      <div class="flex-row d-flex mx-2">
        <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Qadeer's Dashboard</a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="collapsingNavbar">
        <ul class="navbar-nav">
       
          <li class="nav-item active">
           
            <a class="nav-link active" href="#">Home <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="//www.codeply.com">Link</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#myAlert" data-toggle="collapse">Alert</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" data-target="#myModal" data-toggle="modal">About</a>
          </li>
         
          {/* <li class="nav-item ">
            <a class="nav-link waves-effect waves-light text-white">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link waves-effect waves-light text-white">
              <i class="fas fa-envelope-open-text"></i>
            </a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link waves-effect waves-light text-white">
              <i class="fas fa-align-justify"> Menu </i>
            </a>
          </li> */}
            <li class="nav-item">
            <a class="nav-link active" href="#" data-target="#myModal" data-toggle="modal">
            Menu   <i className='fas fa-align-justify'></i> </a>
            </li>
            {/* <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-shopping-cart fa-lg"></i></a> </li> */}
            <li class="nav-item">
              
            <Link class="nav-link active" to="/login" data-target="#myModal" data-toggle="modal"><button>Login here</button></Link>
          </li>
        
        </ul>
      </div>
    </nav>
   
  )
}
export default Navbar