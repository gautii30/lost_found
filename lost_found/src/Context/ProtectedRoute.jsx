import React from 'react'
import { useStateContext } from '../Context/ContextProvider'
import Client from '../components/client/Client';
import Admin from '../components/admin/Admin';

import {Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const {login,usertype}=useStateContext();
 
    if(login && usertype==="student"){
      return(
        <Client />
      
      )
    }
    else if(login && usertype==="admin"){
      return(
        <Admin />
      )
    }
    else{
      return(
        <Navigate to="/" />
      )
    }

 
}

export default ProtectedRoute