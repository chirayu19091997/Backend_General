const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.mongoURI);
  console.log(`Database connected at ${conn.connection.host}`);
};

module.exports = connectDB;
