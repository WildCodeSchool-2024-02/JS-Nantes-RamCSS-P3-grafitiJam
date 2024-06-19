const AbstractSeeder = require('./AbstractSeeder');

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'users', truncate: true });
  }

  run() {
    const users = [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password',
      },
      {
        name: 'Jin Doe',
        email: 'jin.doe@example.com',
        password: 'password',
      },
      {
        name: 'Jong Doe',
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
