let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.deadline}</td>
        <td>${task.status}</td>
        <td>
          <button class="done" onclick="markDone(${index})">Selesai</button>
          <button class="delete" onclick="deleteTask(${index})">Hapus</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const name = document.getElementById('taskName').value;
  const deadline = document.getElementById('taskDeadline').value;

  if (!name || !deadline) {
    alert('Harap isi semua kolom!');
    return;
  }

  tasks.push({ name, deadline, status: 'Belum' });
  renderTasks();

  document.getElementById('taskName').value = '';
  document.getElementById('taskDeadline').value = '';
}

function markDone(index) {
  tasks[index].status = 'Selesai';
  renderTasks();
}

function deleteTask(index) {
  if (confirm('Yakin ingin menghapus tugas ini?')) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

renderTasks();
