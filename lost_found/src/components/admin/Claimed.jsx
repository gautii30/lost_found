// import React, { useState, useEffect } from "react";
// import { Table, Input, message } from "antd";
// import { Chip } from "@material-tailwind/react";
// import axios from "axios";

// const { Search } = Input;

// const Claimed = () => {
//   const [search, setSearch] = useState("");
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [claimeditems, setClaimeditems] = useState([]);

//   const loadClaimedItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/claimed-items");
//       console.log(response.data);
//       setClaimeditems(response.data);
//     } catch (error) {
//       console.error("Error loading claimed items:", error);
//       // Handle the error, e.g., show an error message to the user
//     }
//   };

//   const updateStatus = async (record) => {
//     if(record.status === 'Pending') {
//       record.status = 'Approved'
//     } else {
//       record.status = 'Pending'
//     }
//       const response = await axios.put(
//         `http://localhost:3000/update-claimed-status/${record.key}`,{
//         status : record.status
//       },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Data saved successfully:", response.data);
//       message.success("Status updated successfully");

//       const claimsData = await axios.get("http://localhost:3000/claimed-items");
//       setClaimeditems(claimsData.data);
//   };

//   useEffect(() => {
//     loadClaimedItems();
//   }, []);

//   useEffect(() => {
//     // Map claimeditems to TABLE_ROWS when claimeditems change
//     setTABLE_ROWS(
//       claimeditems.map((item) => ({
//         key: item.lost_item_id,
//         claimpersonname: item.claimed_person_name,
//         date: item.claimed_date,
//         status: item.status,
//         IdCardImage: item.id_card_image,
//         image: item.proof_image,
//       }))
//     );
//   }, [claimeditems]);

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.claimpersonname.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: "Claimed Item ID",
//       dataIndex: "key",
//       key: "key",
//     },
//     {
//       title: "Claimed Person Name",
//       dataIndex: "claimpersonname",
//       key: "claimpersonname",
//     },
//     {
//       title: "Claimed Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (text, record) => (
//         <div onClick={() => updateStatus(record)} style={{ cursor: 'pointer' }}>
//           <Chip color={record.status === 'Pending' ? 'blue' : 'green'} value={record.status} />
//         </div>
//       ),
//     },
//     {
//       title: "ID Card Image",
//       dataIndex: "IdCardImage",
//       key: "IdCardImage",
//       render: (image) => (
//         <img
//           src={image}
//           alt="ID Card Image"
//           style={{ width: "50px", height: "50px" }}
//         />
//       ),
//     },
//     {
//       title: "Proof Image",
//       dataIndex: "image",
//       key: "image",
//       render: (image) => (
//         <img
//           src={image}
//           alt="Proof Image"
//           style={{ width: "50px", height: "50px" }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Claimed Items</h1>
//         <Search
//           placeholder="Search by name..."
//           onSearch={(value) => setSearch(value)}
//           className="max-w-lg rounded-lg mr-5"
//         />
//       </div>

//       <div className="rounded-lg shadow-md mt-5">
//         <Table columns={columns} dataSource={filteredData} />
//       </div>
//     </div>
//   );
// };

// export default Claimed;

// import React, { useState, useEffect } from "react";
// import { Table, Input, message, Modal } from "antd";
// import { Chip } from "@material-tailwind/react";
// import axios from "axios";

// const { Search } = Input;

// const Claimed = () => {
//   const [search, setSearch] = useState("");
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [claimeditems, setClaimeditems] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [enlargedImageUrl, setEnlargedImageUrl] = useState("");

//   const loadClaimedItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/claimed-items");
//       console.log(response.data);
//       setClaimeditems(response.data);
//     } catch (error) {
//       console.error("Error loading claimed items:", error);
//     }
//   };

//   const updateStatus = async (record) => {
//     // ... (previous code)
//   };

//   useEffect(() => {
//     loadClaimedItems();
//   }, []);

//   useEffect(() => {
//     setTABLE_ROWS(
//       claimeditems.map((item) => ({
//         key: item.lost_item_id,
//         claimpersonname: item.claimed_person_name,
//         date: item.claimed_date,
//         status: item.status,
//         IdCardImage: item.id_card_image,
//         image: item.proof_image,
//       }))
//     );
//   }, [claimeditems]);

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.claimpersonname.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleImageClick = (imageUrl) => {
//     setEnlargedImageUrl(imageUrl);
//     setModalVisible(true);
//   };

//   const columns = [
//     {
//       title: "Claimed Item ID",
//       dataIndex: "key",
//       key: "key",
//     },
//     {
//       title: "Claimed Person Name",
//       dataIndex: "claimpersonname",
//       key: "claimpersonname",
//     },
//     {
//       title: "Claimed Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (text, record) => (
//         <div onClick={() => updateStatus(record)} style={{ cursor: 'pointer' }}>
//           <Chip color={record.status === 'Pending' ? 'blue' : 'green'} value={record.status} />
//         </div>
//       ),
//     },
//     {
//       title: "ID Card Image",
//       dataIndex: "IdCardImage",
//       key: "IdCardImage",
//       render: (image) => (
//         <img
//           src={image}
//           alt="ID Card Image"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => handleImageClick(image)}
//         />
//       ),
//     },
//     {
//       title: "Proof Image",
//       dataIndex: "image",
//       key: "image",
//       render: (image) => (
//         <img
//           src={image}
//           alt="Proof Image"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => handleImageClick(image)}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Claimed Items</h1>
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

// export default Claimed;

// import React, { useState, useEffect } from "react";
// import { Table, Input, message, Modal } from "antd";
// import { Chip } from "@material-tailwind/react";
// import axios from "axios";

// const { Search } = Input;

// const Claimed = () => {
//   const [search, setSearch] = useState("");
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [claimeditems, setClaimeditems] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const loadClaimedItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/claimed-items");
//       setClaimeditems(response.data);
//     } catch (error) {
//       console.error("Error loading claimed items:", error);
//     }
//   };

//   const updateStatus = async (record) => {
//     try {
//       const newStatus = record.status === "Pending" ? "Approved" : "Pending";
//       await axios.put(
//         `http://localhost:3000/update-claimed-status/${record.key}`,
//         {
//           status: newStatus,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       message.success("Status updated successfully");
  
//       // Update the local state with the new status
//       setClaimeditems((prevItems) =>
//         prevItems.map((item) =>
//           item.lost_item_id === record.key
//             ? { ...item, status: newStatus }
//             : item
//         )
//       );
//     } catch (error) {
//       console.error("Error updating status:", error);
//       message.error("Failed to update status");
//     }
//   };
  

//   useEffect(() => {
//     loadClaimedItems();
//   }, []);

//   useEffect(() => {
//     setTABLE_ROWS(
//       claimeditems.map((item) => ({
//         item_name: item.item_name,
//         claimpersonname: item.claimed_person_name,
//         date: item.claimed_date,
//         status: item.status,
//         IdCardImage: item.id_card_image,
//         image: item.proof_image,
//       }))
//     );
//   }, [claimeditems]);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.claimpersonname.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: "Claimed Item",
//       dataIndex: "item_name",
//       key: "item_name",
//     },
//     {
//       title: "Claimed Person Name",
//       dataIndex: "claimpersonname",
//       key: "claimpersonname",
//     },
//     {
//       title: "Claimed Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (text, record) => (
//         <div onClick={() => updateStatus(record)} style={{ cursor: "pointer" }}>
//           <Chip color={record.status === "Pending" ? "blue" : "green"} value={record.status} />
//         </div>
//       ),
//     },
//     {
//       title: "ID Card Image",
//       dataIndex: "IdCardImage",
//       key: "IdCardImage",
//       render: (image) => (
//         <img
//           src={image}
//           alt="ID Card Image"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => handleImageClick(image)}
//         />
//       ),
//     },
//     {
//       title: "Proof Image",
//       dataIndex: "image",
//       key: "image",
//       render: (image) => (
//         <img
//           src={image}
//           alt="Proof Image"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => handleImageClick(image)}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Claimed Items</h1>
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
//         title="Enlarged Image"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         {selectedImage && <img src={selectedImage} alt="Enlarged Image" />}
//       </Modal>
//     </div>
//   );
// };

// export default Claimed;






// CODE FOR STATUS APPROVED - this is the code we showed to ma'am first



import React, { useState, useEffect } from "react";
import { Table, Input, message, Modal } from "antd";
import { Chip } from "@material-tailwind/react";
import axios from "axios";

const { Search } = Input;

const Claimed = () => {
  const [search, setSearch] = useState("");
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [claimeditems, setClaimeditems] = useState([]);
  const [enlargedImageUrl, setEnlargedImageUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const loadClaimedItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/claimed-items");
      setClaimeditems(response.data);
    } catch (error) {
      console.error("Error loading claimed items:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const updateStatus = async (record) => {
    const newStatus = record.status === "Pending" ? "Approved" : "Pending";

    try {
      const response = await axios.put(
        `http://localhost:3000/update-claimed-status/${record.key}`,
        {
          status: newStatus,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Data saved successfully:", response.data);
      message.success("Status updated successfully");

      // Reload claimed items after updating status
      loadClaimedItems();
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    loadClaimedItems();
  }, []);

  useEffect(() => {
    // Map claimeditems to TABLE_ROWS when claimeditems change
    setTABLE_ROWS(
      claimeditems.map((item) => {
        const dateObject = new Date(item.claimed_date);
        const year = dateObject.getFullYear();
        const month = `0${dateObject.getMonth() + 1}`.slice(-2);
        const day = `0${dateObject.getDate()}`.slice(-2);
        const formattedDate = `${year}-${month}-${day}`;
  
        return {
          key: item.lost_item_id,
          item_name: item.item_name,
          claimpersonname: item.claimed_person_name,
          date: formattedDate,
          status: item.status,
          IdCardImage: item.id_card_image,
          image: item.proof_image,
        };
      })
    );
  }, [claimeditems]);

  const filteredData = TABLE_ROWS.filter((item) => {
    return item.claimpersonname.toLowerCase().includes(search.toLowerCase());
  });

  const columns = [
    {
      title: "Claimed Item",
      dataIndex: "item_name",
      key: "item_name",
    },
    {
      title: "Claimed Person Name",
      dataIndex: "claimpersonname",
      key: "claimpersonname",
    },
    {
      title: "Claimed Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div onClick={() => updateStatus(record)} style={{ cursor: 'pointer' }}>
          <Chip color={record.status === 'Pending' ? 'blue' : 'green'} value={record.status} />
        </div>
      ),
    },
    {
      title: "ID Card Image",
      dataIndex: "IdCardImage",
      key: "IdCardImage",
      render: (image) => (
        <img
          src={image}
          alt="ID Card Image"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={() => {
            setEnlargedImageUrl(image);
            setModalVisible(true);
          }}
        />
      ),
    },
    {
      title: "Proof Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Proof Image"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={() => {
            setEnlargedImageUrl(image);
            setModalVisible(true);
          }}
        />
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Claimed Items</h1>
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

export default Claimed;

// code with delete functionality 

// import React, { useState, useEffect } from "react";
// import { Table, Input, message } from "antd";
// import { Chip } from "@material-tailwind/react";
// import axios from "axios";

// const { Search } = Input;

// const Claimed = () => {
//   const [search, setSearch] = useState("");
//   const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
//   const [claimeditems, setClaimeditems] = useState([]);

//   const loadClaimedItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/claimed-items");
//       console.log(response.data);
//       setClaimeditems(response.data);
//     } catch (error) {
//       console.error("Error loading claimed items:", error);
//       // Handle the error, e.g., show an error message to the user
//     }
//   };

//   const updateStatus = async (record) => {
//     if(record.status === 'Pending') {
//       record.status = 'Approved'
//     } else {
//       record.status = 'Pending'
//     }
//       const response = await axios.put(
//         `http://localhost:3000/update-claimed-status/${record.key}`,{
//         status : record.status
//       },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Data saved successfully:", response.data);
//       message.success("Status updated successfully");

//       const claimsData = await axios.get("http://localhost:3000/claimed-items");
//       setClaimeditems(claimsData.data);
//   };

//   useEffect(() => {
//     loadClaimedItems();
//   }, []);

//   useEffect(() => {
//     // Map claimeditems to TABLE_ROWS when claimeditems change
//     setTABLE_ROWS(
//       claimeditems.map((item) => ({
//         item_name: item.item_name,
//         claimpersonname: item.claimed_person_name,
//         date: item.claimed_date,
//         status: item.status,
//         IdCardImage: item.id_card_image,
//         image: item.proof_image,
//       }))
//     );
//   }, [claimeditems]);

//   const filteredData = TABLE_ROWS.filter((item) => {
//     return item.claimpersonname.toLowerCase().includes(search.toLowerCase());
//   });

//   const columns = [
//     {
//       title: "Claimed Item",
//       dataIndex: "item_name",
//       key: "item_name",
//     },
//     {
//       title: "Claimed Person Name",
//       dataIndex: "claimpersonname",
//       key: "claimpersonname",
//     },
//     {
//       title: "Claimed Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (text, record) => (
//         <div onClick={() => updateStatus(record)} style={{ cursor: 'pointer' }}>
//           <Chip color={record.status === 'Pending' ? 'blue' : 'green'} value={record.status} />
//         </div>
//       ),
//     },
//     {
//       title: "ID Card Image",
//       dataIndex: "IdCardImage",
//       key: "IdCardImage",
//       render: (image) => (
//         <img
//           src={image}
//           alt="ID Card Image"
//           style={{ width: "50px", height: "50px" }}
//         />
//       ),
//     },
//     {
//       title: "Proof Image",
//       dataIndex: "image",
//       key: "image",
//       render: (image) => (
//         <img
//           src={image}
//           alt="Proof Image"
//           style={{ width: "50px", height: "50px" }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="max-w-screen mx-auto bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Claimed Items</h1>
//         <Search
//           placeholder="Search by name..."
//           onSearch={(value) => setSearch(value)}
//           className="max-w-lg rounded-lg mr-5"
//         />
//       </div>

//       <div className="rounded-lg shadow-md mt-5">
//         <Table columns={columns} dataSource={filteredData} />
//       </div>
//     </div>
//   );
// };

// export default Claimed;
