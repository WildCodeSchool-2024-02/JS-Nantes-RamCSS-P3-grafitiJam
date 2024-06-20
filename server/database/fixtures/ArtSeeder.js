const AbstractSeeder = require('./AbstractSeeder');
const HoodSeeder = require('./HoodSeeder');
const UserSeeder = require("./UserSeeder");


class ArtSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'art', truncate: true, dependencies: [HoodSeeder, UserSeeder]});
    }

    async run() {

      const arts = [
          {
              user_id: 1,
              is_verify: true,
              img_date: '2020-07-01',
              artist: 'Banksy',
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
              user_id: 2,
              is_verify: true,
              img_date: '2020-07-01',
              artist: 'Banksy',
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
              user_id: 3,
              is_verify: true,
              img_date: '2020-07-01',
              artist: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff3.jpg',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              hood_id: 2,
              size: 'M',
              still_up: true,
              verifier_by: 'John Doe',
              graffiti_date: '2020-07-01',
              zone: 1
          },

          {
              user_id: 2,
              is_verify: true,
              img_date: '2020-07-01',
              artist: 'Banksy',
              style: 'Stencil',
              image: 'https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff4.jpg',
              image_alt: 'Banksy',
              gps_lat: 48.8566,
              gps_long: 2.3522,
              hood_id: 3,
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
