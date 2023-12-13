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
    this.addNewTask = function (taskContent, isChecked) {
      const aux = new Task(taskContent, isChecked);
      this.taskList.push(aux);
    };
  }
}
class Task {
  constructor(taskContent, isChecked) {
    this.taskContent = taskContent;
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
export { Project, Task };
