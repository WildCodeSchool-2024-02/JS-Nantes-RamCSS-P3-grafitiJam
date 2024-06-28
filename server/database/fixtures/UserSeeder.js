const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    const users = [
      {
        alias: "John Doe",
        email: "john.doe@example.com",
        hashed_password: "password",
        profile_picture: "",
        is_admin: 0,
        is_verify: 0,
        graffiti_geek_level: 2,
      },
      {
        alias: "Jane Doe",
        email: "jane.doe@example.com",
        hashed_password: "password",
        profile_picture: "",
        is_admin: 0,
        is_verify: 1,
        graffiti_geek_level: 3,
      },
      {
        alias: "Jin Doe",
        email: "jin.doe@example.com",
        hashed_password: "password",
        profile_picture: "",
        is_admin: 1,
        is_verify: 1,
        graffiti_geek_level: 4,
      },
      {
        alias: "Jong Doe",
        email: "jong.doe@example.com",
        hashed_password: "password",
        profile_picture: "",
        is_admin: 1,
        is_verify: 1,
        graffiti_geek_level: 4,
      },
    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
