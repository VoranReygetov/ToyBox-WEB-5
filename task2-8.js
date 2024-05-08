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

    const currentTime = new Date();
    let timeDifference = alarmTime - currentTime
    alarmTimeOut = setTimeout(breakAlarm, timeDifference)
}

function breakAlarm() {
    if (!alarmSet) {
        return;
    }

    alarmSet = false;
    document.getElementById("status").innerText = "Будильник спрацював!";
    alert("Час будильника!"); 
}
function resetAlarm() {
    if (alarmSet) {
        clearTimeout(alarmInterval);
        alarmSet = false;
        document.getElementById("status").innerText = "Будильник вимкнено.";
    }
}