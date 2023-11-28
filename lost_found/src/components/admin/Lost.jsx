// import React, { useState,useEffect } from 'react';
// import { Table, Input,Tooltip,Drawer   } from 'antd';
// import { PencilSquareIcon,InformationCircleIcon  } from "@heroicons/react/20/solid";
// import {  Col, DatePicker, Form,  Row, Select, Space } from 'antd';
// const { Option } = Select;
// import axios from 'axios';

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
//     Chip
//   } from "@material-tailwind/react";



// const { Search } = Input;

// // const TABLE_ROWS = [
// //   {
// //     key: '1',
// //     name: 'Spotify',
// //     value: '$2,500',
// //     date: 'Wed 3:00pm',
// //     status: 'Lost',
// //     Category: 'visa',
    
// //   },
 
  
  
// // ];

// const Lost = () => {
//   const [search, setSearch] = useState('');
//   const [open,setOpen]= useState(false);
//   const [lostitems, setLostItems] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  
//   const loadlostItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/lost-items');
//       setLostItems(response.data);
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };
  
//   useEffect(() => {
//     loadlostItems();
    
//   }, []);
  
//   useEffect(() => {
//     // Map lostItems to TABLE_ROWS when lostItems change
//     setTABLE_ROWS(
//       lostitems.map((item) => ({
//         key: item.item_id,
//         name: item.item_name,
//         value: item.item_value,
//         date: item.item_date_upload,
//         status: item.lost_found_select,
//         Category: item.category,
//         image: item.image_path,
//       }))
//     );
//   }, [lostitems]);
  
//     // const filteredData = TABLE_ROWS.filter((item) => {
//     //   return item.name.toLowerCase().includes(search.toLowerCase());
//     // });

//   const showDrawer = () => {
//     setOpen(true);
//   };
  

//   const onClose = () => {
//     setOpen(false);
//   };
  
//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: 'Image',
//       dataIndex: 'image',
//       key: 'image',
//       render: (text, record) => (
//         <img src={record.image} alt="card-image" className="h-20 w-20 object-cover" />
//       ),
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Value',
//       dataIndex: 'value',
//       key: 'value',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Status',
//       dataIndex:'status',
//       key: 'status',
//       render: (text, record) => (
//        <Chip color="green" value={record.status} />
//       ),
//     },
//     // {
//     //   title: 'Category',
//     //   dataIndex: 'Category',
//     //   key: 'Category',
//     // },
   
   
    
//   ];
  

//   return (
//     <div className="p-4">
        
//         <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//     <h1 className="text-2xl font-semibold">Lost Items</h1>
//     <Search
//       placeholder="Search by name..."
//       onSearch={value => setSearch(value)}
//       className="max-w-lg rounded-lg mr-5"
//     />
    
//   </div>
 

// <div className="rounded-lg shadow-md mt-5">
//           <Table columns={columns} dataSource={filteredData} />
//         </div>
//         <Drawer title="Items details" placement="right" onClose={onClose} open={open} size='large'>
//             <div className='flex justify-center items-center'>
//         <Card className="w-96">
//       <CardHeader shadow={false} floated={false} className="h-96">
//         <img
//           src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
//           alt="card-image"
//           className="h-full w-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <div className="mb-2 flex items-center justify-between">
//           <Typography color="blue-gray" className="font-medium">
//             Apple AirPods
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             95.00
//           </Typography>
//         </div>
//         <Typography
//           variant="small"
//           color="gray"
//           className="font-normal opacity-75"
//         >
//           With plenty of talk and listen time, voice-activated Siri access, and
//           an available wireless charging case.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button
//           ripple={false}
//           fullWidth={true}
//           className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </Card>
//     </div>
//       </Drawer>


     

//     </div>
//   );
// };

// export default Lost;

// below is working code 

// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip, Drawer } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';

// const { Search } = Input;

// const Lost = () => {
//   const [search, setSearch] = useState('');
//   const [open, setOpen] = useState(false);
//   const [lostitems, setLostItems] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

//   const loadLostItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/lost-items');
//       setLostItems(response.data);
//     } catch (error) {
//       console.error('Error loading lost items:', error);
//     }
//   };

//   useEffect(() => {
//     loadLostItems();
//   }, []);

//   useEffect(() => {
//     setTABLE_ROWS(
//       lostitems.map((item) => ({
//         key: item.item_id,
//         name: item.item_name,
//         value: item.item_value,
//         date: item.item_date_upload,
//         status: item.lost_found_select,
//         Category: item.category,
//         image: item.image_path,
//       }))
//     );
//   }, [lostitems]);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const handleImageClick = (imageUrl) => {
//     setEnlargedImageUrl(imageUrl);
//     setModalVisible(true);
//   };

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: 'Image',
//       dataIndex: 'image',
//       key: 'image',
//       render: (text, record) => (
//         <Tooltip title="Click to Zoom">
//           <img
//             src={record.image}
//             alt="card-image"
//             className="h-20 w-20 object-cover cursor-pointer"
//             onClick={() => handleImageClick(record.image)}
//           />
//         </Tooltip>
//       ),
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Value',
//       dataIndex: 'value',
//       key: 'value',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//       key: 'status',
//       render: (text, record) => (
//         <Chip color="green" value={record.status} />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Lost Items</h1>
//         <Search
//           placeholder="Search by name..."
//           onSearch={(value) => setSearch(value)}
//           className="max-w-lg rounded-lg mr-5"
//         />
//       </div>

//       <div className="rounded-lg shadow-md mt-5">
//         <Table columns={columns} dataSource={filteredData} />
//       </div>

//       <Modal
//         visible={modalVisible}
//         onCancel={() => setModalVisible(false)}
//         footer={null}
//         width="80%" // Set the width of the modal content
//       >
//         <img
//           src={enlargedImageUrl}
//           alt="Enlarged Image"
//           style={{ width: "100%" }}
//         />
//       </Modal>

//       <Drawer title="Items details" placement="right" onClose={onClose} visible={open} size='large'>
//         {/* Your drawer content goes here */}
//       </Drawer>
//     </div>
//   );
// };

// export default Lost;



// THIS IS THE WORKING CODE WITHOUT ACTIVITY STATUS



// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip, Drawer } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';
// import moment from 'moment';

// const { Search } = Input;

// const Lost = () => {
//   const [search, setSearch] = useState('');
//   const [open, setOpen] = useState(false);
//   const [lostItems, setLostItems] = useState([]);
//   const [timestamps, setTimestamps] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

//   const loadLostItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/lost-items');
//       const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');

//       setLostItems(response.data);
//       setTimestamps(timestampsResponse.data);
//     } catch (error) {
//       console.error('Error loading lost items:', error);
//     }
//   };

//   useEffect(() => {
//     loadLostItems();
//   }, []);

//   useEffect(() => {
//     const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));
  
//     setTABLE_ROWS(
//       lostItems.map((item) => {
//         const timestamp = timestampMap.get(item.item_id);
//         const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
  
//         return {
//           key: item.item_id,
//           name: item.item_name,
//           value: item.item_value,
//           date: moment(item.item_date_upload).format('YYYY-MM-DD'), // Display only the date part
//           timestamp: timePart,
//           status: item.lost_found_select,
//           category: item.category,
//           image: item.image_path,
//         };
//       })
//     );
//   }, [lostItems, timestamps]);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const handleImageClick = (imageUrl) => {
//     setEnlargedImageUrl(imageUrl);
//     setModalVisible(true);
//   };

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: 'Image',
//       dataIndex: 'image',
//       key: 'image',
//       render: (text, record) => (
//         <Tooltip title="Click to Zoom">
//           <img
//             src={record.image}
//             alt="card-image"
//             className="h-20 w-20 object-cover cursor-pointer"
//             onClick={() => handleImageClick(record.image)}
//           />
//         </Tooltip>
//       ),
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Value',
//       dataIndex: 'value',
//       key: 'value',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Timestamp',
//       dataIndex: 'timestamp',
//       key: 'timestamp',
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//       key: 'status',
//       render: (text, record) => (
//         <Chip color="green" value={record.status} />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Lost Items</h1>
//         <Search
//           placeholder="Search by name..."
//           onSearch={(value) => setSearch(value)}
//           className="max-w-lg rounded-lg mr-5"
//         />
//       </div>

//       <div className="rounded-lg shadow-md mt-5">
//         <Table columns={columns} dataSource={filteredData} />
//       </div>

//       <Modal
//         visible={modalVisible}
//         onCancel={() => setModalVisible(false)}
//         footer={null}
//         width="80%" // Set the width of the modal content
//       >
//         <img
//           src={enlargedImageUrl}
//           alt="Enlarged Image"
//           style={{ width: "100%" }}
//         />
//       </Modal>

//       <Drawer title="Items details" placement="right" onClose={onClose} visible={open} size='large'>
//         {/* Your drawer content goes here */}
//       </Drawer>
//     </div>
//   );
// };

// export default Lost;

import React, { useState, useEffect } from 'react';
import { Table, Input, Modal, Tooltip, Drawer } from 'antd';
import { Chip } from "@material-tailwind/react";
import axios from 'axios';
import moment from 'moment';
import differenceInDays from 'date-fns/differenceInDays';


const { Search } = Input;

const Lost = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [lostItems, setLostItems] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

  const loadLostItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/lost-items');
      const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');

      setLostItems(response.data);
      setTimestamps(timestampsResponse.data);
    } catch (error) {
      console.error('Error loading lost items:', error);
    }
  };

  useEffect(() => {
    loadLostItems();
  }, []);

  useEffect(() => {
    const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));

    setTABLE_ROWS(
      lostItems.map((item) => {
        const timestamp = timestampMap.get(item.item_id);
        const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';

        // Calculate the difference in days
        const activityDays = differenceInDays(new Date(), new Date(item.item_date_upload));

        return {
          key: item.item_id,
          name: item.item_name,
          value: item.item_value,
          date: moment(item.item_date_upload).format('YYYY-MM-DD'), // Display only the date part
          timestamp: timePart,
          status: item.lost_found_select,
          category: item.category,
          image: item.image_path,
          activityDays: activityDays >= 0 ? activityDays : '', // Ensure it's not negative
        };
      })
    );
  }, [lostItems, timestamps]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleImageClick = (imageUrl) => {
    setEnlargedImageUrl(imageUrl);
    setModalVisible(true);
  };

  const filteredData = TABLE_ROWS.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <Tooltip title="Click to Zoom">
          <img
            src={record.image}
            alt="card-image"
            className="h-20 w-20 object-cover cursor-pointer"
            onClick={() => handleImageClick(record.image)}
          />
        </Tooltip>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Chip color="green" value={record.status} />
      ),
    },
    {
      title: 'Activity Days',
      dataIndex: 'activityDays',
      key: 'activityDays',
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lost Items</h1>
        <Search
          placeholder="Search by name..."
          onSearch={(value) => setSearch(value)}
          className="max-w-lg rounded-lg mr-5"
        />
      </div>

      <div className="rounded-lg shadow-md mt-5">
        <Table columns={columns} dataSource={filteredData} />
      </div>

      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width="80%" // Set the width of the modal content
      >
        <img
          src={enlargedImageUrl}
          alt="Enlarged Image"
          style={{ width: "100%" }}
        />
      </Modal>

      <Drawer title="Items details" placement="right" onClose={onClose} visible={open} size='large'>
        {/* Your drawer content goes here */}
      </Drawer>
    </div>
  );
};

export default Lost;
