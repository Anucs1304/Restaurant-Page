export default function loadMenu() {
  const content = document.getElementById("content");
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const item = document.createElement("p");
  item.textContent = "🍝 Pasta — €12";

  container.appendChild(title);
  container.appendChild(item);

  content.appendChild(container);
}
