const AbstractSeeder = require('./AbstractSeeder');


class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'art', truncate: true });
  }

  run() {
      const art = [
          {
              is_verify: true,
              img_date: '2020-07-01',
              artiste: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff1.JPG',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              hood_id: 1,
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
              hood_id: 1,
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
              hood_id: 1,
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
              hood_id: 1,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

      ];

      // eslint-disable-next-line no-shadow
      art.forEach((art) => {
          this.insert(art);
      });

    }
  }
    module.exports = ArtSeeder;
