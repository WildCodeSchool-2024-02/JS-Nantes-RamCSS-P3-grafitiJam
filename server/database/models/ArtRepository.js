const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
  constructor() {
    super({ table: "art" });
  }

  async create(art) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, is_verify, img_date, artist, style, image, image_alt, gps_lat, gps_long, hood_id, size, still_up, verifier_by, graffiti_date, zone) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        art.userId,
        art.isVerify,
        art.imgDate,
        art.artist,
        art.style,
        art.image,
        art.imageAlt,
        art.gpsLat,
        art.gpsLong,
        art.hoodId,
        art.size,
        art.stillUp,
        art.verifierBy,
        art.graffitiDate,
        art.zone,
      ]
    );

    return result.insertId;
  }

  async update(art) {
    const [result] = await this.database.query(
      `update ${this.table} set user_id = ?, is_verify = ?, img_date = ?, artist = ?, style = ?, image = ?, image_alt = ?, gps_lat = ?, gps_long = ?, hood_id = ?, size = ?, still_up = ?, verifier_by = ?, graffiti_date = ?, zone = ? where id = ?`,
      [
        art.userId,
        art.isVerify,
        art.imgDate,
        art.artist,
        art.style,
        art.image,
        art.imageAlt,
        art.gpsLat,
        art.gpsLong,
        art.hoodId,
        art.size,
        art.stillUp,
        art.verifierBy,
        art.graffitiDate,
        art.zone,
        art.id,
      ]
    );

    return result.affectedRows;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone  FROM ${this.table}`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows.length ? rows[0] : null;
  }

  async readByHoodId(hood) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE hood_id = ?`,
      [hood]
    );
    return rows;
  }

  async readByUserId(user) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE user_id = ?`,
      [user]
    );
    return rows;
  }
}
module.exports = ArtRepository;
