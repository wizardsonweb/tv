CREATE DATABASE IF NOT EXISTS `appdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `appdb`;

CREATE TABLE IF NOT EXISTS `accounts` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(50) NOT NULL,
`password` varchar(255) NOT NULL,
`role` varchar(50) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `role`) VALUES (1, 'eggdev', 'test123', 'admin');

INSERT INTO `accounts` (`id`, `username`, `password`, `role`) VALUES (2, 'user', 'test123', 'user');