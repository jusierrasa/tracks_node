/**
* Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = (req, res) => {

  const data = ["hola","mundo"];

  res.send({data});
};


/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertar un detalle
 * @param  {*} req               [description]
 * @param  {*} res               [description]
 */
const createItem = (req, res) => {};

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
