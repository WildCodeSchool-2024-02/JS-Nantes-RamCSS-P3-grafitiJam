const AbstractSeeder = require('./AbstractSeeder');


class BadgeSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'badge', truncate: true });
    }

    run() {
        const badge = [
            {
                name: 'Gold',
                img: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png',
                scenario: 'vous avez trouvé 100 graffiti',
                level: '3'
            },

            {
                name: 'Silver',
                img: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png',
                scenario: 'vous avez trouvé 50 graffiti',
                level: '2'
            },

            {
                name: 'Bronze',
                img: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png',
                scenario: 'vous avez trouvé 10 graffiti',
                level: '1'
            }
        ];


        // eslint-disable-next-line no-shadow
        badge.forEach((badge) => {
            this.insert(badge);
        });

    }
}
module.exports = BadgeSeeder;
