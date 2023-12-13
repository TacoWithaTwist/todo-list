import { Project, Task, addProject } from "./logic.js";
import { newProjectCard } from "./newProjectCard.js";
export function pageLoad() {
  const content = document.getElementById("content");
  content.style =
    "display: flex; justify-content:center;flex-direction:column; flex-wrap: nowrap; gap:2vw;";
  const cardContainer = document.createElement("div");
  cardContainer.id = "cardContainer";
  const newProjectButton = document.createElement("button");
  newProjectButton.innerHTML = "Add New Project";
  newProjectButton.addEventListener("click", newProjectCard());

  content.appendChild(newProjectButton);
}
