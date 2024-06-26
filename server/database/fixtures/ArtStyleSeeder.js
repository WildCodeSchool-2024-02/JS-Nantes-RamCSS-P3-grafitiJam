const AbstractSeeder = require("./AbstractSeeder");
const ArtSeeder = require("./ArtSeeder");
const StyleSeeder = require("./StyleSeeder");

class ArtStyleSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "art_style",
      truncate: true,
      dependencies: [ArtSeeder, StyleSeeder],
    });
  }

  async run() {
    const artstyle = [
      {
        art_id: 1,
        style_id: 2,
      },
      {
        art_id: 1,
        style_id: 3,
      },
      {
        art_id: 2,
        style_id: 2,
      },
      {
        art_id: 3,
        style_id: 1,
      },
      {
        art_id: 4,
        style_id: 2,
      },
    ];

    artstyle.forEach((artStyle) => {
      this.insert(artStyle);
    });
  }
}

module.exports = ArtStyleSeeder;
