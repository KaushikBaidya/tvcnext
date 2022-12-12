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
      const name = req.body.name;
      const address = req.body.address;
      const address2 = req.body.address2;
      const email = req.body.email;
      const email2 = req.body.email2;
      const number = req.body.number;
      const number2 = req.body.number2;
      const facebook = req.body.facebook;
      const whatsapp = req.body.whatsapp;
      const twitter = req.body.twitter;
      const youtube = req.body.youtube;
      const zalo = req.body.zalo;
      const wechat = req.body.wechat;
      const viber = req.body.viber;

      result = await createFooter(
        name,
        address,
        address2,
        email,
        email2,
        number,
        number2,
        facebook,
        whatsapp,
        twitter,
        youtube,
        zalo,
        wechat,
        viber
      );
      res.status(201).json({
        ...result,
        message: `footer created`,
      });
      break;

    case "PUT":
      const footerId = req.body.footerId;
      const UpdatedName = req.body.name;
      const updatedAddress = req.body.address;
      const updatedAddress2 = req.body.address2;
      const updatedEmail = req.body.email;
      const updatedEmail2 = req.body.email2;
      const updatedNumber = req.body.number;
      const updatedNumber2 = req.body.number2;
      const updatedFacebook = req.body.facebook;
      const updatedWhatsapp = req.body.whatsapp;
      const updatedTwitter = req.body.twitter;
      const updatedYoutube = req.body.youtube;
      const updatedZalo = req.body.zalo;
      const updatedWechat = req.body.wechat;
      const updatedViber = req.body.viber;

      result = await updateFooter(
        footerId,
        UpdatedName,
        updatedAddress,
        updatedAddress2,
        updatedEmail,
        updatedEmail2,
        updatedNumber,
        updatedNumber2,
        updatedFacebook,
        updatedWhatsapp,
        updatedTwitter,
        updatedYoutube,
        updatedZalo,
        updatedWechat,
        updatedViber
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
