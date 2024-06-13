CREATE TABLE `user` (
                        `id` int PRIMARY KEY AUTO_INCREMENT,
                        `alias` varchar(30),
                        `email` varchar(30),
                        `password` varchar(255),
                        `profile_picture` varchar(255),
                        `is_admin` bool,
                        `is_verify` bool,
                        `graffiti_geek_level` integer
);

CREATE TABLE `art` (
                       `id` int PRIMARY KEY AUTO_INCREMENT,
                       `user_id` int,
                       `is_verify` bool,
                       `img_date` date NOT NULL,
                       `artiste` varchar(20),
                       `style` varchar(20),
                       `image` varchar(255),
                       `image_alt` varchar(255),
                       `gps_lat` int NOT NULL,
                       `gps_long` int NOT NULL,
                       `hood_id` int,
                       `size` varchar(20),
                       `still_up` bool,
                       `verifier_by` varchar(20),
                       `graffiti_date` date,
                       `zone` int
);

CREATE TABLE `hood` (
                        `id` int PRIMARY KEY AUTO_INCREMENT,
                        `hood_name` varchar(20),
                        `city` bool,
                        `suburbs` bool
);

CREATE TABLE `badge` (
                         `id` int PRIMARY KEY AUTO_INCREMENT,
                         `name` varchar(20) NOT NULL,
                         `img` varchar(255) NOT NULL,
                         `scenario` varchar(100),
                         `level` int
);

CREATE TABLE `user_badge` (
                              `user_id` int,
                              `badge_id` int
);

CREATE TABLE `art_style` (
                             `art_id` int,
                             `style_id` int
);

CREATE TABLE `style` (
                         `id` int PRIMARY KEY AUTO_INCREMENT,
                         `name` varchar(20) NOT NULL,
                         `style_tag` varchar(150) NOT NULL
);

ALTER TABLE `art` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `art` ADD FOREIGN KEY (`hood_id`) REFERENCES `hood` (`id`);

ALTER TABLE `user_badge` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `user_badge` ADD FOREIGN KEY (`badge_id`) REFERENCES `badge` (`id`);

ALTER TABLE `art_style` ADD FOREIGN KEY (`style_id`) REFERENCES `style` (`id`);

ALTER TABLE `art_style` ADD FOREIGN KEY (`art_id`) REFERENCES `art` (`id`);
