document.addEventListener('DOMContentLoaded', function() {
    // 1. Select DOM Elements (ensuring they are within scope)
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Define the addTask Function
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- Task Creation and Removal (Core Logic) ---

        // Create the new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the task text

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn'; // Assign the CSS class

        // Assign the removal logic using an anonymous function
        removeButton.onclick = function() {
            // Removes the parent element (the <li>) of the button
            taskList.removeChild(listItem);
        };
        
        // Append the button to the <li>, and the <li> to the <ul>
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // 3. Attach Event Listeners

    // Listener for the "Add Task" button click
    addButton.addEventListener('click', addTask);

    // Listener for the "Enter" key press in the input field
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });
});