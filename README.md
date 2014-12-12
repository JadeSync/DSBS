DSBS
====

Department Store Billing System


Copy the following sql dump and execute it in your sql server.



-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2014 at 12:09 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dsbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill`
--

CREATE TABLE IF NOT EXISTS `tbl_bill` (
  `b_id` varchar(10) NOT NULL,
  `u_id` varchar(10) DEFAULT NULL,
  `b_date` datetime DEFAULT NULL,
  PRIMARY KEY (`b_id`),
  UNIQUE KEY `b_id` (`b_id`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill_amount`
--

CREATE TABLE IF NOT EXISTS `tbl_bill_amount` (
  `b_id` varchar(10) DEFAULT NULL,
  `b_amt` decimal(8,2) DEFAULT NULL,
  KEY `b_id` (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bill_detail`
--

CREATE TABLE IF NOT EXISTS `tbl_bill_detail` (
  `b_id` varchar(10) DEFAULT NULL,
  `p_id` varchar(10) DEFAULT NULL,
  `qty` decimal(8,2) DEFAULT NULL,
  KEY `b_id` (`b_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_controllers`
--

CREATE TABLE IF NOT EXISTS `tbl_controllers` (
  `controller_id` varchar(10) NOT NULL DEFAULT '',
  `controller_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`controller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_permission`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_category`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transaction`
--

CREATE TABLE IF NOT EXISTS `tbl_transaction` (
  `t_id` varchar(10) NOT NULL,
  `t_date` datetime DEFAULT NULL,
  `t_cash_flow` varchar(5) DEFAULT NULL,
  `b_id` varchar(10) DEFAULT NULL,
  `p_id` varchar(10) DEFAULT NULL,
  `u_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `t_id` (`t_id`),
  KEY `b_id` (`b_id`),
  KEY `p_id` (`p_id`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

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
  ADD CONSTRAINT `tbl_transaction_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `tbl_bill` (`b_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_transaction_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `tbl_product` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_transaction_ibfk_3` FOREIGN KEY (`u_id`) REFERENCES `tbl_user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

