const { MongoClient } = require("mongodb")
const uri = require ("./atlas_uri")

//console.log(uri);

const client = new MongoClient(uri);
const dbName = "weddingDB";

const connectToDataBase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbName} database 🌎`);
    } catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
};

const main = async () => {
    try {
        await connectToDataBase();
    } catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
};

main();