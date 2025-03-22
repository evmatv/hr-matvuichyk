const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: 50,
    y: 300,
    width: 50,
    height: 50,
    color: 'blue', // Цвет игрока
    gravity: 0.5,
    jumpPower: -10,
    velocityY: 0,
    isJumping: false,
    jumpCount: 0
};

let coins = [];
let score = 0;

function createCoin() {
    const coin = {
        x: Math.random() * (canvas.width - 30),
        y: Math.random() * (canvas.height - 50),
        width: 30,
        height: 30,
        collected: false
    };
    coins.push(coin);
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawCoins() {
    coins.forEach(coin => {
        if (!coin.collected) {
            ctx.fillStyle = 'gold'; // Цвет монеты
            ctx.fillRect(coin.x, coin.y, coin.width, coin.height);
        }
    });
}

function update() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    if (player.y + player.height >= canvas.height) {
        player.y = canvas.height - player.height;
        player.isJumping = false;
        player.jumpCount = 0; // Сброс счетчика прыжков
    }

    coins.forEach(coin => {
        if (!coin.collected && player.x < coin.x + coin.width && player.x + player.width > coin.x && player.y < coin.y + coin.height && player.y + player.height > coin.y) {
            coin.collected = true;
            score++;
            // Эффект сбора монет
            ctx.fillStyle = 'yellow';
            ctx.fillRect(coin.x, coin.y, coin.width, coin.height);
            setTimeout(() => {
                ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
            }, 200);
        }
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawCoins();
    ctx.fillStyle = 'black';
    ctx.fillText('Счет: ' + score, 10, 20);
}

function moveLeft() {
    player.x -= 5;
}

function moveRight() {
    player.x += 5;
}

function jump() {
    if (player.jumpCount < 2) { // Позволяем два прыжка
        player.velocityY = player.jumpPower;
        player.isJumping = true;
        player.jumpCount++; // Увеличиваем счетчик прыжков
    }
}

document.getElementById('leftBtn').addEventListener('click', moveLeft);
document.getElementById('rightBtn').addEventListener('click', moveRight);
document.getElementById
