// const bcrypt = require('bcrypt');
// async function insertTables() {
//     const tables = `
// SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
// START TRANSACTION;
// SET time_zone = "+00:00";

// CREATE TABLE category (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE contacts (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL,
//   email varchar(255) NOT NULL,
//   subject varchar(255) NOT NULL,
//   text varchar(255) NOT NULL,
//   isRegister tinyint(1) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE images (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE logs (
//   id int(11) NOT NULL,
//   title varchar(255) NOT NULL,
//   message varchar(255) NOT NULL,
//   level varchar(25) NOT NULL,
//   ip varchar(30) NOT NULL,
//   time varchar(40) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE posts (
//   id int(11) NOT NULL,
//   title varchar(255) NOT NULL,
//   description varchar(255) NOT NULL,
//   more_description varchar(255) NOT NULL,
//   image_path varchar(255) NOT NULL,
//   sub_category_id int(25) NOT NULL,
//   category_id int(25) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
//   views int(255) NOT NULL,
//   img_path varchar(255) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE roles (
//   id int(11) NOT NULL,
//   name varchar(30) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
//   set_defualt_role tinyint(1) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE role_permission (
//   id int(11) NOT NULL,
//   role_id int(32) NOT NULL,
//   permission_name varchar(32) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE sub_category (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL,
//   category_id int(255) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE users (
//   id int(11) NOT NULL,
//   username varchar(255) NOT NULL,
//   email varchar(255) NOT NULL,
//   password varchar(255) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// CREATE TABLE user_role (
//   id int(11) NOT NULL,
//   user_id int(32) NOT NULL,
//   role_id int(32) NOT NULL,
//   create_time timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

// ALTER TABLE category ADD PRIMARY KEY (id);
// ALTER TABLE contacts ADD PRIMARY KEY (id);
// ALTER TABLE images ADD PRIMARY KEY (id);
// ALTER TABLE logs ADD PRIMARY KEY (id);
// ALTER TABLE posts ADD PRIMARY KEY (id);
// ALTER TABLE roles ADD PRIMARY KEY (id);
// ALTER TABLE role_permission ADD PRIMARY KEY (id);
// ALTER TABLE sub_category ADD PRIMARY KEY (id);
// ALTER TABLE users ADD PRIMARY KEY (id);
// ALTER TABLE user_role ADD PRIMARY KEY (id);

// ALTER TABLE category MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE contacts MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE images MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE logs MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE posts MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE roles MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE role_permission MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE sub_category MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE users MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// ALTER TABLE user_role MODIFY id int(11) NOT NULL AUTO_INCREMENT;

// COMMIT;

//     `;

//     await db.query(tables)
// }

// async function insertfirstdata(email, pass) {
//     const hashPassword = await bcrypt.hash(pass, 10);
//     const time = new Date().getTime()
//     const data = `
//     SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
// START TRANSACTION;
// SET time_zone = "+00:00";

// --
// -- Database: modscape
// --

// INSERT INTO roles (id, name, create_time, set_defualt_role) VALUES
// (1, 'OWNER', '2025-08-04 11:45:41', 0),
// (2, 'user', '2025-07-01 09:39:57', 1),
// (3, 'admin', '2025-07-18 20:05:32', 0);



// INSERT INTO role_permission (id, role_id, permission_name, create_time) VALUES
// (1, 1, 'ADMINISTRATOR', '2025-06-27 09:44:46'),
// (2, 3, 'PANEL_ACCESS', '2025-07-18 20:06:45'),
// (3, 3, 'VIEW_LOGS', '2025-07-18 20:06:54');


// INSERT INTO users(id, username, email, password, create_time) VALUES
// (1, 'administrator', '${email}', '${hashPassword}', '${time}');


// INSERT INTO user_role (id, user_id, role_id, create_time) VALUES
// (1, 1, 1, '2025-07-18 13:01:03'),

// COMMIT;

//     `;
//     await db.query(data)
// }


// module.exports = {
//     insertTables,
//     insertfirstdata
// }