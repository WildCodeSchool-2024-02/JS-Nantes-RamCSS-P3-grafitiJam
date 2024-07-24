const express = require("express");
// const path = require("path");

const router = express.Router();
const { verifyToken } = require("../../../services/auth");
const { upload, uploadAvatars } = require("../../../services/filesUpload");

// const uploadsAvatarFolderPath = path.join(
//   __dirname,
//   "../../public/uploadsAvatars"
// );
const attachUserAlias = (req, res, next) => {
  // Assuming `req.user` contains the decoded JWT token information
  // You may need to adjust this based on how your authentication is set up
  if (req.user && req.user.alias) {
    req.userAlias = req.user.alias;
  }
  next();
};

router.post("/", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.file;

    return res.json({ message: "File uploaded !", filename });
  } catch (err) {
    console.error("Error in file upload route:", err);
    return res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
});

router.post(
  "/avatars",
  verifyToken,
  attachUserAlias,
  uploadAvatars.single("file"),
  // eslint-disable-next-line consistent-return
  (req, res) => {
    // Check if the file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Please send a file" });
    }

    // Extract file information
    const { filename } = req.file;

    // Respond with the filename
    res.json({ message: "Profile picture uploaded!", filename });
  }
);

module.exports = router;
