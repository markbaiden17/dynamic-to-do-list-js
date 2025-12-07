document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        
        // Retrieve and trim the value from the task input field.
        // Store this value in a variable named taskText.
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty. If empty, alert the user.
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- Task Creation and Removal ---

        // 1. Create a new li element. Set its textContent to taskText.
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // 2. Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn'; 

        // 3. Assign an onclick event to the remove button that, when triggered, 
        // removes the li element from taskList.
        removeButton.onclick = function() {
            // Removes the parent <li> element from the DOM
            taskList.removeChild(listItem);
        };
        
        // 4. Append the remove button to the li element.
        listItem.appendChild(removeButton);
        
        // 5. Append the li to taskList.
        taskList.appendChild(listItem);
        
        // 6. Clear the task input field.
        taskInput.value = "";
    }
    
    // --- Attach Event Listeners ---
    
    // Add an event listener to addButton that calls addTask when clicked.
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event.
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask.
        if (event.key === 'Enter') {
            addTask(); 
        }
    });
});