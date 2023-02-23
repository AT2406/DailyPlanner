let nameOfTask;
let descOfTask;
n = 0;
taskItem = { name: nameOfTask, description: descOfTask };

const task_list = [];

/*Function used to store task info */
function recordItemInfo() {
  taskItem = { nameOfTask, descOfTask };
  task_list.push(taskItem);
}

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

function addNewTaskBox() {
  /*Select all elements with class tasks and returns array-like object called a nodelist*/
  const divToDuplicate = document.getElementsByClassName('tasks');
  /*Selects the first item in the nodelist(the initial task box) and duplicates it with all contents/attrs*/
  const addedTask = divToDuplicate[0].cloneNode(true);
  /*Create var to references new task button*/
  const button = document.getElementById('addNewTask');
  /*Create var for radio button*/
  const complete = document.getElementById('progress');
  /* */
  addedTask.getElementsByClassName('taskName')[0].value = '';
  /* */
  addedTask.getElementsByClassName('taskDesc')[0].value = '';
  /* */
  addedTask.id = 'task' + ++n;
  addedTask.getElementsByClassName('taskName')[0].id = 'task' + n + 'Name';
  addedTask.getElementsByClassName('taskDesc')[0].id = 'task' + n + 'Desc';

  /*Select the radio button and set it to unchecked in duplicate*/
  // complete.checked = false;
  button.parentNode.insertBefore(addedTask, button);
}
