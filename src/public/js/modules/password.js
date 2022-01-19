import { generator } from './generator.js';

const inputs = {
    displayPassword: document.querySelector('.numbers-password'),
    passwordButton: document.querySelector('.div-button'),
    passwordChar: document.querySelectorAll('.password-char label input'),
    passwordNumber: document.querySelector('.password-numbers input'),
    passwordUpper: document.querySelector('.password-upper input'),
    passwordLower: document.querySelector('.password-lower input'),
    passwordSymbols: document.querySelector('.password-symbols input')
};

function password() {
    let charValue = '';
    inputs.passwordButton.onclick = () => {
        inputs.passwordChar.forEach((item) => {
            if (item.checked) return charValue = item.value;
            return charValue;
        });
        const interval = setInterval(() => {
            inputs.displayPassword.innerHTML = generator(
                charValue,
                inputs.passwordUpper.checked,
                inputs.passwordLower.checked,
                inputs.passwordNumber.checked,
                inputs.passwordSymbols.checked
            );
        }, 5);
        setTimeout(() => {
            clearInterval(interval);
        }, 200);
    };
};
export { password };
