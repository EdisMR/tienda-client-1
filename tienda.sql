-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-03-2022 a las 19:28:57
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

DROP TABLE IF EXISTS `compra`;
CREATE TABLE IF NOT EXISTS `compra` (
  `idauto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` tinytext NOT NULL,
  `telefono` tinytext NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `entregado` tinyint(1) NOT NULL,
  `notas` text NOT NULL,
  `productos` text NOT NULL,
  `idaleatorio` tinytext NOT NULL,
  PRIMARY KEY (`idauto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `idauto` int(11) NOT NULL AUTO_INCREMENT,
  `idaleatorio` tinytext NOT NULL,
  `titulo` tinytext NOT NULL,
  `descripcion` tinytext NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `categoria` tinytext NOT NULL,
  `imagenes` text NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  PRIMARY KEY (`idauto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sistema`
--

DROP TABLE IF EXISTS `sistema`;
CREATE TABLE IF NOT EXISTS `sistema` (
  `idauto` int(11) NOT NULL AUTO_INCREMENT,
  `nombrenegocio` tinytext NOT NULL,
  `logo` tinytext NOT NULL,
  `telefonowspp` tinytext NOT NULL,
  PRIMARY KEY (`idauto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idauto` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` tinytext NOT NULL,
  `contrasenia` tinytext NOT NULL,
  `tipo` tinytext NOT NULL,
  PRIMARY KEY (`idauto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
