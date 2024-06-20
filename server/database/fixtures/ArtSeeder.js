const AbstractSeeder = require('./AbstractSeeder');
const HoodSeeder = require('./HoodSeeder');


class ArtSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'art', truncate: true });
    }

    async run() {
        const hoodSeeder = new HoodSeeder();
        const hoodIds = await hoodSeeder.run();

        if (!Array.isArray(hoodIds) || hoodIds.length === 0) {
            console.error('hoodSeeder.run() did not return any ids');
            return;
        }
      const arts = [
          {
              is_verify: true,
              img_date: '2020-07-01',
              artiste: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff1.JPG',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

          {
              is_verify: true,
              img_date: '2020-07-01',
              artiste: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff2.png',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

          {
              is_verify: true,
              img_date: '2020-07-01',
              artiste: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff3.jpg',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

          {
              is_verify: true,
              img_date: '2020-07-01',
              artiste: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff4.jpg',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

      ];


        arts.forEach((art) => {
            this.insert(art);
        });
  }
}

module.exports = ArtSeeder;
