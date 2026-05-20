let lastImage = "";

async function generateImage(){

const prompt =
document.getElementById("prompt").value;

const status =
document.getElementById("status");

const image =
document.getElementById("image");

if(!prompt){

status.innerHTML =
"Escribe un prompt";

return;

}

status.innerHTML =
"Generando imagen...";

image.src = "";

try{

const result = await textToImage({

prompt: prompt,

width: 1024,
height: 1024,

seed: Date.now()

});

console.log(result);

image.src = result.image;

lastImage = result.image;

status.innerHTML =
"Subiendo imagen...";

await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

image:lastImage

})

});

status.innerHTML =
"Imagen generada";

}catch(err){

console.error(err);

status.innerHTML =
"Error generando imagen";

}

}

window.getLastImage = function(){

return lastImage;

}
