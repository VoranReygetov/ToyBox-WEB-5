function findSmallestCommon() {
    // Отримання масивів від користувача
    const array1 = document.getElementById("array1").value.split(",").map(Number);
    const array2 = document.getElementById("array2").value.split(",").map(Number);

    // Знаходження спільних елементів
    const commonElements = array1.filter(element => array2.includes(element));

    if (commonElements.length === 0) {
        document.getElementById("result").innerText = "Немає співпадаючих елементів.";
    } else {
        const smallestCommon = Math.min(...commonElements);
        document.getElementById("result-1").innerText = "Найменший співпадаючий елемент: " + smallestCommon;
    }
}

function bubbleSort() {
    const arr = document.getElementById("array1").value.split(",").map(Number);
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    document.getElementById("result-2").innerText = "Відсортований масив бульбашкою: " + arr;
}

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