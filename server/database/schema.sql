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

INSERT INTO
    `user` (
        `alias`,
        `email`,
        `hashed_password`,
        `profile_picture`,
        `is_admin`,
        `is_verify`,
        `graffiti_geek_level`
    )
VALUES (
        'steven',
        'stevenbachimont@gmail.com',
        '$argon2id$v=19$m=19456,t=2,p=1$cX8MgcA4iMKrhGQDvjlhAg$mG4VqjY1vonuXmNpMkexBmW3r4V7nsoitrrUpT9vDEc',
        'http://localhost:3310/uploadsAvatars/steven.jpg',
        1,
        1,
        4
    );

INSERT INTO
    `user` (
        `alias`,
        `email`,
        `hashed_password`,
        `profile_picture`,
        `is_admin`,
        `is_verify`,
        `graffiti_geek_level`
    )
VALUES (
        'steven',
        'stevenbachimont@gmail.com',
        '$argon2id$v=19$m=19456,t=2,p=1$cX8MgcA4iMKrhGQDvjlhAg$mG4VqjY1vonuXmNpMkexBmW3r4V7nsoitrrUpT9vDEc',
        'http://localhost:3310/uploadsAvatars/steven.jpg',
        1,
        1,
        4
    );

INSERT INTO
    `hood` (
        `hood_name`,
        `city`,
        `suburbs`
    )
VALUES ('Reze', true, false),
    ('Olivettes', false, true),
    ('Republique', true, false),
    ('50 Otages', true, false);

INSERT INTO
    `hood` (
        `hood_name`,
        `city`,
        `suburbs`
    )
VALUES ('Reze', true, false),
    ('Olivettes', false, true),
    ('Republique', true, false),
    ('50 Otages', true, false);

INSERT INTO
    `style` (`name`, `style_tag`)
VALUES (
        'Buble',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Buble.png'
    ),
    (
        'Cubic',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Cubic.png'
    ),
    (
        'Figure',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Figure.png'
    ),
    (
        'Tag',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Tag.png'
    ),
    (
        'Letter',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Letter.png'
    );

INSERT INTO
    `style` (`name`, `style_tag`)
VALUES (
        'Buble',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Buble.png'
    ),
    (
        'Cubic',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Cubic.png'
    ),
    (
        'Figure',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Figure.png'
    ),
    (
        'Tag',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Tag.png'
    ),
    (
        'Letter',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Letter.png'
    );

INSERT INTO
    `badge` (
        `name`,
        `img`,
        `scenario`,
        `level`
    )
VALUES (
        'Gold',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png',
        'vous avez trouvé 100 graffiti',
        3
    ),
    (
        'Silver',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/silver.png',
        'vous avez trouvé 50 graffiti',
        2
    ),
    (
        'Bronze',
        'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/bronze.png',
        'vous avez trouvé 10 graffiti',
        1
    );

INSERT INTO
    `art` (
        `user_id`,
        `is_verify`,
        `img_date`,
        `artist`,
        `style`,
        `image`,
        `image_alt`,
        `gps_lat`,
        `gps_long`,
        `hood_id`,
        `size`,
        `still_up`,
        `verifier_by`,
        `graffiti_date`,
        `zone`
    )
VALUES (
        1,
        false,
        '2020-07-01',
        'manksy',
        (
            SELECT `id`
            FROM `style`
            WHERE
                `name` = 'Stencil'
        ),
        'http://localhost:3310/uploadsPhotos/graff1.JPG',
        'Banksy',
        47.21143906584468,
        -1.5493089178134056,
        1,
        'M',
        true,
        'John Doe',
        '2020-07-01',
        10
    );

INSERT INTO `art_style` (`art_id`, `style_id`) VALUES (1, 2);

INSERT INTO `user_badge` (`user_id`, `badge_id`) VALUES (1, 2);

INSERT INTO
    `art` (
        `user_id`,
        `is_verify`,
        `img_date`,
        `artist`,
        `style`,
        `image`,
        `image_alt`,
        `gps_lat`,
        `gps_long`,
        `hood_id`,
        `size`,
        `still_up`,
        `verifier_by`,
        `graffiti_date`,
        `zone`
    )
VALUES (
        1,
        false,
        '2020-07-01',
        'manksy',
        (
            SELECT `id`
            FROM `style`
            WHERE
                `name` = 'Stencil'
        ),
        'http://localhost:3310/uploadsPhotos/graff1.JPG',
        'Banksy',
        47.21143906584468,
        -1.5493089178134056,
        1,
        'M',
        true,
        'John Doe',
        '2020-07-01',
        10
    );

INSERT INTO `art_style` (`art_id`, `style_id`) VALUES (1, 2);

INSERT INTO `user_badge` (`user_id`, `badge_id`) VALUES (1, 2);