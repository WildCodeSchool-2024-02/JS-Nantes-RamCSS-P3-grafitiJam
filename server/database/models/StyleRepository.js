const AbstractRepository = require("./AbstractRepository");

class StyleRepository extends AbstractRepository {
    constructor() {
        super({ table: "style" });
    }

    async create(style) {
        const [result] = await this.database.query(
            `insert into ${this.table} (name, style_tag) values (?, ?)`,
            [style.name, style.style_tag]
        );

        return result.insertId;
    }

    async update(style) {
        const [result] = await this.database.query(
            `update ${this.table} set name = ?, style_tag = ? where id = ?`,
            [style.name, style.style_tag, style.id]
        );

        return result.affectedRows;
    }
}

module.exports = StyleRepository;
