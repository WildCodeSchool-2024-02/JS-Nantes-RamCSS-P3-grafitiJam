const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
    constructor() {
        super({ table: "art" });
    }

    async create(art) {
        const [result] = await this.database.query(
            `insert into ${this.table} (user_id, is_verify, img_date, artist, style, image, image_alt, gps_lat, gps_long, hood_id, size, still_up, verifier_by, graffiti_date, zone) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [art.user_id, art.is_verify, art.img_date, art.artist, art.style, art.image, art.image_alt, art.gps_lat, art.gps_long, art.hood_id, art.size, art.still_up, art.verifier_by, art.graffiti_date, art.zone]
        );

        return result.insertId;
    }

    async update(art) {
        const [result] = await this.database.query(
            `update ${this.table} set user_id = ?, is_verify = ?, img_date = ?, artist = ?, style = ?, image = ?, image_alt = ?, gps_lat = ?, gps_long = ?, hood_id = ?, size = ?, still_up = ?, verifier_by = ?, graffiti_date = ?, zone = ? where id = ?`,
            [art.user_id, art.is_verify, art.img_date, art.artist, art.style, art.image, art.image_alt, art.gps_lat, art.gps_long, art.hood_id, art.size, art.still_up, art.verifier_by, art.graffiti_date, art.zone, art.id]
        );

        return result.affectedRows;
    }

    async readAll() {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
        return rows;
    }

    async read(id) {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
        return rows.length ? rows[0] : null;
    }

    async readByHoodId(hood) {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE hood_id = ?`, [hood]);
        return rows;
    }

      
      async readByUserId(user) {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE user_id = ?`, [user]);
        return rows;
    }
}
module.exports = ArtRepository;
