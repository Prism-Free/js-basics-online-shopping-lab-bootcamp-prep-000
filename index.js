
var cart = [];

function getCart() {
 return cart;
}


function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 let min = Math.ceil(1)
 let max = Math.floor(100)
  
 item = {itemName: [item], 
        itemPrice: Math.floor(Math.random() * (max - min)) + min}
 cart.unshift(item)
 return (`${item.itemName} has been added to your cart.`)
}


function viewCart() {
  let cartCopy = []
  
  if (cart.length === 0) {
    return ('Your shopping cart is empty.')
  }
  
  let beginString = ('In your cart you have ')
  
  for (var i in cart) {
    let item = cart[i]
    let currItem = (` ${item.itemName} at $${item.itemPrice}`)
   // cartCopy.push(currItem)
  }
  if (cartCopy.length === 1) {
    beginString += cartCopy + '.'
  }
  
  return beginString
}


function total() {
  // write your code here
}


function removeFromCart(item) {
  // write your code here
}


function placeOrder(cardNumber) {
  // write your code here
}
