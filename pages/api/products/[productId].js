import {
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
} from "../../../controller/productController";

export default async function handler(req, res) {
  const productId = req.query.productId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getProductById(productId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteProductById(productId);
      res.json({
        ...result,
        message: `product with productId: ${productId} deleted`,
      });
      break;

    case "POST":
      const name = req.body.name;
      const description = req.body.description;
      const name_vn = req.body.name_vn;
      const description_vn = req.body.description_vn;
      const image = req.body.image;
      const category = req.body.category;

      result = await createProduct(
        name,
        description,
        name_vn,
        description_vn,
        image,
        category
      );
      res
        .status(201)
        .json({ ...result, message: `product with name: ${name} created` });
      break;

    case "PUT":
      const updateName = req.body.name;
      const updateNameVn = req.body.name_vn;
      const updateDescription = req.body.description;
      const updateDescriptionVn = req.body.description_vn;
      const updateImage = req.body.image;
      const updateCategory = req.body.category;

      result = await updateProduct(
        productId,
        updateName,
        updateNameVn,
        updateDescription,
        updateDescriptionVn,
        updateImage,
        updateCategory
      );
      res;
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
