const symbols = '!?@#$%&*_-+=';
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const uppercaseGenerator = () => String.fromCharCode(random(65, 91));
const lowercaseGenerator = () => String.fromCharCode(random(97, 123));
const numberGenerator = () => String.fromCharCode(random(48, 58));
const symbolsGenerator = () => symbols[random(0, symbols.length)];

const generator = (quantity, upper, lower, numbers, symbols) => {
    quantity = Number(quantity);
    const arrayPassword = [];
    if (quantity == '') return `Tá vazio`;

    for (let i = 0; i < quantity; i++) {
        if (upper) arrayPassword.push(uppercaseGenerator());
        if (lower) arrayPassword.push(lowercaseGenerator());
        if (numbers) arrayPassword.push(numberGenerator());
    };
    return arrayPassword.join('').slice(0, quantity);
};
export { generator };