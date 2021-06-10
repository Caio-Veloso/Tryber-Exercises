const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  console.log(order);
  const orderModifier = (order) => {
    console.log(`Olá ${order.name}, o valor total do seu pedido de muçarela, calabresa e Coca Cola Zero é de R$ ${order.payment.total}`)
  
  }
  
  orderModifier(order);