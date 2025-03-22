// Игровые данные
const gameData = [
    {
        text: "Вы оказались в разломе времени. Перед вами две дорожки...",
        choices: [
            { text: "Пойти налево", next: 1, bg: "assets/bg2.jpg", char: "assets/hero2.png" },
            { text: "Пойти направо", next: 2, bg: "assets/bg3.jpg", char: "assets/hero3.png" }
        ]
    },
    {
        text: "Вы встретили странного старца. Он предлагает выбор.",
        choices: [
            { text: "Взять меч", next: 3, bg: "assets/bg4.jpg", char: "assets/hero4.png" },
            { text: "Взять посох", next: 4, bg: "assets/bg5.jpg", char: "assets/hero5.png" }
        ]
    },
    {
        text: "Вы нашли древний артефакт, но стражи времени заметили вас!",
        choices: [
            { text: "Скрыться", next: 5, bg: "assets/bg6.jpg", char: "assets/hero6.png" },
            { text: "Броситься в бой", next: 6, bg: "assets/bg7.jpg", char: "assets/hero7.png" }
        ]
    },
    {
        text: "Вы оказались в альтернативной реальности, где правит магия.",
        choices: [
            { text: "Стать магом", next: 7, bg: "assets/bg8.jpg", char: "assets/hero8.png" },
            { text: "Сражаться с магами", next: 8, bg: "assets/bg9.jpg", char: "assets/hero9.png" }
        ]
    },
    {
        text: "Финальная битва за судьбу временной линии!",
        choices: [
            { text: "Спасти мир", next: 9, bg: "assets/bg10.jpg", char: "assets/hero10.png" },
            { text: "Уничтожить временные потоки", next: 10, bg: "assets/bg11.jpg", char: "assets/hero11.png" }
        ]
    },
    {
        text: "Вы победили! Временная линия спасена! 🎉",
        choices: []
    }
];

// DOM элементы
const storyElement = document.getElementById("story");
const choicesContainer = document.getElementById("choices");
const backgroundElement = document.getElementById("background");
const characterElement = document.getElementById("character");
const startButton = document.getElementById("start");

let currentStep = 0;

// Запуск игры
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    nextStep(0);
});

// Функция перехода на следующий шаг
function nextStep(stepIndex) {
    currentStep = stepIndex;
    const step = gameData[stepIndex];

    // Обновляем текст истории
    storyElement.textContent = step.text;

    // Обновляем фон и персонажа с анимацией
    backgroundElement.style.opacity = 0;
    setTimeout(() => {
        backgroundElement.src = step.choices[0]?.bg || "assets/bg1.jpg";
        characterElement.src = step.choices[0]?.char || "assets/hero1.png";
        backgroundElement.style.opacity = 1;
    }, 500);

    // Очищаем старые кнопки
    choicesContainer.innerHTML = "";

    // Создаём новые кнопки выбора
    step.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice.text;
        btn.addEventListener("click", () => nextStep(choice.next));
        choicesContainer.appendChild(btn);
    });
}
