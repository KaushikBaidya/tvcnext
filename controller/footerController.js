const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getFooter = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `footer` ");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

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
      `INSERT INTO footer ( name, address, address2, email, email2, number, number2, facebook, whatsapp, twitter, youtube, zalo, wechat, viber) VALUES ('${name}', '${address}', '${address2}', '${email}','${email2}', '${number}', '${number2}', '${facebook}', '${whatsapp}', '${twitter}', '${youtube}', '${zalo}', '${wechat}', '${viber}' );`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateFooter = async (
  footerId,
  UpdatedName,
  updatedAddress,
  updatedAddress2,
  updatedEmail,
  updatedEmail2,
  updatedNumber,
  updatedNumber2,
  updatedFacebook,
  updatedWhatsapp,
  updatedTwitter,
  updatedYoutube,
  updatedZalo,
  updatedWechat,
  updatedViber
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE footer SET name = '${UpdatedName}', address = '${updatedAddress}', address2 = '${updatedAddress2}', email = '${updatedEmail}',email2 = '${updatedEmail2}', number ='${updatedNumber}', number2 ='${updatedNumber2}', facebook = '${updatedFacebook}', youtube = '${updatedYoutube}', wechat = '${updatedWechat}', zalo ='${updatedZalo}', viber = '${updatedViber}', whatsapp = '${updatedWhatsapp}', twitter = '${updatedTwitter}' WHERE footerId = '${footerId}'`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

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
  getFooter,
  createFooter,
  updateFooter,
  getFooterById,
};

module.exports = footer;
