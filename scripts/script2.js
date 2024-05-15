// Task 2
const productDatabase = {
    1: { name: "Notebook" },
    2: { name: "Pen" },
    3: { name: "Backpack" },
    4: { name: "Water Bottle" },
    5: { name: "Lunchbox" }
};


function getProductDetails(productId, successCallback, errorCallback) {

    const product = productDatabase[productId];
    if (product) {
        successCallback(product);
    } else {
        errorCallback("Product not found");
    }
}

const success = (product) => console.log("Product found:", product)
const error = (text) => console.error(text)

getProductDetails(1, 
    success,
    error,
);

getProductDetails(99, 
    success,
    error,
);
