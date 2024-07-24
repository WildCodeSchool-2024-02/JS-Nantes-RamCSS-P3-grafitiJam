const path = require("path");
const multer = require("multer");

const uploadsFolderPath = path.join(__dirname, "../../public/uploadsPhotos");
const uploadsAvatarFolderPath = path.join(
  __dirname,
  "../../public/uploadsAvatars"
);

// Storage configuration for graffiti uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${path.parse(file.originalname).name}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Storage configuration for profile pictures
const storageAvatars = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsAvatarFolderPath);
  },
  filename(req, file, cb) {
    // Use alias as the filename, fallback to "default" if alias is not available
    const alias = req.userAlias || "default";
    cb(null, `${alias}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid mime type"));
    }
    return null;
  },
});
const uploadAvatars = multer({
  storage: storageAvatars,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid mime type"));
    }
    return null;
  },
});

module.exports = { upload, uploadAvatars };
