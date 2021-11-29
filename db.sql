--
-- Create database `blog`
--

CREATE DATABASE `blog`;

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(255) NOT NULL
);

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`title`, `content`, `image`) VALUES
('Lacoste Chemise Ricky Regal', 'lorem ipsum', 'https://lh3.googleusercontent.com/gVfUbDsexJ5M83kuqzijWixn5tzIXu9Y2pyBfmciQMF50-T2TqoDuKnmvNVtoTMNETDp7BISqdrlM7x1dUSnN_PSzJW13pNXc5Y_l0DgnuyfuV6ZspSwRgPshhaQR3buqdUmlS63'),
('Lacoste Ricky Regale Velour', 'lorem ipsum', 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/fr/dw29f8dee1/PH1693_4SN_20.jpg');

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL
);

INSERT INTO `user` (`username`, `password`, `avatar`) VALUES
('Rick Sanchez', 'password', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');