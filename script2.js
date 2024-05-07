// Task 2
const productDatabase = {
    1: { name: "Laptop", price: 1500 },
    2: { name: "Phone", price: 700 },
    3: { name: "Tablet", price: 400 },
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
