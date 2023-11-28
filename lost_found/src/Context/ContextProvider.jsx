import React, { createContext, useContext, useState } from 'react';
import Dashboard from '../components/admin/Dashboard';


const StateContext = createContext();



export const ContextProvider = ({ children }) => {
  const [login,setLogin]= useState(false);
  const [usertype,setUsertype]= useState('student');
  const [Content,setContent]=useState(<Dashboard />)

  
  
  return (

    <StateContext.Provider value={{ 
        login:login,
        setLogin: setLogin,
        usertype:usertype,
        setUsertype:setUsertype,
        Content:Content,
        setContent:setContent,
        
        
        

     }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);