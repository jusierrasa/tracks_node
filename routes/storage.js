const multer =  require('multer');
const express =  require('express');
const router =  express.Router();
//TODO http://localhost:3001/storage

//*
 *
 */

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage)
  },
  filename: function(req, file, cb){
    //TODO mi-cv.pdf mi-foto.png mi-video.mp4
    const ext = file.orignalname.split(".").pop(); //TODO ["name","png"]
    const filename = `file-${Date.now()}.${ext}`; //TODO 2452452451
    cb(null, filename);
  },
});


/**
 *
 */
router.post("/", (req, res) => {
  res.send({a:1});
});

module.exports = router;
