const getJokes = async () => {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    const myjokes = document.querySelector("#myjoke");
    // Construct the joke text using the setup and punchline
    const jokeText = `${data.setup} ${data.punchline}`;
    myjokes.innerHTML = jokeText;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

window.addEventListener("load", () => {
  getJokes();
});
