const AbstractSeeder = require('./AbstractSeeder');


class StyleSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'style', truncate: true });
    }

    run() {
        const styles = [
            {
                name: 'Buble',
                style_tag: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Buble.png'
            },
            {
                name: 'Cubic',
                style_tag: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Cubic.png'
            },
            {
                name: 'Figure',
                style_tag: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Figure.png'
            },
            {
                name: 'Tag',
                style_tag: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Tag.png'
            },
            {
                name: 'Letter',
                style_tag: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Letter.png'
            }
        ];


        styles.forEach((style) => {
            this.insert(style);
        });

    }
}
module.exports = StyleSeeder;
