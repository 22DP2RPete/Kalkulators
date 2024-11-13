const buttons = document.querySelectorAll('.buttons button');
const inputEl = document.querySelector('#input');
const output = document.querySelector('#output');
const historyContainer = document.querySelector('.historyContainer');
const clearAllButton = document.querySelector('.clearAllButton'); // Select the "Clear All History" button

const STORAGE_NAME = 'history_v4';

// Initialize history in localStorage if not already set
if (localStorage.getItem(STORAGE_NAME) == null) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify([]));
}

refreshHistory();

for (let button of buttons) {
    const symbol = button.innerHTML;

    button.addEventListener('pointerdown', () => {
        if (symbol === '=') {
            const historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));

            // Add new expression to history if not already present
            if (!historyElements.includes(inputEl.value)) {
                historyElements.push(inputEl.value);
            }
            // Store in localStorage and refresh history
            localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements));

            // Now evaluate the expression and show the result in output
            try {
                let newValue = eval(inputEl.value) || '';
                output.value = newValue;
            } catch (error) {
                output.value = 'INVALID RESULT';
            }

            refreshHistory();
        }
        else if (symbol === 'DEL') {
            inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1);
            output.value = ''; // Clear output when modifying input
        }
        else if (symbol === 'CLEAR') {
            inputEl.value = '';
            output.value = ''; // Clear output on clear
        } else {
            inputEl.value += symbol;
            output.value = ''; // Clear output as we are typing
        }

        registrateChange();
    });
}

// Function to refresh the history section
function refreshHistory() {
    historyContainer.innerHTML = ''; // Clear the history container

    let historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));

    for (let i = historyElements.length - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'historyItem';

        let evaluated = '';

        try {
            evaluated = eval(historyElements[i]) || 'INVALID RESULT';
        } catch (error) {
            evaluated = 'INVALID RESULT';
        }

        // Create a delete button for each history item
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML = 'Delete';
        
        // Add event listener to delete button
        deleteButton.addEventListener('pointerdown', (e) => {
            e.stopPropagation(); // Prevent triggering historyItem click event
            removeHistoryItem(i);
        });

        div.innerHTML = `
            <div>${truncate(historyElements[i], 14)}</div>
            <div>${truncate(evaluated, 14)}</div>
        `;

        // Append the delete button to the history item div
        div.appendChild(deleteButton);

        historyContainer.appendChild(div);

        div.addEventListener('pointerdown', () => {
            inputEl.value = historyElements[i];
            output.value = ''; // Clear output when history is selected
            registrateChange();
        });
    }
}

// Function to remove a specific history item
function removeHistoryItem(index) {
    let historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));
    historyElements.splice(index, 1); // Remove item at index
    localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements)); // Update localStorage
    refreshHistory(); // Refresh the history container
}

// Function to clear all history
clearAllButton.addEventListener('pointerdown', () => {
    if (confirm("Are you sure you want to clear all history?")) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify([])); // Clear all history from localStorage
        refreshHistory(); // Refresh the history display
    }
});

// Function to truncate long text for display purposes
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

function registrateChange() {
    // No longer updating the output automatically
    // The output will only be updated after pressing '='
}
