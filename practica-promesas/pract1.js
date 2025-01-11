const products = {
  1: { name: "Laptop", price: 1000, stock: 5 },
  2: { name: "Mouse", price: 20, stock: 10 },
  3: { name: "Keyboard", price: 50, stock: 0 },
};

const checkStock = (productId, quantity) => {
  return new Promise((resolve, reject) => {

    //obtenemos el producto del cual queremos consegir la info de name, price o stock. En este caso stock.
    const product = products[productId];

    if (product.stock >= quantity) {
      resolve(`Stock disponible para el producto ${productId}, ${product.name}`);
    } else {
      reject(`Stock insuficiente para el producto ${productId}, ${product.name}`);
    }
  });
};

const calculateTotal = (productId, quantity) => {
  return new Promise((resolve, reject) => {
    const product = products[productId];
    const totalPrice = quantity * product.price;
    //no sé aquí muy bien cómo llevar la lógica de la condición
    if (product) {
      resolve(`Total para ${quantity} unidades de ${product.name}: ${totalPrice}`);
    } else {
      reject("No se pudo calcular el precio total");
    }
  });
};

const confirmOrder = (productId) => {
  return new Promise((resolve, reject) => {
    //el chico del vídeo lo usa para el ejemplo ,pero sería como no poner nada, supongo, si sabemos que se cumplirá siempre
    /* if (true) { */
      setTimeout(() => {
        resolve(`Pedido confirmado para el producto ${productId}`);
      }, 2000);
    /* } */
  });
};

// Simulación del flujo completo
const productId = 1;  // Por ejemplo, el producto con ID 1 (Laptop)
const quantity = 3;    // Queremos comprar 3 unidades


checkStock(productId, quantity)
  .then((checkMessage) => {
    console.log(checkMessage);
    //usar return para que la ejecución devuelva y pase el resultado de la promesa al siguiente then
    return calculateTotal(productId, quantity);
  })
  .then((totalMessage) => {
    console.log(totalMessage); 
    //devuelve el estado de la promesa de confirmación del pedido
    return confirmOrder(productId);  
  })
  .then((confirmationMessage) => {
    console.log(confirmationMessage); 
  })
  .catch((errorMessage) => {
    console.log(errorMessage);  
  });
