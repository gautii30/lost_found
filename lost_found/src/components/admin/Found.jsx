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
//     Chip,
//   } from "@material-tailwind/react";



// const { Search } = Input;


  
  

// const Found = () => {
//   const [search, setSearch] = useState('');
//   const [open,setOpen]= useState(false);
 


  

//   const onClose = () => {
//     setOpen(false);
//   };
  
  

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
  


//   const [foundItems, setFoundItems] = useState([]);
// const [TABLE_ROWS, setTABLE_ROWS] = useState([]);

// const loadfounditems = async () => {
//   try {
//     const response = await axios.get('http://localhost:3000/found-items');
//     setFoundItems(response.data);
//   } catch (error) {
//     console.error('Error loading found items:', error);
//   }
// };

// useEffect(() => {
//   loadfounditems();
  
// }, []);

// useEffect(() => {
//   // Map foundItems to TABLE_ROWS when foundItems change
//   setTABLE_ROWS(
//     foundItems.map((item) => ({
//       key: item.item_id,
//       name: item.item_name,
//       value: item.item_value,
//       date: item.item_date_upload,
//       status: item.lost_found_select,
//       Category: item.category,
//       image: item.image_path,
//     }))
//   );
  
// }, [foundItems]);
//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div className="p-4">
        
//         <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//     <h1 className="text-2xl font-semibold">Found Items</h1>
//     <Search
//       placeholder="Search by name..."
//       onSearch={value => setSearch(value)}
//       className="max-w-lg rounded-lg mr-5"
//     />
    
//   </div>
 

// <div className="rounded-lg shadow-md mt-5">
//           <Table columns={columns} dataSource={filteredData} />
//         </div>
//     </div>
//   );
// };

// export default Found;

// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';

// const { Search } = Input;

// const Found = () => {
//   const [search, setSearch] = useState('');
//   const [foundItems, setFoundItems] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

//   const loadFoundItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/found-items');
//       setFoundItems(response.data);
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoundItems();
//   }, []);

//   useEffect(() => {
//     setTABLE_ROWS(
//       foundItems.map((item) => ({
//         key: item.item_id,
//         name: item.item_name,
//         value: item.item_value,
//         date: item.item_date_upload,
//         status: item.lost_found_select,
//         Category: item.category,
//         image: item.image_path,
//       }))
//     );
//   }, [foundItems]);

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleImageClick = (imageUrl) => {
//     setEnlargedImageUrl(imageUrl);
//     setModalVisible(true);
//   };

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
//         <h1 className="text-2xl font-semibold">Found Items</h1>
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
//     </div>
//   );
// };

// export default Found;

// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';

// const { Search } = Input;

// const Found = () => {
//   const [search, setSearch] = useState('');
//   const [foundItems, setFoundItems] = useState([]);
//   const [timestamps, setTimestamps] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

//   const loadFoundItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/found-items');
//       const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');

//       setFoundItems(response.data);
//       setTimestamps(timestampsResponse.data);
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoundItems();
//   }, []);

//   useEffect(() => {
//     const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));

//     setTABLE_ROWS(
//       foundItems.map((item) => {
//         const timestamp = timestampMap.get(item.item_id);
//         const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';

//         return {
//           key: item.item_id,
//           name: item.item_name,
//           value: item.item_value,
//           date: item.item_date_upload,
//           timestamp: timePart,
//           status: item.lost_found_select,
//           category: item.category,
//           image: item.image_path,
//         };
//       })
//     );
//   }, [foundItems, timestamps]);

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
//         <h1 className="text-2xl font-semibold">Found Items</h1>
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
//     </div>
//   );
// };

// export default Found;



//
//
//  THIS IS WORKING CODE BELOW 
//
//




// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';

// const { Search } = Input;

// const Found = () => {
//   const [search, setSearch] = useState('');
//   const [foundItems, setFoundItems] = useState([]);
//   const [timestamps, setTimestamps] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

//   const loadFoundItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/found-items');
//       const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');

//       setFoundItems(response.data);
//       setTimestamps(timestampsResponse.data);
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoundItems();
//   }, []);

//   useEffect(() => {
//     const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));

//     setTABLE_ROWS(
//       foundItems.map((item) => {
//         const timestamp = timestampMap.get(item.item_id);
//         const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
//         const datePart = timestamp ? new Date(timestamp).toLocaleDateString() : '';

//         return {
//           key: item.item_id,
//           name: item.item_name,
//           value: item.item_value,
//           date: datePart,
//           timestamp: timePart,
//           status: item.lost_found_select,
//           category: item.category,
//           image: item.image_path,
//         };
//       })
//     );
//   }, [foundItems, timestamps]);

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
//         <h1 className="text-2xl font-semibold">Found Items</h1>
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
//     </div>
//   );
// };

// export default Found;

import React, { useState, useEffect } from 'react';
import { Table, Input, Modal, Tooltip } from 'antd';
import { Chip } from "@material-tailwind/react";
import axios from 'axios';

const { Search } = Input;

const Found = () => {
  const [search, setSearch] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [activityDays, setActivityDays] = useState({});
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

  const loadFoundItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/found-items');
      const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');
      const activityDaysResponse = await axios.get('http://localhost:3000/activity-days/Found');

      setFoundItems(response.data);
      setTimestamps(timestampsResponse.data);
      setActivityDays(activityDaysResponse.data);
    } catch (error) {
      console.error('Error loading found items:', error);
    }
  };

  useEffect(() => {
    loadFoundItems();
  }, []);

  useEffect(() => {
    const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));
  
    setTABLE_ROWS(
      foundItems.map((item) => {
        const timestamp = timestampMap.get(item.item_id);
        const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
        const datePart = timestamp ? new Date(timestamp).toLocaleDateString() : '';
  
        // Calculate the difference in days for activity status
        const uploadDate = new Date(item.item_date_upload);
        const currentDate = new Date();
        const daysSinceUpload = Math.floor((currentDate - uploadDate) / (1000 * 60 * 60 * 24));
  
        return {
          key: item.item_id,
          name: item.item_name,
          value: item.item_value,
          date: datePart,
          timestamp: timePart,
          status: item.lost_found_select,
          category: item.category,
          image: item.image_path,
          activityDays: daysSinceUpload,
        };
      })
    );
  }, [foundItems, timestamps]);
  

  const handleImageClick = (imageUrl) => {
    // Handle image click logic
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
        <h1 className="text-2xl font-semibold">Found Items</h1>
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
    </div>
  );
};

export default Found;




// import React, { useState, useEffect } from 'react';
// import { Table, Input, Modal, Tooltip } from 'antd';
// import { Chip } from "@material-tailwind/react";
// import axios from 'axios';
// import TotalAmount from './TotalAmount'; // Adjust the path based on your project structure

// const { Search } = Input;

// const Found = () => {
//   const [search, setSearch] = useState('');
//   const [foundItems, setFoundItems] = useState([]);
//   const [timestamps, setTimestamps] = useState([]);
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState('');
//   const [totalAmount, setTotalAmount] = useState(0);

//   const loadFoundItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/found-items');
//       const timestampsResponse = await axios.get('http://localhost:3000/item-timestamps');
//       const totalAmountResponse = await axios.get('http://localhost:3000/total-amount/Found');

//       console.log('Found Items Response:', response.data);
//       console.log('Timestamps Response:', timestampsResponse.data);
//       console.log('Total Amount Response:', totalAmountResponse.data);

//       setFoundItems(response.data);
//       setTimestamps(timestampsResponse.data);
//       setTotalAmount(totalAmountResponse.data.totalAmount);
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoundItems();
//   }, []);

//   useEffect(() => {
//     const timestampMap = new Map(timestamps.map((item) => [item.log_id, item.action_timestamp]));

//     setTABLE_ROWS(
//       foundItems.map((item) => {
//         const timestamp = timestampMap.get(item.item_id);
//         const timePart = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
//         const datePart = timestamp ? new Date(timestamp).toLocaleDateString() : '';

//         return {
//           key: item.item_id,
//           name: item.item_name,
//           value: item.item_value,
//           date: datePart,
//           timestamp: timePart,
//           status: item.lost_found_select,
//           category: item.category,
//           image: item.image_path,
//         };
//       })
//     );
//   }, [foundItems, timestamps]);

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
//       <TotalAmount type="Found" totalAmount={totalAmount} />
      
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Found Items</h1>
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
//     </div>
//   );
// };

// export default Found;
