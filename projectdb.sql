-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 16, 2016 at 11:38 PM
-- Server version: 10.0.17-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `fullName` varchar(40) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `problem` varchar(40) NOT NULL,
  `doctor` varchar(40) NOT NULL,
  `date` date NOT NULL,
  `schedule` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`fullName`, `age`, `email`, `phone`, `problem`, `doctor`, `date`, `schedule`) VALUES
('hemanth varma mudduluru', 25, 'hemanthvrmrox@gmail.com', '8163281935', 'Problem Follow up', 'Donald E Cole', '2016-04-19', 'No thank you'),
('srinidhi', 24, 'srinidhi@gmail.com', '8163281938', 'New Problem', 'Donald E Cole', '2016-04-26', 'Schedule any time'),
('ahmed', 28, 'ahmed@gmail.com', '8167890290', 'New Problem', 'Robert R Morrison', '2016-04-27', 'Schedule any time'),
('hemanths', 259, 'hemanthvrmrox@gmail.com', '9700070000', 'New Problem', 'Donald E Cole', '2016-04-21', 'Schedule any time'),
('hemanth varma', 23, 'hemanthvrmrox@gmail.com', '9700078074', 'General check up', 'Barry D Rutherford', '2016-04-20', 'Schedule any time'),
('varma', 25, 'hemanthvrmrox@gmail.com', '9701074074', 'New Problem', 'Robert R Morrison', '2016-04-26', 'No thank you');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `feedback` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`name`, `email`, `feedback`) VALUES
('ahmed', 'shaik@gmail.com', 'thank you.'),
('hemanth', 'hemanth@gmail.com', 'nice website'),
('rohit', 'rohit@gmail.com', 'just checking now'),
('srinidhi', 'srinidhi@gmail.com', 'just checking');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`phone`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
