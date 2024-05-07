const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function applyDiscount(medicines) {
    return medicines.map((med, index) => {
        let newMed = { id: index, ...med, };  // Додаємо ID
        if (med.price > 300) {
            newMed.price *= 0.70;  // Знижка 30%
        }
        return newMed;
    });
}

const discountedMedicines = applyDiscount(medicines);

console.log(discountedMedicines);
