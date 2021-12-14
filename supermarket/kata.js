// 3 for 5 on drinks
// Everything .99 and .98 don't get change
// When you buy 4 you get one free

const products = [{
  id: 1,
  name: 'Coke',
  type: 'drinks',
  quant: 5,
  price: 2.05
},
{
  id: 2,
  name: 'Guarana',
  type: 'drinks',
  quant: 2,
  price: 2.35
},
{
  id: 3,
  name: 'Cookies',
  type: 'snack',
  quant: 8,
  price: 0.99
},
{
  id: 4,
  name: 'Egg Roll',
  type: 'food',
  quant: 12,
  price: 1.98
}]

// 3 Cokes, 2 Guaranas, 1 Cookie, 1 Egg Roll
const shoppingList1 = [1, 1, 1, 2, 2, 3, 4];

// 3 Cokes, 2 Guaranas, 1 Cookie, 5 Egg Roll
const shoppingList2 = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4];

// 3 Cokes, 2 Guaranas, 6 Cookies, 1 Egg Roll
const shoppingList3 = [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4];

const shopping = (shoppingList, money) => {
  const change = 0;



  return change;
}