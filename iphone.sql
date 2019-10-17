-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-10-17 13:16:03
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `iphone`
--

-- --------------------------------------------------------

--
-- 表的结构 `admuser`
--

CREATE TABLE IF NOT EXISTS `admuser` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admuser`
--

INSERT INTO `admuser` (`username`, `password`) VALUES
('admin', 'admin'),
('tomcat', 'tomcat'),
('cat', 'cat12345678');

-- --------------------------------------------------------

--
-- 表的结构 `buy`
--

CREATE TABLE IF NOT EXISTS `buy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `goods` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `stus` varchar(5) NOT NULL DEFAULT '未处理',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `buy`
--

INSERT INTO `buy` (`id`, `username`, `sex`, `phone`, `goods`, `address`, `price`, `stus`) VALUES
(1, '王志源', '男', '13462345987', 'iphone11pro 内存128', '广东省深圳市', 'RMB 6000', '未处理'),
(4, '王志源', '男', '15634565432', 'iPhone 11', '广东省深圳市宝安区西部硅谷', 'RMB 5499', '已处理');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`username`, `password`, `phone`) VALUES
('tom', 'tom', '13462345987'),
('cat', 'cat', '13343574434'),
('wangzhi', 'wanzghi', '13412344321');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
