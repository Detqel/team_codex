require("dotenv").config();
const mongoose = require("mongoose");
const Dish = require("./models/Dish");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Dish.deleteMany();

    await Dish.insertMany([

      {
        dishName: "Chicken Biryani",
        ingredients: [
          "Chicken",
          "Basmati Rice",
          "Onion",
          "Tomato",
          "Curd",
          "Mint Leaves",
          "Garam Masala",
        ],
      },

      {
        dishName: "Dosa",
        ingredients: [
          "Rice",
          "Urad Dal",
          "Fenugreek",
          "Oil",
        ],
      },

      {
        dishName: "Idli",
        ingredients: [
          "Rice",
          "Urad Dal",
          "Fenugreek",
        ],
      },

      {
        dishName: "Masala Dosa",
        ingredients: [
          "Rice",
          "Urad Dal",
          "Potato",
          "Onion",
          "Oil",
        ],
      },

      {
        dishName: "Pongal",
        ingredients: [
          "Rice",
          "Moong Dal",
          "Ghee",
          "Pepper",
          "Curry Leaves",
        ],
      },

      {
        dishName: "Veg Biryani",
        ingredients: [
          "Basmati Rice",
          "Carrot",
          "Beans",
          "Peas",
          "Onion",
          "Biryani Masala",
        ],
      },

      {
        dishName: "Fried Rice",
        ingredients: [
          "Rice",
          "Carrot",
          "Capsicum",
          "Soy Sauce",
          "Egg",
        ],
      },

      {
        dishName: "Pasta",
        ingredients: [
          "Pasta",
          "Tomato",
          "Garlic",
          "Cheese",
          "Spinach",
        ],
      },

      {
        dishName: "Paneer Tikka",
        ingredients: [
          "Paneer",
          "Yogurt",
          "Bell Pepper",
          "Tomato",
          "Tandoori Masala",
        ],
      },

      {
        dishName: "Butter Chicken",
        ingredients: [
          "Chicken",
          "Butter",
          "Cream",
          "Tomato",
          "Garam Masala",
        ],
      },

      {
        dishName: "Chicken Curry",
        ingredients: [
          "Chicken",
          "Onion",
          "Tomato",
          "Ginger Garlic Paste",
          "Spices",
        ],
      },

      {
        dishName: "Egg Biryani",
        ingredients: [
          "Egg",
          "Basmati Rice",
          "Onion",
          "Mint Leaves",
          "Biryani Masala",
        ],
      },

      {
        dishName: "Veg Pulao",
        ingredients: [
          "Rice",
          "Carrot",
          "Beans",
          "Peas",
          "Spices",
        ],
      },

      {
        dishName: "Lemon Rice",
        ingredients: [
          "Rice",
          "Lemon",
          "Peanuts",
          "Curry Leaves",
          "Turmeric",
        ],
      },

      {
        dishName: "Curd Rice",
        ingredients: [
          "Rice",
          "Curd",
          "Milk",
          "Curry Leaves",
          "Mustard Seeds",
        ],
      },

      {
        dishName: "Chapati",
        ingredients: [
          "Wheat Flour",
          "Oil",
          "Salt",
        ],
      },

      {
        dishName: "Poori",
        ingredients: [
          "Wheat Flour",
          "Oil",
          "Potato",
        ],
      },

      {
        dishName: "Upma",
        ingredients: [
          "Rava",
          "Onion",
          "Vegetables",
          "Curry Leaves",
        ],
      },

      {
        dishName: "Palak Paneer",
        ingredients: [
          "Spinach",
          "Paneer",
          "Cream",
          "Spices",
        ],
      },

      {
        dishName: "Chole",
        ingredients: [
          "Chickpeas",
          "Onion",
          "Tomato",
          "Spices",
        ],
      },

      {
  dishName: "Oats Bowl",
  ingredients: [
    "Oats",
    "Milk",
    "Banana",
    "Nuts",
    "Honey"
  ],
},

{
  dishName: "Vegetable Sandwich",
  ingredients: [
    "Bread",
    "Carrot",
    "Cucumber",
    "Tomato",
    "Cheese"
  ],
},

{
  dishName: "Bread Omelette",
  ingredients: [
    "Bread",
    "Egg",
    "Onion",
    "Pepper",
    "Oil"
  ],
},

{
  dishName: "Pasta Primavera",
  ingredients: [
    "Pasta",
    "Broccoli",
    "Carrot",
    "Capsicum",
    "Cheese"
  ],
},

{
  dishName: "Mutton Biryani",
  ingredients: [
    "Mutton",
    "Basmati Rice",
    "Onion",
    "Tomato",
    "Ginger Garlic Paste",
    "Biryani Masala",
    "Mint Leaves"
  ],
},

{
  dishName: "Fish Curry Rice",
  ingredients: [
    "Fish",
    "Rice",
    "Coconut",
    "Onion",
    "Tomato",
    "Spices"
  ],
},

{
  dishName: "Sambar Rice",
  ingredients: [
    "Rice",
    "Toor Dal",
    "Drumstick",
    "Carrot",
    "Onion",
    "Sambar Powder"
  ],
},

{
  dishName: "Tomato Rice",
  ingredients: [
    "Rice",
    "Tomato",
    "Onion",
    "Ginger Garlic Paste",
    "Spices",
    "Curry Leaves"
  ],
},

{
  dishName: "Jeera Rice",
  ingredients: [
    "Basmati Rice",
    "Cumin Seeds",
    "Ghee",
    "Bay Leaf",
    "Spices"
  ],
},

{
  dishName: "Paneer Rice",
  ingredients: [
    "Paneer",
    "Rice",
    "Onion",
    "Capsicum",
    "Spices",
    "Garam Masala"
  ],
},

{
  dishName: "Vegetable Stir Fry",
  ingredients: [
    "Broccoli",
    "Carrot",
    "Capsicum",
    "Beans",
    "Soy Sauce",
    "Oil"
  ],
},

{
  dishName: "Noodles",
  ingredients: [
    "Noodles",
    "Carrot",
    "Capsicum",
    "Cabbage",
    "Soy Sauce"
  ],
},

{
  dishName: "Chapati Curry",
  ingredients: [
    "Chapati",
    "Potato",
    "Onion",
    "Tomato",
    "Spices"
  ],
},

{
  dishName: "Roti Paneer",
  ingredients: [
    "Roti",
    "Paneer",
    "Onion",
    "Tomato",
    "Spices"
  ],
},

{
  dishName: "Vegetable Soup",
  ingredients: [
    "Carrot",
    "Beans",
    "Corn",
    "Pepper",
    "Vegetable Stock"
  ],
},

{
  dishName: "Grilled Chicken",
  ingredients: [
    "Chicken",
    "Olive Oil",
    "Pepper",
    "Garlic",
    "Herbs"
  ],
},

{
  dishName: "Grilled Salmon",
  ingredients: [
    "Salmon",
    "Olive Oil",
    "Lemon",
    "Pepper",
    "Herbs"
  ],
},

{
  dishName: "Berry Smoothie",
  ingredients: [
    "Strawberry",
    "Blueberry",
    "Milk",
    "Yogurt",
    "Honey"
  ],
},

{
  dishName: "Green Salad",
  ingredients: [
    "Lettuce",
    "Cucumber",
    "Tomato",
    "Carrot",
    "Olive Oil"
  ],
},

{
  dishName: "Fruit Salad",
  ingredients: [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Honey"
  ],
},

{
  dishName: "Protein Bowl",
  ingredients: [
    "Egg",
    "Chicken",
    "Rice",
    "Beans",
    "Vegetables"
  ],
},

{
  dishName: "Quinoa Bowl",
  ingredients: [
    "Quinoa",
    "Vegetables",
    "Beans",
    "Avocado",
    "Spices"
  ],
},

{
  dishName: "Sprouts Salad",
  ingredients: [
    "Sprouts",
    "Onion",
    "Tomato",
    "Cucumber",
    "Lemon"
  ],
},

{
  dishName: "Oats Smoothie",
  ingredients: [
    "Oats",
    "Milk",
    "Banana",
    "Peanut Butter",
    "Honey"
  ],
},

{
  dishName: "Peanut Butter Toast",
  ingredients: [
    "Bread",
    "Peanut Butter",
    "Banana",
    "Honey"
  ],
},

{
  dishName: "Chole Bhature",
  ingredients: [
    "Chickpeas",
    "Wheat Flour",
    "Onion",
    "Tomato",
    "Spices",
    "Oil"
  ],
},

{
  dishName: "Rajma Rice",
  ingredients: [
    "Rajma",
    "Rice",
    "Onion",
    "Tomato",
    "Spices"
  ],
},

{
  dishName: "Dal Tadka",
  ingredients: [
    "Toor Dal",
    "Onion",
    "Tomato",
    "Garlic",
    "Cumin",
    "Spices"
  ],
},

{
  dishName: "Aloo Paratha",
  ingredients: [
    "Wheat Flour",
    "Potato",
    "Onion",
    "Spices",
    "Oil"
  ],
},

{
  dishName: "Chicken Tikka",
  ingredients: [
    "Chicken",
    "Yogurt",
    "Tandoori Masala",
    "Lemon",
    "Spices"
  ],
},

{
  dishName: "Egg Curry",
  ingredients: [
    "Egg",
    "Onion",
    "Tomato",
    "Ginger Garlic Paste",
    "Spices"
  ],
},

{
  dishName: "Prawn Curry",
  ingredients: [
    "Prawn",
    "Coconut",
    "Onion",
    "Tomato",
    "Spices"
  ],
},

    ]);

    console.log("Dishes inserted successfully");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });