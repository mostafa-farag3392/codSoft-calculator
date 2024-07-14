const screen = document.getElementById('screen');

function clearScreen() {
    screen.textContent = '';
}

function deleteLast() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function appendValue(value) {
    screen.textContent += value;
}

function calculateResult() {
    try {
        screen.textContent = eval(screen.textContent);
    } catch {
        screen.textContent = 'Error';
    }
}
