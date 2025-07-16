-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2025 at 12:28 PM
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
(3, 'MINECRAFT', '2025-07-15 11:47:35');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `loglevel` varchar(50) NOT NULL,
  `logmessage` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `loglevel`, `logmessage`, `create_time`) VALUES
(1, 'info', '\n         یک درخواست ورود با IP : ::1 زده اما کارب', '2025-07-15 15:39:18'),
(2, 'info', '\n         یک درخواست ورود با IP : ::1 زده اما کارب', '2025-07-15 15:41:32'),
(3, 'info', 'ثبت‌نام موفق: نام کاربری dawdaw | ایمیل m.h.atashb', '2025-07-15 15:41:38'),
(4, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 15:41:43'),
(5, 'info', 'ثبت‌نام موفق: نام کاربری dadwadawdwa | ایمیل m.h.a', '2025-07-15 15:42:27'),
(6, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 15:42:30'),
(7, 'info', 'ثبت‌نام موفق: نام کاربری dadwadawdwa | ایمیل m.h.a', '2025-07-15 15:42:56'),
(8, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 15:42:59'),
(9, 'info', 'ثبت‌نام موفق: نام کاربری dadwadawdwa | ایمیل m.h.a', '2025-07-15 15:43:00'),
(10, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 15:43:03'),
(11, 'info', 'ثبت‌نام موفق: نام کاربری dadwadawdwa | ایمیل m.h.a', '2025-07-15 15:43:07'),
(12, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 15:43:09'),
(13, 'info', 'ثبت‌نام موفق: نام کاربری mmdo | ایمیل m.h.atashbar', '2025-07-15 16:01:32'),
(14, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 16:01:34'),
(15, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 16:01:42'),
(16, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 16:01:45'),
(17, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 16:05:42'),
(18, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 16:05:45'),
(19, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 16:06:26'),
(20, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 16:06:28'),
(21, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 16:06:50'),
(22, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 16:06:52'),
(23, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 16:44:37'),
(24, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 16:45:39'),
(25, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:53:47'),
(26, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:53:50'),
(27, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:54:15'),
(28, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:54:18'),
(29, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:55:43'),
(30, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:55:46'),
(31, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:56:28'),
(32, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:56:31'),
(33, 'info', 'ثبت‌نام موفق: نام کاربری momm | ایمیل mohammad@gma', '2025-07-15 19:56:56'),
(34, 'info', 'ایمیل با موفقیت ارسال شد به: mohammad@gmail.com مو', '2025-07-15 19:56:59'),
(35, 'info', '\n      کاربر momm با ایمیلی mohammad@gmail.com با ', '2025-07-15 19:57:04'),
(36, 'info', 'ایمیل با موفقیت ارسال شد به: mohammad@gmail.com مو', '2025-07-15 19:57:06'),
(37, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:57:57'),
(38, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:58:00'),
(39, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:58:57'),
(40, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:58:59'),
(41, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 19:59:47'),
(42, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 19:59:49'),
(43, 'info', '\n      کاربر mmdo با ایمیلی m.h.atashbar20@gmail.c', '2025-07-15 20:02:55'),
(44, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 20:02:58'),
(45, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:02:35'),
(46, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar1@gmail.c', '2025-07-15 21:02:37'),
(47, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:02:54'),
(48, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar1@gmail.c', '2025-07-15 21:02:56'),
(49, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:03:33'),
(50, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:03:33'),
(51, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:05:00'),
(52, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:05:00'),
(53, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:06:34'),
(54, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:06:34'),
(55, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:10:39'),
(56, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:10:39'),
(57, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:14:04'),
(58, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:14:04'),
(59, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:15:02'),
(60, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:15:02'),
(61, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:15:37'),
(62, 'error', 'موقغ ارسال ایمیل با این جزییات  : m.h.atashbar20@g', '2025-07-15 21:15:37'),
(63, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:16:51'),
(64, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 21:16:56'),
(65, 'info', 'ثبت‌نام موفق: نام کاربری mohammad | ایمیل m.h.atas', '2025-07-15 21:21:05'),
(66, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 21:21:09'),
(67, 'info', '\n      کاربر mohammad با ایمیلی m.h.atashbar20@gma', '2025-07-15 21:21:24'),
(68, 'info', 'ایمیل با موفقیت ارسال شد به: m.h.atashbar20@gmail.', '2025-07-15 21:21:27');

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
  `color` varchar(30) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `set_defualt_role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `color`, `create_time`, `set_defualt_role`) VALUES
(1, 'OWNER', 'ff5999', '2025-06-27 09:43:09', 0),
(2, 'user', '#851fff', '2025-07-01 09:39:57', 1);

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
(1, 1, 'ADMINISTRATOR', '2025-06-27 09:44:46');

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
(18, 'mohammad', 'm.h.atashbar20@gmail.com', '$2b$10$Z.hNZqnEumgUj60kurA0Auf17R.Y58ShQrpB37GWteT472o7pnUoK', '2025-07-15 21:21:05');

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
(1, 2, 1, '2025-06-27 09:45:51'),
(4, 26, 2, '2025-07-01 09:48:59'),
(5, 27, 2, '2025-07-01 16:29:20'),
(0, 1, 2, '2025-07-15 15:41:38'),
(0, 2, 2, '2025-07-15 15:42:27'),
(0, 3, 2, '2025-07-15 15:42:56'),
(0, 4, 2, '2025-07-15 15:43:00'),
(0, 5, 2, '2025-07-15 15:43:07'),
(0, 6, 2, '2025-07-15 16:01:32'),
(0, 7, 2, '2025-07-15 19:56:56'),
(0, 8, 2, '2025-07-15 21:02:35'),
(0, 9, 2, '2025-07-15 21:02:54'),
(0, 10, 2, '2025-07-15 21:03:33'),
(0, 11, 2, '2025-07-15 21:05:00'),
(0, 12, 2, '2025-07-15 21:06:34'),
(0, 13, 2, '2025-07-15 21:10:39'),
(0, 14, 2, '2025-07-15 21:14:04'),
(0, 15, 2, '2025-07-15 21:15:02'),
(0, 16, 2, '2025-07-15 21:15:37'),
(0, 17, 2, '2025-07-15 21:16:51'),
(0, 18, 2, '2025-07-15 21:21:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
