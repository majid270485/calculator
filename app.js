const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        
        if (buttonText === 'C') {
            display.value = '';
        } else if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'error';
            }
        } else {
            display.value += buttonText;
        }
    });
});
