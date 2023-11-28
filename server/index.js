// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql2");
// const multer = require('multer');
// const { format } = require('date-fns');

// const path = require('path');
// var uuid = require('uuid');
// var fs = require('fs');

// app.use(express.static(path.join(__dirname, "public")));
// app.use('/uploads', express.static(__dirname + '/uploads'));

// const imageStorage = multer.diskStorage({
//   destination: "uploads/",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const uploadSingleImage = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).single("image");

// const uploadMultipleImages = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).fields([
//   { name: 'idCardImage', maxCount: 1 },
//   { name: 'proofImage', maxCount: 1 }
// ]);

// function checkImageFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (!mimetype && !extname) return cb(new Error('Invalid image file type'));
//   cb(null, true);
// }

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "lost_found_project",
// });

// // Check database connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database');
//     connection.release(); // Release the connection
//   }
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.get("/", (req, res) => {
//   res.send("welcome to application")
// });


// app.post("/login", (req, res) => {
//   const { email, srn, password } = req.body;
//   let sqlQuery, creds = '';
//   if (email) {
//     sqlQuery = "SELECT email,password,user_type FROM users where Email=? AND Password=?";
//   }
//   if (srn) {
//     sqlQuery = "SELECT email,password,user_type FROM users where SRN=? AND Password=?";
//   }

//   if (srn) creds = srn;
//   if (email) creds = email;

//   db.query(sqlQuery, [creds, password], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.post('/signup', (req, res) => {
//   console.log('signup requested')
//   const { username, email, password, phone, user_type, srn } = req.body;

//   // Insert data into the 'users' table
//   const insertQuery = 'INSERT INTO users (SRN, User_name, Email, Password, phone, user_type) VALUES (?, ?, ?, ?, ?, ?)';

//   db.query(insertQuery, [srn, username, email, password, phone, user_type], (err, results) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       res.status(201).json({ message: 'Signup successful' });
//     }
//   });
// });


// app.get("/login", (req, res) => {
//   res.send("login get");
// });






// app.get("/founds", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS found_item_count
//     FROM items
//     WHERE lost_found_select = 'found';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const foundItemCount = result[0].found_item_count;
//       res.json({ found_item_count: foundItemCount });
//     }
//   });
// });
// app.get("/losts", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS lost_item_count
//     FROM items
//     WHERE lost_found_select = 'lost';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting lost items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const lostItemCount = result[0].lost_item_count;
//       res.json({ lost_item_count: lostItemCount });
//     }
//   });
// });











// app.get("/found-items", (req, res) => {
//   const sqlQuery = `
//   SELECT
//   i.item_id,
//   i.item_name,
//   i.item_description,
//   i.category,
//   i.item_value,
//   i.item_date_upload,
//   i.lost_found_select,
//   i.image_path
// FROM
//   items AS i 
// WHERE
//   i.lost_found_select = 'Found';

//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get("/lost-items", (req, res) => {
//   const sqlQuery = `
//   SELECT
//   i.item_id,
//   i.item_name,
//   i.item_description,
//   i.category,
//   i.item_value,
//   i.item_date_upload,
//   i.lost_found_select,
//   i.image_path
// FROM
//   items AS i 
// WHERE
//   i.lost_found_select = 'Lost';

//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });


// // app.get("/claimed-items", (req, res) => {
// //   const sqlQuery = `
// //   SELECT * from claims
// //   `;

// //   db.query(sqlQuery, (err, results) => {
// //     if (err) {
// //       console.error("Error selecting claimed items:", err);
// //       res.status(500).json({ error: "Server error" });
// //     } else {
// //       res.json(results);
// //     }
// //   });
// // });




// app.post('/save-form-data', uploadSingleImage, (req, res) => {
//   const {
//     name,
//     value,
//     Status,
//     Category,
//     date,
//     blockname,
//     roomnumber,
//     Floor,
//     description,
//   } = req.body;

//   // Convert the date to a JavaScript Date object
//   const formattedDate = format(new Date(date), 'yyyy-MM-dd');

//   const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO items (item_name, item_description, category, item_value, item_date_upload, lost_found_select, image_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
//         [name, description, Category, value, formattedDate, Status, imagePath],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             // Insert the uploaded images into the images table
//             const itemId = result.insertId; // Get the ID of the newly inserted item

//             // Insert block information into the block table
//             connection.query(
//               'INSERT INTO block (block_name, room_no, floor_no, item_id) VALUES (?, ?, ?, ?)',
//               [blockname, roomnumber, Floor, itemId],
//               (err, blockResult) => {
//                 if (err) {
//                   console.error('Error inserting block information:', err);
//                 }
//               }
//             );

//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// // POST endpoint to accept claims
// app.post('/claim', uploadMultipleImages, async (req, res) => {
//   const studentName = req.body.studentName;
//   const itemId = req.body.itemId
//   const idCardImage = req.files.idCardImage[0].filename;
//   const proofImage = req.files.proofImage[0].filename;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Get the file paths
//       const idCardImagePath = `${req.protocol}://${req.get('host')}/uploads/${idCardImage}`;
//       const proofImagePath = `${req.protocol}://${req.get('host')}/uploads/${proofImage}`;
//       const formattedDate = format(new Date(), 'yyyy-MM-dd');

//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO claims (lost_item_id, claimed_person_name, claimed_date, id_card_image, proof_image, status) VALUES (?, ?, ?, ?, ?, ?)',
//         [itemId, studentName, formattedDate, idCardImagePath, proofImagePath, 'Pending'],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {


//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });


// });
// app.get('/claimed-items', (req, res) => {
//   // const sql = `
//   // SELECT lost_item_id, claimed_person_name, id_card_image, proof_image, status, claimed_date
//   // FROM claims
//   // `;
  
//   const sql = `SELECT c.lost_item_id, c.claimed_person_name, c.id_card_image, c.proof_image, c.status, c.claimed_date, i.item_name
//   FROM claims c JOIN items i ON c.lost_item_id = i.item_id`;
  
//   db.query(sql, async (err, results) => {
//   if (err) {
//   console.error('Error fetching claimed items:', err);
//   res.sendStatus(500);
//   } else {
//   res.json(results);
//   }
//   });
// });

// app.put('/update-claimed-status/:itemId', async (req, res) => {
//   const itemId = req.params.itemId;
//   const newStatus = req.body.status;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Update the status in the claims table based on the item_id
//       connection.query(
//         'UPDATE claims SET status = ? WHERE lost_item_id = ?',
//         [newStatus, itemId],
//         (err, result) => {
//           if (err) {
//             console.error('Error updating status:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             res.status(200).json({ message: 'Status updated successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql2");
// const multer = require('multer');
// const { format } = require('date-fns');

// const path = require('path');
// var uuid = require('uuid');
// var fs = require('fs');

// app.use(express.static(path.join(__dirname, "public")));
// app.use('/uploads', express.static(__dirname + '/uploads'));

// const imageStorage = multer.diskStorage({
//   destination: "uploads/",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const uploadSingleImage = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).single("image");

// const uploadMultipleImages = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).fields([
//   { name: 'idCardImage', maxCount: 1 },
//   { name: 'proofImage', maxCount: 1 }
// ]);

// function checkImageFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (!mimetype && !extname) return cb(new Error('Invalid image file type'));
//   cb(null, true);
// }

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "lost_found_project",
// });

// // Check database connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database');
//     connection.release(); // Release the connection
//   }
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("welcome to application")
// });

// app.post("/login", (req, res) => {
//   const { email, srn, password } = req.body;
//   let sqlQuery, creds = '';
//   if (email) {
//     sqlQuery = "SELECT email,password,user_type FROM users where Email=? AND Password=?";
//   }
//   if (srn) {
//     sqlQuery = "SELECT email,password,user_type FROM users where SRN=? AND Password=?";
//   }

//   if (srn) creds = srn;
//   if (email) creds = email;

//   db.query(sqlQuery, [creds, password], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.post('/signup', (req, res) => {
//   console.log('signup requested')
//   const { username, email, password, phone, user_type, srn } = req.body;

//   // Insert data into the 'users' table
//   const insertQuery = 'INSERT INTO users (SRN, User_name, Email, Password, phone, user_type) VALUES (?, ?, ?, ?, ?, ?)';

//   db.query(insertQuery, [srn, username, email, password, phone, user_type], (err, results) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       res.status(201).json({ message: 'Signup successful' });
//     }
//   });
// });

// app.get("/login", (req, res) => {
//   res.send("login get");
// });

// app.get("/founds", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS found_item_count
//     FROM items
//     WHERE lost_found_select = 'found';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const foundItemCount = result[0].found_item_count;
//       res.json({ found_item_count: foundItemCount });
//     }
//   });
// });

// app.get("/losts", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS lost_item_count
//     FROM items
//     WHERE lost_found_select = 'lost';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting lost items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const lostItemCount = result[0].lost_item_count;
//       res.json({ lost_item_count: lostItemCount });
//     }
//   });
// });

// app.get("/found-items", (req, res) => {
//   const sqlQuery = `
//     SELECT
//     i.item_id,
//     i.item_name,
//     i.item_description,
//     i.item_value,
//     i.item_date_upload,
//     i.lost_found_select,
//     i.image_path
//   FROM
//     items AS i 
//   WHERE
//     i.lost_found_select = 'Found';
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get("/lost-items", (req, res) => {
//   const sqlQuery = `
//     SELECT
//     i.item_id,
//     i.item_name,
//     i.item_description,
//     i.item_value,
//     i.item_date_upload,
//     i.lost_found_select,
//     i.image_path
//   FROM
//     items AS i 
//   WHERE
//     i.lost_found_select = 'Lost';
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.post('/save-form-data', uploadSingleImage, (req, res) => {
//   const {
//     name,
//     value,
//     Status,
//     date,
//     blockname,
//     roomnumber,
//     Floor,
//     description,
//   } = req.body;

//   // Convert the date to a JavaScript Date object
//   const formattedDate = format(new Date(date), 'yyyy-MM-dd');

//   const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO items (item_name, item_description, item_value, item_date_upload, lost_found_select, image_path) VALUES (?, ?, ?, ?, ?, ?)',
//         [name, description, value, formattedDate, Status, imagePath],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             // Insert the uploaded images into the images table
//             const itemId = result.insertId; // Get the ID of the newly inserted item

//             // Insert block information into the block table
//             connection.query(
//               'INSERT INTO block (block_name, room_no, floor_no, item_id) VALUES (?, ?, ?, ?)',
//               [blockname, roomnumber, Floor, itemId],
//               (err, blockResult) => {
//                 if (err) {
//                   console.error('Error inserting block information:', err);
//                 }
//               }
//             );

//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.post('/claim', uploadMultipleImages, async (req, res) => {
//   const studentName = req.body.studentName;
//   const itemId = req.body.itemId
//   const idCardImage = req.files.idCardImage[0].filename;
//   const proofImage = req.files.proofImage[0].filename;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Get the file paths
//       const idCardImagePath = `${req.protocol}://${req.get('host')}/uploads/${idCardImage}`;
//       const proofImagePath = `${req.protocol}://${req.get('host')}/uploads/${proofImage}`;
//       const formattedDate = format(new Date(), 'yyyy-MM-dd');

//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO claims (lost_item_id, claimed_person_name, claimed_date, id_card_image, proof_image, status) VALUES (?, ?, ?, ?, ?, ?)',
//         [itemId, studentName, formattedDate, idCardImagePath, proofImagePath, 'Pending'],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.get('/claimed-items', (req, res) => {
//   const sql = `SELECT c.lost_item_id, c.claimed_person_name, c.id_card_image, c.proof_image, c.status, c.claimed_date, i.item_name
//     FROM claims c JOIN items i ON c.lost_item_id = i.item_id`;
  
//   db.query(sql, async (err, results) => {
//     if (err) {
//       console.error('Error fetching claimed items:', err);
//       res.sendStatus(500);
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.put('/update-claimed-status/:itemId', async (req, res) => {
//   const itemId = req.params.itemId;
//   const newStatus = req.body.status;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Update the status in the claims table based on the item_id
//       connection.query(
//         'UPDATE claims SET status = ? WHERE lost_item_id = ?',
//         [newStatus, itemId],
//         (err, result) => {
//           if (err) {
//             console.error('Error updating status:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             res.status(200).json({ message: 'Status updated successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.get("/item-timestamps", (req, res) => {
//   const sqlQuery = `
//     SELECT
//       log_id,
//       action_timestamp
//     FROM
//       item_log;
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error fetching item timestamps:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/activity-days/:type', async (req, res) => {
//   const itemType = req.params.type;
//   let sql;

//   if (itemType === 'Claims') {
//     res.json({});  // No need to calculate activity days for claims
//     return;
//   }

//   try {
//     // Print or log the SQL query
//     sql = `
//       SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
//       FROM items
//       WHERE lost_found_select = ?
//     `;
  
//     db.query(sql, [itemType], (err, results) => {
//       if (err) {
//         console.error('Error executing SQL query:', err);
//         res.sendStatus(500);
//       } else {
//         const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
//         res.json(activityDaysMap);
//       }
//     });
//   } catch (error) {
//     console.error('Error in /activity-days endpoint:', error);
//     res.sendStatus(500);
//   }
// });

// app.get('/activity-days/:type', async (req, res) => {
//   const itemType = req.params.type;

//   if (itemType === 'Claims') {
//     res.json({});  // No need to calculate activity days for claims
//     return;
//   }

//   try {
//     const sql = `
//       SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
//       FROM items
//       WHERE lost_found_select = ?
//     `;
  
//     db.query(sql, [itemType], (err, results) => {
//       if (err) {
//         console.error('Error executing SQL query:', err);
//         res.sendStatus(500);
//       } else {
//         const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
//         res.json(activityDaysMap);
//       }
//     });
//   } catch (error) {
//     console.error('Error in /activity-days endpoint:', error);
//     res.sendStatus(500);
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql2");
// const multer = require('multer');
// const { format } = require('date-fns');

// const path = require('path');
// var uuid = require('uuid');
// var fs = require('fs');

// app.use(express.static(path.join(__dirname, "public")));
// app.use('/uploads', express.static(__dirname + '/uploads'));

// const imageStorage = multer.diskStorage({
//   destination: "uploads/",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const uploadSingleImage = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).single("image");

// const uploadMultipleImages = multer({
//   storage: imageStorage,
//   fileFilter: function (req, file, cb) {
//     checkImageFileType(file, cb);
//   }
// }).fields([
//   { name: 'idCardImage', maxCount: 1 },
//   { name: 'proofImage', maxCount: 1 }
// ]);

// function checkImageFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (!mimetype && !extname) return cb(new Error('Invalid image file type'));
//   cb(null, true);
// }

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "lost_found_project",
// });

// // Check database connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database');
//     connection.release(); // Release the connection
//   }
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("welcome to application")
// });

// app.post("/login", (req, res) => {
//   const { email, srn, password } = req.body;
//   let sqlQuery, creds = '';
//   if (email) {
//     sqlQuery = "SELECT email,password,user_type FROM users where Email=? AND Password=?";
//   }
//   if (srn) {
//     sqlQuery = "SELECT email,password,user_type FROM users where SRN=? AND Password=?";
//   }

//   if (srn) creds = srn;
//   if (email) creds = email;

//   db.query(sqlQuery, [creds, password], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.post('/signup', (req, res) => {
//   console.log('signup requested')
//   const { username, email, password, phone, user_type, srn } = req.body;

//   // Insert data into the 'users' table
//   const insertQuery = 'INSERT INTO users (SRN, User_name, Email, Password, phone, user_type) VALUES (?, ?, ?, ?, ?, ?)';

//   db.query(insertQuery, [srn, username, email, password, phone, user_type], (err, results) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       res.status(201).json({ message: 'Signup successful' });
//     }
//   });
// });

// app.get("/login", (req, res) => {
//   res.send("login get");
// });

// app.get("/founds", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS found_item_count
//     FROM items
//     WHERE lost_found_select = 'found';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const foundItemCount = result[0].found_item_count;
//       res.json({ found_item_count: foundItemCount });
//     }
//   });
// });

// app.get("/losts", (req, res) => {
//   const sqlquery = `
//     SELECT COUNT(*) AS lost_item_count
//     FROM items
//     WHERE lost_found_select = 'lost';
//   `;

//   db.query(sqlquery, (err, result) => {
//     if (err) {
//       console.error("Error counting lost items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       // Assuming the result is an array with one object
//       const lostItemCount = result[0].lost_item_count;
//       res.json({ lost_item_count: lostItemCount });
//     }
//   });
// });

// app.get("/found-items", (req, res) => {
//   const sqlQuery = `
//     SELECT
//     i.item_id,
//     i.item_name,
//     i.item_description,
//     i.item_value,
//     i.item_date_upload,
//     i.lost_found_select,
//     i.image_path
//   FROM
//     items AS i 
//   WHERE
//     i.lost_found_select = 'Found';
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get("/lost-items", (req, res) => {
//   const sqlQuery = `
//     SELECT
//     i.item_id,
//     i.item_name,
//     i.item_description,
//     i.item_value,
//     i.item_date_upload,
//     i.lost_found_select,
//     i.image_path
//   FROM
//     items AS i 
//   WHERE
//     i.lost_found_select = 'Lost';
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error selecting found items:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.post('/save-form-data', uploadSingleImage, (req, res) => {
//   const {
//     name,
//     value,
//     Status,
//     date,
//     blockname,
//     roomnumber,
//     Floor,
//     description,
//     reported_by, // Add reported_by to the request body
//     contact_no, // Add contact_no to the request body
//   } = req.body;

//   // Convert the date to a JavaScript Date object
//   const formattedDate = format(new Date(date), 'yyyy-MM-dd');

//   const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO items (item_name, item_description, item_value, item_date_upload, lost_found_select, image_path, reported_by, contact_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
//         [name, description, value, formattedDate, Status, imagePath, reported_by, contact_no],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             // Insert the uploaded images into the images table
//             const itemId = result.insertId; // Get the ID of the newly inserted item
      
//             // Insert block information into the block table
//             connection.query(
//               'INSERT INTO block (block_name, room_no, floor_no, item_id) VALUES (?, ?, ?, ?)',
//               [blockname, roomnumber, Floor, itemId],
//               (err, blockResult) => {
//                 if (err) {
//                   console.error('Error inserting block information:', err);
//                 }
//               }
//             );
      
//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.post('/claim', uploadMultipleImages, async (req, res) => {
//   const studentName = req.body.studentName;
//   const itemId = req.body.itemId
//   const idCardImage = req.files.idCardImage[0].filename;
//   const proofImage = req.files.proofImage[0].filename;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Get the file paths
//       const idCardImagePath = `${req.protocol}://${req.get('host')}/uploads/${idCardImage}`;
//       const proofImagePath = `${req.protocol}://${req.get('host')}/uploads/${proofImage}`;
//       const formattedDate = format(new Date(), 'yyyy-MM-dd');

//       // Insert the form data into the items table
//       connection.query(
//         'INSERT INTO claims (lost_item_id, claimed_person_name, claimed_date, id_card_image, proof_image, status) VALUES (?, ?, ?, ?, ?, ?)',
//         [itemId, studentName, formattedDate, idCardImagePath, proofImagePath, 'Pending'],
//         (err, result) => {
//           if (err) {
//             console.error('Error inserting form data:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             res.status(201).json({ message: 'Data saved successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.get('/claimed-items', (req, res) => {
//   const sql = `SELECT c.lost_item_id, c.claimed_person_name, c.id_card_image, c.proof_image, c.status, c.claimed_date, i.item_name
//     FROM claims c JOIN items i ON c.lost_item_id = i.item_id`;
  
//   db.query(sql, async (err, results) => {
//     if (err) {
//       console.error('Error fetching claimed items:', err);
//       res.sendStatus(500);
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.put('/update-claimed-status/:itemId', async (req, res) => {
//   const itemId = req.params.itemId;
//   const newStatus = req.body.status;

//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection error:', err);
//       res.status(500).json({ message: 'Server error' });
//     } else {
//       // Update the status in the claims table based on the item_id
//       connection.query(
//         'UPDATE claims SET status = ? WHERE lost_item_id = ?',
//         [newStatus, itemId],
//         (err, result) => {
//           if (err) {
//             console.error('Error updating status:', err);
//             res.status(500).json({ message: 'Server error' });
//           } else {
//             res.status(200).json({ message: 'Status updated successfully' });
//           }
//         }
//       );

//       connection.release(); // Release the connection
//     }
//   });
// });

// app.get("/item-timestamps", (req, res) => {
//   const sqlQuery = `
//     SELECT
//       log_id,
//       action_timestamp
//     FROM
//       item_log;
//   `;

//   db.query(sqlQuery, (err, results) => {
//     if (err) {
//       console.error("Error fetching item timestamps:", err);
//       res.status(500).json({ error: "Server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/activity-days/:type', async (req, res) => {
//   const itemType = req.params.type;
//   let sql;

//   if (itemType === 'Claims') {
//     res.json({});  // No need to calculate activity days for claims
//     return;
//   }

//   try {
//     // Print or log the SQL query
//     sql = `
//       SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
//       FROM items
//       WHERE lost_found_select = ?
//     `;
  
//     db.query(sql, [itemType], (err, results) => {
//       if (err) {
//         console.error('Error executing SQL query:', err);
//         res.sendStatus(500);
//       } else {
//         const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
//         res.json(activityDaysMap);
//       }
//     });
//   } catch (error) {
//     console.error('Error in /activity-days endpoint:', error);
//     res.sendStatus(500);
//   }
// });

// app.get('/activity-days/:type', async (req, res) => {
//   const itemType = req.params.type;

//   if (itemType === 'Claims') {
//     res.json({});  // No need to calculate activity days for claims
//     return;
//   }

//   try {
//     const sql = `
//       SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
//       FROM items
//       WHERE lost_found_select = ?
//     `;
  
//     db.query(sql, [itemType], (err, results) => {
//       if (err) {
//         console.error('Error executing SQL query:', err);
//         res.sendStatus(500);
//       } else {
//         const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
//         res.json(activityDaysMap);
//       }
//     });
//   } catch (error) {
//     console.error('Error in /activity-days endpoint:', error);
//     res.sendStatus(500);
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const multer = require('multer');
const { format } = require('date-fns');

const path = require('path');
var uuid = require('uuid');
var fs = require('fs');

app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(__dirname + '/uploads'));

const imageStorage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadSingleImage = multer({
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    checkImageFileType(file, cb);
  }
}).single("image");

const uploadMultipleImages = multer({
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    checkImageFileType(file, cb);
  }
}).fields([
  { name: 'idCardImage', maxCount: 1 },
  { name: 'proofImage', maxCount: 1 }
]);

function checkImageFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (!mimetype && !extname) return cb(new Error('Invalid image file type'));
  cb(null, true);
}

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "lost_found_project",
});

// Check database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    connection.release(); // Release the connection
  }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to application")
});

app.post("/login", (req, res) => {
  const { email, srn, password } = req.body;
  let sqlQuery, creds = '';
  if (email) {
    sqlQuery = "SELECT id, email,password,user_type FROM users where Email=? AND Password=?";
  }
  if (srn) {
    sqlQuery = "SELECT id, email,password,user_type FROM users where SRN=? AND Password=?";
  }

  if (srn) creds = srn;
  if (email) creds = email;

  db.query(sqlQuery, [creds, password], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.post('/signup', (req, res) => {
  console.log('signup requested')
  const { username, email, password, phone, user_type, srn } = req.body;

  // Insert data into the 'users' table
  const insertQuery = 'INSERT INTO users (SRN, User_name, Email, Password, phone, user_type) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(insertQuery, [srn, username, email, password, phone, user_type], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.status(201).json({ message: 'Signup successful' });
    }
  });
});

app.get("/login", (req, res) => {
  res.send("login get");
});

app.get("/founds", (req, res) => {
  const sqlquery = `
    SELECT COUNT(*) AS found_item_count
    FROM items
    WHERE lost_found_select = 'found';
  `;

  db.query(sqlquery, (err, result) => {
    if (err) {
      console.error("Error counting found items:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      // Assuming the result is an array with one object
      const foundItemCount = result[0].found_item_count;
      res.json({ found_item_count: foundItemCount });
    }
  });
});

app.get("/losts", (req, res) => {
  const sqlquery = `
    SELECT COUNT(*) AS lost_item_count
    FROM items
    WHERE lost_found_select = 'lost';
  `;

  db.query(sqlquery, (err, result) => {
    if (err) {
      console.error("Error counting lost items:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      // Assuming the result is an array with one object
      const lostItemCount = result[0].lost_item_count;
      res.json({ lost_item_count: lostItemCount });
    }
  });
});

// the below is nested query


app.get("/found-items", (req, res) => {
  const sqlQuery = `
    SELECT
      i.item_id,
      i.item_name,
      i.item_description,
      i.item_value,
      i.item_date_upload,
      i.lost_found_select,
      i.image_path,
      u.srn,
      u.User_name,
      u.Email,
      u.phone,
      (SELECT c.status FROM claims c WHERE c.lost_item_id = i.item_id) AS status
    FROM
      items i 
    JOIN 
      users u ON i.submitted_by = u.id
    WHERE
      i.lost_found_select = 'Found';
  `;

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Error selecting found items:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/lost-items", (req, res) => {
  const sqlQuery = `
    SELECT
    i.item_id,
    i.item_name,
    i.item_description,
    i.item_value,
    i.item_date_upload,
    i.lost_found_select,
    i.image_path,
    u.srn,
    u.User_name,
    u.Email,
    u.phone,
    u.user_type,
    c.status
  FROM
    items i 
  JOIN 
    users u ON i.submitted_by = u.id
  LEFT JOIN
    claims c ON i.item_id = c.lost_item_id
  WHERE
    i.lost_found_select = 'Lost';
  `;

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Error selecting found items:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/my-items", (req, res) => {
  const sqlQuery = `
    SELECT
    i.item_id,
    i.item_name,
    i.item_description,
    i.item_value,
    i.item_date_upload,
    i.lost_found_select,
    i.image_path
  FROM
    items AS i 
  WHERE
    i.submitted_by = ${req.query.id};
  `;

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Error selecting found items:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(results);
    }
  });
});

app.post('/save-form-data', uploadSingleImage, (req, res) => {
  const {
    name,
    value,
    Status,
    date,
    blockname,
    roomnumber,
    Floor,
    description,
    id
  } = req.body;

  // Convert the date to a JavaScript Date object
  const formattedDate = format(new Date(date), 'yyyy-MM-dd');

  const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      // Insert the form data into the items table
      connection.query(
        'INSERT INTO items (item_name, item_description, item_value, item_date_upload, lost_found_select, submitted_by, image_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, description, value, formattedDate, Status, id, imagePath],
        (err, result) => {
          if (err) {
            console.error('Error inserting form data:', err);
            res.status(500).json({ message: 'Server error' });
          } else {
            // Insert the uploaded images into the images table
            const itemId = result.insertId; // Get the ID of the newly inserted item

            // Insert block information into the block table
            connection.query(
              'INSERT INTO block (block_name, room_no, floor_no, item_id) VALUES (?, ?, ?, ?)',
              [blockname, roomnumber, Floor, itemId],
              (err, blockResult) => {
                if (err) {
                  console.error('Error inserting block information:', err);
                }
              }
            );

            res.status(201).json({ message: 'Data saved successfully' });
          }
        }
      );

      connection.release(); // Release the connection
    }
  });
});

app.post('/claim', uploadMultipleImages, async (req, res) => {
  const studentName = req.body.studentName;
  const itemId = req.body.itemId
  const idCardImage = req.files.idCardImage[0].filename;
  const proofImage = req.files.proofImage[0].filename;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      // Get the file paths
      const idCardImagePath = `${req.protocol}://${req.get('host')}/uploads/${idCardImage}`;
      const proofImagePath = `${req.protocol}://${req.get('host')}/uploads/${proofImage}`;
      const formattedDate = format(new Date(), 'yyyy-MM-dd');

      // Insert the form data into the items table
      connection.query(
        'INSERT INTO claims (lost_item_id, claimed_person_name, claimed_date, id_card_image, proof_image, status) VALUES (?, ?, ?, ?, ?, ?)',
        [itemId, studentName, formattedDate, idCardImagePath, proofImagePath, 'Pending'],
        (err, result) => {
          if (err) {
            console.error('Error inserting form data:', err);
            res.status(500).json({ message: 'Server error' });
          } else {
            res.status(201).json({ message: 'Data saved successfully' });
          }
        }
      );

      connection.release(); // Release the connection
    }
  });
});

app.get('/claimed-items', (req, res) => {
  const sql = `SELECT c.lost_item_id, c.claimed_person_name, c.id_card_image, c.proof_image, c.status, c.claimed_date, i.item_name
    FROM claims c JOIN items i ON c.lost_item_id = i.item_id`;
  
  db.query(sql, async (err, results) => {
    if (err) {
      console.error('Error fetching claimed items:', err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.put('/update-claimed-status/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  const newStatus = req.body.status;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      // Update the status in the claims table based on the item_id
      connection.query(
        'UPDATE claims SET status = ? WHERE lost_item_id = ?',
        [newStatus, itemId],
        (err, result) => {
          if (err) {
            console.error('Error updating status:', err);
            res.status(500).json({ message: 'Server error' });
          } else {
            res.status(200).json({ message: 'Status updated successfully' });
          }
        }
      );

      connection.release(); // Release the connection
    }
  });
});

app.get("/item-timestamps", (req, res) => {
  const sqlQuery = `
    SELECT
      log_id,
      action_timestamp
    FROM
      item_log;
  `;

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Error fetching item timestamps:", err);
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(results);
    }
  });
});

app.get('/activity-days/:type', async (req, res) => {
  const itemType = req.params.type;
  let sql;

  if (itemType === 'Claims') {
    res.json({});  // No need to calculate activity days for claims
    return;
  }

  try {
    // Print or log the SQL query
    sql = `
      SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
      FROM items
      WHERE lost_found_select = ?
    `;
  
    db.query(sql, [itemType], (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.sendStatus(500);
      } else {
        const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
        res.json(activityDaysMap);
      }
    });
  } catch (error) {
    console.error('Error in /activity-days endpoint:', error);
    res.sendStatus(500);
  }
});

app.get('/activity-days/:type', async (req, res) => {
  const itemType = req.params.type;

  if (itemType === 'Claims') {
    res.json({});  // No need to calculate activity days for claims
    return;
  }

  try {
    const sql = `
      SELECT item_id, calculate_activity_days(item_date_upload) AS activityDays
      FROM items
      WHERE lost_found_select = ?
    `;
  
    db.query(sql, [itemType], (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.sendStatus(500);
      } else {
        const activityDaysMap = new Map(results.map((item) => [item.item_id, item.activityDays]));
        res.json(activityDaysMap);
      }
    });
  } catch (error) {
    console.error('Error in /activity-days endpoint:', error);
    res.sendStatus(500);
  }
});

app.get("/delete-old-found-items", async (req, res) => {
  try {
    const deleteQuery = `
      DELETE FROM items
      WHERE lost_found_select = 'found' AND calculate_activity_days(item_date_upload) > 15;
    `;

    db.query(deleteQuery, (err, result) => {
      if (err) {
        console.error("Error deleting old found items:", err);
        res.status(500).json({ error: "Server error" });
      } else {
        res.status(200).json({ message: "Old found items deleted successfully" });
      }
    });
  } catch (error) {
    console.error("Error in /delete-old-found-items endpoint:", error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

