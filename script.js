const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); //adds a new child element (li) to the parent element of the div with the class name of 'list-container'.
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //HTML symbol for 'x'.
    li.appendChild(span); //adds a new child element (span) to the parent element (li).
  }
  inputBox.value = ""; //At the end of the function being run, it will 'reset' the input box.
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //e.target.tagName checks what type of element was clicked, in this case 'li'.
      e.target.classList.toggle("checked"); //e.target.classList.toggle, if class checked is not there, it will be added, and visa versa for each click.
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      //e.target.tagName checks if we have clicked on a 'span' element.
      e.target.parentElement.remove(); //e.target.parentElement.remove() this will remove the parent element of the span clicked meaning the 'li'.
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

/*
When you click on something in a webpage, that "click event" doesn’t just happen to that one element. It also happens to the elements that contain it, in a process known as propagation.

There are two phases of event propagation:

Capturing phase (from top to bottom): The event starts from the top (like the document or window) and works its way down to the element you clicked on.
Bubbling phase (from bottom to top): Once the event reaches the element you clicked on, it starts "bubbling" up, passing through each parent element back to the top.


listContainer.addEventListener("click", function (e) { ... }, false);
"Handle the event during the bubbling phase." This is the most common behavior, where the event first happens on the clicked element (e.g., <li>) and then bubbles up to its parent elements (e.g., the <ul>).
*/
