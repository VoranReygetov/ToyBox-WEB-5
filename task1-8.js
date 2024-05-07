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