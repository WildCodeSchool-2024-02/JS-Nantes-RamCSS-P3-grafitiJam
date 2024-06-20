const AbstractSeeder = require('./AbstractSeeder');

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'user', truncate: true });
  }

  run() {
    const users = [
      {
        alias: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
      {
        alias: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password',
      },
      {
        alias: 'Jin Doe',
        email: 'jin.doe@example.com',
        password: 'password',
      },
      {
        alias: 'Jong Doe',
        email: 'jong.doe@example.com',
        password: 'password',
      }

    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
