const randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        message.textContent = 'Поздравляем! Вы угадали число!';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Слишком низко! Попробуйте снова.';
    } else {
        message.textContent = 'Слишком высоко! Попробуйте снова.';
    }
});
