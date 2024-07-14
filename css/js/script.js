const screen = document.getElementById('screen');

function clearScreen() {
    screen.textContent = '0';
}

function deleteLast() {
    screen.textContent = screen.textContent.slice(0, -1) || '0';
}

function appendValue(value) {
    if (screen.textContent === '0') {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

function calculateResult() {
    try {
        screen.textContent = eval(screen.textContent);
    } catch {
        screen.textContent = 'Error';
    }
}
