// import React, { useState, useEffect } from "react";
// import moment from "moment/moment";
// import ImgCrop from "antd-img-crop";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import {
//   FaceSmileIcon,
//   FaceFrownIcon,
//   PlusCircleIcon,
// } from "@heroicons/react/24/solid";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
//   Checkbox,
// } from "@material-tailwind/react";
// import {
//   Row,
//   Col,
//   Upload,
//   Cascader,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Switch,
//   message,
//   TreeSelect,
// } from "antd";
// import Item from "antd/es/list/Item";

// const ItemCard = (itemName, value, imageUrl, description, key) => {
//   return (
//     <Card className="w-96">
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
//             dsfdf
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             $95.00
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
//           Claim
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };
// function ClaimPopup({ visible, onClose, onClaimSubmit, itemId }) {
//   const [studentName, setStudentName] = useState("");
//   const [idCardImage, setIdCardImage] = useState(null);
//   const [proofImage, setProofImage] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       // Prepare the data and send it to the server
//       const formData = new FormData();
//       formData.append("studentName", studentName);
//       formData.append("idCardImage", idCardImage);
//       formData.append("proofImage", proofImage);
//       formData.append("itemId", itemId); // Include the item ID

//       // Send the formData to the backend
//       const response = await axios.post(
//         "http://localhost:3000/claim",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Data saved successfully:", response.data);
//       message.success("Data saved successfully");

//       // Call the onClaimSubmit function and pass the formData
//       // onClaimSubmit(formData);

//       // Reset form fields
//       setStudentName("");
//       setIdCardImage(null);
//       setProofImage(null);

//       // Close the popup
//       onClose();
//     } catch (error) {
//       console.error("Error saving data:", error);
//       message.error("Error saving data");
//     }
//   };

//   return (
//     <div className={`claim-popup ${visible ? "show" : ""}`}>
//       <div className="claim-popup-content">
//         <h2>Claim this item</h2>
//         <label className="block">
//           Student Name:
//           <input
//             type="text"
//             className="border ml-2 px-2 py-1"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//           />
//         </label>
//         <label>
//           ID Card Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setIdCardImage(e.target.files[0])}
//           />
//         </label>
//         <label>
//           Proof Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setProofImage(e.target.files[0])}
//           />
//         </label>
//         <div className="flex justify-between pt-2">
//           <button
//             className="bg-blue-500 text-white px-4 py-1 rounded"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//           <button
//             className="bg-gray-500 text-white px-4 py-1 rounded"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Client() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("email")) {
//       navigate("/login");
//     }

//     if (localStorage.getItem("email")) {
//       if (localStorage.user_type === "student") {
//         navigate("/client");
//       } else {
//         navigate("/admin");
//       }
//     }
//   }, [navigate]);

//   // const [claimPopupVisible, setClaimPopupVisible] = useState(false);
//   const [claimPopupStates, setClaimPopupStates] = useState({});
//   const [claimingItemId, setClaimingItemId] = useState(null);

//   const handleClaimSubmit = (formData) => {
//     // Send the formData to your server
//     // Include the item ID for the submitted claim
//     formData.append("itemId", claimingItemId);

//     // You can use Axios or another library to make the POST request
//     // Close the popup
//     // setClaimPopupVisible(false);
//   };
//   // const [showPopup, setShowPopup] = useState(false);

//   // const handleClaimClick = () => {
//   //   setShowPopup(true);
//   // };

//   // const handlePopupClose = () => {
//   //   setShowPopup(false);
//   // };

//   // const handleClaimSubmit = () => {
//   //   setShowPopup(false);
//   //   // Handle submission logic as needed
//   // };

//   const [foundItems, setFoundItems] = useState([]);

//   const loadfounditems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/found-items");
//       setFoundItems(response.data);
//     } catch (error) {
//       console.error("Error loading found items:", error);
//     }
//   };

//   const [claimItems, setClaimItems] = useState([]);

//   const loadClaimedItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/claimed-items");
//       setClaimItems(response.data);
//     } catch (error) {
//       console.error("Error loading claim items:", error);
//     }
//   };

//   useEffect(() => {
//     loadfounditems();
//     loadClaimedItems();
//   }, []);

//   const [lostitems, setLostItems] = useState([]);

//   const loadlostItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/lost-items");
//       setLostItems(response.data);
//     } catch (error) {
//       console.error("Error loading found items:", error);
//     }
//   };

//   useEffect(() => {
//     loadlostItems();
//   }, []);

//   const handleFormSubmit = async (values) => {
//     try {
//       // Create a FormData object to collect form data and files
//       const formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("value", values.value);
//       formData.append("Status", values.Status);
//       // formData.append("Category", values.Category);
//       formData.append("date", values.date.toISOString()); // Convert date to ISO string
//       formData.append("blockname", values.blockname);
//       formData.append("roomnumber", values.roomnumber);
//       formData.append("Floor", values.Floor);
//       formData.append("description", values.description);
//       fileList.forEach((file) => {
//         formData.append("image", file.originFileObj);
//       });

//       // Make an Axios POST request to the server
//       const response = await axios.post(
//         "http://localhost:3000/save-form-data",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(formData);
//       console.log("Data saved successfully:", response.data);
//       message.success("Data saved successfully");
//     } catch (error) {
//       console.error("Error saving data:", error);
//       message.error("Error saving data");
//     }
//   };

//   const logout = async () => {
//     localStorage.removeItem("email");
//     localStorage.removeItem("user_type");
//     navigate("/login");
//   };

//   const disabledDate = (current) => {
//     // Disable dates after today
//     return current && current > moment().endOf("day");
// };
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

//   const data = [
//     {
//       label: "Found Items",
//       value: "dashboard",
//       icon: FaceSmileIcon,
//       desc: foundItems.map((item, index) => {
//         const image = item.image_path;
//         return (
//           <Card className="w-96" key={index}>
//             <CardHeader shadow={false} floated={false} className="h-96">
//               <img
//                 src={image}
//                 alt="card-image"
//                 className="h-full w-full object-cover"
//               />
//             </CardHeader>
//             <CardBody>
//               <div className="mb-2 flex items-center justify-between">
//                 <Typography color="blue-gray" className="font-medium">
//                   {item.item_name}
//                 </Typography>
//                 <Typography color="blue-gray" className="font-medium">
//                   {item.item_value} rs
//                 </Typography>
//               </div>
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="font-normal opacity-75"
//               >
//                 {item.item_description}
//               </Typography>
//             </CardBody>

//             <CardFooter className="pt-0">
//               {claimItems.some(
//                 (claimItem) => claimItem.lost_item_id === item.item_id
//               ) ? (
//                 <Button
//                   disabled
//                   ripple={false}
//                   fullWidth={true}
//                   className="bg-blue-900 text-white shadow-none cursor-not-allowed"
//                 >
//                   Claimed
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={() => {
//                     console.log("Claim button clicked for item:", item);
//                     setClaimingItemId(item.item_id);

//                     // Set the claimPopupVisible state for the specific item
//                     setClaimPopupStates((prevState) => ({
//                       ...prevState,
//                       [item.item_id]: true,
//                     }));
//                   }}
//                   ripple={false}
//                   fullWidth={true}
//                   className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//                 >
//                   Claim
//                 </Button>
//               )}
//               {claimPopupStates[item.item_id] && (
//                 <ClaimPopup
//                   visible={claimPopupStates[item.item_id]}
//                   onClose={() => {
//                     setClaimPopupStates((prevState) => ({
//                       ...prevState,
//                       [item.item_id]: false,
//                     }));
//                     // Additional logic if needed
//                   }}
//                   onClaimSubmit={handleClaimSubmit}
//                   itemId={claimingItemId}
//                 />
//               )}
//             </CardFooter>
//           </Card>
//         );
//       }),
//     },
//     {
//       label: "Lost Items",
//       value: "lostitems",
//       icon: FaceFrownIcon,
//       desc: lostitems.map((item, index) => {
//         const image = item.image_path;
//         return (
//           <Card className="w-96" key={index}>
//             <CardHeader shadow={false} floated={false} className="h-96">
//               <img
//                 src={image}
//                 alt="card-image"
//                 className="h-full w-full object-cover"
//               />
//             </CardHeader>
//             <CardBody>
//               <div className="mb-2 flex items-center justify-between">
//                 <Typography color="blue-gray" className="font-medium">
//                   {item.item_name}
//                 </Typography>
//                 <Typography color="blue-gray" className="font-medium">
//                   {item.item_value} 
//                 </Typography>
//               </div>
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="font-normal opacity-75"
//               >
//                 {item.item_description}
//               </Typography>
//             </CardBody>
//             <CardFooter className="pt-0">
//               {claimItems.some(
//                 (claimItem) => claimItem.lost_item_id === item.item_id
//               ) ? (
//                 <Button
//                   disabled
//                   ripple={false}
//                   fullWidth={true}
//                   className="bg-blue-900 text-white shadow-none cursor-not-allowed"
//                 >
//                   Claimed
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={() => {
//                     console.log("Claim button clicked for item:", item);
//                     setClaimingItemId(item.item_id);

//                     // Set the claimPopupVisible state for the specific item
//                     setClaimPopupStates((prevState) => ({
//                       ...prevState,
//                       [item.item_id]: true,
//                     }));
//                   }}
//                   ripple={false}
//                   fullWidth={true}
//                   className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//                 >
//                   Claim
//                 </Button>
//               )}
//               {claimPopupStates[item.item_id] && (
//                 <ClaimPopup
//                   visible={claimPopupStates[item.item_id]}
//                   onClose={() => {
//                     setClaimPopupStates((prevState) => ({
//                       ...prevState,
//                       [item.item_id]: false,
//                     }));
//                     // Additional logic if needed
//                   }}
//                   onClaimSubmit={handleClaimSubmit}
//                   itemId={claimingItemId}
//                 />
//               )}
//             </CardFooter>
//           </Card>
//         );
//       }),
//     },
//     {
//       label: "Report new Items",
//       value: "report",
//       icon: FaceFrownIcon,
//       desc: (
//         <div className="flex items-center justify-center h-screen">
//           <Form layout="vertical" onFinish={handleFormSubmit}>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name="name"
//                   label="Item Name"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please type the item name",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="Please type the item name" />
//                 </Form.Item>
//               </Col>
//               <Col span={12}>
//                 <Form.Item
//                   name="value"
//                   label="Value"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter Value",
//                     },
//                   ]}
//                 >
//                   <Input
//                     style={{
//                       width: "100%",
//                     }}
//                     placeholder="Please enter Value"
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name="Status"
//                   label="Stauts"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please select an Status",
//                     },
//                   ]}
//                 >
//                   <Select placeholder="Please select an Status" size="large">
//                     <Option value="Found">Found</Option>
//                     <Option value="Lost">Lost</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               {/* <Col span={12}>
//                 <Form.Item
//                   name="Category"
//                   label="Category"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please choose the category",
//                     },
//                   ]}
//                 >
//                   <Select placeholder="Please choose the category" size="large">
//                     <Option value="Mobile">Select an option</Option>
//                   </Select>
//                 </Form.Item>
//               </Col> */}
//             </Row>
//             <Row gutter={16}>
//               <Col span={24}>
//                 <Form.Item
//                   name="date"
//                   label="Date"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please choose the dateTime",
//                     },
//                   ]}
//                 >
//                   <DatePicker
//                     size="large"
//                     style={{
//                       width: "100%",
//                     }}
//                     disabledDate={disabledDate}
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={8}>
//                 <Form.Item
//                   name="blockname"
//                   label="Block Name"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter the Block Name",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="please enter the Block Name" />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item
//                   name="roomnumber"
//                   label="Room Number"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter the Room Number",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="please enter the Room Number" />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item
//                   name="Floor"
//                   label="Floor"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter the Floor",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="please enter the Floor" />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={24}>
//                 <Form.Item
//                   name="description"
//                   label="Description"
//                   rules={[
//                     {
//                       required: true,
//                       message: "please enter url description",
//                     },
//                   ]}
//                 >
//                   <Input.TextArea
//                     rows={4}
//                     placeholder="please enter url description"
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={24}>
//                 <Form.Item
//                   name="Image"
//                   label="Image(image type: jpeg, png, jpg)"
//                   rules={[
//                     {
//                       required: false,
//                       message: "please enter url description",
//                     },
//                   ]}
//                 >
//                   <ImgCrop rotationSlider>
//                     <Upload
//                       action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//                       listType="picture-card"
//                       fileList={fileList}
//                       onChange={onChange}
//                       onPreview={onPreview}
//                     >
//                       {fileList.length < 1 && "+ Upload"}
//                     </Upload>
//                   </ImgCrop>
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Form.Item label=" ">
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <Tabs value="dashboard">
//       <div className="p-4 rounded-lg shadow-lg max-w-[80%] ml-20">
//         <TabsHeader>
//           {data.map(({ label, value, icon }) => (
//             <Tab key={value} value={value}>
//               <div className="flex items-center gap-2">
//                 {React.createElement(icon, { className: "w-5 h-5" })}
//                 {label}
//               </div>
//             </Tab>
//           ))}
//           <span
//             className="flex gap-1 mr-5 cursor-pointer ml-5 items-center"
//             onClick={logout}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6 text-gray-800"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
//               ></path>
//               <circle cx="12" cy="7" r="4"></circle>
//             </svg>{" "}
//             Logout
//           </span>
//         </TabsHeader>
//       </div>
//       <div className=" p-4 rounded-lg shadow-lg max-w-[80%] ml-20 mt-6">
//         <TabsBody>
//           {data.map(({ value, desc }) => (
//             <TabPanel key={value} value={value}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
//                 {desc}
//               </div>
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </div>
//     </Tabs>
//   );
// }





// #2

import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import ImgCrop from "antd-img-crop";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import {
  Row,
  Col,
  Upload,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  message,
  TreeSelect,
} from "antd";
import Item from "antd/es/list/Item";

const ItemCard = (itemName, value, imageUrl, description, key) => {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            dsfdf
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Claim
        </Button>
      </CardFooter>
    </Card>
  );
};
function ClaimPopup({ visible, onClose, onClaimSubmit, itemId }) {
  const [studentName, setStudentName] = useState("");
  const [idCardImage, setIdCardImage] = useState(null);
  const [proofImage, setProofImage] = useState(null);

  const handleSubmit = async () => {
    try {
      // Prepare the data and send it to the server
      const formData = new FormData();
      formData.append("studentName", studentName);
      formData.append("idCardImage", idCardImage);
      formData.append("proofImage", proofImage);
      formData.append("itemId", itemId); // Include the item ID

      // Send the formData to the backend
      const response = await axios.post(
        "http://localhost:3000/claim",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data saved successfully:", response.data);
      message.success("Data saved successfully");

      // Call the onClaimSubmit function and pass the formData
      // onClaimSubmit(formData);

      // Reset form fields
      setStudentName("");
      setIdCardImage(null);
      setProofImage(null);

      // Close the popup
      onClose();
    } catch (error) {
      console.error("Error saving data:", error);
      message.error("Error saving data");
    }
  };

  return (
    <div className={`claim-popup ${visible ? "show" : ""}`}>
      <div className="claim-popup-content">
        <h2>Claim this item</h2>
        <label className="block">
          Student Name:
          <input
            type="text"
            className="border ml-2 px-2 py-1"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </label>
        <label>
          ID Card Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setIdCardImage(e.target.files[0])}
          />
        </label>
        <label>
          Proof Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProofImage(e.target.files[0])}
          />
        </label>
        <div className="flex justify-between pt-2">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Client() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }

    if (localStorage.getItem("email")) {
      if (localStorage.user_type === "student") {
        navigate("/client");
      } else {
        navigate("/admin");
      }
    }
  }, [navigate]);

  // const [claimPopupVisible, setClaimPopupVisible] = useState(false);
  const [claimPopupStates, setClaimPopupStates] = useState({});
  const [claimingItemId, setClaimingItemId] = useState(null);

  const handleClaimSubmit = (formData) => {
    // Send the formData to your server
    // Include the item ID for the submitted claim
    formData.append("itemId", claimingItemId);

    // You can use Axios or another library to make the POST request
    // Close the popup
    // setClaimPopupVisible(false);
  };
  // const [showPopup, setShowPopup] = useState(false);

  // const handleClaimClick = () => {
  //   setShowPopup(true);
  // };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };

  // const handleClaimSubmit = () => {
  //   setShowPopup(false);
  //   // Handle submission logic as needed
  // };

  const [foundItems, setFoundItems] = useState([]);

  const loadfounditems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/found-items");
      setFoundItems(response.data);
    } catch (error) {
      console.error("Error loading found items:", error);
    }
  };

  const [claimItems, setClaimItems] = useState([]);

  const loadClaimedItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/claimed-items");
      setClaimItems(response.data);
    } catch (error) {
      console.error("Error loading claim items:", error);
    }
  };

  useEffect(() => {
    loadfounditems();
    loadClaimedItems();
  }, []);

  const [lostitems, setLostItems] = useState([]);

  const loadlostItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/lost-items");
      setLostItems(response.data);
    } catch (error) {
      console.error("Error loading found items:", error);
    }
  };

  useEffect(() => {
    loadlostItems();
  }, []);

  const [myitems, setMyItems] = useState([]);

  const loadMyItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/my-items?id=${localStorage.getItem("id")}`);
      setMyItems(response.data);
    } catch (error) {
      console.error("Error loading my items:", error);
    }
  };

  useEffect(() => {
    loadMyItems();
  }, []);

  const handleFormSubmit = async (values) => {
    try {
      // Create a FormData object to collect form data and files
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("value", values.value);
      formData.append("Status", values.Status);
      // formData.append("Category", values.Category);
      formData.append("date", values.date.toISOString()); // Convert date to ISO string
      formData.append("blockname", values.blockname);
      formData.append("roomnumber", values.roomnumber);
      formData.append("Floor", values.Floor);
      formData.append("description", values.description);
      formData.append("id", localStorage.getItem("id"));
      fileList.forEach((file) => {
        formData.append("image", file.originFileObj);
      });

      // Make an Axios POST request to the server
      const response = await axios.post(
        "http://localhost:3000/save-form-data",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      console.log("Data saved successfully:", response.data);
      message.success("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
      message.error("Error saving data");
    }
  };

  const logout = async () => {
    localStorage.removeItem("email");
    localStorage.removeItem("user_type");
    localStorage.removeItem("id");
    navigate("/login");
  };

  const disabledDate = (current) => {
    // Disable dates after today
    return current && current > moment().endOf("day");
};
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

  const data = [
    {
      label: "Found Items",
      value: "dashboard",
      icon: FaceSmileIcon,
      desc: foundItems.map((item, index) => {
        const image = item.image_path;
        return (
          <Card className="w-96" key={index}>
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Item Name : {item.item_name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                 Value : {item.item_value} rs
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Description : {item.item_description}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-2">
                Submitted By : {item.user_type === 'admin' ? item.Email : item.srn}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-2">
                Contact # : {item.phone}
              </Typography>
            </CardBody>

            <CardFooter className="pt-0">
              {claimItems.some(
                (claimItem) => claimItem.lost_item_id === item.item_id
              ) ? (
                <Button
                  disabled
                  ripple={false}
                  fullWidth={true}
                  className={`${
                    item.status === 'Approved'
                        ? 'bg-green-900 text-white'
                        : 'bg-blue-900 text-white shadow-none cursor-not-allowed'
                }`}
                >
                  Claimed { item.status }
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    console.log("Claim button clicked for item:", item);
                    setClaimingItemId(item.item_id);

                    // Set the claimPopupVisible state for the specific item
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: true,
                    }));
                  }}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Claim
                </Button>
              )}
              {claimPopupStates[item.item_id] && (
                <ClaimPopup
                  visible={claimPopupStates[item.item_id]}
                  onClose={() => {
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: false,
                    }));
                    // Additional logic if needed
                  }}
                  onClaimSubmit={handleClaimSubmit}
                  itemId={claimingItemId}
                />
              )}
            </CardFooter>
          </Card>
        );
      }),
    },
    {
      label: "Lost Items",
      value: "lostitems",
      icon: FaceFrownIcon,
      desc: lostitems.map((item, index) => {
        const image = item.image_path;
        return (
          <Card className="w-96" key={index}>
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Item Name : {item.item_name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                 Value : {item.item_value} rs
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Description : {item.item_description}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-2">
                Submitted By : {item.user_type === 'admin' ? item.Email : item.srn}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-2">
                Contact # : {item.phone}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              {claimItems.some(
                (claimItem) => claimItem.lost_item_id === item.item_id
              ) ? (
                <Button
                  disabled
                  ripple={false}
                  fullWidth={true}
                  className={`${
                    item.status === 'Approved'
                        ? 'bg-green-900 text-white'
                        : 'bg-blue-900 text-white shadow-none cursor-not-allowed'
                }`}
                >
                  Claimed - {item.status}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    console.log("Claim button clicked for item:", item);
                    setClaimingItemId(item.item_id);

                    // Set the claimPopupVisible state for the specific item
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: true,
                    }));
                  }}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Claim
                </Button>
              )}
              {claimPopupStates[item.item_id] && (
                <ClaimPopup
                  visible={claimPopupStates[item.item_id]}
                  onClose={() => {
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: false,
                    }));
                    // Additional logic if needed
                  }}
                  onClaimSubmit={handleClaimSubmit}
                  itemId={claimingItemId}
                />
              )}
            </CardFooter>
          </Card>
        );
      }),
    },
    {
      label: "My Items",
      value: "myitems",
      icon: FaceSmileIcon,
      desc: myitems.map((item, index) => {
        const image = item.image_path;
        return (
          <Card className="w-96" key={index}>
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {item.item_name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {item.item_value} 
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {item.item_description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              {claimItems.some(
                (claimItem) => claimItem.lost_item_id === item.item_id
              ) ? (
                <Button
                  disabled
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-900 text-white shadow-none cursor-not-allowed"
                >
                  Claimed
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    console.log("Claim button clicked for item:", item);
                    setClaimingItemId(item.item_id);

                    // Set the claimPopupVisible state for the specific item
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: true,
                    }));
                  }}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  reported
                </Button>
              )}
              {/* {claimPopupStates[item.item_id] && (
                <ClaimPopup
                  visible={claimPopupStates[item.item_id]}
                  onClose={() => {
                    setClaimPopupStates((prevState) => ({
                      ...prevState,
                      [item.item_id]: false,
                    }));
                    // Additional logic if needed
                  }}
                  onClaimSubmit={handleClaimSubmit}
                  itemId={claimingItemId}
                />
              )} */}
            </CardFooter>
          </Card>
        );
      }),
    },
    {
      label: "Report new Items",
      value: "report",
      icon: FaceFrownIcon,
      desc: (
        <div className="flex items-center justify-center h-screen">
          <Form layout="vertical" onFinish={handleFormSubmit}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Item Name"
                  rules={[
                    {
                      required: true,
                      message: "Please type the item name",
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
                      message: "Please enter Value",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
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
                      message: "Please select an Status",
                    },
                  ]}
                >
                  <Select placeholder="Please select an Status" size="large">
                    <Option value="Found">Found</Option>
                    <Option value="Lost">Lost</Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* <Col span={12}>
                <Form.Item
                  name="Category"
                  label="Category"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the category",
                    },
                  ]}
                >
                  <Select placeholder="Please choose the category" size="large">
                    <Option value="Mobile">Select an option</Option>
                  </Select>
                </Form.Item>
              </Col> */}
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="date"
                  label="Date"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the dateTime",
                    },
                  ]}
                >
                  <DatePicker
                    size="large"
                    style={{
                      width: "100%",
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
                      message: "Please enter the Block Name",
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
                      message: "Please enter the Room Number",
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
                      message: "Please enter the Floor",
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
                      message: "please enter url description",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="Image"
                  label="Image(image type: jpeg, png, jpg)"
                  rules={[
                    {
                      required: false,
                      message: "please enter url description",
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
                      {fileList.length < 1 && "+ Upload"}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];
  return (
    <Tabs value="dashboard">
      <div className="p-4 rounded-lg shadow-lg max-w-[80%] ml-20">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
          <span
            className="flex gap-1 mr-5 cursor-pointer ml-5 items-center"
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              ></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>{" "}
            Logout
          </span>
        </TabsHeader>
      </div>
      <div className=" p-4 rounded-lg shadow-lg max-w-[80%] ml-20 mt-6">
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {desc}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </div>
    </Tabs>
  );
}

