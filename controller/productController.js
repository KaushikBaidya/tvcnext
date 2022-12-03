const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const createProduct = async (
  name,
  description,
  name_vn,
  description_vn,
  image,
  category
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO products ( name, name_vn, description, description_vn, image, category) VALUES ('${name}','${name_vn}', '${description}', '${description_vn}', '${image}', '${category}');`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateProduct = async (
  productId,
  updateName,
  updateNameVn,
  updateDescription,
  updateDescriptionVn,
  updateImage,
  updateCategory
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE products SET name = '${updateName}', name_vn = '${updateNameVn}', description= '${updateDescription}', description_vn = '${updateDescriptionVn}', image='${updateImage}', category='${updateCategory}' WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getProducts = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `products`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};
const getProductsByBiomass = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `SELECT * FROM products WHERE category = "1"`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};
const getProductsByMineral = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `products` WHERE category = 2"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      // `SELECT * FROM products WHERE category = 1`
      `SELECT * FROM products WHERE category = ${categoryId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getProductById = async (productId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM products WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteProductById = async (productId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM products WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const products = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  getProductsByBiomass,
  getProductsByMineral,
  getProductsByCategory,
};

module.exports = products;
