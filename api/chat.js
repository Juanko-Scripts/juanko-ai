export default async function handler(req, res) {

  const prompt = req.query.prompt || "JM XP";

  const image =
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${Date.now()}`;

  res.status(200).json({
    success: true,
    image: image
  });

}
