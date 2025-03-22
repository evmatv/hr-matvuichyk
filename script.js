// Глобальные переменные
let player = {
    health: 100,
    attackPower: 15,
    defense: 5,
    magicPower: 20
};

let enemies = [
    { name: "Древний Дух", health: 50, attack: 10, img: "https://opengameart.org/sites/default/files/demon.png" },
    { name: "Теневой Маг", health: 60, attack: 15, img: "https://opengameart.org/sites/default/files/mage.png" }
];

let worlds = [
    "https://raw.githubusercontent.com/mauricenino/pics/master/fantasy/forest.jpg",
    "https://raw.githubusercontent.com/mauricenino/pics/master/fantasy/space.jpg",
    "https://raw.githubusercontent.com/mauricenino/pics/master/fantasy/castle.jpg"
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
    let newBg = worlds[Math.floor(Math.random() * worlds.length)];
    document.getElementById("background").src = newBg;
    storyElement.textContent = "Вы открыли новый мир...";
}

// Начало битвы
function startBattle() {
    fighting = true;
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    enemyNameElement.textContent = currentEnemy.name;
    enemyHealthElement.textContent = `❤️ ${currentEnemy.health}`;

    let enemyImg = document.createElement("img");
    enemyImg.src = currentEnemy.img;
    enemyImg.style.width = "100px";
    enemyImg.style.position = "absolute";
    enemyImg.style.bottom = "50px";
    enemyImg.style.right = "50px";
    enemyImg.style.animation = "bounce 1s infinite alternate";
    sceneElement.appendChild(enemyImg);

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
