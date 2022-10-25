//tallest mountain
interface Mountain{
    name: string;
    height: number;
}

let mountainOne = {
    name: "Kilimanjaro",
    height:19341
}

let mountainTwo = {
    name: "Everest",
    height: 29029
}

let mountainThree = {
    name: "Denali",
    height:20310
}

let mountains: Mountain[] = [mountainOne, mountainTwo, mountainThree];

function findNameOfTallestMountain(mountains: Mountain []){
    mountains.sort((a, b) => (a.height > b.height ? -1 : 1));
    return mountains[0].name;
}

var result = findNameOfTallestMountain(mountains);

console.log(result);

//2.products
interface Products{
    name: string;
    price: number;
}
let productOne = {
    name: "banana",
    price: 1.79
}
let productTwo = {
    name: "apple",
    price: 1.69
}
let productThree = {
    name: "orange",
    price: 1.89
}

var products: Products[] = [productOne, productTwo, productThree]

function calcAverageProductPrice(products: Products[]){
    var sum = 0;
    for(let i = 0; i < products.length; i++){
        sum += products[i].price;
    }
    return sum / products.length;
}
var result2 = calcAverageProductPrice(products);
console.log(result2);

//3.inventory
interface InventoryItem{
    product: Products
    quantity: number
}
let invProdOne = {
    name: "motor",
    price: 10.00
}
let invProdTwo = {
    name: "sensor",
    price: 12.50
}
let invProdThree = {
    name: "LED",
    price: 1.00
}

let inventoryItemOne ={
    product: invProdOne,
    quantity: 10
}
let inventoryItemTwo ={
    product: invProdTwo,
    quantity: 4
}
let inventoryItemThree ={
    product: invProdThree,
    quantity: 20
}
var inventory: InventoryItem[] = [inventoryItemOne,inventoryItemTwo,inventoryItemThree];

function calcInventoryValue(inventory: InventoryItem[]){
    var sum = 0;
    for(let i = 0; i < inventory.length; i++){
        var itemTotal = inventory[i].product.price * inventory[i].quantity;
        sum += itemTotal;
    }
    return sum;
}

var result3 = calcInventoryValue(inventory);
console.log(result3);





