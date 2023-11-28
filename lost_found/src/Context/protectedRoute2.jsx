// import React, { useEffect } from "react";
// import { useStateContext } from "../Context/ContextProvider";
// import Client from "../components/client/Client";
// import Admin from "../components/admin/Admin";
// import Login from "../components/Login";
// import { useNavigate,  } from "react-router-dom";

// function ProtectedRoute2() {
//   const { login, setLogin,usertype } = useStateContext();
//     const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("email")) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }, []);

  
 
//   if(login && usertype==="student"){
//     return(
//     <Client />
//     )
//   }
//   else if(login && usertype){
//     return(
//       <Admin />
//     )
//   }
//   else{
//     return(
//       <Login />
//     )
//   }
// }

// export default ProtectedRoute2;
