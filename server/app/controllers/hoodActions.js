
const tables = require("../../database/tables");


const browse = async (req, res, next) => {
    try {
        // Fetch all items from the database
        const hood = await tables.hood.readAll();

        // Respond with the items in JSON format
        res.json(hood);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
    try {
        // Fetch a specific item from the database based on the provided ID
        const hood = await tables.hood.read(req.params.id);

        // If the item is not found, respond with HTTP 404 (Not Found)
        // Otherwise, respond with the item in JSON format
        if (hood == null) {
            res.sendStatus(404);
        } else {
            res.json(hood);
        }
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

const edit = async (req, res, next) => {
    // Extract the item data from the request body
    const hood = req.body;

    try {
        // Update the item in the database
        await tables.hood.update(hood);

        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }

}

const add = async (req, res, next) => {
    // Extract the item data from the request body
    const hood = req.body;

    try {
        // Insert the item into the database
        const insertId = await tables.art.create(hood);

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
        await tables.hood.delete(req.params.id);

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
