require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const connectDB = require("./config/connection");
const userRoutes = require("./routes/router");

connectDB();

//midlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.use("/api", userRoutes);

app.listen(3000, () => {
	console.log("Server Started");
});
