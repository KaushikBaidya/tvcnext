import {
  getAboutUsById,
  createAboutUs,
  updateAboutUs,
  deleteAboutUsById,
} from "../../../controller/aboutusController";

export default async function handler(req, res) {
  const aboutId = req.query.aboutId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getAboutUsById(aboutId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteAboutUsById(aboutId);
      res.json({
        ...result,
        message: `about us with aboutId: ${aboutId} deleted`,
      });
      break;

    case "POST":
      const section1 = req.body.section1;
      const section2 = req.body.section2;

      result = await createAboutUs(section1, section2);
      res.status(201).json({
        ...result,
        message: `about us created`,
      });
      break;

    case "PUT":
      const updateSection1 = req.body.section1;
      const updateSection2 = req.body.section2;

      result = await updateAboutUs(aboutId, updateSection1, updateSection2);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
