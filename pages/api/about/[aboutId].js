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
      const section1_vn = req.body.section1_vn;
      const section2 = req.body.section2;
      const section2_vn = req.body.section2_vn;

      result = await createAboutUs(
        section1,
        section1_vn,
        section2,
        section2_vn
      );
      res.status(201).json({
        ...result,
        message: `about us created`,
      });
      break;

    case "PUT":
      const updateSection1 = req.body.section1;
      const updatedSection1_vn = req.body.section1_vn;
      const updateSection2 = req.body.section2;
      const updatedSection2_vn = req.body.section2_vn;

      result = await updateAboutUs(
        aboutId,
        updateSection1,
        updatedSection1_vn,
        updateSection2,
        updatedSection2_vn
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
