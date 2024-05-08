let alarmTime;
let alarmSet = false; 
let alarmInterval; 

// Функція для встановлення будильника
function setAlarm() {
    const timeInput = document.getElementById("alarmTime").value;

    if (timeInput === "") {
        alert("Будь ласка, введіть дату та час для будильника.");
        return;
    }

    alarmTime = new Date(timeInput);
    alarmSet = true;
    document.getElementById("status").innerText = `Будильник встановлено на ${alarmTime.toLocaleTimeString()}`;

    alarmInterval = setInterval(checkAlarm, 1000);
}

function checkAlarm() {
    if (!alarmSet) {
        return;
    }
    const currentTime = new Date();

    // Якщо поточний час більший або рівний часу будильника
    if (currentTime >= alarmTime) {
        clearInterval(alarmInterval); 
        alarmSet = false;
        document.getElementById("status").innerText = "Будильник спрацював!";
        alert("Час будильника!"); 
    }
}

function resetAlarm() {
    if (alarmSet) {
        clearInterval(alarmInterval);
        alarmSet = false;
        document.getElementById("status").innerText = "Будильник вимкнено.";
    }
}