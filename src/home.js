export default function loadHome() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Anu’s Bistro";

  const description = document.createElement("p");
  description.textContent = "The finest food in Berlin, made with love.";

  container.appendChild(headline);
  container.appendChild(description);

  content.appendChild(container);
}
