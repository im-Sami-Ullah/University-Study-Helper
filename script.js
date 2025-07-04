document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (task) {
    const list = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
    input.value = '';
  }
});
