export function reload() {
  const dialog = document.getElementById("dialog");
  const things = document.getElementsByClassName("dialogElements");
  while (things.length > 0) {
    dialog.remove(things[0]);
  }
}
