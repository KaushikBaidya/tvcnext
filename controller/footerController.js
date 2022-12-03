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

// const createFooter = async (
//   address,
//   address_vn,
//   address2,
//   address2_vn,
//   gmail,
//   facebook,
//   youtube,
//   wechat,
//   zalo,
//   viber,
//   whatsapp,
//   twitter,
//   pinterest
// ) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows, fields] = await connection.execute(
//       `INSERT INTO footer ( address, address_vn, address2, address2_vn,  gmail, facebook, youtube, wechat, zalo,viber, whatsapp, twitter, pinterest) VALUES ('${address}', '${address_vn}', '${address2}', '${address2_vn}', '${gmail}', '${facebook}', '${youtube}', '${wechat}', '${zalo}', '${viber}', '${whatsapp}', '${twitter}', '${pinterest}');`
//     );
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

const updateFooter = async (
  footerId,
  updatedAddress,
  updatedAddress_vn,
  updatedAddress2,
  updatedAddress2_vn,
  updatedGmail,
  updatedFacebook,
  updatedYoutube,
  updatedWechat,
  updatedZalo,
  updatedViber,
  updatedWhatsapp,
  updatedTwitter,
  updatedPinterest
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE footer SET address = "${updatedAddress}", address_vn = "${updatedAddress_vn}", address2 = "${updatedAddress2}", address2_vn = "${updatedAddress2_vn}", gmail = "${updatedGmail}", facebook = "${updatedFacebook}", youtube = "${updatedYoutube}", wechat = "${updatedWechat}", zalo ="${updatedZalo}", viber = "${updatedViber}", whatsapp = "${updatedWhatsapp}", twitter = "${updatedTwitter}", pinterest = "${updatedPinterest}" WHERE addressId = "${footerId}"`
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
  updateFooter,
  getFooterById,
};

module.exports = footer;
