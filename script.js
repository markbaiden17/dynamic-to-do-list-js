// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if input is empty
        }

        // Step 4: Task Creation and Removal Logic (if taskText is not empty)

        // Create the new list item (li)
        const listItem = document.createElement('li');
        
        // Set the text content of the list item to the new task
        listItem.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        // When clicked, it removes its parent element (the listItem) from the taskList
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the new list item to the unordered list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed inside the input field
    taskInput.addEventListener('keypress', function(event) {
        // Check if the key pressed is the "Enter" key
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Note: The instruction "Invoke the addTask function on DOMContentLoaded" seems like an error
    // since calling it here would execute the function before user input, potentially showing an empty alert.
    // The previous steps (attaching event listeners) correctly handle the required functionality.
});