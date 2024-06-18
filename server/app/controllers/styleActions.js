
const tables = require("../../database/tables");


const browse = async (req, res, next) => {
    try {
        // Fetch all items from the database
        const style = await tables.style.readAll();

        // Respond with the items in JSON format
        res.json(style);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
    try {
        // Fetch a specific item from the database based on the provided ID
        const style = await tables.style.read(req.params.id);

        // If the item is not found, respond with HTTP 404 (Not Found)
        // Otherwise, respond with the item in JSON format
        if (style == null) {
            res.sendStatus(404);
        } else {
            res.json(style);
        }
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

const edit = async (req, res, next) => {
    // Extract the item data from the request body
    const style = req.body;

    try {
        // Update the item in the database
        await tables.style.update(style);

        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }

}

const add = async (req, res, next) => {
    // Extract the item data from the request body
    const style = req.body;

    try {
        // Insert the item into the database
        const insertId = await tables.style.create(style);

        // Respond with HTTP 201 (Created) and the ID of the newly inserted item
        res.status(201).json({ insertId });
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};


const destroy = async (req, res, next) => {
    try {
        // Delete the item from the database
        await tables.style.delete(req.params.id);

        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
}

module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
};
