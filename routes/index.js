const express = require('express');
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (fileName) => {
  //TODO tracks.js
  return fileName.split('.').shift()
};

const a = fs.readdirSync(PATH_ROUTES).filter( (file) => {
  const name = removeExtension(file); //TODO index, tracks, storage
  if( name !== 'index'){
    console.log(`cargando rutas ${name}`);
    router.use(`/${name}`, require(`./${file}`));            //TODO http://localhost:3001/api/tracks
  };
});

console.log({a});
module.exports = router;
