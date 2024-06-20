const AbstractRepository = require("./AbstractRepository");

class BadgeRepository extends AbstractRepository {
    constructor() {
        super({ table: "badge" });
    }

    async create(badge) {
        const [result] = await this.database.query(
            `insert into ${this.table} (name, img, scenario, level) values (?, ?, ?, ?)`,
            [badge.name, badge.img, badge.scenario, badge.level]
        );

        return result.insertId;
    }

    async update(badge) {
        const [result] = await this.database.query(
            `update ${this.table} set name = ?, img = ?, scenario = ?, level = ? where id = ?`,
            [badge.name, badge.img, badge.scenario, badge.level, badge.id]
        );

        return result.affectedRows;
    }
}

module.exports = BadgeRepository;
