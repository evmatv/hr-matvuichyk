// Данные о путешествиях во времени
const gameData = [
    {
        text: "Вы стоите перед порталом. Он ведет в неизвестность.",
        choices: [
            { text: "Шагнуть внутрь", next: 1, bg: "assets/time_tunnel.jpg", char: "assets/agent.png" },
            { text: "Остаться и изучить", next: 2, bg: "assets/lab.jpg", char: "assets/scientist.png" }
        ]
    },
    {
        text: "Вы попали в доисторический мир! Гигантский динозавр замечает вас.",
        choices: [
            { text: "Спрятаться в пещере", next: 3, bg: "assets/dino.jpg", char: "assets/agent_hide.png" },
            { text: "Бежать на свет", next: 4, bg: "assets/jungle.jpg", char: "assets/agent_run.png" }
        ]
    },
    {
        text: "Вы оказались в средневековье. Стражники вас заметили!",
        choices: [
            { text: "Притвориться странником", next: 5, bg: "assets/castle.jpg", char: "assets/knight.png" },
            { text: "Скрыться в толпе", next: 6, bg: "assets/market.jpg", char: "assets/merchant.png" }
        ]
    },
    {
        text: "Вы нашли странный артефакт! Он может вернуть вас обратно.",
        choices: [
            { text: "Активировать артефакт", next: 7, bg: "assets/futuristic.jpg", char: "assets/agent_future.png" },
            { text: "Оставить его", next: 8, bg: "assets/dark_temple.jpg", char: "assets/mystic.png" }
        ]
    },
    {
        text: "Поздравляем! Вы успешно выбрались из временного разлома!",
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

// Переход к следующему шагу
function nextStep(stepIndex) {
    currentStep = stepIndex;
    const step = gameData[stepIndex];

    // Обновляем текст истории
    storyElement.textContent = step.text;

    // Меняем фон и персонажа
    backgroundElement.style.opacity = 0;
    setTimeout(() => {
        backgroundElement.src = step.choices[0]?.bg || "assets/default.jpg";
        characterElement.src = step.choices[0]?.char || "assets/agent.png";
        backgroundElement.style.opacity = 1;
    }, 500);

    // Очищаем старые кнопки
    choicesContainer.innerHTML = "";

    // Создаем новые кнопки выбора
    step.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice.text;
        btn.addEventListener("click", () => nextStep(choice.next));
        choicesContainer.appendChild(btn);
    });
}
