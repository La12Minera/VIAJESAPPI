const mongoose = require("mongoose");

const server =
  process.env.MONGO_DB_SERVER
const database = process.env.MONGO_DB_DATABASE

// 1- Nos conectamos a una base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${server}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB has conected!!!");
  } catch (error) {
    console.log("Failed", error);
  }
};

module.exports = connectDB;
