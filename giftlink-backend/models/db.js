// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

let url = process.env.MONGO_URL;
let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    const client = new MongoClient(url);
    await client.connect();        // <- This line is what the task wants
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;
