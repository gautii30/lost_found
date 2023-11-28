// import { useState } from 'react'
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import Admin from './components/admin/Admin'
import Client from './components/client/Client'
// import ProtectedRoute from './Context/ProtectedRoute'
import SignUp from './components/SignUp'
// import ProtectedRoute2 from './Context/protectedRoute2'

function App() {
  

  return (
    <div className=''>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      
      <Route path='/client' element={<Client />}/>
      <Route path='/admin' element={<Admin />}/>

      {/* <Route exact path="/Dashboard" element={<ProtectedRoute /> } /> */}
      <Route path='/signup' element={<SignUp />} />
      


       </Routes>
    </div>
  )
}

export default App
