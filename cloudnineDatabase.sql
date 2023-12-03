CREATE DATABASE  IF NOT EXISTS `cloudnine` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cloudnine`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: cloudnine
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aircraft`
--

DROP TABLE IF EXISTS `aircraft`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aircraft` (
  `aircraft_id` bigint NOT NULL AUTO_INCREMENT,
  `business_cost` decimal(38,2) DEFAULT NULL,
  `business_rows` int NOT NULL,
  `business_seats_per_row` int NOT NULL,
  `comfort_cost` decimal(38,2) DEFAULT NULL,
  `comfort_rows` int NOT NULL,
  `economy_cost` decimal(38,2) DEFAULT NULL,
  `economy_rows` int NOT NULL,
  `model` varchar(255) DEFAULT NULL,
  `seats_per_row` int NOT NULL,
  `flight_id` bigint DEFAULT NULL,
  PRIMARY KEY (`aircraft_id`),
  UNIQUE KEY `UK_haphaev5w2t7sar1joj1i2hjt` (`flight_id`),
  CONSTRAINT `FKoqit5cp9ji96be2s2mnbk7wdl` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aircraft`
--

LOCK TABLES `aircraft` WRITE;
/*!40000 ALTER TABLE `aircraft` DISABLE KEYS */;
INSERT INTO `aircraft` VALUES (1,200.00,2,4,140.00,4,80.00,6,'Boeing 777',6,1),(2,200.00,2,4,140.00,4,80.00,6,'Boeing 777',6,2),(3,200.00,2,4,140.00,4,80.00,6,'Boeing 777',6,3),(4,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,5),(5,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,6),(6,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,7),(7,200.00,2,4,140.00,4,80.00,6,'Boeing 747',6,8),(8,200.00,2,4,140.00,4,80.00,6,'Boeing 747',6,21),(9,200.00,2,4,140.00,4,80.00,6,'Boeing 747',6,NULL),(10,200.00,2,4,140.00,4,80.00,6,'Boeing 747',6,NULL),(11,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,NULL),(12,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,NULL),(13,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,NULL),(14,200.00,2,4,140.00,4,80.00,6,'Airbus 320',6,NULL);
/*!40000 ALTER TABLE `aircraft` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crew`
--

DROP TABLE IF EXISTS `crew`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crew` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member1` varchar(255) DEFAULT NULL,
  `member2` varchar(255) DEFAULT NULL,
  `member3` varchar(255) DEFAULT NULL,
  `member4` varchar(255) DEFAULT NULL,
  `flight_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_bmtt3kggkjg7c62xnp1b3sh46` (`flight_id`),
  CONSTRAINT `FK8m9ampuyopktd7u11a6wxevxg` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crew`
--

LOCK TABLES `crew` WRITE;
/*!40000 ALTER TABLE `crew` DISABLE KEYS */;
INSERT INTO `crew` VALUES (1,' Matt','John','Ryan','Mary',1),(2,' Matt','John','Ryan','Mary',2),(3,' Matt','John','Ryan','Mary',3),(4,' Matt','John','Ryan','Mary',5),(5,' Matt','John','Ryan','Mary',6),(6,' Matt','John','Ryan','Mary',7),(7,' Matt','John','Ryan','Mary',8),(8,' Matt','John','Ryan','Mary',21),(9,' Matt','John','Ryan','Mary',NULL),(10,'Steve','Mark','Kim','Kate',NULL),(11,'Steve','Mark','Kim','Kate',NULL),(12,'Alton','Jeremy','Aemen','Emmanuel',NULL),(14,'qwerq','qwewqq','weqweew','qwe',NULL),(15,'qwerq','qwewqq','weqweew','qwe',NULL);
/*!40000 ALTER TABLE `crew` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
  `flight_id` bigint NOT NULL AUTO_INCREMENT,
  `arrive_time` time(6) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `depart_loc` varchar(255) DEFAULT NULL,
  `depart_time` time(6) DEFAULT NULL,
  `dest_loc` varchar(255) DEFAULT NULL,
  `aircraft_id` bigint DEFAULT NULL,
  `crew_id` bigint DEFAULT NULL,
  PRIMARY KEY (`flight_id`),
  UNIQUE KEY `UK_lixeofqto6ffrlmo4winfes56` (`aircraft_id`),
  UNIQUE KEY `UK_3yns9m1tgctw4qfqdafd5d69a` (`crew_id`),
  CONSTRAINT `FKeqnr4cchgq5kf1chqk5lxgqr2` FOREIGN KEY (`crew_id`) REFERENCES `crew` (`id`),
  CONSTRAINT `FKmofq89ullrd4qk1hllnyf8pn5` FOREIGN KEY (`aircraft_id`) REFERENCES `aircraft` (`aircraft_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'18:00:00.000000','2023-11-30','Calgary','12:00:00.000000','Toronto',1,1),(2,'18:00:00.000000','2023-12-01','Calgary','12:00:00.000000','Toronto',2,2),(3,'18:00:00.000000','2023-12-02','Calgary','12:00:00.000000','Toronto',3,3),(5,'18:00:00.000000','2023-12-03','Calgary','12:00:00.000000','Toronto',4,4),(6,'18:00:00.000000','2023-12-04','Calgary','12:00:00.000000','Toronto',5,5),(7,'18:00:00.000000','2023-12-05','Calgary','12:00:00.000000','Toronto',6,6),(8,'18:00:00.000000','2023-12-05','Paris','12:00:00.000000','New York',7,7),(21,'15:00:00.000000','2023-11-30','Paris','13:00:00.000000','New York',8,8);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `code` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES ('CDG','France','Paris'),('JFK','US','New York'),('LAX','US','Los Angeles'),('LHR','UK','London'),('ORD','US','Chicago'),('SYD','Australia','Sydney'),('YHZ','Canada','Halifax'),('YVR','Canada','Vancouver'),('YYC','Canada','Calgary'),('YYZ','Canada','Toronto');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_transaction`
--

DROP TABLE IF EXISTS `payment_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_transaction` (
  `transaction_id` bigint NOT NULL AUTO_INCREMENT,
  `amount` decimal(38,2) DEFAULT NULL,
  `card_number` varchar(255) DEFAULT NULL,
  `cvv` int NOT NULL,
  `expiry_date` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `ticket_id` bigint DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  UNIQUE KEY `UK_gy9o0p9hq8jk38gse5d2tphy7` (`ticket_id`),
  CONSTRAINT `FKc8vyplfkvpipmcx118hapcla8` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`ticket_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_transaction`
--

LOCK TABLES `payment_transaction` WRITE;
/*!40000 ALTER TABLE `payment_transaction` DISABLE KEYS */;
INSERT INTO `payment_transaction` VALUES (1,215.00,'1234 5676 5432 1234',123,'12/34','tiger',1),(3,215.00,'1234 3212 3432 3321',123,'12/32','Jeremy sugimoto',3),(4,215.00,'1234 5678 9876 5432',123,'23/45','john daly',4),(5,75.00,'3456 7654 3234 5676',234,'23/45','tom holland',5),(6,130.00,'2345 6765 4323 4567',123,'23/45','JOhn Daly',6),(8,130.00,'2345 4323 4543 5543',123,'23/45','Tom Holland',NULL);
/*!40000 ALTER TABLE `payment_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion` (
  `promo_id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`promo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,'77639','20% Off'),(4,'47452','Free Foot Massage'),(5,'69251','50% Offf'),(6,'70471','50% Offf');
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registered_users`
--

DROP TABLE IF EXISTS `registered_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKktq291q5arxd6xvrdc1299huk` (`username`),
  UNIQUE KEY `UKjtxc3uqje20eor9u76gdkj2cn` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_users`
--

LOCK TABLES `registered_users` WRITE;
/*!40000 ALTER TABLE `registered_users` DISABLE KEYS */;
INSERT INTO `registered_users` VALUES (1,'Calgary','sugijere679@gmail.com','John','Smith','password','Alberta','51 Test St','username','1234567'),(2,'1234','jeremy.sugimoto@ucalgary.ca','Alton','Wong','password','123','123456','username1','1231223');
/*!40000 ALTER TABLE `registered_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `seat_id` varchar(255) NOT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `aircraft_id` bigint DEFAULT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `FK1xqnegav4xuo0hee2g5ftej31` (`aircraft_id`),
  CONSTRAINT `FK1xqnegav4xuo0hee2g5ftej31` FOREIGN KEY (`aircraft_id`) REFERENCES `aircraft` (`aircraft_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES ('1-10A',80.00,'Economy',1),('1-10B',80.00,'Economy',1),('1-10C',80.00,'Economy',1),('1-10D',80.00,'Economy',1),('1-10E',80.00,'Economy',1),('1-10F',80.00,'Economy',1),('1-11A',80.00,'Economy',1),('1-11B',80.00,'Economy',1),('1-11C',80.00,'Economy',1),('1-11D',80.00,'Economy',1),('1-11E',80.00,'Economy',1),('1-11F',80.00,'Economy',1),('1-12A',80.00,'Economy',1),('1-12B',80.00,'Economy',1),('1-12C',80.00,'Economy',1),('1-12D',80.00,'Economy',1),('1-12E',80.00,'Economy',1),('1-12F',80.00,'Economy',1),('1-1A',200.00,'Business',1),('1-1B',200.00,'Business',1),('1-1C',200.00,'Business',1),('1-1D',200.00,'Business',1),('1-2A',200.00,'Business',1),('1-2B',200.00,'Business',1),('1-2C',200.00,'Business',1),('1-2D',200.00,'Business',1),('1-3A',140.00,'Comfort',1),('1-3B',140.00,'Comfort',1),('1-3C',140.00,'Comfort',1),('1-3D',140.00,'Comfort',1),('1-3E',140.00,'Comfort',1),('1-3F',140.00,'Comfort',1),('1-4A',140.00,'Comfort',1),('1-4B',140.00,'Comfort',1),('1-4C',140.00,'Comfort',1),('1-4D',140.00,'Comfort',1),('1-4E',140.00,'Comfort',1),('1-4F',140.00,'Comfort',1),('1-5A',140.00,'Comfort',1),('1-5B',140.00,'Comfort',1),('1-5C',140.00,'Comfort',1),('1-5D',140.00,'Comfort',1),('1-5E',140.00,'Comfort',1),('1-5F',140.00,'Comfort',1),('1-6A',140.00,'Comfort',1),('1-6B',140.00,'Comfort',1),('1-6C',140.00,'Comfort',1),('1-6D',140.00,'Comfort',1),('1-6E',140.00,'Comfort',1),('1-6F',140.00,'Comfort',1),('1-7A',80.00,'Economy',1),('1-7B',80.00,'Economy',1),('1-7C',80.00,'Economy',1),('1-7D',80.00,'Economy',1),('1-7E',80.00,'Economy',1),('1-7F',80.00,'Economy',1),('1-8A',80.00,'Economy',1),('1-8B',80.00,'Economy',1),('1-8C',80.00,'Economy',1),('1-8D',80.00,'Economy',1),('1-8E',80.00,'Economy',1),('1-8F',80.00,'Economy',1),('1-9A',80.00,'Economy',1),('1-9B',80.00,'Economy',1),('1-9C',80.00,'Economy',1),('1-9D',80.00,'Economy',1),('1-9E',80.00,'Economy',1),('1-9F',80.00,'Economy',1),('10-10A',80.00,'Economy',10),('10-10B',80.00,'Economy',10),('10-10C',80.00,'Economy',10),('10-10D',80.00,'Economy',10),('10-10E',80.00,'Economy',10),('10-10F',80.00,'Economy',10),('10-11A',80.00,'Economy',10),('10-11B',80.00,'Economy',10),('10-11C',80.00,'Economy',10),('10-11D',80.00,'Economy',10),('10-11E',80.00,'Economy',10),('10-11F',80.00,'Economy',10),('10-12A',80.00,'Economy',10),('10-12B',80.00,'Economy',10),('10-12C',80.00,'Economy',10),('10-12D',80.00,'Economy',10),('10-12E',80.00,'Economy',10),('10-12F',80.00,'Economy',10),('10-1A',200.00,'Business',10),('10-1B',200.00,'Business',10),('10-1C',200.00,'Business',10),('10-1D',200.00,'Business',10),('10-2A',200.00,'Business',10),('10-2B',200.00,'Business',10),('10-2C',200.00,'Business',10),('10-2D',200.00,'Business',10),('10-3A',140.00,'Comfort',10),('10-3B',140.00,'Comfort',10),('10-3C',140.00,'Comfort',10),('10-3D',140.00,'Comfort',10),('10-3E',140.00,'Comfort',10),('10-3F',140.00,'Comfort',10),('10-4A',140.00,'Comfort',10),('10-4B',140.00,'Comfort',10),('10-4C',140.00,'Comfort',10),('10-4D',140.00,'Comfort',10),('10-4E',140.00,'Comfort',10),('10-4F',140.00,'Comfort',10),('10-5A',140.00,'Comfort',10),('10-5B',140.00,'Comfort',10),('10-5C',140.00,'Comfort',10),('10-5D',140.00,'Comfort',10),('10-5E',140.00,'Comfort',10),('10-5F',140.00,'Comfort',10),('10-6A',140.00,'Comfort',10),('10-6B',140.00,'Comfort',10),('10-6C',140.00,'Comfort',10),('10-6D',140.00,'Comfort',10),('10-6E',140.00,'Comfort',10),('10-6F',140.00,'Comfort',10),('10-7A',80.00,'Economy',10),('10-7B',80.00,'Economy',10),('10-7C',80.00,'Economy',10),('10-7D',80.00,'Economy',10),('10-7E',80.00,'Economy',10),('10-7F',80.00,'Economy',10),('10-8A',80.00,'Economy',10),('10-8B',80.00,'Economy',10),('10-8C',80.00,'Economy',10),('10-8D',80.00,'Economy',10),('10-8E',80.00,'Economy',10),('10-8F',80.00,'Economy',10),('10-9A',80.00,'Economy',10),('10-9B',80.00,'Economy',10),('10-9C',80.00,'Economy',10),('10-9D',80.00,'Economy',10),('10-9E',80.00,'Economy',10),('10-9F',80.00,'Economy',10),('11-10A',80.00,'Economy',11),('11-10B',80.00,'Economy',11),('11-10C',80.00,'Economy',11),('11-10D',80.00,'Economy',11),('11-10E',80.00,'Economy',11),('11-10F',80.00,'Economy',11),('11-11A',80.00,'Economy',11),('11-11B',80.00,'Economy',11),('11-11C',80.00,'Economy',11),('11-11D',80.00,'Economy',11),('11-11E',80.00,'Economy',11),('11-11F',80.00,'Economy',11),('11-12A',80.00,'Economy',11),('11-12B',80.00,'Economy',11),('11-12C',80.00,'Economy',11),('11-12D',80.00,'Economy',11),('11-12E',80.00,'Economy',11),('11-12F',80.00,'Economy',11),('11-1A',200.00,'Business',11),('11-1B',200.00,'Business',11),('11-1C',200.00,'Business',11),('11-1D',200.00,'Business',11),('11-2A',200.00,'Business',11),('11-2B',200.00,'Business',11),('11-2C',200.00,'Business',11),('11-2D',200.00,'Business',11),('11-3A',140.00,'Comfort',11),('11-3B',140.00,'Comfort',11),('11-3C',140.00,'Comfort',11),('11-3D',140.00,'Comfort',11),('11-3E',140.00,'Comfort',11),('11-3F',140.00,'Comfort',11),('11-4A',140.00,'Comfort',11),('11-4B',140.00,'Comfort',11),('11-4C',140.00,'Comfort',11),('11-4D',140.00,'Comfort',11),('11-4E',140.00,'Comfort',11),('11-4F',140.00,'Comfort',11),('11-5A',140.00,'Comfort',11),('11-5B',140.00,'Comfort',11),('11-5C',140.00,'Comfort',11),('11-5D',140.00,'Comfort',11),('11-5E',140.00,'Comfort',11),('11-5F',140.00,'Comfort',11),('11-6A',140.00,'Comfort',11),('11-6B',140.00,'Comfort',11),('11-6C',140.00,'Comfort',11),('11-6D',140.00,'Comfort',11),('11-6E',140.00,'Comfort',11),('11-6F',140.00,'Comfort',11),('11-7A',80.00,'Economy',11),('11-7B',80.00,'Economy',11),('11-7C',80.00,'Economy',11),('11-7D',80.00,'Economy',11),('11-7E',80.00,'Economy',11),('11-7F',80.00,'Economy',11),('11-8A',80.00,'Economy',11),('11-8B',80.00,'Economy',11),('11-8C',80.00,'Economy',11),('11-8D',80.00,'Economy',11),('11-8E',80.00,'Economy',11),('11-8F',80.00,'Economy',11),('11-9A',80.00,'Economy',11),('11-9B',80.00,'Economy',11),('11-9C',80.00,'Economy',11),('11-9D',80.00,'Economy',11),('11-9E',80.00,'Economy',11),('11-9F',80.00,'Economy',11),('12-10A',80.00,'Economy',12),('12-10B',80.00,'Economy',12),('12-10C',80.00,'Economy',12),('12-10D',80.00,'Economy',12),('12-10E',80.00,'Economy',12),('12-10F',80.00,'Economy',12),('12-11A',80.00,'Economy',12),('12-11B',80.00,'Economy',12),('12-11C',80.00,'Economy',12),('12-11D',80.00,'Economy',12),('12-11E',80.00,'Economy',12),('12-11F',80.00,'Economy',12),('12-12A',80.00,'Economy',12),('12-12B',80.00,'Economy',12),('12-12C',80.00,'Economy',12),('12-12D',80.00,'Economy',12),('12-12E',80.00,'Economy',12),('12-12F',80.00,'Economy',12),('12-1A',200.00,'Business',12),('12-1B',200.00,'Business',12),('12-1C',200.00,'Business',12),('12-1D',200.00,'Business',12),('12-2A',200.00,'Business',12),('12-2B',200.00,'Business',12),('12-2C',200.00,'Business',12),('12-2D',200.00,'Business',12),('12-3A',140.00,'Comfort',12),('12-3B',140.00,'Comfort',12),('12-3C',140.00,'Comfort',12),('12-3D',140.00,'Comfort',12),('12-3E',140.00,'Comfort',12),('12-3F',140.00,'Comfort',12),('12-4A',140.00,'Comfort',12),('12-4B',140.00,'Comfort',12),('12-4C',140.00,'Comfort',12),('12-4D',140.00,'Comfort',12),('12-4E',140.00,'Comfort',12),('12-4F',140.00,'Comfort',12),('12-5A',140.00,'Comfort',12),('12-5B',140.00,'Comfort',12),('12-5C',140.00,'Comfort',12),('12-5D',140.00,'Comfort',12),('12-5E',140.00,'Comfort',12),('12-5F',140.00,'Comfort',12),('12-6A',140.00,'Comfort',12),('12-6B',140.00,'Comfort',12),('12-6C',140.00,'Comfort',12),('12-6D',140.00,'Comfort',12),('12-6E',140.00,'Comfort',12),('12-6F',140.00,'Comfort',12),('12-7A',80.00,'Economy',12),('12-7B',80.00,'Economy',12),('12-7C',80.00,'Economy',12),('12-7D',80.00,'Economy',12),('12-7E',80.00,'Economy',12),('12-7F',80.00,'Economy',12),('12-8A',80.00,'Economy',12),('12-8B',80.00,'Economy',12),('12-8C',80.00,'Economy',12),('12-8D',80.00,'Economy',12),('12-8E',80.00,'Economy',12),('12-8F',80.00,'Economy',12),('12-9A',80.00,'Economy',12),('12-9B',80.00,'Economy',12),('12-9C',80.00,'Economy',12),('12-9D',80.00,'Economy',12),('12-9E',80.00,'Economy',12),('12-9F',80.00,'Economy',12),('13-10A',80.00,'Economy',13),('13-10B',80.00,'Economy',13),('13-10C',80.00,'Economy',13),('13-10D',80.00,'Economy',13),('13-10E',80.00,'Economy',13),('13-10F',80.00,'Economy',13),('13-11A',80.00,'Economy',13),('13-11B',80.00,'Economy',13),('13-11C',80.00,'Economy',13),('13-11D',80.00,'Economy',13),('13-11E',80.00,'Economy',13),('13-11F',80.00,'Economy',13),('13-12A',80.00,'Economy',13),('13-12B',80.00,'Economy',13),('13-12C',80.00,'Economy',13),('13-12D',80.00,'Economy',13),('13-12E',80.00,'Economy',13),('13-12F',80.00,'Economy',13),('13-1A',200.00,'Business',13),('13-1B',200.00,'Business',13),('13-1C',200.00,'Business',13),('13-1D',200.00,'Business',13),('13-2A',200.00,'Business',13),('13-2B',200.00,'Business',13),('13-2C',200.00,'Business',13),('13-2D',200.00,'Business',13),('13-3A',140.00,'Comfort',13),('13-3B',140.00,'Comfort',13),('13-3C',140.00,'Comfort',13),('13-3D',140.00,'Comfort',13),('13-3E',140.00,'Comfort',13),('13-3F',140.00,'Comfort',13),('13-4A',140.00,'Comfort',13),('13-4B',140.00,'Comfort',13),('13-4C',140.00,'Comfort',13),('13-4D',140.00,'Comfort',13),('13-4E',140.00,'Comfort',13),('13-4F',140.00,'Comfort',13),('13-5A',140.00,'Comfort',13),('13-5B',140.00,'Comfort',13),('13-5C',140.00,'Comfort',13),('13-5D',140.00,'Comfort',13),('13-5E',140.00,'Comfort',13),('13-5F',140.00,'Comfort',13),('13-6A',140.00,'Comfort',13),('13-6B',140.00,'Comfort',13),('13-6C',140.00,'Comfort',13),('13-6D',140.00,'Comfort',13),('13-6E',140.00,'Comfort',13),('13-6F',140.00,'Comfort',13),('13-7A',80.00,'Economy',13),('13-7B',80.00,'Economy',13),('13-7C',80.00,'Economy',13),('13-7D',80.00,'Economy',13),('13-7E',80.00,'Economy',13),('13-7F',80.00,'Economy',13),('13-8A',80.00,'Economy',13),('13-8B',80.00,'Economy',13),('13-8C',80.00,'Economy',13),('13-8D',80.00,'Economy',13),('13-8E',80.00,'Economy',13),('13-8F',80.00,'Economy',13),('13-9A',80.00,'Economy',13),('13-9B',80.00,'Economy',13),('13-9C',80.00,'Economy',13),('13-9D',80.00,'Economy',13),('13-9E',80.00,'Economy',13),('13-9F',80.00,'Economy',13),('14-10A',80.00,'Economy',14),('14-10B',80.00,'Economy',14),('14-10C',80.00,'Economy',14),('14-10D',80.00,'Economy',14),('14-10E',80.00,'Economy',14),('14-10F',80.00,'Economy',14),('14-11A',80.00,'Economy',14),('14-11B',80.00,'Economy',14),('14-11C',80.00,'Economy',14),('14-11D',80.00,'Economy',14),('14-11E',80.00,'Economy',14),('14-11F',80.00,'Economy',14),('14-12A',80.00,'Economy',14),('14-12B',80.00,'Economy',14),('14-12C',80.00,'Economy',14),('14-12D',80.00,'Economy',14),('14-12E',80.00,'Economy',14),('14-12F',80.00,'Economy',14),('14-1A',200.00,'Business',14),('14-1B',200.00,'Business',14),('14-1C',200.00,'Business',14),('14-1D',200.00,'Business',14),('14-2A',200.00,'Business',14),('14-2B',200.00,'Business',14),('14-2C',200.00,'Business',14),('14-2D',200.00,'Business',14),('14-3A',140.00,'Comfort',14),('14-3B',140.00,'Comfort',14),('14-3C',140.00,'Comfort',14),('14-3D',140.00,'Comfort',14),('14-3E',140.00,'Comfort',14),('14-3F',140.00,'Comfort',14),('14-4A',140.00,'Comfort',14),('14-4B',140.00,'Comfort',14),('14-4C',140.00,'Comfort',14),('14-4D',140.00,'Comfort',14),('14-4E',140.00,'Comfort',14),('14-4F',140.00,'Comfort',14),('14-5A',140.00,'Comfort',14),('14-5B',140.00,'Comfort',14),('14-5C',140.00,'Comfort',14),('14-5D',140.00,'Comfort',14),('14-5E',140.00,'Comfort',14),('14-5F',140.00,'Comfort',14),('14-6A',140.00,'Comfort',14),('14-6B',140.00,'Comfort',14),('14-6C',140.00,'Comfort',14),('14-6D',140.00,'Comfort',14),('14-6E',140.00,'Comfort',14),('14-6F',140.00,'Comfort',14),('14-7A',80.00,'Economy',14),('14-7B',80.00,'Economy',14),('14-7C',80.00,'Economy',14),('14-7D',80.00,'Economy',14),('14-7E',80.00,'Economy',14),('14-7F',80.00,'Economy',14),('14-8A',80.00,'Economy',14),('14-8B',80.00,'Economy',14),('14-8C',80.00,'Economy',14),('14-8D',80.00,'Economy',14),('14-8E',80.00,'Economy',14),('14-8F',80.00,'Economy',14),('14-9A',80.00,'Economy',14),('14-9B',80.00,'Economy',14),('14-9C',80.00,'Economy',14),('14-9D',80.00,'Economy',14),('14-9E',80.00,'Economy',14),('14-9F',80.00,'Economy',14),('2-10A',80.00,'Economy',2),('2-10B',80.00,'Economy',2),('2-10C',80.00,'Economy',2),('2-10D',80.00,'Economy',2),('2-10E',80.00,'Economy',2),('2-10F',80.00,'Economy',2),('2-11A',80.00,'Economy',2),('2-11B',80.00,'Economy',2),('2-11C',80.00,'Economy',2),('2-11D',80.00,'Economy',2),('2-11E',80.00,'Economy',2),('2-11F',80.00,'Economy',2),('2-12A',80.00,'Economy',2),('2-12B',80.00,'Economy',2),('2-12C',80.00,'Economy',2),('2-12D',80.00,'Economy',2),('2-12E',80.00,'Economy',2),('2-12F',80.00,'Economy',2),('2-1A',200.00,'Business',2),('2-1B',200.00,'Business',2),('2-1C',200.00,'Business',2),('2-1D',200.00,'Business',2),('2-2A',200.00,'Business',2),('2-2B',200.00,'Business',2),('2-2C',200.00,'Business',2),('2-2D',200.00,'Business',2),('2-3A',140.00,'Comfort',2),('2-3B',140.00,'Comfort',2),('2-3C',140.00,'Comfort',2),('2-3D',140.00,'Comfort',2),('2-3E',140.00,'Comfort',2),('2-3F',140.00,'Comfort',2),('2-4A',140.00,'Comfort',2),('2-4B',140.00,'Comfort',2),('2-4C',140.00,'Comfort',2),('2-4D',140.00,'Comfort',2),('2-4E',140.00,'Comfort',2),('2-4F',140.00,'Comfort',2),('2-5A',140.00,'Comfort',2),('2-5B',140.00,'Comfort',2),('2-5C',140.00,'Comfort',2),('2-5D',140.00,'Comfort',2),('2-5E',140.00,'Comfort',2),('2-5F',140.00,'Comfort',2),('2-6A',140.00,'Comfort',2),('2-6B',140.00,'Comfort',2),('2-6C',140.00,'Comfort',2),('2-6D',140.00,'Comfort',2),('2-6E',140.00,'Comfort',2),('2-6F',140.00,'Comfort',2),('2-7A',80.00,'Economy',2),('2-7B',80.00,'Economy',2),('2-7C',80.00,'Economy',2),('2-7D',80.00,'Economy',2),('2-7E',80.00,'Economy',2),('2-7F',80.00,'Economy',2),('2-8A',80.00,'Economy',2),('2-8B',80.00,'Economy',2),('2-8C',80.00,'Economy',2),('2-8D',80.00,'Economy',2),('2-8E',80.00,'Economy',2),('2-8F',80.00,'Economy',2),('2-9A',80.00,'Economy',2),('2-9B',80.00,'Economy',2),('2-9C',80.00,'Economy',2),('2-9D',80.00,'Economy',2),('2-9E',80.00,'Economy',2),('2-9F',80.00,'Economy',2),('3-10A',80.00,'Economy',3),('3-10B',80.00,'Economy',3),('3-10C',80.00,'Economy',3),('3-10D',80.00,'Economy',3),('3-10E',80.00,'Economy',3),('3-10F',80.00,'Economy',3),('3-11A',80.00,'Economy',3),('3-11B',80.00,'Economy',3),('3-11C',80.00,'Economy',3),('3-11D',80.00,'Economy',3),('3-11E',80.00,'Economy',3),('3-11F',80.00,'Economy',3),('3-12A',80.00,'Economy',3),('3-12B',80.00,'Economy',3),('3-12C',80.00,'Economy',3),('3-12D',80.00,'Economy',3),('3-12E',80.00,'Economy',3),('3-12F',80.00,'Economy',3),('3-1A',200.00,'Business',3),('3-1B',200.00,'Business',3),('3-1C',200.00,'Business',3),('3-1D',200.00,'Business',3),('3-2A',200.00,'Business',3),('3-2B',200.00,'Business',3),('3-2C',200.00,'Business',3),('3-2D',200.00,'Business',3),('3-3A',140.00,'Comfort',3),('3-3B',140.00,'Comfort',3),('3-3C',140.00,'Comfort',3),('3-3D',140.00,'Comfort',3),('3-3E',140.00,'Comfort',3),('3-3F',140.00,'Comfort',3),('3-4A',140.00,'Comfort',3),('3-4B',140.00,'Comfort',3),('3-4C',140.00,'Comfort',3),('3-4D',140.00,'Comfort',3),('3-4E',140.00,'Comfort',3),('3-4F',140.00,'Comfort',3),('3-5A',140.00,'Comfort',3),('3-5B',140.00,'Comfort',3),('3-5C',140.00,'Comfort',3),('3-5D',140.00,'Comfort',3),('3-5E',140.00,'Comfort',3),('3-5F',140.00,'Comfort',3),('3-6A',140.00,'Comfort',3),('3-6B',140.00,'Comfort',3),('3-6C',140.00,'Comfort',3),('3-6D',140.00,'Comfort',3),('3-6E',140.00,'Comfort',3),('3-6F',140.00,'Comfort',3),('3-7A',80.00,'Economy',3),('3-7B',80.00,'Economy',3),('3-7C',80.00,'Economy',3),('3-7D',80.00,'Economy',3),('3-7E',80.00,'Economy',3),('3-7F',80.00,'Economy',3),('3-8A',80.00,'Economy',3),('3-8B',80.00,'Economy',3),('3-8C',80.00,'Economy',3),('3-8D',80.00,'Economy',3),('3-8E',80.00,'Economy',3),('3-8F',80.00,'Economy',3),('3-9A',80.00,'Economy',3),('3-9B',80.00,'Economy',3),('3-9C',80.00,'Economy',3),('3-9D',80.00,'Economy',3),('3-9E',80.00,'Economy',3),('3-9F',80.00,'Economy',3),('4-10A',80.00,'Economy',4),('4-10B',80.00,'Economy',4),('4-10C',80.00,'Economy',4),('4-10D',80.00,'Economy',4),('4-10E',80.00,'Economy',4),('4-10F',80.00,'Economy',4),('4-11A',80.00,'Economy',4),('4-11B',80.00,'Economy',4),('4-11C',80.00,'Economy',4),('4-11D',80.00,'Economy',4),('4-11E',80.00,'Economy',4),('4-11F',80.00,'Economy',4),('4-12A',80.00,'Economy',4),('4-12B',80.00,'Economy',4),('4-12C',80.00,'Economy',4),('4-12D',80.00,'Economy',4),('4-12E',80.00,'Economy',4),('4-12F',80.00,'Economy',4),('4-1A',200.00,'Business',4),('4-1B',200.00,'Business',4),('4-1C',200.00,'Business',4),('4-1D',200.00,'Business',4),('4-2A',200.00,'Business',4),('4-2B',200.00,'Business',4),('4-2C',200.00,'Business',4),('4-2D',200.00,'Business',4),('4-3A',140.00,'Comfort',4),('4-3B',140.00,'Comfort',4),('4-3C',140.00,'Comfort',4),('4-3D',140.00,'Comfort',4),('4-3E',140.00,'Comfort',4),('4-3F',140.00,'Comfort',4),('4-4A',140.00,'Comfort',4),('4-4B',140.00,'Comfort',4),('4-4C',140.00,'Comfort',4),('4-4D',140.00,'Comfort',4),('4-4E',140.00,'Comfort',4),('4-4F',140.00,'Comfort',4),('4-5A',140.00,'Comfort',4),('4-5B',140.00,'Comfort',4),('4-5C',140.00,'Comfort',4),('4-5D',140.00,'Comfort',4),('4-5E',140.00,'Comfort',4),('4-5F',140.00,'Comfort',4),('4-6A',140.00,'Comfort',4),('4-6B',140.00,'Comfort',4),('4-6C',140.00,'Comfort',4),('4-6D',140.00,'Comfort',4),('4-6E',140.00,'Comfort',4),('4-6F',140.00,'Comfort',4),('4-7A',80.00,'Economy',4),('4-7B',80.00,'Economy',4),('4-7C',80.00,'Economy',4),('4-7D',80.00,'Economy',4),('4-7E',80.00,'Economy',4),('4-7F',80.00,'Economy',4),('4-8A',80.00,'Economy',4),('4-8B',80.00,'Economy',4),('4-8C',80.00,'Economy',4),('4-8D',80.00,'Economy',4),('4-8E',80.00,'Economy',4),('4-8F',80.00,'Economy',4),('4-9A',80.00,'Economy',4),('4-9B',80.00,'Economy',4),('4-9C',80.00,'Economy',4),('4-9D',80.00,'Economy',4),('4-9E',80.00,'Economy',4),('4-9F',80.00,'Economy',4),('5-10A',80.00,'Economy',5),('5-10B',80.00,'Economy',5),('5-10C',80.00,'Economy',5),('5-10D',80.00,'Economy',5),('5-10E',80.00,'Economy',5),('5-10F',80.00,'Economy',5),('5-11A',80.00,'Economy',5),('5-11B',80.00,'Economy',5),('5-11C',80.00,'Economy',5),('5-11D',80.00,'Economy',5),('5-11E',80.00,'Economy',5),('5-11F',80.00,'Economy',5),('5-12A',80.00,'Economy',5),('5-12B',80.00,'Economy',5),('5-12C',80.00,'Economy',5),('5-12D',80.00,'Economy',5),('5-12E',80.00,'Economy',5),('5-12F',80.00,'Economy',5),('5-1A',200.00,'Business',5),('5-1B',200.00,'Business',5),('5-1C',200.00,'Business',5),('5-1D',200.00,'Business',5),('5-2A',200.00,'Business',5),('5-2B',200.00,'Business',5),('5-2C',200.00,'Business',5),('5-2D',200.00,'Business',5),('5-3A',140.00,'Comfort',5),('5-3B',140.00,'Comfort',5),('5-3C',140.00,'Comfort',5),('5-3D',140.00,'Comfort',5),('5-3E',140.00,'Comfort',5),('5-3F',140.00,'Comfort',5),('5-4A',140.00,'Comfort',5),('5-4B',140.00,'Comfort',5),('5-4C',140.00,'Comfort',5),('5-4D',140.00,'Comfort',5),('5-4E',140.00,'Comfort',5),('5-4F',140.00,'Comfort',5),('5-5A',140.00,'Comfort',5),('5-5B',140.00,'Comfort',5),('5-5C',140.00,'Comfort',5),('5-5D',140.00,'Comfort',5),('5-5E',140.00,'Comfort',5),('5-5F',140.00,'Comfort',5),('5-6A',140.00,'Comfort',5),('5-6B',140.00,'Comfort',5),('5-6C',140.00,'Comfort',5),('5-6D',140.00,'Comfort',5),('5-6E',140.00,'Comfort',5),('5-6F',140.00,'Comfort',5),('5-7A',80.00,'Economy',5),('5-7B',80.00,'Economy',5),('5-7C',80.00,'Economy',5),('5-7D',80.00,'Economy',5),('5-7E',80.00,'Economy',5),('5-7F',80.00,'Economy',5),('5-8A',80.00,'Economy',5),('5-8B',80.00,'Economy',5),('5-8C',80.00,'Economy',5),('5-8D',80.00,'Economy',5),('5-8E',80.00,'Economy',5),('5-8F',80.00,'Economy',5),('5-9A',80.00,'Economy',5),('5-9B',80.00,'Economy',5),('5-9C',80.00,'Economy',5),('5-9D',80.00,'Economy',5),('5-9E',80.00,'Economy',5),('5-9F',80.00,'Economy',5),('6-10A',80.00,'Economy',6),('6-10B',80.00,'Economy',6),('6-10C',80.00,'Economy',6),('6-10D',80.00,'Economy',6),('6-10E',80.00,'Economy',6),('6-10F',80.00,'Economy',6),('6-11A',80.00,'Economy',6),('6-11B',80.00,'Economy',6),('6-11C',80.00,'Economy',6),('6-11D',80.00,'Economy',6),('6-11E',80.00,'Economy',6),('6-11F',80.00,'Economy',6),('6-12A',80.00,'Economy',6),('6-12B',80.00,'Economy',6),('6-12C',80.00,'Economy',6),('6-12D',80.00,'Economy',6),('6-12E',80.00,'Economy',6),('6-12F',80.00,'Economy',6),('6-1A',200.00,'Business',6),('6-1B',200.00,'Business',6),('6-1C',200.00,'Business',6),('6-1D',200.00,'Business',6),('6-2A',200.00,'Business',6),('6-2B',200.00,'Business',6),('6-2C',200.00,'Business',6),('6-2D',200.00,'Business',6),('6-3A',140.00,'Comfort',6),('6-3B',140.00,'Comfort',6),('6-3C',140.00,'Comfort',6),('6-3D',140.00,'Comfort',6),('6-3E',140.00,'Comfort',6),('6-3F',140.00,'Comfort',6),('6-4A',140.00,'Comfort',6),('6-4B',140.00,'Comfort',6),('6-4C',140.00,'Comfort',6),('6-4D',140.00,'Comfort',6),('6-4E',140.00,'Comfort',6),('6-4F',140.00,'Comfort',6),('6-5A',140.00,'Comfort',6),('6-5B',140.00,'Comfort',6),('6-5C',140.00,'Comfort',6),('6-5D',140.00,'Comfort',6),('6-5E',140.00,'Comfort',6),('6-5F',140.00,'Comfort',6),('6-6A',140.00,'Comfort',6),('6-6B',140.00,'Comfort',6),('6-6C',140.00,'Comfort',6),('6-6D',140.00,'Comfort',6),('6-6E',140.00,'Comfort',6),('6-6F',140.00,'Comfort',6),('6-7A',80.00,'Economy',6),('6-7B',80.00,'Economy',6),('6-7C',80.00,'Economy',6),('6-7D',80.00,'Economy',6),('6-7E',80.00,'Economy',6),('6-7F',80.00,'Economy',6),('6-8A',80.00,'Economy',6),('6-8B',80.00,'Economy',6),('6-8C',80.00,'Economy',6),('6-8D',80.00,'Economy',6),('6-8E',80.00,'Economy',6),('6-8F',80.00,'Economy',6),('6-9A',80.00,'Economy',6),('6-9B',80.00,'Economy',6),('6-9C',80.00,'Economy',6),('6-9D',80.00,'Economy',6),('6-9E',80.00,'Economy',6),('6-9F',80.00,'Economy',6),('7-10A',80.00,'Economy',7),('7-10B',80.00,'Economy',7),('7-10C',80.00,'Economy',7),('7-10D',80.00,'Economy',7),('7-10E',80.00,'Economy',7),('7-10F',80.00,'Economy',7),('7-11A',80.00,'Economy',7),('7-11B',80.00,'Economy',7),('7-11C',80.00,'Economy',7),('7-11D',80.00,'Economy',7),('7-11E',80.00,'Economy',7),('7-11F',80.00,'Economy',7),('7-12A',80.00,'Economy',7),('7-12B',80.00,'Economy',7),('7-12C',80.00,'Economy',7),('7-12D',80.00,'Economy',7),('7-12E',80.00,'Economy',7),('7-12F',80.00,'Economy',7),('7-1A',200.00,'Business',7),('7-1B',200.00,'Business',7),('7-1C',200.00,'Business',7),('7-1D',200.00,'Business',7),('7-2A',200.00,'Business',7),('7-2B',200.00,'Business',7),('7-2C',200.00,'Business',7),('7-2D',200.00,'Business',7),('7-3A',140.00,'Comfort',7),('7-3B',140.00,'Comfort',7),('7-3C',140.00,'Comfort',7),('7-3D',140.00,'Comfort',7),('7-3E',140.00,'Comfort',7),('7-3F',140.00,'Comfort',7),('7-4A',140.00,'Comfort',7),('7-4B',140.00,'Comfort',7),('7-4C',140.00,'Comfort',7),('7-4D',140.00,'Comfort',7),('7-4E',140.00,'Comfort',7),('7-4F',140.00,'Comfort',7),('7-5A',140.00,'Comfort',7),('7-5B',140.00,'Comfort',7),('7-5C',140.00,'Comfort',7),('7-5D',140.00,'Comfort',7),('7-5E',140.00,'Comfort',7),('7-5F',140.00,'Comfort',7),('7-6A',140.00,'Comfort',7),('7-6B',140.00,'Comfort',7),('7-6C',140.00,'Comfort',7),('7-6D',140.00,'Comfort',7),('7-6E',140.00,'Comfort',7),('7-6F',140.00,'Comfort',7),('7-7A',80.00,'Economy',7),('7-7B',80.00,'Economy',7),('7-7C',80.00,'Economy',7),('7-7D',80.00,'Economy',7),('7-7E',80.00,'Economy',7),('7-7F',80.00,'Economy',7),('7-8A',80.00,'Economy',7),('7-8B',80.00,'Economy',7),('7-8C',80.00,'Economy',7),('7-8D',80.00,'Economy',7),('7-8E',80.00,'Economy',7),('7-8F',80.00,'Economy',7),('7-9A',80.00,'Economy',7),('7-9B',80.00,'Economy',7),('7-9C',80.00,'Economy',7),('7-9D',80.00,'Economy',7),('7-9E',80.00,'Economy',7),('7-9F',80.00,'Economy',7),('8-10A',80.00,'Economy',8),('8-10B',80.00,'Economy',8),('8-10C',80.00,'Economy',8),('8-10D',80.00,'Economy',8),('8-10E',80.00,'Economy',8),('8-10F',80.00,'Economy',8),('8-11A',80.00,'Economy',8),('8-11B',80.00,'Economy',8),('8-11C',80.00,'Economy',8),('8-11D',80.00,'Economy',8),('8-11E',80.00,'Economy',8),('8-11F',80.00,'Economy',8),('8-12A',80.00,'Economy',8),('8-12B',80.00,'Economy',8),('8-12C',80.00,'Economy',8),('8-12D',80.00,'Economy',8),('8-12E',80.00,'Economy',8),('8-12F',80.00,'Economy',8),('8-1A',200.00,'Business',8),('8-1B',200.00,'Business',8),('8-1C',200.00,'Business',8),('8-1D',200.00,'Business',8),('8-2A',200.00,'Business',8),('8-2B',200.00,'Business',8),('8-2C',200.00,'Business',8),('8-2D',200.00,'Business',8),('8-3A',140.00,'Comfort',8),('8-3B',140.00,'Comfort',8),('8-3C',140.00,'Comfort',8),('8-3D',140.00,'Comfort',8),('8-3E',140.00,'Comfort',8),('8-3F',140.00,'Comfort',8),('8-4A',140.00,'Comfort',8),('8-4B',140.00,'Comfort',8),('8-4C',140.00,'Comfort',8),('8-4D',140.00,'Comfort',8),('8-4E',140.00,'Comfort',8),('8-4F',140.00,'Comfort',8),('8-5A',140.00,'Comfort',8),('8-5B',140.00,'Comfort',8),('8-5C',140.00,'Comfort',8),('8-5D',140.00,'Comfort',8),('8-5E',140.00,'Comfort',8),('8-5F',140.00,'Comfort',8),('8-6A',140.00,'Comfort',8),('8-6B',140.00,'Comfort',8),('8-6C',140.00,'Comfort',8),('8-6D',140.00,'Comfort',8),('8-6E',140.00,'Comfort',8),('8-6F',140.00,'Comfort',8),('8-7A',80.00,'Economy',8),('8-7B',80.00,'Economy',8),('8-7C',80.00,'Economy',8),('8-7D',80.00,'Economy',8),('8-7E',80.00,'Economy',8),('8-7F',80.00,'Economy',8),('8-8A',80.00,'Economy',8),('8-8B',80.00,'Economy',8),('8-8C',80.00,'Economy',8),('8-8D',80.00,'Economy',8),('8-8E',80.00,'Economy',8),('8-8F',80.00,'Economy',8),('8-9A',80.00,'Economy',8),('8-9B',80.00,'Economy',8),('8-9C',80.00,'Economy',8),('8-9D',80.00,'Economy',8),('8-9E',80.00,'Economy',8),('8-9F',80.00,'Economy',8),('9-10A',80.00,'Economy',9),('9-10B',80.00,'Economy',9),('9-10C',80.00,'Economy',9),('9-10D',80.00,'Economy',9),('9-10E',80.00,'Economy',9),('9-10F',80.00,'Economy',9),('9-11A',80.00,'Economy',9),('9-11B',80.00,'Economy',9),('9-11C',80.00,'Economy',9),('9-11D',80.00,'Economy',9),('9-11E',80.00,'Economy',9),('9-11F',80.00,'Economy',9),('9-12A',80.00,'Economy',9),('9-12B',80.00,'Economy',9),('9-12C',80.00,'Economy',9),('9-12D',80.00,'Economy',9),('9-12E',80.00,'Economy',9),('9-12F',80.00,'Economy',9),('9-1A',200.00,'Business',9),('9-1B',200.00,'Business',9),('9-1C',200.00,'Business',9),('9-1D',200.00,'Business',9),('9-2A',200.00,'Business',9),('9-2B',200.00,'Business',9),('9-2C',200.00,'Business',9),('9-2D',200.00,'Business',9),('9-3A',140.00,'Comfort',9),('9-3B',140.00,'Comfort',9),('9-3C',140.00,'Comfort',9),('9-3D',140.00,'Comfort',9),('9-3E',140.00,'Comfort',9),('9-3F',140.00,'Comfort',9),('9-4A',140.00,'Comfort',9),('9-4B',140.00,'Comfort',9),('9-4C',140.00,'Comfort',9),('9-4D',140.00,'Comfort',9),('9-4E',140.00,'Comfort',9),('9-4F',140.00,'Comfort',9),('9-5A',140.00,'Comfort',9),('9-5B',140.00,'Comfort',9),('9-5C',140.00,'Comfort',9),('9-5D',140.00,'Comfort',9),('9-5E',140.00,'Comfort',9),('9-5F',140.00,'Comfort',9),('9-6A',140.00,'Comfort',9),('9-6B',140.00,'Comfort',9),('9-6C',140.00,'Comfort',9),('9-6D',140.00,'Comfort',9),('9-6E',140.00,'Comfort',9),('9-6F',140.00,'Comfort',9),('9-7A',80.00,'Economy',9),('9-7B',80.00,'Economy',9),('9-7C',80.00,'Economy',9),('9-7D',80.00,'Economy',9),('9-7E',80.00,'Economy',9),('9-7F',80.00,'Economy',9),('9-8A',80.00,'Economy',9),('9-8B',80.00,'Economy',9),('9-8C',80.00,'Economy',9),('9-8D',80.00,'Economy',9),('9-8E',80.00,'Economy',9),('9-8F',80.00,'Economy',9),('9-9A',80.00,'Economy',9),('9-9B',80.00,'Economy',9),('9-9C',80.00,'Economy',9),('9-9D',80.00,'Economy',9),('9-9E',80.00,'Economy',9),('9-9F',80.00,'Economy',9);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticket_id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `insurance` bit(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `to_email` varchar(255) DEFAULT NULL,
  `flight_id` bigint DEFAULT NULL,
  `seat_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  UNIQUE KEY `UK_3yhl9h2vv803mhf1jpk8puq4a` (`seat_id`),
  KEY `FKfju27cbcbl1w16qeora1r636q` (`flight_id`),
  CONSTRAINT `FKfju27cbcbl1w16qeora1r636q` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`),
  CONSTRAINT `FKqahao9a85drt47ikjp0b8syvh` FOREIGN KEY (`seat_id`) REFERENCES `seat` (`seat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'tiger',_binary '','woods','sugijere679@gmail.com',1,'1-1A'),(3,'Jeremy',_binary '','Sugimoto','sugijere679@gmail.com',1,'1-1C'),(4,'john',_binary '','daly','sugijere679@gmail.com',1,'1-2B'),(5,'tom',_binary '','holland','sugijere679@gmail.com',1,'1-12E'),(6,'John',_binary '\0','Daly','sugijere679@gmail.com',1,'1-3C');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-03 16:56:46
