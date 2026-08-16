// ---- DOM selection ----
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// ---- Check and toggle empty message ----
function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }
}

// ---- Add task ----
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task before adding.');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Task text span
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  // Buttons wrapper
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'task-buttons';

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    updateEmptyMessage();
  });

  btnWrapper.appendChild(completeBtn);
  btnWrapper.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnWrapper);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();

  updateEmptyMessage();
}

// ---- Event listeners ----
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// ---- Initial state ----
updateEmptyMessage();
