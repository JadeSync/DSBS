-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2015 at 04:33 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dsbs`
--
CREATE DATABASE IF NOT EXISTS `dsbs` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dsbs`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill`
--

DROP TABLE IF EXISTS `tbl_bill`;
CREATE TABLE IF NOT EXISTS `tbl_bill` (
  `b_id` varchar(10) NOT NULL,
  `u_id` varchar(10) DEFAULT NULL,
  `b_date` datetime DEFAULT NULL,
  `credit_flag` tinyint(1) NOT NULL,
  PRIMARY KEY (`b_id`),
  UNIQUE KEY `b_id` (`b_id`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_bill`
--

INSERT INTO `tbl_bill` (`b_id`, `u_id`, `b_date`, `credit_flag`) VALUES
('1', 'U1', '2015-02-04 20:27:53', 1),
('2', 'U1', '2015-02-04 20:34:58', 0),
('3', 'U1', '2015-02-04 20:57:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill_amount`
--

DROP TABLE IF EXISTS `tbl_bill_amount`;
CREATE TABLE IF NOT EXISTS `tbl_bill_amount` (
  `b_id` varchar(10) DEFAULT NULL,
  `b_amt` decimal(8,2) DEFAULT NULL,
  KEY `b_id` (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_bill_amount`
--

INSERT INTO `tbl_bill_amount` (`b_id`, `b_amt`) VALUES
('1', '110.00'),
('2', '180.00'),
('3', '20.00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill_detail`
--

DROP TABLE IF EXISTS `tbl_bill_detail`;
CREATE TABLE IF NOT EXISTS `tbl_bill_detail` (
  `b_id` varchar(10) DEFAULT NULL,
  `p_id` varchar(10) DEFAULT NULL,
  `qty` decimal(8,2) DEFAULT NULL,
  KEY `b_id` (`b_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_bill_detail`
--

INSERT INTO `tbl_bill_detail` (`b_id`, `p_id`, `qty`) VALUES
('1', 'CAT1P10', '2.00'),
('1', 'CAT1P1', '4.00'),
('1', 'CAT1P5', '5.00'),
('2', 'CAT1P10', '2.00'),
('2', 'CAT1P1', '4.00'),
('2', 'CAT1P5', '5.00'),
('2', 'CAT1P12', '7.00'),
('3', 'CAT1P11', '2.00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_controllers`
--

DROP TABLE IF EXISTS `tbl_controllers`;
CREATE TABLE IF NOT EXISTS `tbl_controllers` (
  `controller_id` varchar(10) NOT NULL DEFAULT '',
  `controller_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`controller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_creditors_advanced`
--

DROP TABLE IF EXISTS `tbl_creditors_advanced`;
CREATE TABLE IF NOT EXISTS `tbl_creditors_advanced` (
  `creditor_id` varchar(10) DEFAULT NULL,
  `b_id` varchar(10) DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `credit_status` tinyint(1) DEFAULT NULL,
  KEY `b_id` (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_creditors_advanced`
--

INSERT INTO `tbl_creditors_advanced` (`creditor_id`, `b_id`, `due_date`, `credit_status`) VALUES
('2', '1', '2015-02-25 00:00:00', 0),
('1', '3', '2015-02-18 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_creditors_basic`
--

DROP TABLE IF EXISTS `tbl_creditors_basic`;
CREATE TABLE IF NOT EXISTS `tbl_creditors_basic` (
  `creditor_id` varchar(10) NOT NULL,
  `creditor_name` varchar(100) DEFAULT NULL,
  `address` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(12) NOT NULL,
  PRIMARY KEY (`creditor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_creditors_basic`
--

INSERT INTO `tbl_creditors_basic` (`creditor_id`, `creditor_name`, `address`, `email`, `contact`) VALUES
('1', 'ABC Consultancy', 'Sankhamul', 'abc@consult.com', '9841xxxxxx'),
('2', 'Parikshit', 'Garamani', 'letters.prasai@gmail.com', '9860570861');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_module`
--

DROP TABLE IF EXISTS `tbl_module`;
CREATE TABLE IF NOT EXISTS `tbl_module` (
  `module_id` varchar(10) NOT NULL,
  `module_name` varchar(50) DEFAULT NULL,
  `module_author` varchar(100) DEFAULT NULL,
  `module_desc` varchar(800) DEFAULT NULL,
  `module_installed_flag` tinyint(1) DEFAULT NULL,
  `module_src` varchar(200) NOT NULL,
  `module_route` varchar(200) NOT NULL,
  PRIMARY KEY (`module_id`),
  UNIQUE KEY `module_id` (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_module`
--

INSERT INTO `tbl_module` (`module_id`, `module_name`, `module_author`, `module_desc`, `module_installed_flag`, `module_src`, `module_route`) VALUES
('', '', '', '', 1, '', ''),
('M01', 'Module', 'Parikshit Pr.', 'Modules that manages dynamic module loading', 1, './frontend/modules/module/controllers/module.controller.js', './frontend/modules/module/route/module.routes.js'),
('M02', 'Inventory', 'Parikhit P.', 'This module manages all the inventory stuff', 1, './frontend/modules/inventory/controllers/inventory.controller.js', './frontend/modules/inventory/route/inventory.routes.js'),
('M04', 'Billing', 'Parikhit P.', 'This module does all the billing stuff.', 1, './frontend/modules/billing/controllers/billing.controller.js', './frontend/modules/billing/route/billing.routes.js');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_permission`
--

DROP TABLE IF EXISTS `tbl_permission`;
CREATE TABLE IF NOT EXISTS `tbl_permission` (
  `u_id` varchar(10) DEFAULT NULL,
  `controller_id` varchar(10) DEFAULT NULL,
  `permission` tinyint(1) DEFAULT NULL,
  KEY `u_id` (`u_id`),
  KEY `controller_id` (`controller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

DROP TABLE IF EXISTS `tbl_product`;
CREATE TABLE IF NOT EXISTS `tbl_product` (
  `p_id` varchar(10) NOT NULL,
  `c_id` varchar(10) DEFAULT NULL,
  `p_name` varchar(100) DEFAULT NULL,
  `p_count` decimal(8,0) DEFAULT NULL,
  `p_selling_price` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`p_id`),
  UNIQUE KEY `p_id` (`p_id`),
  KEY `c_id` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`p_id`, `c_id`, `p_name`, `p_count`, `p_selling_price`) VALUES
('CAT1P1', 'CAT1', 'Lays Big', '100', '40.00'),
('CAT1P10', 'CAT1', 'Lays Japanese', '100', '40.00'),
('CAT1P11', 'CAT1', 'Lays Korean', '100', '40.00'),
('CAT1P12', 'CAT1', 'Lays Nepali', '100', '40.00'),
('CAT1P2', 'CAT1', 'Kurkure Big', '130', '40.00'),
('CAT1P3', 'CAT1', 'Kurmure', '100', '20.00'),
('CAT1P4', 'CAT1', 'Lays Onion Big', '100', '40.00'),
('CAT1P5', 'CAT1', 'Lays American Cheese Big', '100', '40.00'),
('CAT1P6', 'CAT1', 'Lays Indian', '100', '40.00'),
('CAT1P7', 'CAT1', 'Lays Chinese', '100', '40.00'),
('CAT1P8', 'CAT1', 'Lays German', '100', '40.00'),
('CAT1P9', 'CAT1', 'Lays Hungarian', '100', '40.00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_category`
--

DROP TABLE IF EXISTS `tbl_product_category`;
CREATE TABLE IF NOT EXISTS `tbl_product_category` (
  `c_id` varchar(10) NOT NULL,
  `c_name` varchar(40) DEFAULT NULL,
  `c_date_added` datetime DEFAULT NULL,
  `c_date_edited` datetime DEFAULT NULL,
  `u_id` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  UNIQUE KEY `c_id` (`c_id`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_product_category`
--

INSERT INTO `tbl_product_category` (`c_id`, `c_name`, `c_date_added`, `c_date_edited`, `u_id`) VALUES
('CAT1', 'Junk Food', '2014-12-23 18:45:55', NULL, 'U1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transaction`
--

DROP TABLE IF EXISTS `tbl_transaction`;
CREATE TABLE IF NOT EXISTS `tbl_transaction` (
  `t_id` varchar(20) NOT NULL,
  `t_date` datetime DEFAULT NULL,
  `t_flow` varchar(10) DEFAULT NULL,
  `t_user` varchar(10) DEFAULT NULL,
  `t_amount` decimal(8,2) DEFAULT NULL,
  `t_details` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  KEY `t_user` (`t_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_transaction`
--

INSERT INTO `tbl_transaction` (`t_id`, `t_date`, `t_flow`, `t_user`, `t_amount`, `t_details`) VALUES
('1', '2015-02-04 20:27:53', 'in', 'U1', '110.00', 'Sales'),
('2', '2015-02-04 20:34:58', 'in', 'U1', '180.00', 'Sales'),
('3', '2015-02-04 20:57:00', 'in', 'U1', '20.00', 'Sales');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `u_id` varchar(10) NOT NULL,
  `u_name` varchar(30) DEFAULT NULL,
  `u_first_name` varchar(30) DEFAULT NULL,
  `u_last_name` varchar(30) DEFAULT NULL,
  `u_type` varchar(7) DEFAULT NULL,
  `u_create_date` datetime DEFAULT NULL,
  `u_password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`u_id`, `u_name`, `u_first_name`, `u_last_name`, `u_type`, `u_create_date`, `u_password`) VALUES
('U1', 'parikshit', 'Parikshit', 'Prasai', 'SUP', '2014-12-23 18:45:12', 'parikshit');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_warehouse`
--

DROP TABLE IF EXISTS `tbl_warehouse`;
CREATE TABLE IF NOT EXISTS `tbl_warehouse` (
  `product_id` varchar(10) DEFAULT NULL,
  `stock` decimal(10,0) DEFAULT NULL,
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_bill`
--
ALTER TABLE `tbl_bill`
  ADD CONSTRAINT `tbl_bill_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `tbl_user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_bill_amount`
--
ALTER TABLE `tbl_bill_amount`
  ADD CONSTRAINT `tbl_bill_amount_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `tbl_bill` (`b_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_bill_detail`
--
ALTER TABLE `tbl_bill_detail`
  ADD CONSTRAINT `tbl_bill_detail_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `tbl_bill` (`b_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_bill_detail_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `tbl_product` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_creditors_advanced`
--
ALTER TABLE `tbl_creditors_advanced`
  ADD CONSTRAINT `tbl_creditors_advanced_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `tbl_bill` (`b_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_permission`
--
ALTER TABLE `tbl_permission`
  ADD CONSTRAINT `tbl_permission_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `tbl_user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_permission_ibfk_2` FOREIGN KEY (`controller_id`) REFERENCES `tbl_controllers` (`controller_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD CONSTRAINT `tbl_product_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `tbl_product_category` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_product_category`
--
ALTER TABLE `tbl_product_category`
  ADD CONSTRAINT `tbl_product_category_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `tbl_user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_transaction`
--
ALTER TABLE `tbl_transaction`
  ADD CONSTRAINT `tbl_transaction_ibfk_1` FOREIGN KEY (`t_user`) REFERENCES `tbl_user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_warehouse`
--
ALTER TABLE `tbl_warehouse`
  ADD CONSTRAINT `tbl_warehouse_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `tbl_product` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
