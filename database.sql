-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2025 at 07:53 PM
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
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT 'INT',
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'INT'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `name`, `create_time`) VALUES
(1, 'impressive_weapon', '2025-07-25 20:52:37');

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
(122, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۴:۴۲:۰۷'),
(123, 'ارسال نشدن ایمیل : AggregateError', 'موقع ارسال ایمیل به : m.h.atashbar1@gmail.com با موضوع \n : ورود موفقیت آمیز \n و متن : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۴:۴۲:۰۷ مشکلی به وجود امد \n متن خطا  : ', 'error', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۴:۴۲:۰۷'),
(124, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۷:۵۱:۲۲'),
(125, 'ارسال نشدن ایمیل : Error', 'موقع ارسال ایمیل به : m.h.atashbar1@gmail.com با موضوع \n : ورود موفقیت آمیز \n و متن : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۷:۵۱:۲۲ مشکلی به وجود امد \n متن خطا  : connect ECONNREFUSED 127.0.0.1:587', 'error', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۷:۵۱:۲۲'),
(126, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۸:۱۷:۰۴'),
(127, 'ارسال نشدن ایمیل : Error', 'موقع ارسال ایمیل به : m.h.atashbar1@gmail.com با موضوع \n : ورود موفقیت آمیز \n و متن : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۸:۱۷:۰۴ مشکلی به وجود امد \n متن خطا  : connect ECONNREFUSED 127.0.0.1:587', 'error', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۸:۱۷:۰۴'),
(128, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۰۶:۴۴'),
(129, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۴۴:۲۸'),
(130, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۴۶:۵۱'),
(131, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۴۷:۳۹'),
(132, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۴۹:۴۱'),
(133, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۰:۳۱'),
(134, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۰:۵۵'),
(135, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۱:۱۲'),
(136, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۳:۲۳'),
(137, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۳:۳۲'),
(138, 'ارسال نشدن ایمیل : Error', 'موقع ارسال ایمیل به : m.h.atashbar1@gmail.com با موضوع \n : ورود موفقیت آمیز \n و متن : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۳:۳۲ مشکلی به وجود امد \n متن خطا  : connect ECONNREFUSED 127.0.0.1:587', 'error', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۳:۳۲'),
(139, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۶:۲۴'),
(140, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۰'),
(141, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۰', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۴'),
(142, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۶'),
(143, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۷'),
(144, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۸'),
(145, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۶', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۱۰'),
(146, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۷', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۱۱'),
(147, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۰۸', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۱۱'),
(148, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۴۵'),
(149, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۴۵', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۷:۴۹'),
(150, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۸:۴۷'),
(151, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۸:۴۷', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۱۹:۵۸:۵۰'),
(152, 'ورود موفق', 'ورود موفق کاربر ali', 'success', '::1', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۲۰:۵۲:۳۳'),
(153, 'ارسال موفق ایمیل', 'ایمیل جدیدی به  : m.h.atashbar1@gmail.com \n موضوع : ورود موفقیت آمیز \n با متن  : ورود شما موفقیت امیز بود  زمن ورود : ۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۲۰:۵۲:۳۳', 'info', 'NONE', '۱۴۰۴ مرداد ۱۵, چهارشنبه ساعت ۲۰:۵۲:۳۸');

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
  `views` int(255) NOT NULL,
  `img_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `more_description`, `image_path`, `sub_category_id`, `category_id`, `create_time`, `views`, `img_path`) VALUES
(1, 'ماد  impressive_weapon gta sa', '\nThe Immersive Weapons Pack is a high-quality, lore-friendly weapon overhaul for GTA San Andreas, ', 'The Immersive Weapons Pack is a high-quality, lore-friendly weapon overhaul for GTA San Andreas, designed to enhance realism, immersion, and gameplay variety. This mod replaces every in-game weapon with detailed new models, featuring custom animations p', '', 1, 1, '2025-07-27 16:27:03', 0, 'impressive_weapon');

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
(1, 'OWNER', '2025-08-04 11:45:41', 0),
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
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `cms_name` varchar(255) NOT NULL,
  `cms_logo` varchar(255) NOT NULL,
  `cms_mailler_service` varchar(255) NOT NULL,
  `cms_mailler_user` varchar(255) NOT NULL,
  `cms_mailler_pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`cms_name`, `cms_logo`, `cms_mailler_service`, `cms_mailler_user`, `cms_mailler_pass`) VALUES
('modscape', 'impressive_weapon', 'Zoho', 'info@modscape.ir', '19GPS7e4e2GW');

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
(1, 'ماشین', 1, '2025-07-20 19:00:37'),
(2, 'ماد پک ', 3, '2025-07-27 13:11:10');

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
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
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
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
