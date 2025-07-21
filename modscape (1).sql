-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2025 at 12:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `modscape`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `create_time`) VALUES
(1, 'GTA SA', '2025-07-15 11:47:21'),
(2, 'GTA V', '2025-07-15 11:47:26'),
(3, 'MINECRAFT', '2025-07-15 11:47:35'),
(4, 'ELDEN RING', '2025-07-20 16:18:38');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `isRegister` tinyint(1) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `subject`, `text`, `isRegister`, `create_time`) VALUES
(1, 'ممدو', 'mohammadgc.01@gmail.com', 'ای کوص کش', 'dwadawda', 1, '2025-07-17 14:43:07'),
(2, 'ممدو22', 'mohammadgc.01dd@gmail.com', 'ای کوص کش', 'dwadada dcacx aca cdwdc', 0, '2025-07-17 14:43:38'),
(3, 'ممدو', 'mohammadgc.01@gmail.com', 'ای کوص کش', 'dawdwadaw', 0, '2025-07-17 14:44:07'),
(4, 'ممدو', 'mohammadgc.01@gmail.com', 'اضافه کردن ماد الدن رینگ', 'سلام و درود میخوام بدونم کی ماد های الدن ریگن ادد میکنین', 0, '2025-07-17 15:00:26');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `level` varchar(25) NOT NULL,
  `ip` varchar(30) NOT NULL,
  `time` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `title`, `message`, `level`, `ip`, `time`) VALUES
(3, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۷, جمعه ساعت ۲۳:۳۱:۲۲'),
(6, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۷, جمعه ساعت ۲۳:۳۸:۳۷'),
(7, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۷, جمعه ساعت ۲۳:۳۹:۳۷'),
(8, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۷, جمعه ساعت ۲۳:۴۱:۲۳'),
(9, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۰:۰۷:۰۱'),
(11, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۰:۲۸:۴۹'),
(12, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۰:۳۹:۵۱'),
(13, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۰۶:۵۴'),
(14, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۱۴:۱۶'),
(15, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۱۶:۱۴'),
(16, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۱۸:۲۶'),
(17, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::ffff:127.0.0.1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۱۸:۵۸'),
(18, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۲۱:۲۷'),
(19, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۲۲:۰۸'),
(20, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۲۳:۳۹'),
(21, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۲۵:۰۹'),
(22, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۲۷:۱۳'),
(23, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۳۲:۳۵'),
(24, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۳۶:۲۲'),
(25, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱:۵۶:۳۸'),
(26, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۸, شنبه ساعت ۱۵:۳۷:۵۶'),
(27, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱:۴۵:۴۴'),
(28, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲:۰۲:۳۱'),
(29, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲:۰۴:۱۲'),
(30, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲:۰۸:۴۶'),
(31, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲:۱۴:۲۷'),
(32, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲:۱۸:۳۸'),
(33, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۰:۳۶'),
(34, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۳:۵۳'),
(35, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۵:۴۶'),
(36, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۶:۱۹'),
(37, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۶:۵۴'),
(38, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۷:۳۶'),
(39, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۲۸:۳۸'),
(40, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۳۰:۱۳'),
(41, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۳۲:۱۱'),
(42, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۳۴:۰۳'),
(43, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۱:۳۵:۳۲'),
(44, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۵:۳۲:۵۵'),
(45, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۵:۳۷:۳۳'),
(46, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۲۵:۵۸'),
(47, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۳۳:۱۵'),
(48, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۳۵:۵۷'),
(49, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۳۶:۲۳'),
(50, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۴۳:۲۹'),
(51, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۴۴:۳۷'),
(52, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۱۹:۵۳:۴۴'),
(53, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ تیر ۲۹, یکشنبه ساعت ۲۰:۱۰:۳۹');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `more_description` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `sub_category_id` int(25) NOT NULL,
  `category_id` int(25) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `views` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `set_defualt_role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `create_time`, `set_defualt_role`) VALUES
(1, 'OWNER', '2025-06-27 09:43:09', 0),
(2, 'user', '2025-07-01 09:39:57', 1),
(3, 'admin', '2025-07-18 20:05:32', 0);

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL,
  `role_id` int(32) NOT NULL,
  `permission_name` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role_permission`
--

INSERT INTO `role_permission` (`id`, `role_id`, `permission_name`, `create_time`) VALUES
(1, 1, 'ADMINISTRATOR', '2025-06-27 09:44:46'),
(2, 3, 'PANEL_ACCESS', '2025-07-18 20:06:45'),
(3, 3, 'VIEW_LOGS', '2025-07-18 20:06:54');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(255) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`id`, `name`, `category_id`, `create_time`) VALUES
(1, 'ماشین', 1, '2025-07-20 19:00:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `create_time`) VALUES
(20, 'محمد', 'm.h.atashbar20@gmail.com', '$2b$10$6ZgzwqpOk.lVMvnLl3PWlutf3bOEgQ0Flv045XvHftuf2Udu9177O', '2025-07-18 13:01:03'),
(23, 'ali', 'm.h.atashbar1@gmail.com', '$2b$10$/YU.WqCCBTGPnJ3IYUZt4OiIFjQ5DyOvS0/raSiLsNmwjMpqTthce', '2025-07-18 19:03:50');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `user_id` int(32) NOT NULL,
  `role_id` int(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `create_time`) VALUES
(26, 20, 2, '2025-07-18 13:01:03'),
(28, 20, 1, '2025-07-18 16:48:19'),
(30, 23, 1, '2025-07-20 12:03:47'),
(31, 23, 2, '2025-07-18 19:03:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
