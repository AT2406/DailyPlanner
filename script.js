let nameOfTask;
let descOfTask;
n = 0;
taskItem = { name: nameOfTask, description: descOfTask };

task_list = [];

/*Function used to store task info */
function recordItemInfo() {
  taskItem = { nameOfTask, descOfTask };
  task_list.push(taskItem);
  localStorage.setItem('tasks', JSON.stringify(task_list));
}

/* Read and store values from user in tasks */
function readInput() {
  nameOfTask = document.getElementById('task' + n + 'Name').value;
  descOfTask = document.getElementById('task' + n + 'Desc').value;
  if (nameOfTask == '' || descOfTask == '') {
    alert('*Enter values');
  } else {
    recordItemInfo();
    // document.getElementById('test').innerHTML = JSON.stringify(task_list);
    addNewTaskBox();
  }
}

/* Event listener for load of dom to see if any values have been added into the browsers local storage */
window.addEventListener('load', () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    task_list = JSON.parse(savedTasks);
    // populateTaskBoxes();
  }
});

// /*  */
// function populateTaskBoxes() {
//   task_list.forEach((task, index) => {
//     const addedTask = addNewTaskBox(index, task.nameOfTask, task.descOfTask);
//     const addButton = document.getElementById('addNewTask');
//     addButton.parentNode.insertBefore(addedTask, addButton);
//   });
// }

function addNewTaskBox() {
  /*Select all elements with class tasks and returns array-like object called a nodelist*/
  const divToDuplicate = document.getElementsByClassName('tasks');
  /*Selects the first item in the nodelist(the initial task box) and duplicates it with all contents/attrs*/
  const addedTask = divToDuplicate[0].cloneNode(true);
  /*Create var to references new task button*/
  const button = document.getElementById('temp');
  /*Create var for radio button*/
  const complete = document.getElementById('progress');
  /*Select the button and set it to unchecked in duplicate*/
  complete.checked = false;

  /* Inserts cloned element just above the add task button*/
  button.parentNode.insertBefore(addedTask, button, complete);

  /* Selects textarea elements in cloned task, clears values, and increments n to assign a unique id to each new task element */
  addedTask.getElementsByClassName('taskName')[0].value = '';
  addedTask.getElementsByClassName('taskDesc')[0].value = '';
  addedTask.id = 'task' + ++n;
  addedTask.getElementsByClassName('taskName')[0].id = 'task' + n + 'Name';
  addedTask.getElementsByClassName('taskDesc')[0].id = 'task' + n + 'Desc';
}

// function boxChecked() {
//   const tskComplete = document.querySelector('#progress:checked');
//   /* get parent node tasks from array and then set item in array to new bg image  */
//   const box = tskComplete.parentElement.nodeName;
//   box.style = 'background-color: #000';
// }
