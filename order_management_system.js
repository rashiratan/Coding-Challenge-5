//Task 1: Create an Inventory Array of Product Objects
let inventory = [
    {
        name: 'Espresso',
        price: 3.00,
        quantity: 1000
    },
    {
        name: 'Cafe Latte',
        price: 5.00,
        quantity: 2000
    },
    {
        name: 'Cold Brew',
        price: 5.00,
        quantity: 1500
    },
    {
        name: 'Cafe Mocha',
        price: 7.00,
        quantity: 1600
    }
];
//initializing inventory array


//Task 2: Create an Orders Array of Order Objects

let orders=[]; 
//creating array

//Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    orderedItems.forEach((item) =>{ //usign forEach method 
        let inventoryItem = inventory.find((product) => product.name === item.name); //using find to match product with order
        if (inventoryItem){
            if (item.quantity > inventoryItem.quantity){
            console.log(`Sorry, insufficient inventory to place your order for ${item.name}. Please try again.`);
        } //logging error due to insufficient stock
        else if (item.quantity === inventory.quantity) {
            inventoryItem.quantity -= item.quantity;
            console.log( `Please not that ${item.name} is now out of stock`); //updating quantity and informing user that product is out of stock
        }
        else {
            inventoryItem.quantity -= item.quantity; //reducing quantity of product in inventory
        }}    
        else {
        console.log(`Sorry, we are unable to find ${item.name}`); //logging error because product not found
    }}
    )
    orders.push({customerName: customerName, items: orderedItems, status: "Pending"}); //adding the order to orders array
        return `Your order has been placed`;//informing user 
}

//Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    let OrderAmount = order.items.reduce((total, item) =>{
       const orderItemFound = inventory.find((inventory) => (inventory.name === item.name)); 
       //looking for product in inventory by matching names
       return orderItemFound ? total + (item.quantity*orderItemFound.price) : 0}, 0); 
       //returning 0 if order does not match
   return `Your order total is $${OrderAmount}`;
   }


//Task 5: Create a Function to Mark an Order as Completed
function completeOrder (customerName){
    let findOrder = orders.find((order) => order.customerName === customerName); 
    //finding customer order
    if (!findOrder) {
        return `Sorry, no orders were found for this customer.`; 
        //logging error when order not found
}
    else {
        findOrder.status = "Completed"; 
        //updating order status
        return `Your order was completed.`;
    }}

//Task 6: Create a Function to Check Pending Orders

function checkPendingOrders (){
    let pendingOrders = orders.filter((order) => order.status === "Pending"); 
    //filtering for pending orders
    if(pendingOrders.length === 0) { return `No orders are pending. Great Job!`}
    //logging no pending orders found
    else {return pendingOrders};
}

//testing all functions (you may do this in the console too!)
console.log(placeOrder('Random Joe', [{name: 'Espresso', quantity: 4}, {name: 'Cafe Mocha', quantity: 5}]));
console.log(inventory);
console.log(checkPendingOrders()); //show pending orders
console.log(calculateOrderTotal(orders[0]));
console.log(completeOrder('Random Joe'), orders);
console.log(checkPendingOrders());