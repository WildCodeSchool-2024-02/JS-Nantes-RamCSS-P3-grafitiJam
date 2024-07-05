const AbstractSeeder = require("./AbstractSeeder");
const HoodSeeder = require("./HoodSeeder");
const UserSeeder = require("./UserSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "art",
      truncate: true,
      dependencies: [HoodSeeder, UserSeeder],
    });
  }

  async run() {
    const arts = [
      {
        user_id: 1,
        is_verify: false,
        img_date: "2020-07-01",
        artist: "manksy",
        style: "Stencil",
        image:
          "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff1.JPG",
        image_alt: "Banksy",
        gps_lat: 47.21143906584468,
        gps_long: -1.5493089178134056,
        hood_id: 1,
        size: "M",
        still_up: true,
        verifier_by: "John Doe",
        graffiti_date: "2020-07-01",
        zone: 1,
      },

      {
        user_id: 2,
        is_verify: true,
        img_date: "2020-07-01",
        artist: "Banksy",
        style: "Stencil",
        image:
          "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff2.png",
        image_alt: "Banksy",
        gps_lat: 47.20429090583255,
        gps_long: -1.5569432888086854,
        hood_id: 1,
        size: "M",
        still_up: true,
        verifier_by: "John Doe",
        graffiti_date: "2020-07-01",
        zone: 1,
      },

      {
        user_id: 3,
        is_verify: true,
        img_date: "2020-07-01",
        artist: "Banksy",
        style: "Stencil",
        image:
          "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff3.jpg",
        image_alt: "Banksy",
        gps_lat: 47.19981142590736,
        gps_long: -1.5509831165335841,
        hood_id: 2,
        size: "M",
        still_up: true,
        verifier_by: "John Doe",
        graffiti_date: "2020-07-01",
        zone: 1,
      },

      {
        user_id: 2,
        is_verify: true,
        img_date: "2020-07-01",
        artist: "Banksy",
        style: "Stencil",
        image:
          "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff4.jpg",
        image_alt: "Banksy",
        gps_lat: 47.20620325272429,
        gps_long: -1.573223977969005,
        hood_id: 3,
        size: "M",
        still_up: true,
        verifier_by: "John Doe",
        graffiti_date: "2020-07-01",
        zone: 1,
      },
    ];

    arts.forEach((art) => {
      this.insert(art);
    });
  }
}

module.exports = ArtSeeder;
