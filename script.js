document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // --- Helper Function: Saves the current tasks array to Local Storage ---
    function saveTasks(currentTasks) {
        // Serializes the array to a JSON string and saves it under the key 'tasks'.
        localStorage.setItem('tasks', JSON.stringify(currentTasks));
    }

    // --- Core Function: Add/Create Task (Modified to handle persistence) ---
    // The 'save' parameter defaults to true, but is set to false when loading existing tasks.
    function addTask(taskText, save = true) {
        
        // If taskText is being passed directly (e.g., from an event listener), trim it.
        // If taskText is passed from loadTasks, it's already a clean string.
        const newTaskText = taskText.trim();

        if (newTaskText === "") {
            alert("Please enter a task.");
            return;
        }

        // 1. Create <li> element
        const listItem = document.createElement('li');
        // Set textContent to only the task text (we already defined the text above)
        // We use innerHTML to place the text content and preserve the remove button placement
        listItem.innerHTML = `<span>${newTaskText}</span>`; 

        // 2. Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); 

        // 3. Assign removal logic
        removeButton.onclick = function() {
            // Remove from the DOM
            listItem.remove(); 
            
            // --- Implement Task Removal with Local Storage Update ---
            
            // 1. Get the current tasks from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            
            // 2. Find the index of the task to be removed.
            // We search for the text content of the listItem's first child (the <span>).
            const index = storedTasks.indexOf(newTaskText);
            
            if (index > -1) {
                // 3. Remove the task from the array
                storedTasks.splice(index, 1);
                
                // 4. Update Local Storage
                saveTasks(storedTasks);
            }
        };
        
        // Append the button to the li element.
        listItem.appendChild(removeButton);
        
        // Append the li to taskList.
        taskList.appendChild(listItem);
        
        // --- Update Task Addition Functionality (Local Storage Saving) ---
        if (save) {
            // 1. Get the current tasks from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            
            // 2. Add the new task to the array
            storedTasks.push(newTaskText);
            
            // 3. Save the updated array back to Local Storage
            saveTasks(storedTasks);
            
            // Clear the visual input field only if a new task was entered via the UI
            taskInput.value = "";
        }
        
    }
    
    // --- Code for Loading Tasks from Local Storage ---
    function loadTasks() {
        // Retrieve stored tasks, defaulting to an empty array if nothing is found.
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Iterate through the stored tasks and call addTask for each one.
        storedTasks.forEach(taskText => {
            // Pass 'false' for the 'save' parameter to prevent re-saving tasks back to Local Storage.
            addTask(taskText, false); 
        });
    }


    // --- Attach Event Listeners ---
    
    // Add event listener to addButton
    addButton.addEventListener('click', () => {
        // Get value from input when button is clicked
        addTask(taskInput.value, true); 
    });

    // Add event listener for the ‘keypress’ event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            // Get value from input when Enter is pressed
            addTask(taskInput.value, true); 
        }
    });

    // --- Invoke Load Function on DOMContentLoaded ---
    loadTasks();
});