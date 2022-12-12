const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

// const getFooter = async () => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows, fields] = await connection.execute("SELECT * FROM `footer` ");
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

const getFooterById = async (footerId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM footer WHERE footerId = ${footerId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createFooter = async (
  name,
  address,
  address2,
  email,
  email2,
  number,
  number2,
  facebook,
  whatsapp,
  twitter,
  youtube,
  zalo,
  wechat,
  viber
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO footer ( name, address, address2, email, email2, facebook, whatsapp, twitter, youtube, zalo, wechat, viber) VALUES ('${name}', '${address}', '${address2}', '${email}','${email2}', '${number}', '${number2}', '${facebook}', '${whatsapp}', '${twitter}', '${youtube}', '${zalo}', '${wechat}', '${viber}' );`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

// const updateFooter = async (
//   footerId,
//   updatedAddress,
//   updatedAddress_vn,
//   updatedAddress2,
//   updatedAddress2_vn,
//   updatedGmail,
//   updatedFacebook,
//   updatedYoutube,
//   updatedWechat,
//   updatedZalo,
//   updatedViber,
//   updatedWhatsapp,
//   updatedTwitter,
//   updatedPinterest
// ) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows, fields] = await connection.execute(
//       `UPDATE footer SET address = "${updatedAddress}", address_vn = "${updatedAddress_vn}", address2 = "${updatedAddress2}", address2_vn = "${updatedAddress2_vn}", gmail = "${updatedGmail}", facebook = "${updatedFacebook}", youtube = "${updatedYoutube}", wechat = "${updatedWechat}", zalo ="${updatedZalo}", viber = "${updatedViber}", whatsapp = "${updatedWhatsapp}", twitter = "${updatedTwitter}", pinterest = "${updatedPinterest}" WHERE addressId = "${footerId}"`
//     );
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

// const deleteAddressId = async (addressId) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows, fields] = await connection.execute(
//       `DELETE FROM address WHERE addressId = ${addressId}`
//     );
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

const footer = {
  createFooter,
  // updateFooter,
  getFooterById,
};

module.exports = footer;
