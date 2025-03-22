// Глобальные переменные
let player = {
    health: 100,
    attackPower: 15,
    defense: 5,
    magicPower: 20
};

let enemies = [
    { name: "Древний Дух", health: 50, attack: 10 },
    { name: "Теневой Маг", health: 60, attack: 15 },
    { name: "Повелитель Пустоты", health: 80, attack: 20 }
];

let currentEnemy = null;
let fighting = false;

// DOM-элементы
const storyElement = document.getElementById("story");
const sceneElement = document.getElementById("scene");
const enemyNameElement = document.getElementById("enemy-name");
const enemyHealthElement = document.getElementById("enemy-health");
const battleElement = document.getElementById("battle");

const attackButton = document.getElementById("attack");
const defendButton = document.getElementById("defend");
const magicButton = document.getElementById("magic");
const nextButton = document.getElementById("next");

// Генерация нового мира
function generateNewWorld() {
    sceneElement.innerHTML = `<img id="background" src="https://source.unsplash.com/random/800x400?magic" alt="Фон">`;
    storyElement.textContent = "Вы открыли новый мир...";
}

// Начало битвы
function startBattle() {
    fighting = true;
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    enemyNameElement.textContent = currentEnemy.name;
    enemyHealthElement.textContent = `❤️ ${currentEnemy.health}`;
    battleElement.style.display = "block";
}

// Атака
attackButton.addEventListener("click", () => {
    if (fighting) {
        currentEnemy.health -= player.attackPower;
        player.health -= currentEnemy.attack;

        enemyHealthElement.textContent = `❤️ ${currentEnemy.health}`;
        storyElement.textContent = `Вы нанесли удар! Враг атакует в ответ!`;

        if (currentEnemy.health <= 0) {
            storyElement.textContent = `Вы победили ${currentEnemy.name}!`;
            battleElement.style.display = "none";
            fighting = false;
        }
    }
});

// Защита
defendButton.addEventListener("click", () => {
    if (fighting) {
        player.health -= (currentEnemy.attack - player.defense);
        storyElement.textContent = `Вы защитились! Враг ослабил удар.`;
    }
});

// Магия
magicButton.addEventListener("click", () => {
    if (fighting) {
        currentEnemy.health -= player.magicPower;
        storyElement.textContent = `Вы использовали магию!`;

        if (currentEnemy.health <= 0) {
            storyElement.textContent = `Вы уничтожили ${currentEnemy.name} магией!`;
            battleElement.style.display = "none";
            fighting = false;
        }
    }
});

// Переход в следующий мир
nextButton.addEventListener("click", () => {
    if (!fighting) {
        generateNewWorld();
        startBattle();
    }
});

// Запуск игры
generateNewWorld();
startBattle();
