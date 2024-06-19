
const tables = require("../../database/tables");


const browse = async (req, res, next) => {
    try {
        // Fetch all items from the database
        const art = await tables.art.readAll();

        // Respond with the items in JSON format
        res.json(art);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
    try {
        // Fetch a specific item from the database based on the provided ID
        const art = await tables.art.read(req.params.id);

        // If the item is not found, respond with HTTP 404 (Not Found)
        // Otherwise, respond with the item in JSON format
        if (art == null) {
            res.sendStatus(404);
        } else {
            res.json(art);
        }
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

const edit = async (req, res, next) => {
    // Extract the item data from the request body
    const art = req.body;

    try {
        // Update the item in the database
        await tables.item.update(art);

        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }

}

const add = async (req, res, next) => {
    // Extract the item data from the request body
    const art = req.body;

    try {
        // Insert the item into the database
        const insertId = await tables.art.create(art);

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
        await tables.art.delete(req.params.id);

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
