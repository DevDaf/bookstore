const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT || 3000; // Set default port to 3000 if not defined
const cors = require("cors");
const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect(process.env.MONGOOSEDB_URL) // Use correct environment variable
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());
app.use(cors());

// Database seeder routes
app.use("/api/seed", databaseSeeder);

// Routes for users
app.use("/api/users", userRoute);

// Routes for products
app.use("/api/products", productRoute);

// Routes for orders
app.use("/api/orders", orderRoute);

// PayPal payment API for client key
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

