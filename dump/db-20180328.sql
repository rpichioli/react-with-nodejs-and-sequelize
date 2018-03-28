CREATE DATABASE  IF NOT EXISTS `react_sequelize` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `react_sequelize`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: react_sequelize
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `cover` varchar(150) NOT NULL,
  `year` varchar(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `band_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `band_id` (`band_id`),
  CONSTRAINT `album_ibfk_1` FOREIGN KEY (`band_id`) REFERENCES `band` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,'Iced Earth','','http://3.bp.blogspot.com/-HNyT28QrC30/VaMhTNQEPaI/AAAAAAAAB4c/OhPY3dddZwk/s1600/IEarth%2B%255BAmerican%255D.jpg','1990','2018-03-20 13:28:00','2018-03-20 13:28:00',1),(2,'Somewhere in Time','First Iron Maiden album recorded with synth','https://musicmaniauk.com/wp-content/uploads/2017/12/IRONSOME.jpg','1986','2018-03-26 17:07:00','2018-03-26 17:07:00',2),(3,'Plagues of Babylon',NULL,'https://i0.wp.com/www.metalinjection.net/wp-content/uploads/2013/09/Iced-Earth-Plagues-of-Babylon.jpg?fit=600%2C600','2014','2018-03-27 14:04:00','2018-03-27 14:04:00',1),(4,'Night of the Stormrider','Recorded with John Greely as singer','https://hmrock.com.br/wp-content/uploads/2017/11/61H5hiuB9sL.jpg','1992','2018-03-27 14:05:00','2018-03-27 14:05:00',1),(5,'A Flame to the Ground Beneath','Second and latest album','http://mp3-red.cc/cover/3718949-460x460/a-flame-to-the-ground-beneath.jpg','2003','2018-03-28 19:43:10','2018-03-28 19:52:54',3),(6,'Awakening the World','The first one, released in 2001','http://2.bp.blogspot.com/-6wjtxmr_Uek/VnFtiomgS9I/AAAAAAAALxg/Seue8FTNLT8/s1600/Front.JPG','2001','2018-03-28 19:54:20','2018-03-28 19:54:20',3);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `band`
--

DROP TABLE IF EXISTS `band`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `band` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `year` int(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `band`
--

LOCK TABLES `band` WRITE;
/*!40000 ALTER TABLE `band` DISABLE KEYS */;
INSERT INTO `band` VALUES (1,'Iced Earth','Iced Mother Fucking Earth!',1990,'2018-03-07 17:13:00','2018-03-07 17:13:00'),(2,'Iron Maiden','Up the Irons!',1975,'2018-03-07 17:13:00','2018-03-07 17:13:00'),(3,'Lost Horizon','',1990,'2018-03-07 17:13:00','2018-03-07 17:13:00'),(4,'Sabaton','',1999,'2018-03-07 17:13:00','2018-03-07 17:13:00'),(5,'Manowar','',1980,'2018-03-15 21:04:39','2018-03-07 17:13:00');
/*!40000 ALTER TABLE `band` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-28 16:57:00
