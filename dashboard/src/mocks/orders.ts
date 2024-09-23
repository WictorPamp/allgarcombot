export const orders: Order[] = [
  {
      "_id": "66f05992d93e2a56973e9ddd",
      "table": "1",
      "status": "WAITING",
      "products": [
          {
              "product": {
                  "_id": "66f0549dbdde983ae3f9d8b6",
                  "name": "Pizza Quatro Queijos",
                  "imagePath": "1727054822088-pizza 4qj.jpeg",
                  "price": 40,
              },
              "quantity": 1,
              "_id": "66f05992d93e2a56973e9dde"
          },
          {
              "product": {
                  "_id": "66f05700af4369f0bc591649",
                  "name": "Coca-Cola 350ML",
                  "imagePath": "1727054772048-coca.jpeg",
                  "price": 5,
              },
              "quantity": 2,
              "_id": "66f05992d93e2a56973e9ddf"
          }
      ],
  },
  {
      "_id": "66f0598ad93e2a56973e9dd9",
      "table": "2",
      "status": "DONE",
      "products": [
          {
              "product": {
                  "_id": "66f0549dbdde983ae3f9d8b6",
                  "name": "Pizza Quatro Queijos",
                  "imagePath": "1727054822088-pizza 4qj.jpeg",
                  "price": 40,
              },
              "quantity": 5,
              "_id": "66f0598ad93e2a56973e9dda"
          },
          {
              "product": {
                  "_id": "66f05700af4369f0bc591649",
                  "name": "Coca-Cola 350ML",
                  "description": "Uma refrescante lata de Coca-Cola de 350ML geladinha!",
                  "imagePath": "1727054772048-coca.jpeg",
                  "price": 5,
              },
              "quantity": 10,
              "_id": "66f0598ad93e2a56973e9ddb"
          }
      ],
  }
];
