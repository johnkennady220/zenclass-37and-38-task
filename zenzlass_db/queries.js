// collection name = product

db.product.insertMany([
    {
      id: "1",
      product_name: "Intelligent Fresh Chips",
      product_price: 655.0,
      product_material: "Concrete",
      product_color: "mint green",
    },
    {
      id: "2",
      product_name: "Practical Fresh Sausages",
      product_price: 911.0,
      product_material: "Cotton",
      product_color: "indigo",
    },
    {
      id: "3",
      product_name: "Refined Steel Car",
      product_price: 690.0,
      product_material: "Rubber",
      product_color: "gold",
    },
    {
      id: "4",
      product_name: "Gorgeous Plastic Pants",
      product_price: 492.0,
      product_material: "Soft",
      product_color: "plum",
    },
    {
      id: "5",
      product_name: "Sleek Cotton Chair",
      product_price: 33.0,
      product_material: "Fresh",
      product_color: "black",
    },
    {
      id: "6",
      product_name: "Awesome Wooden Towels",
      product_price: 474.0,
      product_material: "Plastic",
      product_color: "orange",
    },
    {
      id: "7",
      product_name: "Practical Soft Shoes",
      product_price: 500.0,
      product_material: "Rubber",
      product_color: "pink",
    },
    {
      id: "8",
      product_name: "Incredible Steel Hat",
      product_price: 78.0,
      product_material: "Rubber",
      product_color: "violet",
    },
    {
      id: "9",
      product_name: "Awesome Wooden Ball",
      product_price: 28.0,
      product_material: "Soft",
      product_color: "azure",
    },
    {
      id: "10",
      product_name: "Generic Wooden Pizza",
      product_price: 84.0,
      product_material: "Frozen",
      product_color: "indigo",
    },
    {
      id: "11",
      product_name: "Unbranded Wooden Cheese",
      product_price: 26.0,
      product_material: "Soft",
      product_color: "black",
    },
    {
      id: "12",
      product_name: "Unbranded Plastic Salad",
      product_price: 89.0,
      product_material: "Wooden",
      product_color: "pink",
    },
    {
      id: "13",
      product_name: "Gorgeous Cotton Keyboard",
      product_price: 37.0,
      product_material: "Concrete",
      product_color: "sky blue",
    },
    {
      id: "14",
      product_name: "Incredible Steel Shirt",
      product_price: 54.0,
      product_material: "Metal",
      product_color: "white",
    },
    {
      id: "15",
      product_name: "Ergonomic Cotton Hat",
      product_price: 43.0,
      product_material: "Rubber",
      product_color: "mint green",
    },
    {
      id: "16",
      product_name: "Small Soft Chair",
      product_price: 47.0,
      product_material: "Cotton",
      product_color: "teal",
    },
    {
      id: "17",
      product_name: "Incredible Metal Car",
      product_price: 36.0,
      product_material: "Fresh",
      product_color: "indigo",
    },
    {
      id: "18",
      product_name: "Licensed Plastic Bacon",
      product_price: 88.0,
      product_material: "Steel",
      product_color: "yellow",
    },
    {
      id: "19",
      product_name: "Intelligent Cotton Chips",
      product_price: 46.0,
      product_material: "Soft",
      product_color: "azure",
    },
    {
      id: "20",
      product_name: "Handcrafted Wooden Bacon",
      product_price: 36.0,
      product_material: "Concrete",
      product_color: "lime",
    },
    {
      id: "21",
      product_name: "Unbranded Granite Chicken",
      product_price: 90.0,
      product_material: "Metal",
      product_color: "gold",
    },
    {
      id: "22",
      product_name: "Ergonomic Soft Hat",
      product_price: 99.0,
      product_material: "Rubber",
      product_color: "black",
    },
    {
      id: "23",
      product_name: "Intelligent Steel Pizza",
      product_price: 95.0,
      product_material: "Cotton",
      product_color: "azure",
    },
    {
      id: "24",
      product_name: "Tasty Rubber Cheese",
      product_price: 47.0,
      product_material: "Frozen",
      product_color: "orchid",
    },
    {
      id: "25",
      product_name: "Licensed Steel Car",
      product_price: 20.0,
      product_material: "Cotton",
      product_color: "indigo",
    },
  ]);
  
  //1. Find all the information about each products
  
  db.product.find({}).pretty();
  
  //output:
  //  [
  //   {
  //     id: "1",
  //     product_name: "Intelligent Fresh Chips",
  //     product_price: 655.0,
  //     product_material: "Concrete",
  //     product_color: "mint green",
  //   },
  //   {
  //     id: "2",
  //     product_name: "Practical Fresh Sausages",
  //     product_price: 911.0,
  //     product_material: "Cotton",
  //     product_color: "indigo",
  //   },
  //   {
  //     id: "3",
  //     product_name: "Refined Steel Car",
  //     product_price: 690.0,
  //     product_material: "Rubber",
  //     product_color: "gold",
  //   },
  //   {
  //     id: "4",
  //     product_name: "Gorgeous Plastic Pants",
  //     product_price: 492.0,
  //     product_material: "Soft",
  //     product_color: "plum",
  //   },
  //   {
  //     id: "5",
  //     product_name: "Sleek Cotton Chair",
  //     product_price: 33.0,
  //     product_material: "Fresh",
  //     product_color: "black",
  //   },
  //   {
  //     id: "6",
  //     product_name: "Awesome Wooden Towels",
  //     product_price: 474.0,
  //     product_material: "Plastic",
  //     product_color: "orange",
  //   },
  //   {
  //     id: "7",
  //     product_name: "Practical Soft Shoes",
  //     product_price: 500.0,
  //     product_material: "Rubber",
  //     product_color: "pink",
  //   },
  //   {
  //     id: "8",
  //     product_name: "Incredible Steel Hat",
  //     product_price: 78.0,
  //     product_material: "Rubber",
  //     product_color: "violet",
  //   },
  //   {
  //     id: "9",
  //     product_name: "Awesome Wooden Ball",
  //     product_price: 28.0,
  //     product_material: "Soft",
  //     product_color: "azure",
  //   },
  //   {
  //     id: "10",
  //     product_name: "Generic Wooden Pizza",
  //     product_price: 84.0,
  //     product_material: "Frozen",
  //     product_color: "indigo",
  //   },
  //   {
  //     id: "11",
  //     product_name: "Unbranded Wooden Cheese",
  //     product_price: 26.0,
  //     product_material: "Soft",
  //     product_color: "black",
  //   },
  //   {
  //     id: "12",
  //     product_name: "Unbranded Plastic Salad",
  //     product_price: 89.0,
  //     product_material: "Wooden",
  //     product_color: "pink",
  //   },
  //   {
  //     id: "13",
  //     product_name: "Gorgeous Cotton Keyboard",
  //     product_price: 37.0,
  //     product_material: "Concrete",
  //     product_color: "sky blue",
  //   },
  //   {
  //     id: "14",
  //     product_name: "Incredible Steel Shirt",
  //     product_price: 54.0,
  //     product_material: "Metal",
  //     product_color: "white",
  //   },
  //   {
  //     id: "15",
  //     product_name: "Ergonomic Cotton Hat",
  //     product_price: 43.0,
  //     product_material: "Rubber",
  //     product_color: "mint green",
  //   },
  //   {
  //     id: "16",
  //     product_name: "Small Soft Chair",
  //     product_price: 47.0,
  //     product_material: "Cotton",
  //     product_color: "teal",
  //   },
  //   {
  //     id: "17",
  //     product_name: "Incredible Metal Car",
  //     product_price: 36.0,
  //     product_material: "Fresh",
  //     product_color: "indigo",
  //   },
  //   {
  //     id: "18",
  //     product_name: "Licensed Plastic Bacon",
  //     product_price: 88.0,
  //     product_material: "Steel",
  //     product_color: "yellow",
  //   },
  //   {
  //     id: "19",
  //     product_name: "Intelligent Cotton Chips",
  //     product_price: 46.0,
  //     product_material: "Soft",
  //     product_color: "azure",
  //   },
  //   {
  //     id: "20",
  //     product_name: "Handcrafted Wooden Bacon",
  //     product_price: 36.0,
  //     product_material: "Concrete",
  //     product_color: "lime",
  //   },
  //   {
  //     id: "21",
  //     product_name: "Unbranded Granite Chicken",
  //     product_price: 90.0,
  //     product_material: "Metal",
  //     product_color: "gold",
  //   },
  //   {
  //     id: "22",
  //     product_name: "Ergonomic Soft Hat",
  //     product_price: 99.0,
  //     product_material: "Rubber",
  //     product_color: "black",
  //   },
  //   {
  //     id: "23",
  //     product_name: "Intelligent Steel Pizza",
  //     product_price: 95.0,
  //     product_material: "Cotton",
  //     product_color: "azure",
  //   },
  //   {
  //     id: "24",
  //     product_name: "Tasty Rubber Cheese",
  //     product_price: 47.0,
  //     product_material: "Frozen",
  //     product_color: "orchid",
  //   },
  //   {
  //     id: "25",
  //     product_name: "Licensed Steel Car",
  //     product_price: 20.0,
  //     product_material: "Cotton",
  //     product_color: "indigo",
  //   },
  // ]);
  
  //2. Find the product price which are between 400 to 800
  
  db.product
    .find({
      product_price: {
        $gte: 400,
        $lt: 800,
      },
    })
    .pretty();
  
  // //output:
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b4"),
  //   "id" : "1",
  //   "product_name" : "Intelligent Fresh Chips",
  //   "product_price" : 655,
  //   "product_material" : "Concrete",
  //   "product_color" : "mint green"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b6"),
  //   "id" : "3",
  //   "product_name" : "Refined Steel Car",
  //   "product_price" : 690,
  //   "product_material" : "Rubber",
  //   "product_color" : "gold"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b7"),
  //   "id" : "4",
  //   "product_name" : "Gorgeous Plastic Pants",
  //   "product_price" : 492,
  //   "product_material" : "Soft",
  //   "product_color" : "plum"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b9"),
  //   "id" : "6",
  //   "product_name" : "Awesome Wooden Towels",
  //   "product_price" : 474,
  //   "product_material" : "Plastic",
  //   "product_color" : "orange"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96ba"),
  //   "id" : "7",
  //   "product_name" : "Practical Soft Shoes",
  //   "product_price" : 500,
  //   "product_material" : "Rubber",
  //   "product_color" : "pink"
  // }
  
  // 3. Find the product price which are not between 400 to 600
  
  db.product
    .find({
      product_price: {
        $not: {
          $gte: 400,
          $lt: 600,
        },
      },
    })
    .pretty();
  
  //output:
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b4"),
  //   "id" : "1",
  //   "product_name" : "Intelligent Fresh Chips",
  //   "product_price" : 655,
  //   "product_material" : "Concrete",
  //   "product_color" : "mint green"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b5"),
  //   "id" : "2",
  //   "product_name" : "Practical Fresh Sausages",
  //   "product_price" : 911,
  //   "product_material" : "Cotton",
  //   "product_color" : "indigo"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b6"),
  //   "id" : "3",
  //   "product_name" : "Refined Steel Car",
  //   "product_price" : 690,
  //   "product_material" : "Rubber",
  //   "product_color" : "gold"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b8"),
  //   "id" : "5",
  //   "product_name" : "Sleek Cotton Chair",
  //   "product_price" : 33,
  //   "product_material" : "Fresh",
  //   "product_color" : "black"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bb"),
  //   "id" : "8",
  //   "product_name" : "Incredible Steel Hat",
  //   "product_price" : 78,
  //   "product_material" : "Rubber",
  //   "product_color" : "violet"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bc"),
  //   "id" : "9",
  //   "product_name" : "Awesome Wooden Ball",
  //   "product_price" : 28,
  //   "product_material" : "Soft",
  //   "product_color" : "azure"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bd"),
  //   "id" : "10",
  //   "product_name" : "Generic Wooden Pizza",
  //   "product_price" : 84,
  //   "product_material" : "Frozen",
  //   "product_color" : "indigo"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96be"),
  //   "id" : "11",
  //   "product_name" : "Unbranded Wooden Cheese",
  //   "product_price" : 26,
  //   "product_material" : "Soft",
  //   "product_color" : "black"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bf"),
  //   "id" : "12",
  //   "product_name" : "Unbranded Plastic Salad",
  //   "product_price" : 89,
  //   "product_material" : "Wooden",
  //   "product_color" : "pink"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c0"),
  //   "id" : "13",
  //   "product_name" : "Gorgeous Cotton Keyboard",
  //   "product_price" : 37,
  //   "product_material" : "Concrete",
  //   "product_color" : "sky blue"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c1"),
  //   "id" : "14",
  //   "product_name" : "Incredible Steel Shirt",
  //   "product_price" : 54,
  //   "product_material" : "Metal",
  //   "product_color" : "white"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c2"),
  //   "id" : "15",
  //   "product_name" : "Ergonomic Cotton Hat",
  //   "product_price" : 43,
  //   "product_material" : "Rubber",
  //   "product_color" : "mint green"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c3"),
  //   "id" : "16",
  //   "product_name" : "Small Soft Chair",
  //   "product_price" : 47,
  //   "product_material" : "Cotton",
  //   "product_color" : "teal"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c4"),
  //   "id" : "17",
  //   "product_name" : "Incredible Metal Car",
  //   "product_price" : 36,
  //   "product_material" : "Fresh",
  //   "product_color" : "indigo"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c5"),
  //   "id" : "18",
  //   "product_name" : "Licensed Plastic Bacon",
  //   "product_price" : 88,
  //   "product_material" : "Steel",
  //   "product_color" : "yellow"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c6"),
  //   "id" : "19",
  //   "product_name" : "Intelligent Cotton Chips",
  //   "product_price" : 46,
  //   "product_material" : "Soft",
  //   "product_color" : "azure"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c7"),
  //   "id" : "20",
  //   "product_name" : "Handcrafted Wooden Bacon",
  //   "product_price" : 36,
  //   "product_material" : "Concrete",
  //   "product_color" : "lime"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c8"),
  //   "id" : "21",
  //   "product_name" : "Unbranded Granite Chicken",
  //   "product_price" : 90,
  //   "product_material" : "Metal",
  //   "product_color" : "gold"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c9"),
  //   "id" : "22",
  //   "product_name" : "Ergonomic Soft Hat",
  //   "product_price" : 99,
  //   "product_material" : "Rubber",
  //   "product_color" : "black"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96ca"),
  //   "id" : "23",
  //   "product_name" : "Intelligent Steel Pizza",
  //   "product_price" : 95,
  //   "product_material" : "Cotton",
  //   "product_color" : "azure"
  // }
  
  // 4. List the four product which are grater than 500 in price
  
  db.product
    .find({
      product_price: {
        $gte: 500,
      },
    })
    .pretty();
  
  //output:
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b4"),
  //   "id" : "1",
  //   "product_name" : "Intelligent Fresh Chips",
  //   "product_price" : 655,
  //   "product_material" : "Concrete",
  //   "product_color" : "mint green"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b5"),
  //   "id" : "2",
  //   "product_name" : "Practical Fresh Sausages",
  //   "product_price" : 911,
  //   "product_material" : "Cotton",
  //   "product_color" : "indigo"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b6"),
  //   "id" : "3",
  //   "product_name" : "Refined Steel Car",
  //   "product_price" : 690,
  //   "product_material" : "Rubber",
  //   "product_color" : "gold"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96ba"),
  //   "id" : "7",
  //   "product_name" : "Practical Soft Shoes",
  //   "product_price" : 500,
  //   "product_material" : "Rubber",
  //   "product_color" : "pink"
  // }
  
  // 5.Find the product name and product material of each products
  
  db.product
    .find(
      {},
      {
        product_name: 1,
        product_material: 1,
      }
    )
    .pretty();
  
  //output:
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b4"),
  //   "product_name" : "Intelligent Fresh Chips",
  //   "product_material" : "Concrete"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b5"),
  //   "product_name" : "Practical Fresh Sausages",
  //   "product_material" : "Cotton"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b6"),
  //   "product_name" : "Refined Steel Car",
  //   "product_material" : "Rubber"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b7"),
  //   "product_name" : "Gorgeous Plastic Pants",
  //   "product_material" : "Soft"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b8"),
  //   "product_name" : "Sleek Cotton Chair",
  //   "product_material" : "Fresh"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96b9"),
  //   "product_name" : "Awesome Wooden Towels",
  //   "product_material" : "Plastic"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96ba"),
  //   "product_name" : "Practical Soft Shoes",
  //   "product_material" : "Rubber"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bb"),
  //   "product_name" : "Incredible Steel Hat",
  //   "product_material" : "Rubber"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bc"),
  //   "product_name" : "Awesome Wooden Ball",
  //   "product_material" : "Soft"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bd"),
  //   "product_name" : "Generic Wooden Pizza",
  //   "product_material" : "Frozen"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96be"),
  //   "product_name" : "Unbranded Wooden Cheese",
  //   "product_material" : "Soft"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96bf"),
  //   "product_name" : "Unbranded Plastic Salad",
  //   "product_material" : "Wooden"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c0"),
  //   "product_name" : "Gorgeous Cotton Keyboard",
  //   "product_material" : "Concrete"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c1"),
  //   "product_name" : "Incredible Steel Shirt",
  //   "product_material" : "Metal"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c2"),
  //   "product_name" : "Ergonomic Cotton Hat",
  //   "product_material" : "Rubber"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c3"),
  //   "product_name" : "Small Soft Chair",
  //   "product_material" : "Cotton"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c4"),
  //   "product_name" : "Incredible Metal Car",
  //   "product_material" : "Fresh"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c5"),
  //   "product_name" : "Licensed Plastic Bacon",
  //   "product_material" : "Steel"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c6"),
  //   "product_name" : "Intelligent Cotton Chips",
  //   "product_material" : "Soft"
  // }
  // {
  //   "_id" : ObjectId("62285ac4849f425bad8a96c7"),
  //   "product_name" : "Handcrafted Wooden Bacon",
  //   "product_material" : "Concrete"
  // }
  
  // 6. Find the product with a row id of 10
  
  db.product.find({
    id: {
      $eq: "10",
    },
  });
  
  //output:
  //{ "_id" : ObjectId("62285ac4849f425bad8a96bd"), "id" : "10", "product_name" : "Generic Wooden Pizza", "product_price" : 84, "product_material" : "Frozen", "product_color" : "indigo" }
  
  // 7. Find only the product name and product material
  
  db.product
    .find(
      {},
      {
        _id: 0,
        product_name: 1,
        product_material: 1,
      }
    )
    .pretty();
  
  //output:
  // {
  //   "product_name" : "Intelligent Fresh Chips",
  //   "product_material" : "Concrete"
  // }
  // {
  //   "product_name" : "Practical Fresh Sausages",
  //   "product_material" : "Cotton"
  // }
  // { "product_name" : "Refined Steel Car", "product_material" : "Rubber" }
  // { "product_name" : "Gorgeous Plastic Pants", "product_material" : "Soft" }
  // { "product_name" : "Sleek Cotton Chair", "product_material" : "Fresh" }
  // { "product_name" : "Awesome Wooden Towels", "product_material" : "Plastic" }
  // { "product_name" : "Practical Soft Shoes", "product_material" : "Rubber" }
  // { "product_name" : "Incredible Steel Hat", "product_material" : "Rubber" }
  // { "product_name" : "Awesome Wooden Ball", "product_material" : "Soft" }
  // { "product_name" : "Generic Wooden Pizza", "product_material" : "Frozen" }
  // { "product_name" : "Unbranded Wooden Cheese", "product_material" : "Soft" }
  // { "product_name" : "Unbranded Plastic Salad", "product_material" : "Wooden" }
  // {
  //   "product_name" : "Gorgeous Cotton Keyboard",
  //   "product_material" : "Concrete"
  // }
  // { "product_name" : "Incredible Steel Shirt", "product_material" : "Metal" }
  // { "product_name" : "Ergonomic Cotton Hat", "product_material" : "Rubber" }
  // { "product_name" : "Small Soft Chair", "product_material" : "Cotton" }
  // { "product_name" : "Incredible Metal Car", "product_material" : "Fresh" }
  // { "product_name" : "Licensed Plastic Bacon", "product_material" : "Steel" }
  // { "product_name" : "Intelligent Cotton Chips", "product_material" : "Soft" }
  // {
  //   "product_name" : "Handcrafted Wooden Bacon",
  //   "product_material" : "Concrete"
  // }
  
  // 8. Find all product which contain the value of soft in product material
  
  db.product.find({
    product_material: {
      $eq: "Soft",
    },
  });
  
  //output:
  // { "_id" : ObjectId("62285ac4849f425bad8a96b7"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
  // { "_id" : ObjectId("62285ac4849f425bad8a96bc"), "id" : "9", "product_name" : "Awesome Wooden Ball", "product_price" : 28, "product_material" : "Soft", "product_color" : "azure" }
  // { "_id" : ObjectId("62285ac4849f425bad8a96be"), "id" : "11", "product_name" : "Unbranded Wooden Cheese", "product_price" : 26, "product_material" : "Soft", "product_color" : "black" }
  // { "_id" : ObjectId("62285ac4849f425bad8a96c6"), "id" : "19", "product_name" : "Intelligent Cotton Chips", "product_price" : 46, "product_material" : "Soft", "product_color" : "azure" }
  
  // 9. Find product which contain product color indigo  and product price 492.00
  
  db.product.find({
    product_color: {
      $eq: "indigo",
    },
    product_price: {
      $eq: 492.0,
    },
  });
  
  //Solution - no product found with the given criteria
  
  // 10. Delete the product which product price value are same
  
  db.product.aggregate([
    { $group: { _id: "$product_price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
  db.product.remove({ product_price: 36 });
  db.product.remove({ product_price: 47 });
  
  //solution: above two documents are removed from the product collection