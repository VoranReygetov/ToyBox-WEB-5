function Storage(initialItems) {
    this.items = initialItems || [];

    this.getItems = () => this.items;

    this.addItem = (item) => {
        this.items.push(item);
    };

    this.removeItem = (item) => {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

// Приклад використання
const storage = new Storage(["apple", "banana", "mango"]);
storage.addItem("orange");
storage.removeItem("banana");
console.log(storage.getItems());  // ["apple", "mango", "orange"]
