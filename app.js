require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const saleRoutes = require("./routes/saleRoutes");
app.use("/sales", saleRoutes);

const payoutRoutes = require("./routes/payoutRoutes");
app.use("/payouts", payoutRoutes);

const withdrawalRoutes = require("./routes/withdrawalRoutes");
app.use("/withdrawals", withdrawalRoutes);

app.get("/", (req, res) => {
    res.send("User Payout System API is running");
});

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});