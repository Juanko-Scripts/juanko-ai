async function sendMessage() {

  const prompt = document.getElementById("prompt").value;

  const responseBox = document.getElementById("response");

  responseBox.innerHTML = "Cargando...";

  try {

    const res = await fetch(
      `/api/chat?text=${encodeURIComponent(prompt)}`
    );

    const data = await res.json();

    responseBox.innerHTML = data.response;

  } catch(err) {

    responseBox.innerHTML = "Error conectando API";

    console.error(err);

  }
}
