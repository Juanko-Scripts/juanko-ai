export default async function handler(req, res) {

  const prompt = req.query.prompt || "anime girl";

  const image =
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

  res.status(200).json({
    success: true,
    image: image
  });

}
