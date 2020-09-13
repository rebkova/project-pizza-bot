const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

//test
//console.log(`Test if connection HTML-JS works: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// alert(`Welcome, customer! Happy to serve your pizza. On our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);
document.getElementById("welcomeMessage").innerHTML = `Welcome, customer! Happy to serve your pizza. On our menu today we have: ${vegetarian}, ${hawaiian} and ${pepperoni}.`

//on button click, invoke the function and display order-box
const displayOrderBox = () => {
    const orderBox = document.getElementById("orderBox");
    orderBox.classList.add("order-box-open")

};


// const orderName = prompt(`Enter the name of the pizza you want to order today:`);
document.getElementById("selectPizza").innerHTML = `Enter the name of the pizza you want to order:`;

const orderName = document.getElementById("orderName").value;

//Function that tests whether the user input matches the pizza name
const validateOrderName = (orderName) => {
    if (orderName.toLowerCase() === vegetarian.toLowerCase() ||
    orderName.toLowerCase() === hawaiian.toLowerCase() ||
    orderName.toLowerCase() === pepperoni.toLowerCase ()) {
        return true;
    }
    else {
        return false;
    }
};

var orderQuantity;
var orderTotal;

if (validateOrderName(orderName)) {
    orderQuantity = prompt(`How many of ${orderName}s do you want?`);
    orderTotal = orderQuantity * pizzaPrice;
    alert(`Great, I'll get started on your ${orderName}s right away, it will cost ${orderTotal} kr.`);
}
else {
    alert(`Select a pizza from the menu.`);
}

var cookingTime;
if (orderQuantity <= 2) {
    cookingTime = 10;
}
else if (orderQuantity >= 3 && orderQuantity < 6) {
    cookingTime = 15;
}
else 
cookingTime = 20;


document.getElementById("orderSummary").innerHTML = `<h2>Thank you for your order!</h2> The ${orderName}s are being
prepared as you read this. The total cost is ${orderTotal} kr. The order will take ${cookingTime} minutes.`;

