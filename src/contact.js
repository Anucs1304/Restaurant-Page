export default function loadContact() {
  const content = document.getElementById("content");
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = document.createElement("p");
  info.textContent = "Email: hello@anus-bistro.com";

  container.appendChild(title);
  container.appendChild(info);

  content.appendChild(container);
}
