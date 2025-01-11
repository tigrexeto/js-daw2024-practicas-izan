const products = {
  1: { name: "Laptop", price: 1000, stock: 5 },
  2: { name: "Mouse", price: 20, stock: 10 },
  3: { name: "Keyboard", price: 50, stock: 0 },
};

const checkStock = (productId, quantity) => {
  return new Promise((resolve, reject) => {
    if (stock >= quantity) {
      resolve(`Stock disponible para el producto ${productId}"`);
    } else {
      reject(`Stock insuficiente para el producto ${productId}"`);
    }
  });
};

const calculateTotal = (productId, quantity) => {
  return new Promise((resolve, reject) => {
    let totalPrice = quantity * price;
    if (stock >= quantity) {
      resolve(`Total para ${quantity} unidades de ${productId}: ${totalPrice}`);
    } else {
      reject("No se pudo calcular el precio total");
    }
  });
};

const confirmOrder = (productId) => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(`Pedido confirmado para el producto ${productId}`);
      }, 2000);
    }
  });
};

checkStock
  .then(calculateTotal)
  .then(confirmOrder)
  .catch((error) => console.log(error));
