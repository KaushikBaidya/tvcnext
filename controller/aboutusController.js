const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getAboutUs = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `about` ");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getAboutUsById = async (aboutId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM about WHERE aboutId = ${aboutId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createAboutUs = async (section1, section2) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO about ( section1, section2 ) VALUES ("${section1}","${section2}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateAboutUs = async (aboutId, updatedSection1, updatedSection2) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE about SET section1 = "${updatedSection1}", section2 = "${updatedSection2}" WHERE aboutId = ${aboutId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteAboutUsById = async (aboutId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM about WHERE aboutId = ${aboutId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const about = {
  getAboutUs,
  getAboutUsById,
  createAboutUs,
  updateAboutUs,
  deleteAboutUsById,
};

module.exports = about;
