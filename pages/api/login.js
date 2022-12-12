import { getUser } from "../../controller/userController";
import jwt from "jsonwebtoken";

const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const method = req.method;
  if (method === "POST") {
    let result;

    const user = req.body.username;
    const password = req.body.password;

    result = await getUser(user);

    console.log(result.length);

    if (result.length > 0) {
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

        res.status(200).json({
          token,
          fullname: result[0].fullname,
          message: "Login Success",
        });
      } else {
        return res.json({ message: "Login failed" });
      }
    } else {
      return res.json({ message: "User Not Found" });
    }
  } else {
    // res.json({ message: "not success login" });
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
