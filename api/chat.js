export default async function handler(req, res) {

const prompt =
req.query.prompt || "anime girl";

const seed =
req.query.seed || Date.now();

const image =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${seed}`;

res.status(200).json({
success:true,
image:image
});

}
