CREATE DATABASE  IF NOT EXISTS `southland_development` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `southland_development`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: southland_development
-- ------------------------------------------------------
-- Server version	5.7.10-log

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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'123 First St.','','Atlanta','GA','30303','2019-08-19 20:53:41.285','2019-08-19 20:53:41.285'),(2,'234 Second St.','','New York','NY','20202','2019-08-19 20:53:41.285','2019-08-19 20:53:41.285'),(3,'345 Third St.','','Seattle','WA','10101','2019-08-19 20:53:41.285','2019-08-19 20:53:41.285'),(4,'456 Fouth St.','','San Francisco','CA','40404','2019-08-19 20:53:41.285','2019-08-19 20:53:41.285'),(5,'567 Fifth St.','','Boston','MA','50505','2019-08-19 20:53:41.285','2019-08-19 20:53:41.285');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientcontactnotes`
--

DROP TABLE IF EXISTS `clientcontactnotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientcontactnotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` text,
  `clientContactId` int(11) DEFAULT NULL,
  `submitterId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientcontactnotes`
--

LOCK TABLES `clientcontactnotes` WRITE;
/*!40000 ALTER TABLE `clientcontactnotes` DISABLE KEYS */;
INSERT INTO `clientcontactnotes` VALUES (1,'this is a test note',1,2,0,'2019-08-19 20:53:41.543','2019-08-19 20:53:41.543'),(2,'this is another test note',1,3,0,'2019-08-19 20:53:41.543','2019-08-19 20:53:41.543'),(3,'This is a really long ADMIN NOTE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',1,4,1,'2019-08-19 20:53:41.543','2019-08-19 20:53:41.543');
/*!40000 ALTER TABLE `clientcontactnotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientcontacts`
--

DROP TABLE IF EXISTS `clientcontacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientcontacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `phone1` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `personalMetadata` varchar(255) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientcontacts`
--

LOCK TABLES `clientcontacts` WRITE;
/*!40000 ALTER TABLE `clientcontacts` DISABLE KEYS */;
INSERT INTO `clientcontacts` VALUES (1,'Adam','Back','Adjuster','254-790-9289','882-587-6372',NULL,'dictum.magna@faucibusMorbivehicula.ca','nostra, per inceptos hymenaeos.','sed dictum eleifend, nunc risus varius',1,'2019-08-19 20:53:41.427','2019-08-19 20:53:41.427'),(2,'Hal','Finney','Adjuster','692-973-2775','957-941-4841',NULL,'sociis.natoque@CuraeDonec.co.uk','feugiat placerat','ipsum ac mi eleifend egestas.',4,'2019-08-19 20:53:41.427','2019-08-19 20:53:41.427'),(3,'Wei','Dai','Adjuster','556-851-0655','758-632-4713',NULL,'tempor.bibendum.Donec@lobortisquam.ca','urna convallis erat,','ut',2,'2019-08-19 20:53:41.427','2019-08-19 20:53:41.427'),(4,'Pieter','Wuillie','Adjuster','781-848-6254','794-628-7002',NULL,'magna@vitaealiquet.net','Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.','et malesuada fames ac turpis egestas.',3,'2019-08-19 20:53:41.427','2019-08-19 20:53:41.427'),(5,'Greg','Maxwell','Adjuster','968-242-1154','579-892-5544',NULL,'lectus.Nullam@pedePraesenteu.ca','semper et, lacinia','Mauris quis turpis vitae purus',4,'2019-08-19 20:53:41.427','2019-08-19 20:53:41.427');
/*!40000 ALTER TABLE `clientcontacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Berger','2019-08-19 20:53:41.366','2019-08-19 20:53:41.366'),(2,'Allied','2019-08-19 20:53:41.366','2019-08-19 20:53:41.366'),(3,'Old Dominion','2019-08-19 20:53:41.366','2019-08-19 20:53:41.366'),(4,'Fisher','2019-08-19 20:53:41.366','2019-08-19 20:53:41.366');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobitems`
--

DROP TABLE IF EXISTS `jobitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inventoryNumber` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `lossCode` varchar(255) DEFAULT NULL,
  `purchaseLocation` varchar(255) DEFAULT NULL,
  `purchaseCost` float DEFAULT NULL,
  `replacementCost` float DEFAULT NULL,
  `claimAmount` float DEFAULT NULL,
  `additionalDescription` text,
  `comments` text,
  `jobId` int(11) DEFAULT NULL,
  `submitterId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobitems`
--

LOCK TABLES `jobitems` WRITE;
/*!40000 ALTER TABLE `jobitems` DISABLE KEYS */;
INSERT INTO `jobitems` VALUES (1,'123abc',2,'zyx code','123123','Dawsonville, GA',100,60,60,'description','some more comments',1,1,'2019-08-19 20:53:41.596','2019-08-19 20:53:41.596'),(2,'456def',1,'wvu code','321321','Atlanta, GA',200,100,600,'additional description','some more comments for this item',1,1,'2019-08-19 20:53:41.596','2019-08-19 20:53:41.596'),(4,'444',1,'aa','bbb','Duluth',50,40,40,'hihihi','mom',1,1,'2019-08-20 16:08:45.000','2019-08-20 16:08:45.000');
/*!40000 ALTER TABLE `jobitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobnotes`
--

DROP TABLE IF EXISTS `jobnotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobnotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` text,
  `jobId` int(11) DEFAULT NULL,
  `submitterId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobnotes`
--

LOCK TABLES `jobnotes` WRITE;
/*!40000 ALTER TABLE `jobnotes` DISABLE KEYS */;
INSERT INTO `jobnotes` VALUES (1,'this is a test job note',1,2,0,'2019-08-19 20:53:41.516','2019-08-19 20:53:41.516'),(2,'this is another test job note',1,2,0,'2019-08-19 20:53:41.516','2019-08-19 20:53:41.516'),(3,'This is a really long ADMIN NOTE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',1,1,1,'2019-08-19 20:53:41.516','2019-08-19 20:53:41.516');
/*!40000 ALTER TABLE `jobnotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `intakeDate` datetime DEFAULT NULL,
  `followupDate` datetime(3) DEFAULT NULL,
  `serviceDate` datetime(3) DEFAULT NULL,
  `repId` int(11) DEFAULT NULL,
  `regionTechId` int(11) DEFAULT NULL,
  `serviceStatusId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  `shipperId` int(11) DEFAULT NULL,
  `accountingRefId` varchar(255) DEFAULT NULL,
  `encounterFrom` datetime(3) DEFAULT NULL,
  `encounterTo` datetime(3) DEFAULT NULL,
  `billable` tinyint(1) DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `net` float DEFAULT NULL,
  `techAuthLimit` float DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,1,'2019-04-13 20:19:10','2019-04-23 20:19:09.961','2019-04-20 20:19:09.961',1,1,1,1,1,1,'dunno','2019-04-23 20:19:09.961','2019-04-23 20:19:09.961',1,100,50,50,'2019-08-19 20:53:41.434','2019-08-19 20:53:41.434'),(2,1,'2019-04-12 20:19:10','2019-04-22 20:19:09.961','2019-04-19 20:19:09.961',2,2,2,2,2,2,'dunno 2','2019-04-22 20:19:09.961','2019-04-22 20:19:09.961',1,200,150,150,'2019-08-19 20:53:41.434','2019-08-19 20:53:41.434'),(3,1,'2019-04-11 20:19:10','2019-04-11 20:19:09.961','2019-04-18 20:19:09.961',3,3,3,3,3,3,'dunno 3','2019-04-21 20:19:09.961','2019-04-21 20:19:09.961',1,300,250,250,'2019-08-19 20:53:41.434','2019-08-19 20:53:41.434');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2019-08-19 20:53:41.308','2019-08-19 20:53:41.308'),(2,'Manager','2019-08-19 20:53:41.308','2019-08-19 20:53:41.308'),(3,'Customer Service','2019-08-19 20:53:41.308','2019-08-19 20:53:41.308'),(4,'Tech','2019-08-19 20:53:41.308','2019-08-19 20:53:41.308');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20190419120101-create-role.js'),('20190419120102-create-client.js'),('20190419120103-create-user.js'),('20190419120104-create-client-contact.js'),('20190423194923-create-job.js'),('20190423195250-create-address.js'),('20190423195555-create-shipper-customer.js'),('20190520185049-create-user-note.js'),('20190526231351-create-job-notes.js'),('20190705005827-create-client-contact-notes.js'),('20190726195118-create-shipper-note.js'),('20190819201354-create-job-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippercustomers`
--

DROP TABLE IF EXISTS `shippercustomers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shippercustomers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `phone1` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `email1` varchar(255) DEFAULT NULL,
  `email2` varchar(255) DEFAULT NULL,
  `notes` text,
  `personalMetadata` text,
  `directions` text,
  `clientId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippercustomers`
--

LOCK TABLES `shippercustomers` WRITE;
/*!40000 ALTER TABLE `shippercustomers` DISABLE KEYS */;
INSERT INTO `shippercustomers` VALUES (1,'Amy','Fowler','Mrs.',1,'254-790-9289','882-587-6372','dictum.magna@faucibusMorbivehicula.ca','dictum.magna2@faucibusMorbivehicula.ca','nostra, per inceptos hymenaeos.','sed dictum eleifend, nunc risus varius','go to my house',1,'2019-08-19 20:53:41.482','2019-08-19 20:53:41.482'),(2,'Taco','Dan','Mr.',2,'692-973-2775','957-941-4841','sociis.natoque@CuraeDonec.co.uk','sociis.natoque2@CuraeDonec.co.uk','feugiat placerat','ipsum ac mi eleifend egestas.','go to my house 2',4,'2019-08-19 20:53:41.482','2019-08-19 20:53:41.482'),(3,'Bob','Loblaw','Mr.',3,'556-851-0655','758-632-4713','tempor.bibendum.Donec@lobortisquam.ca','tempor.bibendum.Donec2@lobortisquam.ca','urna convallis erat,','ut','go to my house 3',2,'2019-08-19 20:53:41.482','2019-08-19 20:53:41.482'),(4,'Brian','May','Mr.',4,'781-848-6254','794-628-7002','magna@vitaealiquet.net','magna2@vitaealiquet.net','Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.','et malesuada fames ac turpis egestas.','go to my house 4',3,'2019-08-19 20:53:41.482','2019-08-19 20:53:41.482'),(5,'Julian','Pierce','Mr.',5,'968-242-1154','579-892-5544','lectus.Nullam@pedePraesenteu.ca','lectus.Nullam2@pedePraesenteu.ca','semper et, lacinia','Mauris quis turpis vitae purus','go to my house 5',4,'2019-08-19 20:53:41.482','2019-08-19 20:53:41.482');
/*!40000 ALTER TABLE `shippercustomers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippernotes`
--

DROP TABLE IF EXISTS `shippernotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shippernotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` text,
  `shipperId` int(11) DEFAULT NULL,
  `submitterId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippernotes`
--

LOCK TABLES `shippernotes` WRITE;
/*!40000 ALTER TABLE `shippernotes` DISABLE KEYS */;
INSERT INTO `shippernotes` VALUES (1,'this is a test shipper note',1,2,0,'2019-08-19 20:53:41.551','2019-08-19 20:53:41.551'),(2,'this is another test shipper note',1,2,0,'2019-08-19 20:53:41.551','2019-08-19 20:53:41.551'),(3,'This is a really long ADMIN NOTE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',1,1,1,'2019-08-19 20:53:41.551','2019-08-19 20:53:41.551');
/*!40000 ALTER TABLE `shippernotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usernotes`
--

DROP TABLE IF EXISTS `usernotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usernotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` text,
  `userId` int(11) DEFAULT NULL,
  `submitterId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usernotes`
--

LOCK TABLES `usernotes` WRITE;
/*!40000 ALTER TABLE `usernotes` DISABLE KEYS */;
INSERT INTO `usernotes` VALUES (1,'this is a test note',1,2,0,'2019-08-19 20:53:41.509','2019-08-19 20:53:41.509'),(2,'this is another test note',1,3,0,'2019-08-19 20:53:41.509','2019-08-19 20:53:41.509'),(3,'This is a really long ADMIN NOTE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',1,4,1,'2019-08-19 20:53:41.509','2019-08-19 20:53:41.509');
/*!40000 ALTER TABLE `usernotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `phone1` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `notes` text,
  `personalMetadata` text,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ferdinand','Gregory','Adjuster','254-790-9289','882-587-6372','dictum.magna@faucibusMorbivehicula.ca','$2a$10$RKxQRO4rS0Wf/1Jdq6RaXuLoJQx8bfPpZTlVv6zKzdxhStPVNZW22','nostra, per inceptos hymenaeos.','sed dictum eleifend, nunc risus varius',1,'2019-08-19 20:53:41.395','2019-08-19 20:53:41.395'),(2,'Guy','Lott','Adjuster','692-973-2775','957-941-4841','sociis.natoque@CuraeDonec.co.uk','$2a$10$sjOS.pSm6QdL6PeXTTuh2O8ciNA9VXRqM4HcmkDVC/Yg3sb8SlHd6','feugiat placerat','ipsum ac mi eleifend egestas.',4,'2019-08-19 20:53:41.395','2019-08-19 20:53:41.395'),(3,'Kasper','Ballard','Adjuster','556-851-0655','758-632-4713','tempor.bibendum.Donec@lobortisquam.ca','$2a$10$RKxQRO4rS0Wf/1Jdq6RaXuLoJQx8bfPpZTlVv6zKzdxhStPVNZW22','urna convallis erat,','ut',2,'2019-08-19 20:53:41.395','2019-08-19 20:53:41.395'),(4,'Gary','May','Adjuster','781-848-6254','794-628-7002','magna@vitaealiquet.net','$2a$10$pUbIWezSOQS0vWIbgn1wXeZP5jHm9E2H3kbpW4f2lj3FWqcrMrbr2','Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.','et malesuada fames ac turpis egestas.',3,'2019-08-19 20:53:41.395','2019-08-19 20:53:41.395');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-19 21:48:02
