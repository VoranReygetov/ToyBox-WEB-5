let alarmTime; // Час спрацьовування будильника
let alarmSet = false; // Флаг, чи встановлений будильник
let alarmInterval; // Інтервал перевірки часу

// Функція для встановлення будильника
function setAlarm() {
    const timeInput = document.getElementById("alarmTime").value;

    if (timeInput === "") {
        alert("Будь ласка, введіть час для будильника.");
        return;
    }

    const [hours, minutes] = timeInput.split(':').map(Number);
    const currentTime = new Date();

    // Визначення наступного часу будильника
    alarmTime = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        hours,
        minutes,
        0, // секунди
        0  // мілісекунди
    );

    // Якщо час будильника раніше поточного, встановлюємо його на наступний день
    if (alarmTime <= currentTime) {
        alarmTime.setDate(alarmTime.getDate() + 1);
    }

    alarmSet = true;
    document.getElementById("status").innerText = `Будильник встановлено на ${alarmTime.toLocaleTimeString()}`;

    // Оновлювати кожну секунду, щоб перевіряти чи настав час будильника
    alarmInterval = setInterval(checkAlarm, 1000);
}

// Функція для перевірки часу спрацьовування будильника
function checkAlarm() {
    if (!alarmSet) {
        return;
    }

    const currentTime = new Date();

    // Якщо поточний час більший або рівний часу будильника, спрацьовуємо
    if (currentTime >= alarmTime) {
        clearInterval(alarmInterval); // Зупинити інтервал
        alarmSet = false;
        document.getElementById("status").innerText = "Будильник спрацював!";
        alert("Час будильника!"); // Попередження користувача
    }
}

// Функція для скидання будильника
function resetAlarm() {
    if (alarmSet) {
        clearInterval(alarmInterval);
        alarmSet = false;
        document.getElementById("status").innerText = "Будильник вимкнено.";
    }
}