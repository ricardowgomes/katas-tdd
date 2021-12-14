// 3 for 5 on drinks
// Everything .99 and .98 don't get change
// When you buy 4 you get one free

const products = [{
  1: {
    name: 'Coke',
    type: 'drinks',
    quant: 8,
    price: 2.05
  }
},
{
  2: {
    name: 'Guarana',
    type: 'drinks',
    quant: 4,
    price: 2.35
  }
},
{
  3: {
    name: 'Cookies',
    type: 'snack',
    quant: 8,
    price: 0.99
  }
},
{
  4: {
    name: 'Egg Roll',
    type: 'food',
    quant: 12,
    price: 1.98
  }
}]

// 3 Cokes, 2 Guaranas, 1 Cookie, 1 Egg Roll
const shoppingList1 = [1, 1, 1, 2, 2, 3, 4];

// 3 Cokes, 2 Guaranas, 1 Cookie, 5 Egg Roll
const shoppingList2 = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4];

// 3 Cokes, 2 Guaranas, 6 Cookies, 1 Egg Roll
const shoppingList3 = [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4];

let message;

const shopping = (shoppingList) => {
  const shoppingCart = [...products];
  const total = 0;

  shoppingList.map(item => {
    console.log("X-----------------------X", item)
    console.log(shoppingCart[item])
    console.log("X-----------------------X")
    if (shoppingCart[item]) {
      products[item].quant -= 1

      if (products[item].quant < 1) {
        message = `*${products[item].name} out of stock! Not processed`
      }

      if (shoppingCart[item]['amount']) {
        shoppingCart[item]['amount'] += 1

      } else {
        shoppingCart[item]['amount'] = 1
      }

      if (shoppingCart[item]['subtotal']) {
        if (shoppingCart[item]['subtotal'] === shoppingCart[item]['subtotal'] * 3 && shoppingCart[item]['type'] === 'drinks') {
          shoppingCart[item]['subtotal'] = 5

        } else {
          shoppingCart[item]['subtotal'] += shoppingCart[item]['subtotal']
        }

      } else {
        shoppingCart[item]['subtotal'] = shoppingCart[item].price
      }
    }
  })

  return total;
}

const change = (total, money) => {
  let change = 0;



  return change;
}

// 1st case with sufficient funds
const shopping1 = change(shopping(shoppingList1), 50)

// 2nd case with sufficient funds
const shopping2 = change(shopping(shoppingList2), 50)

// 3rd case with sufficient funds
const shopping3 = change(shopping(shoppingList3), 50)

// 1st case with insufficient funds
const shopping4 = change(shopping(shoppingList1), 10)

console.log("-----------------------")
console.log("SHOPPING 01")
console.log("$50 BUYING 3 Cokes, 2 Guaranas, 1 Cookie, 1 Egg Roll")
console.log(shopping1)
console.log(message)
// console.log("-----------------------")
// console.log("SHOPPING 02")
// console.log("$50 BUYING 3 Cokes, 2 Guaranas, 1 Cookie, 5 Egg Roll")
// console.log(shopping2)
// console.log(message)
// console.log("-----------------------")
// console.log("SHOPPING 03")
// console.log("$50 BUYING 3 Cokes, 2 Guaranas, 6 Cookies, 1 Egg Roll")
// console.log(shopping3)
// console.log(message)
// console.log("-----------------------")
// console.log("SHOPPING 04")
// console.log("$50 BUYING 3 Cokes, 2 Guaranas, 1 Cookie, 1 Egg Roll")
// console.log(shopping4)
// console.log(message)
// console.log("-----------------------")
// console.log("STOCK")
// console.log("Total sales: 9 Cokes, 6 Guaranas, 8 Cookies, 7 Egg Roll")
// console.log(products)
// console.log("-----------------------")