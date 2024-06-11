let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
let shoppingCart = [];





shoppingList.push('fruit loops');

shoppingList[4] = 'fair trade coffee';

shoppingList.splice(2,3, 'rice', 'beans');

shoppingCart.push(shoppingList.pop([4]))

shoppingCart.push(shoppingList.shift(0))

while (shoppingList.length > 0) {
    let item = shoppingList.shift();
    shoppingCart.push(item);

shoppingCart.sort();

shoppingCart.sort(function(a,b){return a-b}).reverse();
}


for (let i = 0; i < shoppingList.length; i++) {
	console.log('Shopping List ' + `${i + 1}: ${shoppingList[i]}`); 
    }


for (let i = 0; i < shoppingCart.length; i++) {
	console.log('Food ' + `${i + 1}: ${shoppingCart[i]}`); 
}

console.log(shoppingCart.join(', '))
