// 1. Show  how to calculate the average price of all items. Please console.log the average.

let prices = items.map(function (item){
    return item.price;
});

// array of prices//


const average = prices.reduce((a, b) => a + b, 0) / prices.length;
console.log(`The average price is $${average.toFixed(2)}`);

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.

let between  = items.filter(function(item){
    return item.price >= 14 && item.price <=18
})

console.log("Items that cost between $14.00 USD and $18.00 USD");

between.forEach(function(item){
    console.log(item.title);
})

//3 Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

let print  = items.filter(function(item){
    return item.currency_code === "GBP"
})

print.forEach(function(item){
    console.log(item.title, "cost £", item.price)
})


//4 Show me how to find which items are made of wood. Please console.log the ones you find.

let materialType  = items.filter(function(item){
    return item.materials.includes("wood");
    
})
console.log(materialType)
materialType.forEach(function(item){
    console.log(item.title, "Is made of wood");
})

//5 Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

let materialLength  = items.filter(function(item){
    return item.materials.length >= 8;
})
console.log(materialLength);

materialLength.forEach(function(item){
    console.log(item.title, "has", item.materials.length, "materials", item.materials);
})


//6 Show me how to calculate how many items were made by their sellers. Please console.log your answer.

let seller  = items.filter(function(item){
    return item.who_made === "i_did";
})
console.log(seller)

seller.forEach(function(item){
    console.log(`${seller.length} 'were made by their sellers`);
})


