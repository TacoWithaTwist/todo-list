import { loadModal } from "./dialogLoad.js";
import { Project, Task } from "./logic.js";
export function pageLoad() {
  document.body.style = "height:100svh; width:100svw;";
  const content = document.getElementById("content");
  content.style =
    "display: flex; justify-content:center;flex-direction:column; gap:10vh;";
  const cardContainer = document.createElement("div");
  cardContainer.style =
    "flex:1; display: flex; justify-content:center; gap: 15vh; flex-wrap: wrap;";
  cardContainer.id = "cardContainer";
  const newProjectButton = document.createElement("button");
  newProjectButton.innerHTML = "Add New Project";
  content.appendChild(newProjectButton);
  content.appendChild(cardContainer);
  newProjectButton.addEventListener("click", function newProjectCard() {
    loadModal();
  });
}
