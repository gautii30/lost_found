
CREATE DATABASE lost_found_project;
USE lost_found_project;

# DROP TABLE users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  srn VARCHAR(15) DEFAULT NULL,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  phone VARCHAR(10) NOT NULL CHECK (LENGTH(phone) < 11),
  user_type VARCHAR(10) NOT NULL
);

INSERT INTO users (SRN, User_name, Email, Password, phone, user_type)
VALUES ('PES1UG21CS741', 'gautam', 'sarafgautam2002@gmail.com', 'password', '9998407545', 'student');

INSERT INTO users (SRN, User_name, Email, Password, phone, user_type)
VALUES ('PESSTAFF', 'pes', 'pes@gmail.com', 'passwordpes', 9876543210, 'admin');

# DROP TABLE items;
CREATE TABLE items (
  item_id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  item_description TEXT,
  #category VARCHAR(100) NOT NULL,
  item_value DECIMAL(10, 2),
  item_date_upload DATE NOT NULL,
  lost_found_select VARCHAR(10) NOT NULL,
  image_path VARCHAR(100) DEFAULT NULL,
  submitted_by INT NOT NULL,
  PRIMARY KEY (item_id),
  INDEX (item_id),
  INDEX (item_date_upload)
);

-- INSERT INTO items (item_name, item_description, category, item_value, item_date_upload, lost_found_select)
-- VALUES ('Watch', 'A silver wristwatch', 'Accessories', 5000, '2023-10-08', 'Lost');

-- INSERT INTO items (item_name, item_description, category, item_value, item_date_upload, lost_found_select)
-- VALUES ('Phone', 'oneplus 10T', 'Electronics', 50000, '2023-10-07', 'Found');

# DROP TABLE images;
CREATE TABLE images (
  image_id INT NOT NULL AUTO_INCREMENT,
  image_data BLOB,
  image_date DATE,
  item_id INT NOT NULL,
  PRIMARY KEY (image_id),
  CONSTRAINT c1 FOREIGN KEY (image_date, item_id) REFERENCES items(item_date_upload, item_id)
);

-- INSERT INTO images (image_data, image_date, item_id)
-- VALUES (NULL, '2023-10-08', 1);

-- INSERT INTO images (image_data, image_date, item_id)
-- VALUES (NULL, '2023-10-07', 2);

# DROP TABLE block;
CREATE TABLE block (
  block_name VARCHAR(3) NOT NULL,
  room_no INT NOT NULL,
  floor_no INT NOT NULL,
  item_id INT NOT NULL,
  CONSTRAINT c2 FOREIGN KEY (item_id) REFERENCES items(item_id)
);

# DROP TABLE claims;
CREATE TABLE claims (
  lost_item_id INT NOT NULL,
  claimed_person_name VARCHAR(100) NOT NULL,
  claimed_date DATE NOT NULL,
  id_card_image  VARCHAR(100) DEFAULT NULL,
  proof_image  VARCHAR(100) DEFAULT NULL,
  status  VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (lost_item_id),
  FOREIGN KEY (lost_item_id) REFERENCES items(item_id)
);


CREATE TABLE IF NOT EXISTS item_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255),
    action_type VARCHAR(50),
    action_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

# Trigger for after_insert_item
DELIMITER //
CREATE TRIGGER after_insert_item
AFTER INSERT ON items
FOR EACH ROW
BEGIN
    INSERT INTO item_log (item_name, action_type)
    VALUES (NEW.item_name, 'Inserted');
END //
DELIMITER ;



DELIMITER //

CREATE FUNCTION calculate_activity_days(item_date_upload DATE) RETURNS INT
DETERMINISTIC
BEGIN
  RETURN DATEDIFF(CURDATE(), item_date_upload);
END //

DELIMITER ;


 
--  BELOW IS AGGREGATE QUERY !!



-- app.get("/founds", (req, res) => {
--  const sqlquery = `
--    SELECT COUNT(*) AS found_item_count
--    FROM items
--    WHERE lost_found_select = 'found';
--  `;


--  db.query(sqlquery, (err, result) => {
--    if (err) {
--      console.error("Error counting found items:", err);
--      res.status(500).json({ error: "Server error" });
--    } else {
--      // Assuming the result is an array with one object
--      const foundItemCount = result[0].found_item_count;
--      res.json({ found_item_count: foundItemCount });
--    }
--  });
-- });




-- BELOW IS NESTED QUERY!! 




-- app.get("/found-items", (req, res) => {
--  const sqlQuery = `
--    SELECT
--      i.item_id,
--      i.item_name,
--      i.item_description,
--      i.item_value,
--      i.item_date_upload,
--      i.lost_found_select,
--      i.image_path,
--      u.srn,
--      u.User_name,
--      u.Email,
--      u.phone,
--      (SELECT c.status FROM claims c WHERE c.lost_item_id = i.item_id) AS status
--    FROM
--      items i
--    JOIN
--      users u ON i.submitted_by = u.id
--    WHERE
--      i.lost_found_select = 'Found';
--  `;


--  db.query(sqlQuery, (err, results) => {
--    if (err) {
--      console.error("Error selecting found items:", err);
--      res.status(500).json({ error: "Server error" });
--    } else {
--      res.json(results);
--    }
--  });
-- });



-- BELOW IS JOIN OPERATION !!


-- app.get("/lost-items", (req, res) => {
--  const sqlQuery = `
--    SELECT
--    i.item_id,
--    i.item_name,
--    i.item_description,
--    i.item_value,
--    i.item_date_upload,
--    i.lost_found_select,
--    i.image_path,
--    u.srn,
--    u.User_name,
--    u.Email,
--    u.phone,
--    u.user_type,
--    c.status
--  FROM
--    items i
--  JOIN
--    users u ON i.submitted_by = u.id
--  LEFT JOIN
--    claims c ON i.item_id = c.lost_item_id
--  WHERE
--    i.lost_found_select = 'Lost';
--  `;


--  db.query(sqlQuery, (err, results) => {
--    if (err) {
--      console.error("Error selecting found items:", err);
--      res.status(500).json({ error: "Server error" });
--    } else {
--      res.json(results);
--    }
--  });
-- });






































