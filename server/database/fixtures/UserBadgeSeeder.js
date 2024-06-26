const AbstractSeeder = require("./AbstractSeeder");
const BadgeSeeder = require("./BadgeSeeder");
const UserSeeder = require("./UserSeeder");

class UserBadgeSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "user_badge",
      truncate: true,
      dependencies: [BadgeSeeder, UserSeeder],
    });
  }

  async run() {
    const userbadge = [
      {
        user_id: 1,
        badge_id: 2,
      },
      {
        user_id: 1,
        badge_id: 3,
      },
      {
        user_id: 2,
        badge_id: 1,
      },
      {
        user_id: 3,
        badge_id: 2,
      },
      {
        user_id: 4,
        badge_id: 2,
      },
    ];

    userbadge.forEach((userBadge) => {
      this.insert(userBadge);
    });
  }
}

module.exports = UserBadgeSeeder;
