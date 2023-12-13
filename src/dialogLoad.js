import { Project } from "./logic";
import { reload } from "./reload";

export function loadModal() {
  const projectDialog = document.createElement("dialog");
  projectDialog.id = "dialog";
  document.body.appendChild(projectDialog);
  projectDialog.showModal();
  const form = document.createElement("form");
  const label1 = document.createElement("label");
  label1.innerHTML = "Project Title:";
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.id = "title";
  const label2 = document.createElement("label");
  label2.innerHTML = "Start Date:";
  const input2 = document.createElement("input");
  input2.type = "date";
  input2.id = "startDate";
  const label3 = document.createElement("label");
  label3.innerHTML = "Deadline:";
  const input3 = document.createElement("input");
  input3.type = "date";
  input3.id = "endDate";
  const label4 = document.createElement("label");
  label4.innerHTML = "Project Description:";
  const input4 = document.createElement("input");
  input4.id = "description";
  const urgency = document.createElement("select");
  const important = document.createElement("option");
  important.value = "High Priority";
  important.text = "Very Important";
  const mediumImportance = document.createElement("option");
  mediumImportance.value = "Medium Priority";
  mediumImportance.text = "Moderately Important";
  const nonImportant = document.createElement("option");
  nonImportant.value = "Low Priority";
  nonImportant.text = "Below Important";
  const modalButton = document.createElement("button");
  modalButton.type = "submit";
  modalButton.innerHTML = "Add new Project";
  const div1 = document.createElement("div");
  div1.className = "dialogElements";
  const div2 = document.createElement("div");
  div2.className = "dialogElements";
  const div3 = document.createElement("div");
  div3.className = "dialogElements";
  const div4 = document.createElement("div");
  div4.className = "dialogElements";
  const div5 = document.createElement("div");
  div5.className = "dialogElements";
  div1.appendChild(label1);
  div1.appendChild(input1);
  div2.appendChild(label2);
  div2.appendChild(input2);
  div3.appendChild(label3);
  div3.appendChild(input3);
  div4.appendChild(label4);
  div4.appendChild(input4);
  div5.appendChild(modalButton);
  form.appendChild(div1);
  form.appendChild(div2);
  form.appendChild(div3);
  form.appendChild(div4);
  form.appendChild(div5);
  projectDialog.appendChild(form);
  modalButton.addEventListener("click", function (event) {
    event.preventDefault();
    while (
      input1 === null ||
      input2 === null ||
      input3 === null ||
      input4 === null
    ) {
      projectDialog.style = "border : solid red;";
      alert("you must enter correct inputs please");
    }
    const newProject = new Project(
      input2.value,
      input3.value,
      input1.value,
      input4.value,
      urgency.value
    );
    const cardContainer = document.getElementById("cardContainer");
    const card = document.createElement("div");
    div1.className = "dialogElements";
    card.className = "cards";
    card.style =
      "max-width: 30svw;min-width:20svw; min-height: 40svh;max-height:50svh; border: solid black; border-radius:5px;text-align:center; position:relative;";
    const title = document.createElement("h3");
    title.innerHTML = newProject.title;
    const dateStart = document.createElement("span");
    dateStart.style =
      "position:absolute; top:-15%; left:0; border-top:solid 2px;";
    dateStart.innerHTML = newProject.dateStart;
    const dateEnd = document.createElement("span");
    dateEnd.style =
      "position:absolute; bottom:-15%; right:0; border-bottom:solid 2px;";
    dateEnd.innerHTML = newProject.endDate;
    const description = document.createElement("p");
    description.innerHTML = "this is description for project";
    card.appendChild(title);
    card.appendChild(dateStart);
    card.appendChild(dateEnd);
    card.appendChild(description);
    cardContainer.appendChild(card);
    projectDialog.close();
  });
}
