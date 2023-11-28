import React, { useEffect, useState } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    FaceSmileIcon ,
    UserCircleIcon,
    FaceFrownIcon ,
    HandRaisedIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
   import Dashboard from './Dashboard';
   import Found from './Found';
  import Lost from './Lost' ;
  import Claimed from './Claimed';
  import { useStateContext } from '../../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

function Admin() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigate('/login');
    }

    if (localStorage.getItem('email')) {
      if(localStorage.user_type === 'student'){
        navigate('/client');
      }
    }
  }, [navigate]);

    const {Content,setContent}=useStateContext()
  return (
    <>
    
    <div class="flex">
  <div class="w-full md:w-1/5 bg-gray-200 fixed h-screen">
  <Card className="w-full max-w-[20rem] h-screen p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Lost & Found
          </Typography>
        </div>
        <List>
          <ListItem 
          onClick={()=>{
            setContent(<Dashboard />)
          }}
          >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          
          <ListItem
          onClick={()=>{
            setContent(<Found/>);
          }}
          >
            <ListItemPrefix>
              <FaceSmileIcon  className="h-5 w-5" />
            </ListItemPrefix>
            Found Items
           
          </ListItem>
          <ListItem
          onClick={()=>{
            setContent(<Lost/>);
          }}
          >
            <ListItemPrefix>
              <FaceFrownIcon  className="h-5 w-5" />
            </ListItemPrefix>
            Lost Items
            
          </ListItem>
          <ListItem
          onClick={()=>{
            setContent(<Claimed/>);
          }}
          >
            <ListItemPrefix>
              <HandRaisedIcon  className="h-5 w-5" />
            </ListItemPrefix>
            Claimed Items
            
          </ListItem>
          
          
        </List>
      </Card>
  </div>

  
  <div class="w-4/5 ml-auto overflow-y-auto">
    {Content}
  </div>
</div>

    
    
    </>
  )
}

export default Admin 

// blue color code
// import React, { useEffect } from 'react';
// import { Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
// import { PresentationChartBarIcon, FaceSmileIcon, FaceFrownIcon, HandRaisedIcon } from "@heroicons/react/24/solid";
// import { useStateContext } from '../../Context/ContextProvider';
// import { useNavigate } from 'react-router-dom';

// function Admin() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem('email')) {
//       navigate('/login');
//     }

//     if (localStorage.getItem('email')) {
//       if (localStorage.user_type === 'student') {
//         navigate('/client');
//       }
//     }
//   }, [navigate]);

//   const { Content, setContent } = useStateContext();

//   return (
//     <>
//       <div className="flex">
//         <div className="w-full md:w-1/5 bg-blue-800 fixed h-screen">
//           {/* Replace 'path_to_logo_image' with the actual path to your logo image */}
//           <img
//             src="lost_found/public/PESU-new-logo.png"
//             alt="Logo"
//             className="h-20 w-full object-cover mb-4"
//           />
//           <Card className="w-full max-w-[20rem] h-screen p-4 shadow-xl shadow-blue-gray-900/5">
//             <List>
//               <ListItem
//                 onClick={() => {
//                   setContent(<Dashboard />);
//                 }}
//                 className="bg-blue-700 text-white hover:bg-lightBlue-500 hover:text-white mb-2"
//               >
//                 <ListItemPrefix>
//                   <PresentationChartBarIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Dashboard
//               </ListItem>

//               <ListItem
//                 onClick={() => {
//                   setContent(<Found />);
//                 }}
//                 className="bg-blue-700 text-white hover:bg-lightBlue-500 hover:text-white mb-2"
//               >
//                 <ListItemPrefix>
//                   <FaceSmileIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Found Items
//               </ListItem>

//               <ListItem
//                 onClick={() => {
//                   setContent(<Lost />);
//                 }}
//                 className="bg-blue-700 text-white hover:bg-lightBlue-500 hover:text-white mb-2"
//               >
//                 <ListItemPrefix>
//                   <FaceFrownIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Lost Items
//               </ListItem>

//               <ListItem
//                 onClick={() => {
//                   setContent(<Claimed />);
//                 }}
//                 className="bg-blue-700 text-white hover:bg-lightBlue-500 hover:text-white mb-2"
//               >
//                 <ListItemPrefix>
//                   <HandRaisedIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Claimed Items
//               </ListItem>
//             </List>
//           </Card>
//         </div>

//         <div className="w-4/5 ml-auto overflow-y-auto">{Content}</div>
//       </div>
//     </>
//   );
// }

// export default Admin;
