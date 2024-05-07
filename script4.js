const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};
let sities = Object.entries(concerts).map(([city, date]) => city);
let futureConcerts = Object.entries(concerts)
    .filter(([city, date]) => date > new Date())  // Відфільтрувати пройдені концерти
    .map(([city, date]) => city)                  // Витягнути лише міста
    .sort((a, b) => concerts[a] - concerts[b]);   // Відсортувати за датою

console.log(sities);  // ['Київ', 'Умань', 'Вінниця', 'Одеса', 'Хмельницький', 'Харків']
console.log(futureConcerts);  // ["Одеса", "Умань", "Харків"]
