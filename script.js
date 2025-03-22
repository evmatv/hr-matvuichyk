// Данные для временных линий и событий
const timelines = [
    {
        name: "Линия А",
        events: [
            { id: 1, description: "Герой погибает в бою" },
            { id: 2, description: "Город разрушен" },
        ],
    },
    {
        name: "Линия Б",
        events: [
            { id: 3, description: "Ученый создает оружие" },
            { id: 4, description: "Оружие уничтожает город" },
        ],
    },
    {
        name: "Линия В",
        events: [
            { id: 5, description: "Мирный договор подписан" },
            { id: 6, description: "Тирания установлена" },
        ],
    },
];

// Элементы DOM
const timelinesContainer = document.getElementById("timelines");
const storyElement = document.getElementById("story");

// Отображение временных линий
function renderTimelines() {
    timelinesContainer.innerHTML = "";
    timelines.forEach((timeline) => {
        const timelineElement = document.createElement("div");
        timelineElement.className = "timeline";
        timelineElement.innerHTML = `<h3>${timeline.name}</h3>`;
        timeline.events.forEach((event) => {
            const eventElement = document.createElement("div");
            eventElement.className = "event";
            eventElement.textContent = event.description;
            eventElement.addEventListener("click", () => selectEvent(event));
            timelineElement.appendChild(eventElement);
        });
        timelinesContainer.appendChild(timelineElement);
    });
}

// Выбор события
function selectEvent(event) {
    storyElement.textContent = `Вы выбрали: ${event.description}`;
}

// Кнопка "Перемотать время"
document.getElementById("rewind").addEventListener("click", () => {
    storyElement.textContent = "Время перемотано! Попробуйте другой выбор.";
    renderTimelines();
});

// Кнопка "Создать переплетение"
document.getElementById("stitch").addEventListener("click", () => {
    storyElement.textContent = "Вы создали переплетение! Последствия будут видны позже.";
    // Здесь можно добавить логику для изменения событий
});

// Инициализация игры
renderTimelines();