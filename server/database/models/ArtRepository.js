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

  async updateVerifiedStatus(art) {
    const [result] = await this.database.query(
      `update ${this.table} SET is_verify = ? where id = ?`,
      [art.isVerify, art.id]
    );

    return result.affectedRows;
  }

  async readAll(isVerify) {
    let sqlVerify = "";
    if (isVerify !== undefined) {
      sqlVerify = ` WHERE is_verify = ${isVerify}`;
    }
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table}${sqlVerify}`
    );
    return rows;
  }
  // lists all art, then true = verified art, false =  non verified art. //

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows.length ? rows[0] : null;
  }
  // lists art by id

  async readByHoodId(hood) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE hood_id = ?`,
      [hood]
    );
    return rows;
  }
  // lists art by hood id

  async readByUserId(user) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE user_id = ?`,
      [user]
    );
    return rows;
  }

  // lists art by user id

  async readByArtist(artist) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE artist = ?`,
      [artist]
    );
    return rows;
  }
  // lists art by srtist name

  async readByStyle(style) {
    const [rows] = await this.database.query(
      `SELECT id, user_id AS userId, is_verify AS isVerify, img_date AS imgDate, artist, style, image, image_alt AS imgAlt, gps_lat AS gpsLat, gps_long AS gpsLong, hood_id AS hoodId, size, still_up AS stillUp, verifier_by AS verifierBy, graffiti_date AS graffitiDate, zone FROM ${this.table} WHERE style = ?`,
      [style]
    );
    return rows;
  }
}

// lists art by style
module.exports = ArtRepository;
