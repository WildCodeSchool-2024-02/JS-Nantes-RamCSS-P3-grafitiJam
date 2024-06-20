const AbstractRepository = require("./AbstractRepository");

class HoodRepository extends AbstractRepository {
    constructor() {
        super({ table: "hood" });
    }

    async create(hood) {
        const [result] = await this.database.query(
            `insert into ${this.table} (hood_name, city, suburbs) values (?, ?, ?)`,
            [hood.hood_name, hood.city, hood.suburbs]
        );

        return result.insertId;
    }

    async update(hood) {
        const [result] = await this.database.query(
            `update ${this.table} set hood_name = ?, city = ?, suburbs = ? where id = ?`,
            [hood.hood_name, hood.city, hood.suburbs, hood.id]
        );

        return result.affectedRows;
    }
}

module.exports = HoodRepository;
