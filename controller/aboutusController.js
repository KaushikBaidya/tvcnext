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

const createAboutUs = async (section1, section1_vn, section2, section2_vn) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO about ( section1, section1_vn, section2,  section2_vn ) VALUES ("${section1}","${section1_vn}","${section2}","${section2_vn}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateAboutUs = async (
  aboutId,
  updatedSection1,
  updatedSection1_vn,
  updatedSection2,
  updatedSection2_vn
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE about SET section1 = "${updatedSection1}", section1_vn = "${updatedSection1_vn}", section2 = "${updatedSection2}", section2_vn= "${updatedSection2_vn}" WHERE aboutId = ${aboutId}`
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
