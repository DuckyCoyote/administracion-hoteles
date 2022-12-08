-- MariaDB dump 10.19  Distrib 10.9.3-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: hoteles
-- ------------------------------------------------------
-- Server version	10.9.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gerentes`
--

DROP TABLE IF EXISTS `gerentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gerentes` (
  `id_grt` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `ap_paterno` varchar(15) NOT NULL,
  `ap_materno` varchar(15) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  PRIMARY KEY (`id_grt`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerentes`
--

LOCK TABLES `gerentes` WRITE;
/*!40000 ALTER TABLE `gerentes` DISABLE KEYS */;
INSERT INTO `gerentes` VALUES
(1,'Miguelin','Azcarraga','Mariano','5537615098'),
(2,'Alfredo','Alvarado','Almazar','3433775566'),
(3,'Benito','Becerril','Barcelo','3433885566'),
(4,'Carmelo','Camacho','Camilo','3433399966'),
(5,'Dante','Degollado','Dominguez','3422335566'),
(6,'Eusterio','Echevarria','Escudero','3411335566'),
(7,'Alfredo','Alvarado','Almazar','3433775566'),
(8,'Benito','Becerril','Barcelo','3433885566'),
(9,'Carmelo','Camacho','Camilo','3433399966'),
(10,'Dante','Degollado','Dominguez','3422335566'),
(11,'Eusterio','Echevarria','Escudero','3411335566'),
(12,'Alfredo','Alvarado','Almazar','3433775566'),
(13,'Benito','Becerril','Barcelo','3433885566'),
(14,'Carmelo','Camacho','Camilo','3433399966'),
(15,'Dante','Degollado','Dominguez','3422335566'),
(16,'Eusterio','Echevarria','Escudero','3411335566');
/*!40000 ALTER TABLE `gerentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitaciones`
--

DROP TABLE IF EXISTS `habitaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `habitaciones` (
  `id_hbt` int(11) NOT NULL AUTO_INCREMENT,
  `piso` varchar(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `refrigerador` tinyint(1) NOT NULL,
  `id_htl` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_hbt`),
  KEY `id_htl` (`id_htl`),
  CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`id_htl`) REFERENCES `hoteles` (`id_htl`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitaciones`
--

LOCK TABLES `habitaciones` WRITE;
/*!40000 ALTER TABLE `habitaciones` DISABLE KEYS */;
INSERT INTO `habitaciones` VALUES
(1,'p1','ep11',1,1),
(2,'p5','mp12',1,1),
(3,'p2','epp21',1,1),
(4,'p2','mpp22',1,1),
(5,'p3','sp33',1,1),
(6,'p1','ep11',0,2),
(7,'p1','mp12',0,2),
(8,'p2','epp21',1,2),
(9,'p2','mpp22',1,2),
(10,'p3','sp33',1,2);
/*!40000 ALTER TABLE `habitaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoteles`
--

DROP TABLE IF EXISTS `hoteles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoteles` (
  `id_htl` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `id_grt` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_htl`),
  KEY `id_grt` (`id_grt`),
  CONSTRAINT `hoteles_ibfk_1` FOREIGN KEY (`id_grt`) REFERENCES `gerentes` (`id_grt`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoteles`
--

LOCK TABLES `hoteles` WRITE;
/*!40000 ALTER TABLE `hoteles` DISABLE KEYS */;
INSERT INTO `hoteles` VALUES
(1,'CASA IZTAC ZACATLÁN','Nicolás Bravo 32-A, Centro, 73310 Zacatlán, Pue.','1234567890','casa_iztzc@hoteles.com',1),
(2,'Hotel Del Rosario','Benito Juárez García 5-8, Centro, 73310 Santa Julia, Pue.','0987654321','rosario_hotrl@hoteles.com',2),
(3,'HOTEL LA GRAN MANZANA','J. María Iglesias 25 Colonia Santa Julia, 73310 Zacatlán, Pue.','0198237645','gran_manzana@hoteles.com',3),
(4,'HOTEL CASA SILVESTRE','Franciscozarco Cosío número 4, Centro, 73310 Zacatlán, Pue.','1908237645','silvestre_hotel@hoteles.com',4),
(5,'Hotel y Suites Hacienda Casagrande','Av. Leandro Valle 26, Centro, 73310 Zacatlán, Pue.','9015647287','haciendaCasagrande@hoteles.es',7);
/*!40000 ALTER TABLE `hoteles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-09 18:09:06
