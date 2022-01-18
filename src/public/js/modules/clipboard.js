const clipboard = () => {
    const display = document.querySelector('.numbers-password');
    const clip = document.querySelector('.show-password section span');
 
    clip.onclick = async () => {
        if (display.innerHTML == '') return false;
        const numbersDisplay = display.innerHTML;
        await navigator.clipboard.writeText(numbersDisplay);
        await navigator.clipboard.readText();
        return createCopied();
    };

    const createCopied = () => {
        const div = document.createElement('div');
        div.classList.add('div-copied');
        div.innerText = 'Copiado';
        display.nextElementSibling.append(div);
        setTimeout(() => {
            div.remove();
        }, 3000);
    };
};
export { clipboard };