var mountainOne = {
    name: "Kilimanjaro",
    height: 19341
};
var mountainTwo = {
    name: "Everest",
    height: 29029
};
var mountainThree = {
    name: "Denali",
    height: 20310
};
var mountains = [mountainOne, mountainTwo, mountainThree];
function findNameOfTallestMountain(mountains) {
    mountains.sort(function (a, b) { return (a.height > b.height ? -1 : 1); });
    return mountains[0].name;
}
var result = findNameOfTallestMountain(mountains);
console.log(result);
var productOne = {
    name: "banana",
    price: 1.79
};
var productTwo = {
    name: "apple",
    price: 1.69
};
var productThree = {
    name: "orange",
    price: 1.89
};
var products = [productOne, productTwo, productThree];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum / products.length;
}
var result2 = calcAverageProductPrice(products);
console.log(result2);
var invProdOne = {
    name: "motor",
    price: 10.00
};
var invProdTwo = {
    name: "sensor",
    price: 12.50
};
var invProdThree = {
    name: "LED",
    price: 1.00
};
var inventoryItemOne = {
    product: invProdOne,
    quantity: 10
};
var inventoryItemTwo = {
    product: invProdTwo,
    quantity: 4
};
var inventoryItemThree = {
    product: invProdThree,
    quantity: 20
};
var inventory = [inventoryItemOne, inventoryItemTwo, inventoryItemThree];
function calcInventoryValue(inventory) {
    var sum = 0;
    for (var i = 0; i < inventory.length; i++) {
        var itemTotal = inventory[i].product.price * inventory[i].quantity;
        sum += itemTotal;
    }
    return sum;
}
var result3 = calcInventoryValue(inventory);
console.log(result3);
//# sourceMappingURL=ts-lab.js.map