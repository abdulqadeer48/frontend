import React from 'react';
import LoginPage from './components/Login';
import BeforeLogin from './components/BeforeLogin';
import { Routes, Route, Link } from "react-router-dom";
import After from './AfterLogin';
import SignUp from './SignUp';
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}> </Route>
        <Route path='/login' element={<LoginPage/>}> </Route>
        {/* <Route path='/signup' element={<SignUp/>}> </Route> */}
        <Route path='/after' element={<After/>}> </Route>

      </Routes>
  
     
      
    </div>



  )
}

export default App;
