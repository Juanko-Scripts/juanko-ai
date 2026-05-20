async function generateImage(){

const prompt =
document.getElementById("prompt").value;

const status =
document.getElementById("status");

const image =
document.getElementById("image");

if(!prompt){
status.innerHTML = "Escribe un prompt";
return;
}

status.innerHTML = "Generando imagen...";

image.src = "";

try{

const result = await textToImage({

prompt: prompt,

width: 1024,
height: 1024,

seed: Date.now()

});

image.src = result.image;

status.innerHTML = "Imagen generada";

}catch(err){

console.error(err);

status.innerHTML = "Error generando imagen";

}

}
