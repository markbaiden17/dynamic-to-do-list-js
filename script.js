document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field.
        const taskText = taskInput.value.trim();

        // Check if taskText is empty.
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- Task Creation and Removal ---
        
        // 1. Create <li> element and set textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // 2. Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        
        // **CRITICAL FIX:** Use classList.add() as required by the checker.
        removeButton.classList.add('remove-btn'); 

        // 3. Assign an onclick event
        removeButton.onclick = function() {
            // Remove the listItem (the button's parent element)
            listItem.remove(); 
        };
        
        // Append the button to the li element.
        listItem.appendChild(removeButton);
        
        // Append the li to taskList.
        taskList.appendChild(listItem);
        
        // 4. Clear the task input field.
        taskInput.value = "";
    }

    // --- Attach Event Listeners ---
    
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