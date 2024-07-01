const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (alias, email, hashed_password, profile_picture, graffiti_geek_level) values (?, ?, ?, ?, ?)`,
      [
        user.alias,
        user.email,
        user.hashedPassword,
        user.profile_picture,
        user.graffiti_geek_level,
      ]
    );

    return result.insertId;
  }

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set alias = ?, email = ?, hashed_password = ?, profile_picture = ?, graffiti_geek_level = ? where id = ?`,
      [
        user.alias,
        user.email,
        user.hashedPassword,
        user.profile_picture,
        user.is_admin,
        user.is_verify,
        user.graffiti_geek_level,
        user.id,
      ]
    );

    return result.affectedRows;
  }

  async readAll(isVerify) {
    let sqlVerify = "";
    if (isVerify !== undefined) {
      sqlVerify = ` WHERE is_verify = ${isVerify}`;
    }
    const [rows] = await this.database.query(
      `SELECT alias, email, hashed_password AS hashedPassword, profile_picture AS profilePicture, is_admin AS isAdmin,is_verify AS isVerify, graffiti_geek_level AS graffitiGeekLevel, id FROM ${this.table}${sqlVerify}`
    );
    return rows;
  }

  // lists users by verification - true = verified, false  = not verified

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows.length ? rows[0] : null;
  }

  async readByUserId(user) {
    const [rows] = await this.database.query(
      ` SELECT b.name, b.img, b.scenario, b.level, u.alias
    FROM user_badge ub
    JOIN badge b ON ub.badge_id = b.id
    JOIN user u ON ub.user_id = u.id
    WHERE ub.user_id = ?`,
      [user]
    );
    return rows;
  }

  async readByAlias(alias) {
    const [rows] = await this.database.query(
      `SELECT alias, email, hashed_password AS hashedPassword, profile_picture, is_admin AS isAdmin, is_verify AS isVerify, graffiti_geek_level AS graffitiGeekLevel, id FROM ${this.table} WHERE alias = ?`,
      [alias]
    );
    return rows.length ? rows[0] : null;
  }
}

module.exports = UserRepository;
