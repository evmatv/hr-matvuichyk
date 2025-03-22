body {
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1a;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
}

#game {
    width: 80vw;
    margin: auto;
    padding: 20px;
}

#scene {
    width: 100%;
    height: 300px;
    background-color: #222;
    position: relative;
    overflow: hidden;
}

#background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
}

/* Персонаж с анимацией */
#character {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    animation: bounce 1s infinite alternate ease-in-out;
}

@keyframes bounce {
    0% { transform: translateX(-50%) translateY(0); }
    100% { transform: translateX(-50%) translateY(-10px); }
}

/* 3D-анимация кнопок */
button {
    background: linear-gradient(145deg, #444, #222);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    transform: perspective(500px) rotateX(10deg);
    transition: transform 0.3s, box-shadow 0.3s;
}

button:hover {
    transform: perspective(500px) rotateX(0deg);
    box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.2);
}

/* Битва */
#battle {
    display: none;
    margin-top: 20px;
    animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}
