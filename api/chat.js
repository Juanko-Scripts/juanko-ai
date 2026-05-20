export default function handler(req, res) {

  const text = req.query.text || "Hola";

  res.status(200).json({
    success: true,
    response: "Webhook : " + text
  });

}
