const selected = () => {
    const labels = document.querySelectorAll('.password-char section label');
    labels.forEach((label) => {
        label.onclick = () => {
            labels.forEach((item) => {
                if (item.classList == 'active') item.classList.remove('active');
            });
            label.classList.add('active');
        };
    });
};
export { selected };