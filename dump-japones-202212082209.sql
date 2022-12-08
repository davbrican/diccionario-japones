-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: japones
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `palabras`
--

DROP TABLE IF EXISTS `palabras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `palabras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `español` text NOT NULL,
  `hiragana` text NOT NULL,
  `romaji` text NOT NULL,
  `categoria` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palabras`
--

LOCK TABLES `palabras` WRITE;
/*!40000 ALTER TABLE `palabras` DISABLE KEYS */;
INSERT INTO `palabras` VALUES (1,'Cabeza','あたま','Atama','Cuerpo'),(2,'Cara','かお','Kao','Cuerpo'),(3,'Ojo/s','め','Me','Cuerpo'),(4,'Nariz','はな','Hana','Cuerpo'),(5,'Oreja','みみ','Mimi','Cuerpo'),(6,'Boca','くち','Kuchi','Cuerpo'),(7,'Diente/s','は','Ha','Cuerpo'),(8,'Cuerpo','からだ','Karada','Cuerpo'),(9,'Mano/s','て','Te','Cuerpo'),(10,'Pierna/s, Pie/s','あし','Ashi','Cuerpo'),(11,'Vientre','おなか','Onaka','Cuerpo'),(12,'Cabello','かみ','Kami','Cuerpo'),(13,'Cuello','くび','Kubi','Cuerpo'),(14,'Garganta','のど','Nodo','Cuerpo'),(15,'Brazo/s','うで','Ude','Cuerpo'),(16,'Dedo/s','ゆび','Yubi','Cuerpo'),(17,'Espalda','せなか','Senaka','Cuerpo'),(18,'Abuelo','おじいさん','Ojiisan','Familia'),(19,'Abuela','おばあさん','Obaasan','Familia'),(20,'Tío','おじいさん','Ojisan','Familia'),(21,'Tía','おばあさん','Obasan','Familia'),(22,'Padre','おとうさん','Otousan','Familia'),(23,'Madre','おかあさん','Okaasan','Familia'),(24,'Hermano Mayor','おにいさん','Oniisan','Familia'),(25,'Hermana Mayor','おねえさん','Oneesan','Familia'),(26,'Hermano Menor','おとうと','Otouto','Familia'),(27,'Hermana Menor','いもうと','Imouto','Familia'),(28,'Primo/a','いとこ','Itoko','Familia'),(29,'Hijo/a','こども','Kodomo','Familia'),(30,'Nieto/a','まご','Mago','Familia'),(31,'Sobrino','おい','Oi','Familia'),(32,'Sobrina','めい','Mei','Familia'),(33,'Yo','わたし','Watashi','Familia'),(34,'Rojo','あか','Aka','Colores'),(35,'Blanco','しろ','Shiro','Colores'),(36,'Azul','あお','Ao','Colores'),(37,'Negro','くろ','Kuro','Colores'),(38,'Verde','みどり','Midori','Colores'),(39,'Morado','むらさき','Murasaki','Colores'),(40,'Azul claro','みずいろ','Mizuiro','Colores'),(41,'Amarillo','きいろ','Kiiro','Colores'),(42,'marrón','ちゃいろ','Chairo','Colores'),(43,'Gris','はいいろ','Haiiro','Colores'),(44,'Dorado','きんいろ','Kiniro','Colores'),(45,'Plateado','ぎにろ','Giniro','Colores'),(46,'Rosa','ぴんく','Pinku','Colores'),(47,'Naranja','おれんじ','Orenji','Colores'),(48,'Fresas','いちご','Ichigo','Comida'),(49,'Melocotón','もも','Momo','Comida'),(50,'Sandía','すいか','Suika','Comida'),(51,'Uvas','ぶどう','Budou','Comida'),(52,'Kaki','かき','Kaki','Comida'),(53,'Manzana','りんご','Ringo','Comida'),(54,'Plátano','ばなな','Banana','Comida'),(55,'Mandarina','みかん','Mikan','Comida'),(56,'Pepino','きゅうり','Kyuuri','Comida'),(57,'Tomate','とまと','Tomato','Comida'),(58,'Berenjena','なす','Nasu','Comida'),(59,'Espinaca','ほうれんす','Hourensou','Comida'),(60,'Patatas','じゃがいも','Jagaimo','Comida'),(61,'Cebolla','たまねぎ','Tamanegi','Comida'),(62,'Zanahoria','にじん','Ninjin','Comida'),(63,'Lechuga','れたす','Retasu','Comida'),(64,'Música','おんがく','Ongaku','Aficiones'),(65,'Karaoke','からおけ','Karaoke','Aficiones'),(66,'Película','えいが','Eiga','Aficiones'),(67,'Flamenco','ふらめんこ','Furamenko','Aficiones'),(68,'Natación','すいえい','Suiei','Aficiones'),(69,'Lectura','どくしょ','Dokusho','Aficiones'),(70,'Manga','まんが','Manga','Aficiones'),(71,'Matemáticas','すうがく','Suugaku','Aficiones'),(72,'Bicicleta','じてんしゃ','Jitensha','Aficiones'),(73,'Fútbol','サッカー','Sakka-','Aficiones'),(74,'Viaje','りょこう','Ryokou','Aficiones'),(75,'Compra','かいもの','Kaimono','Aficiones'),(76,'Arreglo floral','いけばな','Ikebana','Aficiones'),(77,'Corrida de toros','とうぎゅう','Tougyuu','Aficiones'),(78,'Juudou','じゅうどう','Juudou','Aficiones'),(79,'Fotografía','しゃしん','Shashin','Aficiones'),(80,'Dibujar','え','E','Aficiones'),(81,'Serie de televisión','どらま','Dorama','Aficiones'),(82,'Videojuegos','ヴぃでおがめ','Videogame','Aficiones'),(83,'Caminar','さんぽ','Sanpo','Aficiones');
/*!40000 ALTER TABLE `palabras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'japones'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-08 22:09:41
