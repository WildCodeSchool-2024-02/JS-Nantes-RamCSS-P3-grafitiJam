const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Options de hachage
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10, // 19 Mio en kio (19 * 1024 kio)
  timeCost: 2,
  parallelism: 1,
};

// Middleware to hash the password
// eslint-disable-next-line consistent-return
const hashPassword = async (req, res, next) => {
  try {
    if (!req.body.hashed_password) {
      return res
        .status(400)
        .send({ message: "The hashed_password field is required." });
    }

    // Hashing the password with the specified options
    const hashedPassword = await argon2.hash(
      req.body.hashed_password,
      hashingOptions
    );
    // Replace the plain password field with the hashed password in the request body
    req.body.hashedPassword = hashedPassword;

    // Remove the original plain password field from the request body for security
    delete req.body.hashed_password;

    next();
  } catch (err) {
    next(err);
  }
};
// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
  if (req.path === "/api/user/login") {
    return next();
  }

  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expériation)
    // En cas de succès, le payload est extrait et décodé
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

const tables = require("../../database/tables");

// Login handler
// eslint-disable-next-line consistent-return
const login = async (req, res, next) => {
  const { alias, password } = req.body;

  try {
    const user = await tables.user.readByAlias(alias);
    if (!user) {
      return res.status(400).json({ message: "Invalid alias or password" });
    }

    const isPasswordMatch = await argon2.verify(user.hashedPassword, password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid alias or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    delete user.hashedPassword;
    res.json({
      token,
      isVerify: user.isVerify,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    console.error(`Error during login: ${err.message}`);
    next(err);
  }
};

module.exports = {
  hashPassword,
  verifyToken,
  login,
};
