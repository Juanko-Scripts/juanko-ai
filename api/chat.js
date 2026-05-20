let latestImage = "";

export default async function handler(req, res) {

if(req.method === "POST") {

latestImage = req.body.image || "";

return res.status(200).json({
success:true
});

}

res.status(200).json({
success:true,
image:latestImage
});

}
