// Данные о временных линиях и событиях
const timelines = [
    {
        name: "Линия А",
        events: [
            { id: 1, description: "Герой погибает в бою", affected: false },
            { id: 2, description: "Город разрушен", affected: false }
        ],
    },
    {
        name: "Линия Б",
        events: [
            { id: 3, description: "Ученый создает оружие", affected: false },
            { id: 4, description: "Оружие уничтожает город", affected: false }
        ],
    },
    {
        name: "Линия В",
        events: [
            { id: 5, description: "Мирный договор подписан", affected: false },
            { id: 6, description: "Тирания установлена", affected: false }
        ],
    },
];

// DOM элементы
const timelinesContainer = document.getElementById("timelines");
const storyElement = document.getElementById("story");
let selectedEvents = [];

// Отображение временных линий
function renderTimelines() {
    timelinesContainer.innerHTML = "";
    timelines.forEach((timeline, timelineIndex) => {
        const timelineElement = document.createElement("div");
        timelineElement.className = "timeline";
        timelineElement.innerHTML = `<h3>${timeline.name}</h3>`;

        timeline.events.forEach((event, eventIndex) => {
            const eventElement = document.createElement("div");
            eventElement.className = "event";
            eventElement.textContent = event.description;
            eventElement.style.backgroundColor = event.affected ? "#ff5555" : "#555";

            eventElement.addEventListener("click", () => selectEvent(timelineIndex, eventIndex));
            timelineElement.appendChild(eventElement);
        });

        timelinesContainer.appendChild(timelineElement);
    });
}

// Выбор событий
function selectEvent(timelineIndex, eventIndex) {
    const event = timelines[timelineIndex].events[eventIndex];

    if (!selectedEvents.includes(event)) {
        selectedEvents.push(event);
        storyElement.textContent = `Вы выбрали: ${event.description}`;
    }
}

// Перемотка времени (сброс выбора)
document.getElementById("rewind").addEventListener("click", () => {
    selectedEvents = [];
    storyElement.textContent = "Время перемотано! Попробуйте другой выбор.";
    renderTimelines();
});

// Создание переплетения (изменение событий)
document.getElementById("stitch").addEventListener("click", () => {
    if (selectedEvents.length > 1) {
        selectedEvents.forEach(event => event.affected = true);
        storyElement.textContent = "Вы создали переплетение! Судьбы изменены.";
        selectedEvents = [];
        renderTimelines();
    } else {
        storyElement.textContent = "Выберите хотя бы два события для переплетения!";
    }
});

// Запуск игры
renderTimelines();
