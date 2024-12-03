const buttons = document.querySelectorAll('.buttons button');
const inputEl = document.querySelector('#input');
const output = document.querySelector('#output');
const historyContainer = document.querySelector('.historyContainer');
const clearAllButton = document.querySelector('.clearAllButton'); 

const STORAGE_NAME = 'history_v4';


if (localStorage.getItem(STORAGE_NAME) == null) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify([]));
}

refreshHistory();

for (let button of buttons) {
    const symbol = button.innerHTML;

    button.addEventListener('pointerdown', () => {
        if (symbol === '=') {
            const historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));

            
            if (!historyElements.includes(inputEl.value)) {
                historyElements.push(inputEl.value);
            }
            
            localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements));

            
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
            output.value = ''; 
        }
        else if (symbol === 'CLEAR') {
            inputEl.value = '';
            output.value = ''; 
        } else {
            inputEl.value += symbol;
            output.value = ''; 
        }

        registrateChange();
    });
}


function refreshHistory() {
    historyContainer.innerHTML = ''; 

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

        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML = 'Delete';
        
        
        deleteButton.addEventListener('pointerdown', (e) => {
            e.stopPropagation(); 
            removeHistoryItem(i);
        });

        div.innerHTML = `
            <div>${truncate(historyElements[i], 14)}</div>
            <div>${truncate(evaluated, 14)}</div>
        `;

        
        div.appendChild(deleteButton);

        historyContainer.appendChild(div);

        div.addEventListener('pointerdown', () => {
            inputEl.value = historyElements[i];
            output.value = ''; 
            registrateChange();
        });
    }
}


function removeHistoryItem(index) {
    let historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));
    historyElements.splice(index, 1); 
    localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements)); 
    refreshHistory(); 
}


clearAllButton.addEventListener('pointerdown', () => {
    if (confirm("Are you sure you want to clear all history?")) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify([])); 
        refreshHistory(); 
    }
});


function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

