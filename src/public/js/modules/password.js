import { generator } from './generator.js';

const inputs = {
    displayPassword: document.querySelector('.numbers-password'),
    passwordButton: document.querySelector('.div-button'),
    passwordChar: document.querySelector('.password-char input'),
    passwordNumber: document.querySelector('.password-numbers input'),
    passwordUpper: document.querySelector('.password-upper input'),
    passwordLower: document.querySelector('.password-lower input'),
    passwordSymbols: document.querySelector('.password-symbols input')
};

function password() {
    inputs.passwordButton.onclick = () => {
        inputs.displayPassword.innerHTML = generator(
            inputs.passwordChar.value,
            inputs.passwordUpper.checked,
            inputs.passwordLower.checked,
            inputs.passwordNumber.checked,
            inputs.passwordSymbols.checked
        );
    };
};
export { password };
