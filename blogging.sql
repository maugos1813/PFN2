-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-06-2024 a las 21:29:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blogging`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Category`
--

CREATE TABLE `Category` (
  `idCategory` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Category`
--

INSERT INTO `Category` (`idCategory`, `categoryName`) VALUES
(1, 'Tecnología'),
(2, 'category actualizado'),
(3, 'Cocina'),
(4, 'Moda'),
(5, 'Salud y Bienestar'),
(6, 'Deportes'),
(7, 'Cine y TV'),
(8, 'Música'),
(9, 'Literatura'),
(11, '11va category'),
(13, 'category actualizado por admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Comment`
--

CREATE TABLE `Comment` (
  `comment_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Comment`
--

INSERT INTO `Comment` (`comment_id`, `content`, `idUser`, `idPost`, `created_at`, `updated_at`) VALUES
(1, 'Excelente artículo, muy informativo.', 1, 1, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(2, 'Me gustaría más información sobre este tema.', 2, 1, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(3, '¡Qué interesante punto de vista!', 3, 2, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(4, 'Nunca había considerado este enfoque.', 2, 3, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(6, 'Estoy de acuerdo contigo, gracias por el insight.', 1, 3, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(8, 'hola 8 hola 8 hola, prueba de comentario ', 5, 2, '2024-06-24 16:42:11', '2024-06-26 15:19:19'),
(10, 'Interesante discusión, ¿qué opinan los demás?', 2, 3, '2024-06-24 16:42:11', '2024-06-24 16:42:11'),
(11, 'hola hola hola, prueba de comentario', 1, 12, '2024-06-26 02:02:48', '2024-06-26 02:02:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post`
--

CREATE TABLE `Post` (
  `idPost` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Post`
--

INSERT INTO `Post` (`idPost`, `title`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Primer post', 'Contenido del primer post...', 1, '2023-01-01 15:00:00', '2023-01-01 15:00:00'),
(2, 'Segundo post', 'Contenido del segundo post...', 2, '2023-01-02 16:00:00', '2023-01-02 16:00:00'),
(3, 'Tercer post', 'Contenido del tercer post...', 3, '2023-01-03 17:00:00', '2023-01-03 17:00:00'),
(4, 'Cuarto post', 'Contenido del cuarto post...', 1, '2023-01-04 18:00:00', '2023-01-04 18:00:00'),
(5, 'Quinto post', 'Contenido del quinto post...', 2, '2023-01-05 19:00:00', '2023-01-05 19:00:00'),
(6, 'Sexto post', 'Contenido del sexto post...', 3, '2023-01-06 20:00:00', '2023-01-06 20:00:00'),
(7, 'Séptimo post', 'Contenido del séptimo post...', 1, '2023-01-07 21:00:00', '2023-01-07 21:00:00'),
(8, 'Octavo post', 'Contenido del octavo post...', 2, '2023-01-08 22:00:00', '2023-01-08 22:00:00'),
(12, 'Duodécimo post', 'Contenido del duodécimo post...', 3, '2023-01-13 02:00:00', '2023-01-13 02:00:00'),
(13, 'Decimotercer post', 'Contenido del decimotercer post...', 1, '2023-01-14 03:00:00', '2023-01-14 03:00:00'),
(14, 'Decimocuarto post', 'Contenido del decimocuarto post...', 2, '2023-01-15 04:00:00', '2023-01-15 04:00:00'),
(15, 'Decimoquinto post', 'Contenido del decimoquinto post...', 3, '2023-01-15 05:00:00', '2023-01-15 05:00:00'),
(16, 'Decimosexto post', 'Contenido del decimosexto post...', 1, '2023-01-16 06:00:00', '2023-01-16 06:00:00'),
(17, 'Decimoséptimo post', 'Contenido del decimoséptimo post...', 2, '2023-01-17 07:00:00', '2023-01-17 07:00:00'),
(18, 'Decimoctavo post', 'Contenido del decimoctavo post...', 3, '2023-01-18 08:00:00', '2023-01-18 08:00:00'),
(19, 'Decimonoveno post', 'Contenido del decimonoveno post...', 1, '2023-01-19 09:00:00', '2023-01-19 09:00:00'),
(20, 'Vigésimo post', 'Contenido del vigésimo post...', 2, '2023-01-20 10:00:00', '2023-01-20 10:00:00'),
(21, 'Vigésimo primer post', 'Contenido del vigésimo primer post...', 3, '2023-01-21 11:00:00', '2023-01-21 11:00:00'),
(22, 'Vigésimo segundo post', 'Contenido del vigésimo segundo post...', 1, '2023-01-22 12:00:00', '2023-01-22 12:00:00'),
(23, 'Vigésimo tercer post', 'Contenido del vigésimo tercer post...', 2, '2023-01-23 13:00:00', '2023-01-23 13:00:00'),
(24, 'Vigésimo cuarto post', 'Contenido del vigésimo cuarto post...', 3, '2023-01-24 14:00:00', '2023-01-24 14:00:00'),
(25, 'Vigésimo quinto post', 'Contenido del vigésimo quinto post...', 1, '2023-01-25 15:00:00', '2023-01-25 15:00:00'),
(26, 'Vigésimo sexto post', 'Contenido del vigésimo sexto post...', 2, '2023-01-26 16:00:00', '2023-01-26 16:00:00'),
(27, 'Vigésimo séptimo post', 'Contenido del vigésimo séptimo post...', 3, '2023-01-27 17:00:00', '2023-01-27 17:00:00'),
(28, 'Vigésimo octavo post', 'Contenido del vigésimo octavo post...', 1, '2023-01-28 18:00:00', '2023-01-28 18:00:00'),
(29, 'Vigésimo noveno post', 'Contenido del vigésimo noveno post...', 2, '2023-01-29 19:00:00', '2023-01-29 19:00:00'),
(30, 'Trigésimo post', 'Contenido del trigésimo post...', 3, '2023-01-30 20:00:00', '2023-01-30 20:00:00'),
(31, 'Mi 1er intento', 'Esto es una prueba, es lo maximo estar aprendiendo', NULL, '2024-06-25 01:10:29', '2024-06-25 01:10:29'),
(32, 'hola hola hola', 'prueba de admin', NULL, '2024-06-26 00:57:55', '2024-06-26 00:57:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post_Category`
--

CREATE TABLE `Post_Category` (
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Post_Category`
--

INSERT INTO `Post_Category` (`post_id`, `category_id`) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 6),
(3, 3),
(4, 4),
(4, 7),
(5, 5),
(5, 9),
(6, 6),
(6, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Role`
--

CREATE TABLE `Role` (
  `idRole` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Role`
--

INSERT INTO `Role` (`idRole`, `role_name`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `idUser` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idRole` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `User`
--

INSERT INTO `User` (`idUser`, `username`, `password`, `email`, `idRole`) VALUES
(1, 'usuario1', 'password1', 'usuario1@example.com', 1),
(2, 'usuario2', 'password2', 'usuario2@example.com', 2),
(3, 'usuario3', 'password3', 'usuario3@example.com', 2),
(5, 'mau', 'password5', 'usuario5@example.com', 2),
(6, 'usuario6', 'password6', 'usuario6@example.com', 1),
(8, 'usuario8', 'password8', 'usuario8@example.com', 2),
(9, 'usuario9', 'password9', 'usuario9@example.com', 2),
(14, 'maufab', 'mau123', 'mau@gmial.com', NULL),
(15, 'maufab1', 'mau1234', 'maufab1@gmial.com', NULL),
(16, 'Mat', 'mau123', 'mau@gmail.com', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `post_id` (`idPost`),
  ADD KEY `Comment_ibfk_1` (`idUser`);

--
-- Indices de la tabla `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `Post_Category`
--
ALTER TABLE `Post_Category`
  ADD PRIMARY KEY (`post_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`idRole`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD KEY `role_id` (`idRole`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Category`
--
ALTER TABLE `Category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `Comment`
--
ALTER TABLE `Comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `Post`
--
ALTER TABLE `Post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `Role`
--
ALTER TABLE `Role`
  MODIFY `idRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `User`
--
ALTER TABLE `User`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `Comment_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `Post` (`idPost`);

--
-- Filtros para la tabla `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`idUser`);

--
-- Filtros para la tabla `Post_Category`
--
ALTER TABLE `Post_Category`
  ADD CONSTRAINT `Post_Category_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `Post` (`idPost`),
  ADD CONSTRAINT `Post_Category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Category` (`idCategory`);

--
-- Filtros para la tabla `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `User_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `Role` (`idRole`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
