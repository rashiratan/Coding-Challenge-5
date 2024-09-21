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
   