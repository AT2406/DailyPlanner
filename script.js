const task_list = [];
let nameOfTask;
let descOfTask;
n = 0;
taskItem = { name: nameOfTask, description: descOfTask };

/* set first div in html to task 1, 
array object holding title and desc strings
pull vlues from dom and make object, then push object to array */

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
    document.getElementById('test').innerHTML = JSON.stringify(task_list);
  }
  addNewTaskBox();
}

function addNewTaskBox() {
  const divToDuplicate = document.getElementsByClassName('tasks');
  const addedTask = divToDuplicate[0].cloneNode(true);
  const button = document.getElementById('addNewTask');

  addedTask.getElementsByClassName('taskName')[0].value = '';
  addedTask.getElementsByClassName('taskDesc')[0].value = '';

  addedTask.id = 'task' + ++n;
  addedTask.getElementsByClassName('taskName')[0].id = 'task' + n + 'Name';
  addedTask.getElementsByClassName('taskDesc')[0].id = 'task' + n + 'Desc';

  button.parentNode.insertBefore(addedTask, button);
}
