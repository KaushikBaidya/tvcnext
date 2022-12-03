import {
  getFooterById,
  createFooter,
  updateFooter,
} from "../../../controller/footerController";

export default async function handler(req, res) {
  const footerId = req.query.footerId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getFooterById(footerId);
      res.json(result);
      break;

    // case "DELETE":
    //   result = await deletefooterId(footerId);
    //   res.json({
    //     ...result,
    //     message: `address with footerId: ${footerId} deleted`,
    //   });
    //   break;

    case "POST":
      const address = req.body.address;
      const address_vn = req.body.address_vn;
      const address2 = req.body.address2;
      const address2_vn = req.body.address2_vn;

      result = await createFooter(address, address_vn, address2, address2_vn);
      res.status(201).json({
        ...result,
        message: `category with title: ${address} created`,
      });
      break;

    case "PUT":
      const footerId = req.body.footerId;
      const updatedAddress = req.body.address;
      const updatedAddress_vn = req.body.address_vn;
      const updatedAddress2 = req.body.address2;
      const updatedAddress2_vn = req.body.address2_vn;

      result = await updateFooter(
        footerId,
        updatedAddress,
        updatedAddress_vn,
        updatedAddress2,
        updatedAddress2_vn
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
