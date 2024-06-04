document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const taskDate = document.createElement('span');
        taskDate.textContent = `Added: ${new Date().toLocaleString()}`;

        taskInfo.appendChild(taskSpan);
        taskInfo.appendChild(taskDate);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', function () {
            taskItem.classList.add('completed');
            completedTasksList.appendChild(taskItem);
            taskItem.removeChild(completeButton);

            const completedDate = document.createElement('span');
            completedDate.textContent = `Completed: ${new Date().toLocaleString()}`;
            taskInfo.appendChild(completedDate);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function () {
            const newTaskText = prompt('Edit task:', taskSpan.textContent);
            if (newTaskText) {
                taskSpan.textContent = newTaskText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskButtons);
        pendingTasksList.appendChild(taskItem);
    }
});
