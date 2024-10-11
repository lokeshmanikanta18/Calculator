let display = document.getElementById('display');

// Function to append characters to the display
function appendCharacter(character) {
    display.value += character;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    try {
        // Use eval() to calculate the expression from the input
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}