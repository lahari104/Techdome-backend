const mongoose = require("mongoose");

async function connectToDatabase() {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("Database connection string is not defined in environment variables.");
        }
        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connection established...!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

connectToDatabase();
