const multer =  require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage)
  },
  filename: function(req, file, cb){
    //TODO mi-cv.pdf mi-foto.png mi-video.mp4
    const ext = file.originalname.split(".").pop(); //TODO ["name","png"]
    const filename = `file-${Date.now()}.${ext}`; //TODO 2452452451
    cb(null, filename);
  },
});

const uploadMiddleware = multer({storage:storage});

module.exports = uploadMiddleware;
