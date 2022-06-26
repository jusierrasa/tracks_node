const { storageModel } = require('../models-nosql/index');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
* Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({data});
};


/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertar un regristro
 * @param  {*} req               [description]
 * @param  {*} res               [description]
 */
const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${files.filename}`
  },
  const data = await storageModel.create(fileData);
  res.send({data});
};

/**
 * actualizar un registro
 * @param  {*} req               [description]
 * @param  {*} res               [description]
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param  {*} req               [description]
 * @param  {*} res               [description]

 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
