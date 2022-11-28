import { getAboutUs } from "../../controller/aboutusController";

export default async function handler(req, res) {
  const result = await getAboutUs();
  res.json(result);
}
