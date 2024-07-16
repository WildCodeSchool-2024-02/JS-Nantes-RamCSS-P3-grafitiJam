const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

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

// Middleware function to verify JWT token
// eslint-disable-next-line consistent-return
const verifyToken = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ valid: false, message: "No token provided" });
  }

  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ valid: false, message: "Token has expired" });
      }
      return res
        .status(401)
        .json({ valid: false, message: "Failed to authenticate token" });
    }

    // Assuming user details are available in decoded token
    res.status(200).json({
      valid: true,
      id: decoded.id,
      alias: decoded.alias,
      isAdmin: decoded.isAdmin,
      isVerify: decoded.isVerify,
      profilePicture: decoded.profilePicture,
      graffitiGeekLevel: decoded.graffitiGeekLevel,
      user: decoded.email,
      // Add more fields if necessary
    });
  });
};
// Login handler
// eslint-disable-next-line consistent-return
const login = async (req, res, next) => {
  const { alias, password } = req.body;

  try {
    if (!alias || !password) {
      return res
        .status(400)
        .json({ message: "Alias and password are required" });
    }

    const user = await tables.user.readByAlias(alias);
    if (!user) {
      return res.status(400).json({ message: "Invalid alias or password" });
    }

    const isPasswordMatch = await argon2.verify(user.hashedPassword, password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid alias or password" });
    }

    // Create JWT token with more user information
    const tokenPayload = {
      id: user.id,
      alias: user.alias,
      isAdmin: user.isAdmin,
      isVerify: user.isVerify,
      profilePicture: user.profilePicture,
      graffitiGeekLevel: user.graffitiGeekLevel,
      user: user.email,
    };

    const token = jwt.sign(tokenPayload, process.env.APP_SECRET);

    // Remove sensitive data from user object before sending it in response
    delete user.hashedPassword;

    res.json({
      token,
      ...tokenPayload, // Send additional user info in response
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
