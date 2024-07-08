const path = require("path");

const uploadsFolderPath = path.join(__dirname, "../../public/uploadsPhotos");


const multer = require("multer");


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, uploadsFolderPath);
    },
    filename(req, file, cb) {
        cb(
            null,
            `${path.parse(file.originalname).name  }-${  Date.now()  }${path.extname(file.originalname)}`
        );
    }
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

module.exports = upload;
