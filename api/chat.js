import fs from "fs";
import path from "path";

const filePath =
path.join(process.cwd(), "image.json");

export default async function handler(req, res) {

if(req.method === "POST") {

try{

const body = req.body;

fs.writeFileSync(
filePath,
JSON.stringify({
image: body.image || ""
})
);

return res.status(200).json({
success:true
});

}catch(err){

return res.status(500).json({
success:false,
error:String(err)
});

}

}

try{

if(!fs.existsSync(filePath)){

return res.status(200).json({
success:true,
image:""
});

}

const data =
JSON.parse(
fs.readFileSync(filePath,"utf8")
);

return res.status(200).json({
success:true,
image:data.image || ""
});

}catch(err){

return res.status(500).json({
success:false,
error:String(err)
});

}

}
