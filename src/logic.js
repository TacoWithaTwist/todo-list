class Project {
  constructor(dateStart, dateEnd, title, description, priority) {
    this.taskList = [];
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.changePriority = function (number) {
      switch (number) {
        case 1:
          this.priority = "High Priority";
          break;
        case 2:
          this.priority = "Medium Priority";
          break;
        case 3:
          this.priority = "Low Priority";
          break;
      }
    };
    this.addNewTask = function (content, isChecked) {
      const aux = new Task(content, isChecked);
      this.taskList.push(aux);
    };
  }
}
class Task {
  constructor(content, isChecked) {
    this.content = content;
    this.isChecked = isChecked;
    this.markedForRemoval = false;
    this.check = function () {
      this.isChecked = !this.isChecked;
    };
    this.removeTask = function () {
      this.markedForRemoval = true;
    };
  }
}
function addProject(dateStart, dateEnd, title, description, priority) {
  const newProject = new Project(
    dateStart,
    dateEnd,
    title,
    description,
    priority
  );
  return newProject;
}
export { Project, Task, addProject };
