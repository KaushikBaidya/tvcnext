import { getFooter } from "../../../controller/footerController";

export default async function handler(req, res) {
  const result = await getFooter();
  res.json(result);
}
