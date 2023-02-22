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
  const divToDuplicate = document.getElementsByClassName("tasks");
  
  const addedTask = divToDuplicate.cloneNode(true);
  // Function for loading previous values in array
  // use on change for loading ^
  // document create element div based on class id
  //create new elements with matching classes to
  //replicate tasks bpx
}
