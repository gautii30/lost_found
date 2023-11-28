// import React, { useState ,useEffect} from "react";
// import ImgCrop from 'antd-img-crop';
// import {

//   Button,
// } from "@material-tailwind/react";
// import { Col, DatePicker, Form, Row, Select, Space, Drawer, Input, Upload,message } from 'antd';
// import moment from "moment/moment";
// import { useStateContext } from "../../Context/ContextProvider";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";



// function Dashboard() {
//   const [founds,setFounds]=useState(null);
//   const [losts,setLosts]=useState(null);
//   const [form] = Form.useForm();

//   const navigate  = useNavigate();
//   const logout = async () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('user_type');
//     navigate('/login')
//   }
 
//   const loadFounds = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/founds');
//       setFounds(response.data.found_item_count); // Update the state with the count
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };
//   const loadLosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/losts');
//       setLosts(response.data.lost_item_count); // Update the state with the count of lost items
//     } catch (error) {
//       console.error('Error loading lost items:', error);
//     }
//   };
 

//   useEffect(() => {
//     loadFounds();
   
    
//   }, []);
//   useEffect(() => {
//     loadLosts();
//     console.log(losts);
//   }, []);

//   const disabledDate = (current) => {
//     // Disable dates before today
//     return current && current < moment().startOf('day');
//   };
//   const [open, setOpen] = useState(false);
//   const hideadd = () => {
//     setOpen(!open)
//   }
//   const [fileList, setFileList] = useState([

//   ]);
//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };
//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       // Create a FormData object to collect form data and files
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('value', values.value);
//       formData.append('Status', values.Status);
//       formData.append('Category', values.Category);
//       formData.append('date', values.date.toISOString()); // Convert date to ISO string
//       formData.append('blockname', values.blockname);
//       formData.append('roomnumber', values.roomnumber);
//       formData.append('Floor', values.Floor);
//       formData.append('description', values.description);
//       fileList.forEach((file) => {
//         formData.append('image', file.originFileObj);
//       });

//       // Make an Axios POST request to the server
//       const response = await axios.post('http://localhost:3000/save-form-data', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Data saved successfully:', response.data);
//       message.success('Data saved successfully');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       message.error('Error saving data');
//     }

    
//   };



//   return (
//     <div class="container mx-auto mt-8">
//       <div className="flex flex-row justify-between items-center">
//         <h1 class="text-3xl font-semibold text-gray-800">Lost and Found Dashboard</h1>
//         <span className="flex gap-1 mr-5 cursor-pointer" onClick={logout}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-800">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//             <circle cx="12" cy="7" r="4"></circle>
//           </svg> Logout
//         </span>
//       </div>


//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">







//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Add New Item</h2>
//           <p class="text-gray-600 mt-2">Report a new lost or found item.</p>
//           <Button onClick={() => {
//             setOpen(true);
//           }} >Report Item</ Button>
//         </div>
//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Lost Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of lost items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-blue-500">{losts}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>


//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Found Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of found items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-green-500">{founds}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>
//       </div>
//       <Drawer
//         title="Report a new item"
//         width={720}
//         onClose={hideadd}
//         open={open}
//         styles={{
//           body: {
//             paddingBottom: 80,
//           },
//         }}
       
//       >
//         <Form layout="vertical"
//           onFinish={handleFormSubmit}

        
//         >
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="name"
//                 label="Item Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please type the item name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please type the item name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="value"
//                 label="Value"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter Value',
//                   },
//                 ]}
//               >
//                 <Input
//                   style={{
//                     width: '100%',
//                   }}

//                   placeholder="Please enter Value"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="Status"
//                 label="Stauts"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please select an Status',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please select an Status" size="large">
//                   <Select.Option value="Found">Found</Select.Option>
//                   <Select.Option value="Lost">Lost</Select.Option>

//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="Category"
//                 label="Category"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the category',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please choose the category" size="large">
//                   <Select.Option value="seleceted">Select an option</Select.Option>

//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>

//             <Col span={24}>
//               <Form.Item
//                 name="date"
//                 label="Date"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the dateTime',
//                   },
//                 ]}
//               >
//                 <DatePicker
//                   size="large"
//                   style={{
//                     width: '100%',
//                   }}
//                   disabledDate={disabledDate}
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={8}>
//               <Form.Item
//                 name="blockname"
//                 label="Block Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Block Name',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Block Name" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="roomnumber"
//                 label="Room Number"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Room Number',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Room Number" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="Floor"
//                 label="Floor"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Floor',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Floor" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label="Description"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >
//                 <Input.TextArea rows={4} placeholder="please enter url description" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}
//           >
//             <Col span={24}>
//               <Form.Item
//                 name="Image"
//                 label="Image"
//                 rules={[
//                   {
//                     required: false,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >



//                 <ImgCrop rotationSlider>
//                   <Upload
//                     action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//                     listType="picture-card"
//                     fileList={fileList}
//                     onChange={onChange}
//                     onPreview={onPreview}
//                   >
//                     {fileList.length < 1 && '+ Upload'}
//                   </Upload>
//                 </ImgCrop>
//               </Form.Item>
                
//             </Col>
//           </Row>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" size="large">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useState ,useEffect} from "react";
// import ImgCrop from 'antd-img-crop';
// import {

//   Button,
// } from "@material-tailwind/react";
// import { Col, DatePicker, Form, Row, Select, Space, Drawer, Input, Upload,message } from 'antd';
// import moment from "moment/moment";
// import { useStateContext } from "../../Context/ContextProvider";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";



// function Dashboard() {
//   const [founds,setFounds]=useState(null);
//   const [losts,setLosts]=useState(null);
//   const [form] = Form.useForm();

//   const navigate  = useNavigate();
//   const logout = async () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('user_type');
//     navigate('/login')
//   }
 
//   const loadFounds = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/founds');
//       setFounds(response.data.found_item_count); // Update the state with the count
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };
//   const loadLosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/losts');
//       setLosts(response.data.lost_item_count); // Update the state with the count of lost items
//     } catch (error) {
//       console.error('Error loading lost items:', error);
//     }
//   };
 

//   useEffect(() => {
//     loadFounds();
   
    
//   }, []);
//   useEffect(() => {
//     loadLosts();
//     console.log(losts);
//   }, []);

//   const disabledDate = (current) => {
//     // Disable dates before today
//     return current && current < moment().startOf('day');
//   };
//   const [open, setOpen] = useState(false);
//   const hideadd = () => {
//     setOpen(!open)
//   }
//   const [fileList, setFileList] = useState([

//   ]);
//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };
//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       // Create a FormData object to collect form data and files
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('value', values.value);
//       formData.append('Status', values.Status);
//       formData.append('Category', values.Category);
//       formData.append('date', values.date.toISOString()); // Convert date to ISO string
//       formData.append('blockname', values.blockname);
//       formData.append('roomnumber', values.roomnumber);
//       formData.append('Floor', values.Floor);
//       formData.append('description', values.description);
//       fileList.forEach((file) => {
//         formData.append('image', file.originFileObj);
//       });

//       // Make an Axios POST request to the server
//       const response = await axios.post('http://localhost:3000/save-form-data', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Data saved successfully:', response.data);
//       message.success('Data saved successfully');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       message.error('Error saving data');
//     }

    
//   };



//   return (
//     <div class="container mx-auto mt-8">
//       <div className="flex flex-row justify-between items-center">
//         <h1 class="text-3xl font-semibold text-gray-800">Lost and Found Dashboard</h1>
//         <span className="flex gap-1 mr-5 cursor-pointer" onClick={logout}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-800">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//             <circle cx="12" cy="7" r="4"></circle>
//           </svg> Logout
//         </span>
//       </div>


//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">







//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Add New Item</h2>
//           <p class="text-gray-600 mt-2">Report a new lost or found item.</p>
//           <Button onClick={() => {
//             setOpen(true);
//           }} >Report Item</ Button>
//         </div>
//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Lost Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of lost items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-blue-500">{losts}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>


//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Found Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of found items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-green-500">{founds}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>
//       </div>
//       <Drawer
//         title="Report a new item"
//         width={720}
//         onClose={hideadd}
//         open={open}
//         styles={{
//           body: {
//             paddingBottom: 80,
//           },
//         }}
       
//       >
//         <Form layout="vertical"
//           onFinish={handleFormSubmit}

        
//         >
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="name"
//                 label="Item Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please type the item name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please type the item name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="value"
//                 label="Value"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter Value',
//                   },
//                 ]}
//               >
//                 <Input
//                   style={{
//                     width: '100%',
//                   }}

//                   placeholder="Please enter Value"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="Status"
//                 label="Stauts"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please select an Status',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please select an Status" size="large">
//                   <Select.Option value="Found">Found</Select.Option>
//                   <Select.Option value="Lost">Lost</Select.Option>

//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="Category"
//                 label="Category"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the category',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please choose the category" size="large">
//                   <Select.Option value="seleceted">Select an option</Select.Option>

//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>

//             <Col span={24}>
//               <Form.Item
//                 name="date"
//                 label="Date"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the dateTime',
//                   },
//                 ]}
//               >
//                 <DatePicker
//                   size="large"
//                   style={{
//                     width: '100%',
//                   }}
//                   disabledDate={disabledDate}
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={8}>
//               <Form.Item
//                 name="blockname"
//                 label="Block Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Block Name',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Block Name" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="roomnumber"
//                 label="Room Number"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Room Number',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Room Number" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="Floor"
//                 label="Floor"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Floor',
//                   },
//                 ]}

//               >
//                 <Input placeholder="please enter the Floor" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label="Description"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >
//                 <Input.TextArea rows={4} placeholder="please enter url description" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}
//           >
//             <Col span={24}>
//               <Form.Item
//                 name="Image"
//                 label="Image"
//                 rules={[
//                   {
//                     required: false,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >



//                 <ImgCrop rotationSlider>
//                   <Upload
//                     action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//                     listType="picture-card"
//                     fileList={fileList}
//                     onChange={onChange}
//                     onPreview={onPreview}
//                   >
//                     {fileList.length < 1 && '+ Upload'}
//                   </Upload>
//                 </ImgCrop>
//               </Form.Item>
                
//             </Col>
//           </Row>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" size="large">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   )
// }

// export default Dashboard

import React, { useState, useEffect } from "react";
import ImgCrop from 'antd-img-crop';
import {
  Button,
} from "@material-tailwind/react";
import { Col, DatePicker, Form, Row, Select, Space, Drawer, Input, Upload, message } from 'antd';
import moment from "moment/moment";
import { useStateContext } from "../../Context/ContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [founds, setFounds] = useState(null);
  const [losts, setLosts] = useState(null);
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const logout = async () => {
    localStorage.removeItem('email');
    localStorage.removeItem('user_type');
    localStorage.removeItem('id');
    navigate('/login')
  }

  const loadFounds = async () => {
    try {
      const response = await axios.get('http://localhost:3000/founds');
      setFounds(response.data.found_item_count); // Update the state with the count
    } catch (error) {
      console.error('Error loading found items:', error);
    }
  };

  const loadLosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/losts');
      setLosts(response.data.lost_item_count); // Update the state with the count of lost items
    } catch (error) {
      console.error('Error loading lost items:', error);
    }
  };

  useEffect(() => {
    loadFounds();
  }, []);

  useEffect(() => {
    loadLosts();
    console.log(losts);
  }, []);

  const disabledDate = (current) => {
    // Disable dates after today
    return current && current > moment().endOf("day");
};

  const [open, setOpen] = useState(false);

  const hideadd = () => {
    setOpen(!open)
  }

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleFormSubmit = async (values) => {
    try {
      // Create a FormData object to collect form data and files
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('value', values.value);
      formData.append('Status', values.Status);
      // formData.append('Category', values.Category); // Commented out the Category part
      formData.append('date', values.date.toISOString()); // Convert date to ISO string
      formData.append('blockname', values.blockname);
      formData.append('roomnumber', values.roomnumber);
      formData.append('Floor', values.Floor);
      formData.append('description', values.description);
      formData.append("id", localStorage.getItem("id"));
      fileList.forEach((file) => {
        formData.append('image', file.originFileObj);
      });

      // Make an Axios POST request to the server
      const response = await axios.post('http://localhost:3000/save-form-data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Data saved successfully:', response.data);
      message.success('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      message.error('Error saving data');
    }
  };

  return (
    <div class="container mx-auto mt-8">
      <div className="flex flex-row justify-between items-center">
        <h1 class="text-3xl font-semibold text-gray-800">Lost and Found Dashboard</h1>
        <span className="flex gap-1 mr-5 cursor-pointer" onClick={logout}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-800">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg> Logout
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div class="bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-semibold text-gray-800">Add New Item</h2>
          <p class="text-gray-600 mt-2">Report a new lost or found item.</p>
          <Button onClick={() => {
            setOpen(true);
          }} >Report Item</ Button>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-semibold text-gray-800">Total Lost Items</h2>
          <p class="text-gray-600 mt-2">View the total number of lost items.</p>
          <div class="mt-4 flex items-center">
            <span class="text-4xl font-semibold text-blue-500">{losts}</span>
            <span class="text-gray-600 ml-2">items</span>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-semibold text-gray-800">Total Found Items</h2>
          <p class="text-gray-600 mt-2">View the total number of found items.</p>
          <div class="mt-4 flex items-center">
            <span class="text-4xl font-semibold text-green-500">{founds}</span>
            <span class="text-gray-600 ml-2">items</span>
          </div>
        </div>
      </div>
      <Drawer
        title="Report a new item"
        width={720}
        onClose={hideadd}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          layout="vertical"
          onFinish={handleFormSubmit}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Item Name"
                rules={[
                  {
                    required: true,
                    message: 'Please type the item name',
                  },
                ]}
              >
                <Input placeholder="Please type the item name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="value"
                label="Value"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Value',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  placeholder="Please enter Value"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Status"
                label="Stauts"
                rules={[
                  {
                    required: true,
                    message: 'Please select an Status',
                  },
                ]}
              >
                <Select placeholder="Please select an Status" size="large">
                  <Select.Option value="Found">Found</Select.Option>
                  <Select.Option value="Lost">Lost</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              {/* Commented out the Category part */}
              {/* <Form.Item
                name="Category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the category',
                  },
                ]}
              >
                <Select placeholder="Please choose the category" size="large">
                  <Select.Option value="seleceted">Select an option</Select.Option>
                </Select>
              </Form.Item> */}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="date"
                label="Date"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker
                  size="large"
                  style={{
                    width: '100%',
                  }}
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="blockname"
                label="Block Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Block Name',
                  },
                ]}
              >
                <Input placeholder="please enter the Block Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="roomnumber"
                label="Room Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Room Number',
                  },
                ]}
              >
                <Input placeholder="please enter the Room Number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="Floor"
                label="Floor"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Floor',
                  },
                ]}
              >
                <Input placeholder="please enter the Floor" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="Image"
                label="Image"
                rules={[
                  {
                    required: false,
                    message: 'please enter url description',
                  },
                ]}
              >
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 1 && '+ Upload'}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default Dashboard;


// import React, { useState, useEffect } from "react";
// import ImgCrop from 'antd-img-crop';
// import {
//   Button,
// } from "@material-tailwind/react";
// import { Col, DatePicker, Form, Row, Select, Space, Drawer, Input, Upload, message } from 'antd';
// import moment from "moment/moment";
// import { useStateContext } from "../../Context/ContextProvider";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const [founds, setFounds] = useState(null);
//   const [losts, setLosts] = useState(null);
//   const [form] = Form.useForm();

//   const navigate = useNavigate();
//   const logout = async () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('user_type');
//     navigate('/login')
//   }

//   const loadFounds = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/founds');
//       setFounds(response.data.found_item_count); // Update the state with the count
//     } catch (error) {
//       console.error('Error loading found items:', error);
//     }
//   };

//   const loadLosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/losts');
//       setLosts(response.data.lost_item_count); // Update the state with the count of lost items
//     } catch (error) {
//       console.error('Error loading lost items:', error);
//     }
//   };

//   useEffect(() => {
//     loadFounds();
//   }, []);

//   useEffect(() => {
//     loadLosts();
//     console.log(losts);
//   }, []);

//   const disabledDate = (current) => {
//     // Disable dates after today
//     return current && current > moment().endOf("day");
// };

//   const [open, setOpen] = useState(false);

//   const hideadd = () => {
//     setOpen(!open)
//   }

//   const [fileList, setFileList] = useState([]);

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       // Create a FormData object to collect form data and files
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('value', values.value);
//       formData.append('Status', values.Status);
//       // formData.append('Category', values.Category); // Commented out the Category part
//       formData.append('date', values.date.toISOString()); // Convert date to ISO string
//       formData.append('blockname', values.blockname);
//       formData.append('roomnumber', values.roomnumber);
//       formData.append('Floor', values.Floor);
//       formData.append('description', values.description);
//       fileList.forEach((file) => {
//         formData.append('image', file.originFileObj);
//       });

//       // Make an Axios POST request to the server
//       const response = await axios.post('http://localhost:3000/save-form-data', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Data saved successfully:', response.data);
//       message.success('Data saved successfully');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       message.error('Error saving data');
//     }
//   };

//   return (
//     <div class="container mx-auto mt-8">
//       <div className="flex flex-row justify-between items-center">
//         <h1 class="text-3xl font-semibold text-gray-800">Lost and Found Dashboard</h1>
//         <span className="flex gap-1 mr-5 cursor-pointer" onClick={logout}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-800">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//             <circle cx="12" cy="7" r="4"></circle>
//           </svg> Logout
//         </span>
//       </div>

//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Add New Item</h2>
//           <p class="text-gray-600 mt-2">Report a new lost or found item.</p>
//           <Button onClick={() => {
//             setOpen(true);
//           }} >Report Item</ Button>
//         </div>
//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Lost Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of lost items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-blue-500">{losts}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>
//         <div class="bg-white rounded-lg p-4 shadow-md">
//           <h2 class="text-xl font-semibold text-gray-800">Total Found Items</h2>
//           <p class="text-gray-600 mt-2">View the total number of found items.</p>
//           <div class="mt-4 flex items-center">
//             <span class="text-4xl font-semibold text-green-500">{founds}</span>
//             <span class="text-gray-600 ml-2">items</span>
//           </div>
//         </div>
//       </div>
//       <Drawer
//         title="Report a new item"
//         width={720}
//         onClose={hideadd}
//         open={open}
//         styles={{
//           body: {
//             paddingBottom: 80,
//           },
//         }}
//       >
//         <Form
//           layout="vertical"
//           onFinish={handleFormSubmit}
//         >
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="name"
//                 label="Item Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please type the item name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please type the item name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="value"
//                 label="Value"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter Value',
//                   },
//                 ]}
//               >
//                 <Input
//                   style={{
//                     width: '100%',
//                   }}
//                   placeholder="Please enter Value"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="Status"
//                 label="Stauts"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please select an Status',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please select an Status" size="large">
//                   <Select.Option value="Found">Found</Select.Option>
//                   <Select.Option value="Lost">Lost</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               {/* Commented out the Category part */}
//               {/* <Form.Item
//                 name="Category"
//                 label="Category"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the category',
//                   },
//                 ]}
//               >
//                 <Select placeholder="Please choose the category" size="large">
//                   <Select.Option value="seleceted">Select an option</Select.Option>
//                 </Select>
//               </Form.Item> */}
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="date"
//                 label="Date"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please choose the dateTime',
//                   },
//                 ]}
//               >
//                 <DatePicker
//                   size="large"
//                   style={{
//                     width: '100%',
//                   }}
//                   disabledDate={disabledDate}
//                 />
//               </Form.Item>
//             </Col>
//           </Row>

//         <Row gutter={16}>
//             <Col span={12}>
//                <Form.Item
//                   name="contactNumber"
//                   label="Contact Number"
//                   rules={[
//                     {
//                        required: true,
//                        message: 'Please enter the contact number',
//                      },
//                     ]}
//                 >
//               <Input placeholder="Please enter the contact number" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="uploadedBy"
//                 label="Uploaded By"
//                 rules={[
//                   {
//                     required: true,
//                      message: 'Please enter the uploader name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please enter the uploader name" />
//                 </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={8}>
//               <Form.Item
//                 name="blockname"
//                 label="Block Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Block Name',
//                   },
//                 ]}
//               >
//                <Input placeholder="please enter the Block Name" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="roomnumber"
//                 label="Room Number"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Room Number',
//                   },
//                 ]}
//               >
//                 <Input placeholder="please enter the Room Number" />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="Floor"
//                 label="Floor"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter the Floor',
//                   },
//                 ]}
//               >
//                 <Input placeholder="please enter the Floor" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label="Description"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >
//                 <Input.TextArea rows={4} placeholder="please enter url description" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="Image"
//                 label="Image"
//                 rules={[
//                   {
//                     required: false,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >
//                 <ImgCrop rotationSlider>
//                   <Upload
//                     action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//                     listType="picture-card"
//                     fileList={fileList}
//                     onChange={onChange}
//                     onPreview={onPreview}
//                   >
//                     {fileList.length < 1 && '+ Upload'}
//                   </Upload>
//                 </ImgCrop>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" size="large">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   )
// }

// export default Dashboard;

