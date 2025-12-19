// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL from .env
let url = process.env.MONGO_URL;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    // Return existing instance if already connected
    if (dbInstance) {
        return dbInstance;
    }

    try {
        // Task 1: Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log("MongoDB connected successfully");

        // Task 2: Connect to database giftdb and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return database instance
        return dbInstance;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

module.exports = connectToDatabase;
