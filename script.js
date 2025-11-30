document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SELECT DOM ELEMENTS: These must be inside this function scope.
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Make sure these IDs exactly match your HTML:
    // HTML: <button id="add-task-btn">
    // HTML: <input type="text" id="task-input">
    // HTML: <ul id="task-list">

    // 2. DEFINE THE CORE FUNCTION
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- Task Creation and Removal Logic ---
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Logic: When clicked, remove the listItem (the button's parent)
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = ""; // Clear the input field
    }

    // 3. ATTACH EVENT LISTENERS
    
    // Listener for the button click
    // Note: 'addTask' is passed as a reference, no parentheses ()
    if (addButton) { // Added a check just in case
        addButton.addEventListener('click', addTask);
    }

    // Listener for the 'Enter' key press
    if (taskInput) { // Added a check just in case
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    }