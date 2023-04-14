require('dotenv').config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function main () {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterpartytime.lgihqjm.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectado ao Banco!!");
    } catch (error) {
        console.log(`Erroooooo: ${error}`);
    }
}


module.exports = main;