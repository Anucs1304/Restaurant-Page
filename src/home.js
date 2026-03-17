export default function loadHome() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.innerHTML = `
    <h1>Welcome to Anu’s Bistro</h1>
    <p>The finest food in Berlin.</p>
  `;

  content.appendChild(container);
}

