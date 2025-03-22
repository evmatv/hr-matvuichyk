let randomNumber;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const winImage = document.getElementById('winImage');

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    guessInput.value = ''; // Очистить поле ввода
    message.textContent = ''; // Очистить сообщение
    winImage.style.display = 'none'; // Скрыть изображение
}

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        message.textContent = 'Поздравляем! Вы угадали, вот ваш приз!';
        winImage.style.display = 'block'; // Показать изображение
    } else if (userGuess < randomNumber) {
        message.textContent = 'Слишком низко! Постарайся еще, приз близко!.';
    } else {
        message.textContent = 'Слишком высоко! Ну ты Емеля даеш-то! Давай еще.';
    }
});

// Начать новую игру при загрузке страницы
startNewGame();
