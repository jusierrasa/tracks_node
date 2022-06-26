const { tracksModel } = require('../models-nosql/index');

/**
* Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
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
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
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
