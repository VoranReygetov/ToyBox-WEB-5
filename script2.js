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

getProductDetails(1, 
    (product) => console.log("Product found:", product), 
    (error) => console.error(error)
);

getProductDetails(99, 
    (product) => console.log("Product found:", product), 
    (error) => console.error(error)
);
