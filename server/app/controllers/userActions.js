/* eslint-disable consistent-return */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    let isVerify;
    if (req.query.verify === "true") {
      isVerify = 1;
    } else if (req.query.verify === "false") {
      isVerify = 0;
    }

    const users = await tables.user.readAll(isVerify);

    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    next(err);
  }
};

// http://localhost:3310/api/user?verify=true//
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
  handleRead(req, res, next, (params) => tables.user.read(params.id));
};

const readByUserId = (req, res, next) => {
  handleRead(req, res, next, (params) =>
    tables.user.readByUserId(params.user_id)
  );
};
const readByAlias = (req, res, next) => {
  handleRead(req, res, next, (params) => tables.user.readByAlias(params.alias));
};

const updateProfilePicture = async (req, res, next) => {
  try {
    const { alias, profilePicture } = req.body;
    if (!alias || !profilePicture) {
      return res
        .status(400)
        .json({ message: "Alias and profilePicture are required" });
    }

    // Assuming `profilePicture` is a full URL now
    const affectedRows = await tables.user.updateAvatar({
      alias,
      profile_picture: profilePicture,
    });
    if (affectedRows > 0) {
      res.sendStatus(204); // No Content
    } else {
      res.sendStatus(404); // Not Found
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const user = req.body;

  try {
    const affectedRows = await tables.user.update(user);

    if (affectedRows > 0) {
      res.sendStatus(204); // No Content
    } else {
      res.sendStatus(404); // Not Found
    }
  } catch (err) {
    console.error("Error updating user:", err);
    next(err);
  }
};

const add = async (req, res) => {
  // Extract the item data from the request body
  const user = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.user.create(user);

    const response = { insertId };
    console.warn(response);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un utilisateur :", error);
    const errorMessage = { message: error.message };
    console.warn(errorMessage); // Log the error message
    res.status(500).send(errorMessage); // Send the error message to the client
  }
};
const destroy = async (req, res, next) => {
  try {
    // Delete the item from the database
    await tables.user.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const validateToken = (req, res) => {
  if (req.user) {
    // Check if req.user is set by verifyToken middleware
    res.json({
      valid: true,
      alias: req.user.alias,
      isVerify: req.user.isVerify,
      isAdmin: req.user.isAdmin,
      profilePicture: req.user.profilePicture,
      graffitiGeekLevel: req.user.graffitiGeekLevel,
      id: req.user.id,
    });
  } else {
    res.status(401).json({ valid: false, message: "Invalid token" });
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readByUserId,
  readByAlias,
  updateProfilePicture,
  validateToken,
};
