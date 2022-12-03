import { getProductsByCategory } from "../../../controller/productController";

export default async function handler(req, res) {
  const id = req.query.id;

  const result = await getProductsByCategory(id);
  res.json(result);
}
