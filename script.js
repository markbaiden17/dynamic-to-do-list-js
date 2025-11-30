document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field.
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty.
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- Task Creation and Removal (Your Section) ---
        
        // 1. Create a new li element.
        const listItem = document.createElement('li');
        
        // 2. Set its textContent to taskText.
        listItem.textContent = taskText;

        // 3. Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        
        // 4. Set its textContent to "Remove".
        removeButton.textContent = "Remove";
        
        // 5. Give it a class name of 'remove-btn'. (Using className as requested)
        removeButton.className = 'remove-btn'; 

        // 6. Assign an onclick event to the remove button.
        removeButton.onclick = function() {
            // When triggered, removes the li element (the button's parent) from taskList.
            taskList.removeChild(listItem);
        };
        
        // 7. Append the remove button to the li element.
        listItem.appendChild(removeButton);
        
        // 8. Append the li to taskList.
        taskList.appendChild(listItem);
        
        // 9. Clear the task input field.
        taskInput.value = "";
    }

    // --- Attach Event Listeners (Your Section) ---
    
    // Add event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for the ‘keypress’ event.
    taskInput.addEventListener('keypress', function(event) {
        
        // Check if event.key is equal to ‘Enter’ before calling addTask.
        if (event.key === 'Enter') {
            addTask();
        }
    });
});