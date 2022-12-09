-- MariaDB dump 10.19  Distrib 10.9.4-MariaDB, for Linux (x86_64)
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
-- Table structure for table `catalogos`
--

DROP TABLE IF EXISTS `catalogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogos` (
  `nombre_hbt` varchar(10) DEFAULT NULL,
  `id_htl` int(11) DEFAULT NULL,
  `id_hbt` int(11) DEFAULT NULL,
  `precio` varchar(100) NOT NULL,
  KEY `id_htl` (`id_htl`),
  KEY `id_hbt` (`id_hbt`),
  CONSTRAINT `catalogos_ibfk_1` FOREIGN KEY (`id_htl`) REFERENCES `hoteles` (`id_htl`),
  CONSTRAINT `catalogos_ibfk_2` FOREIGN KEY (`id_hbt`) REFERENCES `tipoHabitacion` (`id_hbt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogos`
--

LOCK TABLES `catalogos` WRITE;
/*!40000 ALTER TABLE `catalogos` DISABLE KEYS */;
INSERT INTO `catalogos` VALUES
(NULL,1,1,'1300'),
(NULL,1,1,'1300'),
(NULL,1,2,'1700'),
(NULL,1,2,'1700'),
(NULL,1,3,'2500'),
(NULL,2,1,'1300'),
(NULL,2,1,'1300'),
(NULL,2,2,'1700'),
(NULL,2,2,'1700'),
(NULL,2,3,'2500'),
(NULL,3,1,'1300'),
(NULL,3,1,'1300'),
(NULL,3,2,'1700'),
(NULL,3,2,'1700'),
(NULL,3,3,'2500'),
(NULL,4,1,'1300'),
(NULL,4,1,'1300'),
(NULL,4,2,'1700'),
(NULL,4,2,'1700'),
(NULL,4,3,'2500'),
(NULL,5,1,'1300'),
(NULL,5,1,'1300'),
(NULL,5,2,'1700'),
(NULL,5,2,'1700'),
(NULL,5,3,'2500');
/*!40000 ALTER TABLE `catalogos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credenciales`
--

DROP TABLE IF EXISTS `credenciales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credenciales` (
  `id_credencial` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(80) NOT NULL,
  `clave` varchar(15) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_credencial`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `credenciales_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credenciales`
--

LOCK TABLES `credenciales` WRITE;
/*!40000 ALTER TABLE `credenciales` DISABLE KEYS */;
INSERT INTO `credenciales` VALUES
(1,'admin','admin',1),
(2,'user','user',2);
/*!40000 ALTER TABLE `credenciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gerentes`
--

DROP TABLE IF EXISTS `gerentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gerentes` (
  `id_grt` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `ap_paterno` varchar(15) NOT NULL,
  `ap_materno` varchar(15) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `id_htl` int(11) NOT NULL,
  `img_ruta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_grt`),
  KEY `id_htl` (`id_htl`),
  CONSTRAINT `gerentes_ibfk_1` FOREIGN KEY (`id_htl`) REFERENCES `hoteles` (`id_htl`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerentes`
--

LOCK TABLES `gerentes` WRITE;
/*!40000 ALTER TABLE `gerentes` DISABLE KEYS */;
INSERT INTO `gerentes` VALUES
(1,'Alfredo','Alvarado','Almazar','3433775566',1,NULL),
(2,'Benito','Becerril','Barcelo','3433885566',2,NULL),
(3,'Carmelo','Camacho','Camilo','3433399966',3,NULL),
(4,'Dante','Degollado','Dominguez','3422335566',4,NULL),
(7,'Alejandro','Daniel','Cruz','1',1,'EArx2SAU4AEe0XS.jpeg'),
(8,'Alejandro','Alejandro','Cruz','1',1,'EArx2SAU4AEe0XS.jpeg'),
(9,'Alejandro','Daniel','Cruz','1',1,'EArx2SAU4AEe0XS.jpeg'),
(10,'Alejandro','Alejandro','Alejandro','1',1,'EArx2SAU4AEe0XS.jpeg'),
(11,'Ale','Ale','Ale','1',1,NULL),
(12,'Ale','Ale','Ale','1',1,NULL),
(13,'alejo','alejo','alejo','1',1,NULL),
(14,'alejo','alejo','alej','1',1,NULL),
(15,'alejo','alejo','alejo','1',1,NULL),
(16,'alejo','alejo','alejo','1',1,NULL),
(17,'Alejo','Alejo','ALejo','1',1,NULL),
(18,'alejo','alejo','alejo','1',1,NULL),
(19,'admin','admin','admin','1',1,NULL),
(20,'Alejandro','Flores','Mariano','1',1,NULL),
(21,'a','a','a','1',1,NULL);
/*!40000 ALTER TABLE `gerentes` ENABLE KEYS */;
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
  PRIMARY KEY (`id_htl`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoteles`
--

LOCK TABLES `hoteles` WRITE;
/*!40000 ALTER TABLE `hoteles` DISABLE KEYS */;
INSERT INTO `hoteles` VALUES
(1,'CASA IZTAC ZACATLÁN','Nicolás Bravo 32-A, Centro, 73310 Zacatlán, Pue.','1234567890','casa_iztzc@hoteles.com'),
(2,'Hotel Del Rosario','Benito Juárez García 5-8, Centro, 73310 Santa Julia, Pue.','0987654321','rosario_hotrl@hoteles.com'),
(3,'HOTEL LA GRAN MANZANA','J. María Iglesias 25 Colonia Santa Julia, 73310 Zacatlán, Pue.','0198237645','gran_manzana@hoteles.com'),
(4,'HOTEL CASA SILVESTRE','Franciscozarco Cosío número 4, Centro, 73310 Zacatlán, Pue.','1908237645','silvestre_hotel@hoteles.com'),
(5,'Hotel y Suites Hacienda Casagrande','Av. Leandro Valle 26, Centro, 73310 Zacatlán, Pue.','9015647283','haciendaCasagrande@hoteles.com');
/*!40000 ALTER TABLE `hoteles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_gerentes`
--

DROP TABLE IF EXISTS `img_gerentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_gerentes` (
  `id_img_grt` int(11) NOT NULL AUTO_INCREMENT,
  `id_grt` int(11) DEFAULT NULL,
  `img_ruta` varchar(30) NOT NULL,
  PRIMARY KEY (`id_img_grt`),
  KEY `id_grt` (`id_grt`),
  CONSTRAINT `img_gerentes_ibfk_1` FOREIGN KEY (`id_grt`) REFERENCES `gerentes` (`id_grt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_gerentes`
--

LOCK TABLES `img_gerentes` WRITE;
/*!40000 ALTER TABLE `img_gerentes` DISABLE KEYS */;
/*!40000 ALTER TABLE `img_gerentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_habitaciones`
--

DROP TABLE IF EXISTS `img_habitaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_habitaciones` (
  `id_img_hbt` int(11) NOT NULL AUTO_INCREMENT,
  `id_hbt` int(11) NOT NULL,
  `img_ruta` varchar(30) NOT NULL,
  PRIMARY KEY (`id_img_hbt`),
  UNIQUE KEY `id_img_hbt` (`id_img_hbt`),
  KEY `id_hbt` (`id_hbt`),
  CONSTRAINT `img_habitaciones_ibfk_1` FOREIGN KEY (`id_hbt`) REFERENCES `tipoHabitacion` (`id_hbt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_habitaciones`
--

LOCK TABLES `img_habitaciones` WRITE;
/*!40000 ALTER TABLE `img_habitaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `img_habitaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_hoteles`
--

DROP TABLE IF EXISTS `img_hoteles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_hoteles` (
  `id_img_htl` int(11) NOT NULL AUTO_INCREMENT,
  `id_htl` int(11) DEFAULT NULL,
  `img_ruta` varchar(30) NOT NULL,
  PRIMARY KEY (`id_img_htl`),
  KEY `id_htl` (`id_htl`),
  CONSTRAINT `img_hoteles_ibfk_1` FOREIGN KEY (`id_htl`) REFERENCES `hoteles` (`id_htl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_hoteles`
--

LOCK TABLES `img_hoteles` WRITE;
/*!40000 ALTER TABLE `img_hoteles` DISABLE KEYS */;
/*!40000 ALTER TABLE `img_hoteles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(30) NOT NULL,
  `ident` varchar(30) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES
(1,'administrador','IJN_YMT'),
(2,'usuario','BDPGCA');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoHabitacion`
--

DROP TABLE IF EXISTS `tipoHabitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoHabitacion` (
  `id_hbt` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `img_ruta` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_hbt`),
  UNIQUE KEY `id_hbt` (`id_hbt`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoHabitacion`
--

LOCK TABLES `tipoHabitacion` WRITE;
/*!40000 ALTER TABLE `tipoHabitacion` DISABLE KEYS */;
INSERT INTO `tipoHabitacion` VALUES
(1,'estandar',NULL),
(2,'matrimonial',NULL),
(3,'suite',NULL);
/*!40000 ALTER TABLE `tipoHabitacion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09  2:48:09
