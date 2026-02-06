function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDeg = (seconds * 6) - 90; // 6 degrees per second
    const minuteDeg = (minutes * 6) + (seconds * 0.1) - 90; // 6 degrees per minute + smooth second
    const hourDeg = (hours * 30) + (minutes * 0.5) - 90; // 30 degrees per hour + minute adjustment

    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call