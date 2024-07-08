CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `alias` VARCHAR(30) NOT NULL UNIQUE,
    `email` VARCHAR(30) NOT NULL UNIQUE,
    `hashed_password` varchar(255) NOT NULL,
    `profile_picture` VARCHAR(255),
    `is_admin` BOOL DEFAULT FALSE NOT NULL,
    `is_verify` BOOL DEFAULT FALSE NOT NULL,
    `graffiti_geek_level` INT
);

CREATE TABLE `hood` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `hood_name` VARCHAR(20),
    `city` BOOL,
    `suburbs` BOOL
);

CREATE TABLE `style` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `style_tag` VARCHAR(150) NOT NULL
);

CREATE TABLE `art` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `user_id` INT,
    `is_verify` BOOL,
    `img_date` DATE NOT NULL,
    `artist` VARCHAR(20),
    `style` VARCHAR(20),
    `image` VARCHAR(255),
    `image_alt` VARCHAR(255),
    `gps_lat` FLOAT NOT NULL,
    `gps_long` FLOAT NOT NULL,
    `hood_id` INT,
    `size` VARCHAR(20),
    `still_up` BOOL,
    `verifier_by` VARCHAR(20),
    `graffiti_date` DATE,
    `zone` INT,
    FOREIGN KEY (`hood_id`) REFERENCES `hood` (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

CREATE TABLE `badge` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `scenario` VARCHAR(100),
    `level` INT
);

CREATE TABLE `user_badge` (
    `user_id` INT,
    `badge_id` INT,
    FOREIGN KEY (`badge_id`) REFERENCES `badge` (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    PRIMARY KEY (`user_id`, `badge_id`)
);

CREATE TABLE `art_style` (
    `art_id` INT,
    `style_id` INT,
    FOREIGN KEY (`style_id`) REFERENCES `style` (`id`),
    FOREIGN KEY (`art_id`) REFERENCES `art` (`id`),
    PRIMARY KEY (`art_id`, `style_id`)
);