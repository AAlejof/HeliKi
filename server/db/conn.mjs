import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
//const connectionString = process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("HeliKi0");

export default db;