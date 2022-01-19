const selected = () => {
    const labelsOptions = document.querySelectorAll('.password-options label');
    const labelChar = document.querySelectorAll('.password-char section label');

    labelsOptions.forEach(item => addColor(item));
    labelChar.forEach(item => addColor(item));
    
    function addColor(container) {
        const label = container.children[0];
        if (label.checked) container.classList.add('active');
        if (container.parentNode.classList == 'password-options') {
            return label.addEventListener('click', () => container.classList.toggle('active'));
        };
        label.addEventListener('click', () => {
            labelChar.forEach((item) => {
                return item.classList.remove('active');
            });
            return container.classList.add('active');
        });
    };
};
export { selected };