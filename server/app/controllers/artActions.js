const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    let isVerify;
    if (req.query.verify === "true") {
      isVerify = 1;
    } else if (req.query.verify === "false") {
      isVerify = 0;
    }
    const art = await tables.art.readAll(isVerify);

    res.json(art);
  } catch (err) {
    next(err);
  }
};

// http://localhost:3310/api/art?verify=true//

// The R of BREAD - Read operation
const handleRead = async (req, res, next, fetchFunction) => {
  try {
    const result = await fetchFunction(req.params);

    if (!result || (Array.isArray(result) && result.length === 0)) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  } catch (err) {
    next(err);
  }
};
const read = (req, res, next) => {
  handleRead(req, res, next, (params) => tables.art.read(params.id));
};

const readByHoodId = (req, res, next) => {
  handleRead(req, res, next, (params) =>
    tables.art.readByHoodId(params.hood_id)
  );
};

const readByUserId = (req, res, next) => {
  handleRead(req, res, next, (params) =>
    tables.art.readByUserId(params.user_id)
  );
};

const readByArtist = (req, res, next) => {
  handleRead(req, res, next, (params) =>
    tables.art.readByArtist(params.artist)
  );
};
const readByStyle = (req, res, next) => {
  handleRead(req, res, next, (params) => tables.art.readByStyle(params.style));
};

const edit = async (req, res, next) => {
  const { isVerify } = req.body;

  try {
    await tables.art.update({
      id: req.params.id,
      isVerify,
    });

    res.sendStatus(204); // Respond with HTTP 204 (No Content) upon successful update
  } catch (err) {
    next(err); // Pass any errors to the error-handling middleware
  }
};

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
};

const post = async (req, res) => {
  try {
    const result = await tables.art.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readByHoodId,
  readByUserId,
  readByArtist,
  readByStyle,
  post,
};
