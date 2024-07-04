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
        hashed_password:
          "$argon2id$v=19$m=19456,t=2,p=1$rQcSnCLNYupL72R1/tzplQ$NImvLcK++gA/aTygbIzpWcBE6z21+kCccHcNomR6xBg",
        profile_picture: "",
        is_admin: 0,
        is_verify: 0,
        graffiti_geek_level: 2,
      },
      {
        alias: "Jane Doe",
        email: "jane.doe@example.com",
        hashed_password:
          "$argon2id$v=19$m=19456,t=2,p=1$TBxWMcPtxSsiXyagun3FBg$JMJCOItBCqta1PlqGyppmjdh1BuSCU+U8eXc2SwX81Y",
        profile_picture: "",
        is_admin: 0,
        is_verify: 1,
        graffiti_geek_level: 3,
      },
      {
        alias: "Jin Doe",
        email: "jin.doe@example.com",
        hashed_password:
          "$argon2id$v=19$m=19456,t=2,p=1$D9RrXKfUcXN+5ZKyVjQLpQ$7u94IgpE83O0wmvO4YjDSUdvGuzgS3mDbj/p3rkoxb4",
        profile_picture: "",
        is_admin: 1,
        is_verify: 1,
        graffiti_geek_level: 4,
      },
      {
        alias: "Jong Doe",
        email: "jong.doe@example.com",
        hashed_password:
          "$argon2id$v=19$m=19456,t=2,p=1$gKGWPh8Xu0P/Xz+mQw/yhg$p8YLM/76HvjqkctgURCinjNKKnj1U3I4Z2K8r0QRprU",
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
