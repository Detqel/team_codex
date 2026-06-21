import dotenv from "dotenv";
import mongoose from "mongoose";
import Dish from "./models/Dish";

dotenv.config();

const seedDishes = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    await Dish.deleteMany({});

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

      // ... unga remaining dishes ellam same ah copy paste pannunga
    ]);

    console.log("✅ Dishes inserted successfully");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDishes();


