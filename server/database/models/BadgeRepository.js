const AbstractRepository = require("./AbstractRepository");

class BadgeRepository extends AbstractRepository {
    constructor() {
        // Call the constructor of the parent class (AbstractRepository)
        // and pass the table name "item" as configuration
        super({ table: "badge" });
    }

    // The C of CRUD - Create operation

    async create(badge) {
        // Execute the SQL INSERT query to add a new item to the "item" table
        const [result] = await this.database.query(
            `insert into ${this.table} (title, user_id) values (?, ?)`,
            [badge.title, badge.user_id]
        );

        // Return the ID of the newly inserted item
        return result.insertId;
    }

    // The Rs of CRUD - Read operations

    async read(id) {
        // Execute the SQL SELECT query to retrieve a specific item by its ID
        const [rows] = await this.database.query(
            `select * from ${this.table} where id = ?`,
            [id]
        );

        // Return the first row of the result, which represents the item
        return rows[0];
    }

    async readAll() {
        // Execute the SQL SELECT query to retrieve all items from the "item" table
        const [rows] = await this.database.query(`select * from ${this.table}`);

        // Return the array of items
        return rows;
    }


    async update(art) {
        // Execute the SQL UPDATE query to modify an existing item in the "item" table
        const [result] = await this.database.query(
            `update ${this.table} set title = ?, user_id = ? where id = ?`,
            [art.title, art.user_id, art.id]
        );

        // Return the number of affected rows
        return result.affectedRows;
    }




    async delete(id) {
        // Execute the SQL DELETE query to remove an item from the "item" table
        const [result] = await this.database.query(
            `delete from ${this.table} where id = ?`,
            [id]
        );

        // Return the number of affected rows
        return result.affectedRows;
    }

}

module.exports = BadgeRepository;
