// import mysqlConfig from "../../database/db";
import { getUser } from "../../controller/userController";
import jwt from "jsonwebtoken";

// const mysql = require("mysql2/promise");

const bcrypt = require("bcrypt");

// const getUser = async (user) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows] = await connection.execute(
//       `SELECT * FROM userdb.usertable where user = '${user}'`
//     );
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

export default async function handler(req, res) {
  const method = req.method;
  if (method === "POST") {
    let result;

    const user = req.body.username;
    const password = req.body.password;

    result = await getUser(user);

    const hashedPassword = result[0].password;

    // if (user === "admin" && password === "admin") {
    if (await bcrypt.compare(password, hashedPassword)) {
      var token = jwt.sign(
        { success: true, user, fullname: result[0].fullname, role: "admin" },
        "jwtSecret",
        {
          expiresIn: "2d",
        }
      );

      res
        .status(200)
        .json({
          token,
          fullname: result[0].fullname,
          message: "Login Success",
        });
    } else {
      res.json({ message: "Login failed" });
    }
  } else {
    // res.json({ message: "not success login" });
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
