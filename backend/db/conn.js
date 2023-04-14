const mongoose = require("mongoose");

async function main () {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://Wellinton:E7VIoqpQQM9R94Es@clusterpartytime.lgihqjm.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao Banco!!");
    } catch (error) {
        console.log(`Erroooooo: ${error}`);
    }
}


module.exports = main;